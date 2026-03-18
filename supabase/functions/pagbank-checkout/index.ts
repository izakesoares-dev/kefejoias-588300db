import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PAGBANK_API = "https://api.pagseguro.com";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let token = Deno.env.get('PAGBANK_TOKEN') || '';
    token = token.replace(/^Bearer\s+/i, '').trim();

    if (!token) {
      throw new Error('PAGBANK_TOKEN não configurado');
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

    const phone = customer.phone.replace(/\D/g, '');
    const cpf = customer.cpf.replace(/\D/g, '');
    const postalCode = (shipping?.postal_code || '').replace(/\D/g, '');

    // Calculate total amount in centavos
    const itemsTotal = items.reduce((sum: number, item: any) => sum + item.unit_amount * item.quantity, 0);
    const shippingAmount = shipping?.amount || 0;
    const totalAmount = itemsTotal + shippingAmount;

    // Build Orders v4 payload
    const orderPayload: any = {
      reference_id: referenceId,
      customer: {
        name: customer.name,
        email: customer.email,
        tax_id: cpf,
        phones: [{
          country: "55",
          area: phone.substring(0, 2),
          number: phone.substring(2),
          type: "MOBILE",
        }],
      },
      items: items.map((item: any, i: number) => ({
        reference_id: String(item.id || i + 1),
        name: item.name,
        quantity: item.quantity,
        unit_amount: item.unit_amount,
      })),
      shipping: {
        address: {
          street: shipping?.street || '',
          number: shipping?.number || 'S/N',
          complement: shipping?.complement || '',
          locality: shipping?.neighborhood || '',
          city: shipping?.city || '',
          region_code: shipping?.state || '',
          country: 'BRA',
          postal_code: postalCode,
        },
      },
      notification_urls: [
        `https://mhsxbmugaoqfuqqiqbta.supabase.co/functions/v1/pagbank-webhook`,
      ],
    };

    // Add charges based on payment method
    if (payment_method === 'pix') {
      orderPayload.qr_codes = [{
        amount: { value: totalAmount },
        expiration_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      }];
    } else {
      // For card: use checkout redirect (PagBank Checkout)
      orderPayload.charges = [{
        reference_id: referenceId,
        description: `Pedido Kefe Joias ${referenceId}`,
        amount: { value: totalAmount, currency: 'BRL' },
        payment_method: { type: 'CREDIT_CARD', installments: body.installments || 1, capture: true },
      }];
    }

    console.log('Creating PagBank order (v4):', { reference: referenceId, payment_method, totalAmount });

    const response = await fetch(`${PAGBANK_API}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'x-idempotency-key': referenceId,
      },
      body: JSON.stringify(orderPayload),
    });

    const responseData = await response.json();
    console.log('PagBank response status:', response.status);
    console.log('PagBank response:', JSON.stringify(responseData).substring(0, 800));

    if (!response.ok) {
      const errorMsg = responseData.error_messages
        ? responseData.error_messages.map((e: any) => `${e.description || e.message}`).join('; ')
        : responseData.message || 'Erro na API PagBank';
      console.error('PagBank error:', JSON.stringify(responseData));
      return new Response(JSON.stringify({ error: errorMsg, details: responseData }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build result
    const result: any = {
      order_id: responseData.id,
      reference_id: referenceId,
      status: responseData.charges?.[0]?.status || responseData.status || 'CREATED',
    };

    // Extract PIX data if present
    if (responseData.qr_codes && responseData.qr_codes.length > 0) {
      const qr = responseData.qr_codes[0];
      result.pix = {
        qr_code: qr.text || '',
        qr_code_image: qr.links?.find((l: any) => l.media === 'image/png')?.href || '',
      };
    }

    // Extract checkout link for card payments (if PagBank returns one)
    if (responseData.links) {
      const payLink = responseData.links.find((l: any) => l.rel === 'PAY');
      if (payLink) {
        result.checkout_url = payLink.href;
      }
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
