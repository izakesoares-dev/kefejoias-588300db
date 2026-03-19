import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const PAGBANK_API = "https://sandbox.api.pagseguro.com";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let token = Deno.env.get('PAGBANK_TOKEN') || '';
    token = token.replace(/^Bearer\s+/i, '').trim();
    if (!token) throw new Error('PAGBANK_TOKEN não configurado');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body = await req.json();
    const { customer, items, shipping, shipping_option, payment_method, card_encrypted, installments } = body;

    if (!customer || !items || !payment_method) {
      return new Response(JSON.stringify({ error: 'Dados obrigatórios não fornecidos' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const referenceId = `KEFE-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const cpf = customer.cpf.replace(/\D/g, '');
    const phone = (customer.phone || '').replace(/\D/g, '');
    const postalCode = (shipping?.postal_code || '').replace(/\D/g, '');

    const itemsTotal = items.reduce((sum: number, item: any) => sum + item.unit_amount * item.quantity, 0);
    const shippingAmount = shipping?.amount || 0;
    const totalAmount = itemsTotal + shippingAmount;

    // Base order payload
    const orderPayload: any = {
      reference_id: referenceId,
      customer: {
        name: customer.name,
        email: customer.email,
        tax_id: cpf,
        phones: phone ? [{
          country: "55",
          area: phone.substring(0, 2),
          number: phone.substring(2),
          type: "MOBILE",
        }] : [],
      },
      items: items.map((item: any, i: number) => ({
        reference_id: String(item.id || i + 1),
        name: item.name,
        quantity: item.quantity,
        unit_amount: item.unit_amount,
      })),
      notification_urls: [
        `${supabaseUrl}/functions/v1/pagbank-webhook`,
      ],
    };

    // Add shipping if present
    if (shippingAmount > 0 && shipping) {
      orderPayload.shipping = {
        address: {
          street: shipping.street || '',
          number: shipping.number || 'S/N',
          complement: shipping.complement || '',
          locality: shipping.neighborhood || '',
          city: shipping.city || '',
          region_code: shipping.state || '',
          country: 'BRA',
          postal_code: postalCode,
        },
      };
    }

    if (payment_method === 'pix') {
      // PIX: add qr_codes to order
      orderPayload.qr_codes = [{
        amount: { value: totalAmount },
        expiration_date: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
      }];
    } else if (payment_method === 'credit_card') {
      // Credit Card: add charges with encrypted card
      if (!card_encrypted) {
        return new Response(JSON.stringify({ error: 'Dados do cartão não fornecidos' }), {
          status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      orderPayload.charges = [{
        reference_id: referenceId,
        description: `Kefe Joias - ${referenceId}`,
        amount: {
          value: totalAmount,
          currency: "BRL",
        },
        payment_method: {
          type: "CREDIT_CARD",
          installments: installments || 1,
          capture: true,
          card: {
            encrypted: card_encrypted,
          },
        },
      }];
    } else {
      return new Response(JSON.stringify({ error: 'Método de pagamento inválido' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log('Creating PagBank order:', { reference: referenceId, payment_method, totalAmount });

    const response = await fetch(`${PAGBANK_API}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(orderPayload),
    });

    const responseText = await response.text();
    console.log('PagBank response status:', response.status);
    console.log('PagBank response (first 500):', responseText.substring(0, 500));

    if (!response.ok) {
      let errorMsg = 'Erro na API PagBank';
      try {
        const errorData = JSON.parse(responseText);
        errorMsg = errorData.error_messages
          ? errorData.error_messages.map((e: any) => `${e.description || e.message}`).join('; ')
          : errorData.message || errorMsg;
      } catch {
        errorMsg = `PagBank retornou status ${response.status}`;
      }
      console.error('PagBank error:', responseText.substring(0, 300));
      return new Response(JSON.stringify({ error: errorMsg }), {
        status: response.status || 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const responseData = JSON.parse(responseText);

    // Save order to database
    const orderRecord = {
      reference_id: referenceId,
      pagbank_order_id: responseData.id,
      status: 'PENDING',
      payment_method: payment_method,
      customer_name: customer.name,
      customer_email: customer.email,
      customer_cpf: cpf,
      customer_phone: phone,
      shipping_street: shipping?.street || '',
      shipping_number: shipping?.number || 'S/N',
      shipping_complement: shipping?.complement || '',
      shipping_neighborhood: shipping?.neighborhood || '',
      shipping_city: shipping?.city || '',
      shipping_state: shipping?.state || '',
      shipping_postal_code: postalCode,
      shipping_service_id: shipping_option?.id || null,
      shipping_service_name: shipping_option?.name || null,
      shipping_company: shipping_option?.company || null,
      shipping_price: shipping_option?.price || 0,
      shipping_delivery_time: shipping_option?.delivery_time || null,
      items: items,
      items_total: itemsTotal,
      shipping_amount: shippingAmount,
      total_amount: totalAmount,
    };

    const { error: insertError } = await supabase.from('orders').insert(orderRecord);
    if (insertError) console.error('Error saving order:', insertError);
    else console.log(`Order ${referenceId} saved`);

    // Build response based on payment method
    const result: any = {
      order_id: responseData.id,
      reference_id: referenceId,
      payment_method,
    };

    if (payment_method === 'pix' && responseData.qr_codes?.length > 0) {
      const qr = responseData.qr_codes[0];
      result.pix = {
        qr_code_text: qr.text || '',
        qr_code_image: qr.links?.find((l: any) => l.rel === 'QRCODE.PNG')?.href || '',
        expiration_date: qr.expiration_date,
      };
      result.status = 'WAITING_PAYMENT';
    } else if (payment_method === 'credit_card') {
      const charge = responseData.charges?.[0];
      result.status = charge?.status || responseData.status || 'PENDING';
      if (charge?.status === 'PAID') {
        // Update order status
        await supabase.from('orders').update({ status: 'PAID' }).eq('reference_id', referenceId);
      }
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error in pagbank-order:', error);
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
