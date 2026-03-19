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

    if (!token) {
      throw new Error('PAGBANK_TOKEN não configurado');
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body = await req.json();
    const { customer, items, shipping, shipping_option, redirect_url } = body;

    if (!customer || !items) {
      return new Response(JSON.stringify({ error: 'Dados obrigatórios não fornecidos' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const referenceId = `KEFE-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const cpf = customer.cpf.replace(/\D/g, '');
    const postalCode = (shipping?.postal_code || '').replace(/\D/g, '');

    // Calculate total amount in centavos
    const itemsTotal = items.reduce((sum: number, item: any) => sum + item.unit_amount * item.quantity, 0);
    const shippingAmount = shipping?.amount || 0;
    const totalAmount = itemsTotal + shippingAmount;

    // Build Checkout API payload
    const checkoutPayload: any = {
      reference_id: referenceId,
      customer: {
        name: customer.name,
        email: customer.email,
        tax_id: cpf,
      },
      items: items.map((item: any, i: number) => ({
        reference_id: String(item.id || i + 1),
        name: item.name,
        quantity: item.quantity,
        unit_amount: item.unit_amount,
      })),
      payment_methods: [
        { type: "CREDIT_CARD" },
        { type: "DEBIT_CARD" },
        { type: "PIX" },
      ],
      soft_descriptor: "KefeJoias",
      redirect_url: redirect_url || "https://kefejoias.lovable.app",
      notification_urls: [
        `${supabaseUrl}/functions/v1/pagbank-webhook`,
      ],
      expiration_date: new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString(),
    };

    // Add shipping as an additional item if present
    if (shippingAmount > 0) {
      checkoutPayload.shipping = {
        type: "FIXED",
        amount: shippingAmount,
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
      };
    }

    console.log('Creating PagBank checkout:', { reference: referenceId, totalAmount });

    console.log('PagBank token (first 8 chars):', token.substring(0, 8));
    console.log('PagBank URL:', `${PAGBANK_API}/checkouts`);

    const response = await fetch(`${PAGBANK_API}/checkouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(checkoutPayload),
    });

    console.log('PagBank response status:', response.status);
    console.log('PagBank content-type:', response.headers.get('content-type'));

    const responseText = await response.text();
    console.log('PagBank response (first 500):', responseText.substring(0, 500));

    if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) {
      let errorMsg = 'Erro na API PagBank';
      try {
        const errorData = JSON.parse(responseText);
        errorMsg = errorData.error_messages
          ? errorData.error_messages.map((e: any) => `${e.description || e.message}`).join('; ')
          : errorData.message || errorMsg;
      } catch {
        errorMsg = `PagBank retornou status ${response.status}. Verifique se o token está correto.`;
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
      status: responseData.status || 'ACTIVE',
      payment_method: 'checkout', // PagBank handles the method choice
      customer_name: customer.name,
      customer_email: customer.email,
      customer_cpf: cpf,
      customer_phone: (customer.phone || '').replace(/\D/g, ''),
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
    if (insertError) {
      console.error('Error saving order to DB:', insertError);
    } else {
      console.log(`Order ${referenceId} saved to database`);
    }

    // Extract PAY link from response
    const payLink = responseData.links?.find((l: any) => l.rel === 'PAY');

    const result = {
      order_id: responseData.id,
      reference_id: referenceId,
      status: responseData.status || 'ACTIVE',
      checkout_url: payLink?.href || '',
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
