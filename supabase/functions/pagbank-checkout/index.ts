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

    if (!customer || !items) {
      return new Response(JSON.stringify({ error: 'Dados obrigatórios não fornecidos' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const referenceId = `KEFE-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Build form-urlencoded payload for PagSeguro v2/checkout
    const params = new URLSearchParams();
    params.set('currency', 'BRL');
    params.set('reference', referenceId);

    // Sender info
    params.set('senderName', customer.name);
    params.set('senderEmail', customer.email);
    const senderPhone = customer.phone.replace(/\D/g, '');
    params.set('senderAreaCode', senderPhone.substring(0, 2));
    params.set('senderPhone', senderPhone.substring(2));
    params.set('senderCPF', customer.cpf.replace(/\D/g, ''));

    // Items
    items.forEach((item: any, i: number) => {
      const idx = i + 1;
      params.set(`itemId${idx}`, String(item.id || idx));
      params.set(`itemDescription${idx}`, item.name);
      params.set(`itemAmount${idx}`, (item.unit_amount / 100).toFixed(2));
      params.set(`itemQuantity${idx}`, String(item.quantity));
    });

    // Shipping
    if (shipping) {
      params.set('shippingType', '3'); // Not specified
      params.set('shippingCost', shipping.amount ? (shipping.amount / 100).toFixed(2) : '0.00');
      params.set('shippingAddressStreet', shipping.street || '');
      params.set('shippingAddressNumber', shipping.number || 'S/N');
      params.set('shippingAddressComplement', shipping.complement || '');
      params.set('shippingAddressDistrict', shipping.neighborhood || '');
      params.set('shippingAddressCity', shipping.city || '');
      params.set('shippingAddressState', shipping.state || '');
      params.set('shippingAddressCountry', 'BRA');
      params.set('shippingAddressPostalCode', (shipping.postal_code || '').replace(/\D/g, ''));
    }

    // Redirect and notification URLs
    params.set('redirectURL', 'https://kefejoias.lovable.app/checkout');

    console.log('Creating PagSeguro checkout:', { reference: referenceId, payment_method });

    const url = `${PAGSEGURO_API}/v2/checkout?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: params.toString(),
    });

    const responseText = await response.text();
    console.log('PagSeguro response status:', response.status);
    console.log('PagSeguro response (first 500):', responseText.substring(0, 500));

    if (!response.ok) {
      const errorMatch = responseText.match(/<message>(.*?)<\/message>/g);
      const errors = errorMatch ? errorMatch.map(m => m.replace(/<\/?message>/g, '')).join('; ') : 'Erro na API PagSeguro';
      console.error('PagSeguro error:', responseText);
      return new Response(JSON.stringify({ 
        error: errors,
        details: responseText.substring(0, 500),
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Parse checkout code from XML response
    const codeMatch = responseText.match(/<code>(.*?)<\/code>/);

    if (!codeMatch) {
      throw new Error('Código de checkout não encontrado na resposta');
    }

    const checkoutCode = codeMatch[1];
    const checkoutUrl = `https://pagseguro.uol.com.br/v2/checkout/payment.html?code=${checkoutCode}`;

    const result = {
      order_id: checkoutCode,
      reference_id: referenceId,
      status: 'CREATED',
      checkout_url: checkoutUrl,
    };

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
