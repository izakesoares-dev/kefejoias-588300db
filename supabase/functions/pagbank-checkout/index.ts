import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PAGSEGURO_API = "https://ws.pagseguro.uol.com.br";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const email = Deno.env.get('PAGSEGURO_EMAIL');
    const token = Deno.env.get('PAGSEGURO_TOKEN');

    if (!email || !token) {
      throw new Error('PAGSEGURO_EMAIL ou PAGSEGURO_TOKEN não configurados');
    }

    const body = await req.json();
    const { payment_method, customer, items, shipping } = body;

    if (!payment_method || !customer || !items) {
      return new Response(JSON.stringify({ error: 'Dados obrigatórios não fornecidos' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const referenceId = `KEFE-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Build XML payload for legacy PagSeguro API v2
    const itemsXml = items.map((item: any, i: number) => `
      <item>
        <id>${i + 1}</id>
        <description>${escapeXml(item.name)}</description>
        <amount>${(item.unit_amount / 100).toFixed(2)}</amount>
        <quantity>${item.quantity}</quantity>
      </item>
    `).join('');

    const shippingAmount = shipping?.amount ? (shipping.amount / 100).toFixed(2) : '0.00';

    // Map state abbreviation to PagSeguro shipping address
    const senderPhone = customer.phone.replace(/\D/g, '');
    const senderAreaCode = senderPhone.substring(0, 2);
    const senderNumber = senderPhone.substring(2);
    const senderCpf = customer.cpf.replace(/\D/g, '');
    const postalCode = shipping?.postal_code?.replace(/\D/g, '') || '';

    const xmlPayload = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<checkout>
  <currency>BRL</currency>
  <reference>${referenceId}</reference>
  <sender>
    <name>${escapeXml(customer.name)}</name>
    <email>${escapeXml(customer.email)}</email>
    <phone>
      <areaCode>${senderAreaCode}</areaCode>
      <number>${senderNumber}</number>
    </phone>
    <documents>
      <document>
        <type>CPF</type>
        <value>${senderCpf}</value>
      </document>
    </documents>
  </sender>
  <items>${itemsXml}</items>
  <shipping>
    <addressRequired>true</addressRequired>
    <type>3</type>
    <cost>${shippingAmount}</cost>
    <address>
      <street>${escapeXml(shipping?.street || '')}</street>
      <number>${escapeXml(shipping?.number || 'S/N')}</number>
      <complement>${escapeXml(shipping?.complement || '')}</complement>
      <district>${escapeXml(shipping?.neighborhood || '')}</district>
      <city>${escapeXml(shipping?.city || '')}</city>
      <state>${escapeXml(shipping?.state || '')}</state>
      <country>BRA</country>
      <postalCode>${postalCode}</postalCode>
    </address>
  </shipping>
  <redirectURL>https://kefejoias.lovable.app/checkout</redirectURL>
  <notificationURL>https://kefejoias.lovable.app</notificationURL>
</checkout>`;

    console.log('Creating PagSeguro checkout:', { reference: referenceId, payment_method });

    const url = `${PAGSEGURO_API}/v2/checkout?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml; charset=UTF-8',
        'Accept': 'application/xml',
      },
      body: xmlPayload,
    });

    const responseText = await response.text();
    console.log('PagSeguro response status:', response.status);
    console.log('PagSeguro response (first 500):', responseText.substring(0, 500));

    if (!response.ok) {
      // Try to parse error from XML
      const errorMatch = responseText.match(/<message>(.*?)<\/message>/);
      const errorMsg = errorMatch ? errorMatch[1] : 'Erro na API PagSeguro';
      console.error('PagSeguro error:', responseText);
      return new Response(JSON.stringify({ 
        error: errorMsg,
        details: responseText.substring(0, 500),
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse checkout code from XML response
    const codeMatch = responseText.match(/<code>(.*?)<\/code>/);
    const dateMatch = responseText.match(/<date>(.*?)<\/date>/);

    if (!codeMatch) {
      throw new Error('Código de checkout não encontrado na resposta');
    }

    const checkoutCode = codeMatch[1];
    const checkoutUrl = `https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${checkoutCode}`;

    const result: any = {
      order_id: checkoutCode,
      reference_id: referenceId,
      status: 'CREATED',
      checkout_url: checkoutUrl,
    };

    // For Pix, PagSeguro legacy checkout handles it on their page
    // The user will be redirected to PagSeguro to choose payment method
    if (payment_method === 'pix') {
      result.redirect = true;
      result.message = 'Você será redirecionado para o PagSeguro para concluir o pagamento via Pix.';
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error in pagbank-checkout:', error);
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
