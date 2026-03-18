import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

// Sandbox URL - mudar para https://api.pagseguro.com em produção
const PAGBANK_API = "https://sandbox.api.pagseguro.com";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get('PAGBANK_TOKEN');
    if (!token) {
      throw new Error('PAGBANK_TOKEN não configurado');
    }

    const body = await req.json();
    const { payment_method, customer, items, shipping, installments } = body;

    if (!payment_method || !customer || !items) {
      return new Response(JSON.stringify({ error: 'Dados obrigatórios não fornecidos' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const referenceId = `KEFE-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Calculate total in centavos
    const itemsTotal = items.reduce((sum: number, item: any) => sum + (item.unit_amount * item.quantity), 0);
    const shippingAmount = shipping?.amount || 0;

    // Build order payload
    const orderPayload: any = {
      reference_id: referenceId,
      customer: {
        name: customer.name,
        email: customer.email,
        tax_id: customer.cpf.replace(/\D/g, ''),
        phones: [{
          country: "55",
          area: customer.phone.replace(/\D/g, '').substring(0, 2),
          number: customer.phone.replace(/\D/g, '').substring(2),
          type: "MOBILE",
        }],
      },
      items: items.map((item: any) => ({
        reference_id: item.id,
        name: item.name,
        quantity: item.quantity,
        unit_amount: item.unit_amount, // centavos
      })),
      shipping: {
        address: {
          street: shipping.street,
          number: shipping.number,
          complement: shipping.complement || "",
          locality: shipping.neighborhood,
          city: shipping.city,
          region_code: shipping.state,
          country: "BRA",
          postal_code: shipping.postal_code.replace(/\D/g, ''),
        },
      },
      notification_urls: [],
    };

    if (payment_method === 'pix') {
      // QR Code Pix
      orderPayload.qr_codes = [{
        amount: {
          value: itemsTotal + shippingAmount,
        },
        expiration_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      }];
    } else if (payment_method === 'card') {
      // Credit card charge
      const totalAmount = itemsTotal + shippingAmount;
      
      orderPayload.charges = [{
        reference_id: referenceId,
        description: `Pedido Kefe Joias ${referenceId}`,
        amount: {
          value: totalAmount,
          currency: "BRL",
        },
        payment_method: {
          type: "CREDIT_CARD",
          installments: installments || 1,
          capture: true,
          card: {
            encrypted: body.encrypted_card,
            security_code: body.card_cvv,
            holder: {
              name: body.card_holder_name,
              tax_id: customer.cpf.replace(/\D/g, ''),
            },
          },
        },
      }];
    }

    console.log('Creating PagBank order:', JSON.stringify({ reference_id: referenceId, payment_method }));

    const response = await fetch(`${PAGBANK_API}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
        'x-idempotency-key': referenceId,
      },
      body: JSON.stringify(orderPayload),
    });

    const responseText = await response.text();
    console.log('PagBank response status:', response.status);
    console.log('PagBank response body (first 500 chars):', responseText.substring(0, 500));

    let data: any;
    try {
      data = JSON.parse(responseText);
    } catch {
      console.error('PagBank returned non-JSON response:', responseText.substring(0, 200));
      return new Response(JSON.stringify({ 
        error: 'Resposta inesperada do PagBank. Verifique o token de autenticação.',
        details: responseText.substring(0, 200),
      }), {
        status: 502,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!response.ok) {
      console.error('PagBank API error:', JSON.stringify(data));
      return new Response(JSON.stringify({ 
        error: 'Erro ao processar pagamento',
        details: data,
      }), {
        status: response.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build response based on payment method
    const result: any = {
      order_id: data.id,
      reference_id: referenceId,
      status: data.charges?.[0]?.status || data.qr_codes?.[0]?.status || 'CREATED',
    };

    if (payment_method === 'pix' && data.qr_codes?.length > 0) {
      const qr = data.qr_codes[0];
      result.pix = {
        qr_code: qr.text,
        qr_code_image: qr.links?.find((l: any) => l.media === 'image/png')?.href,
        expiration_date: qr.expiration_date,
      };
    }

    if (payment_method === 'card' && data.charges?.length > 0) {
      result.charge = {
        id: data.charges[0].id,
        status: data.charges[0].status,
      };
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
