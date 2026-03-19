import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const MELHOR_ENVIO_API = "https://melhorenvio.com.br/api/v2/me";
const USER_AGENT = "Kefe Joias (contato@kefejoias.com.br)";

// CEP de origem da loja
const FROM_POSTAL_CODE = "01001000";
const FROM_ADDRESS = {
  name: "Kefe Joias",
  phone: "11999999999",
  email: "contato@kefejoias.com.br",
  company_document: "",
  state_register: "",
  address: "Praça da Sé",
  complement: "",
  number: "S/N",
  district: "Sé",
  city: "São Paulo",
  country_id: "BR",
  postal_code: FROM_POSTAL_CODE,
  state_abbr: "SP",
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const melhorEnvioToken = Deno.env.get('MELHOR_ENVIO_TOKEN');
    if (!melhorEnvioToken) throw new Error('MELHOR_ENVIO_TOKEN não configurado');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { order_id } = await req.json();
    if (!order_id) throw new Error('order_id é obrigatório');

    // Fetch order from database
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select('*')
      .eq('id', order_id)
      .single();

    if (orderError || !order) throw new Error(`Pedido não encontrado: ${orderError?.message}`);
    if (order.melhor_envio_status === 'shipped' || order.melhor_envio_status === 'label_generated') {
      return new Response(JSON.stringify({ message: 'Envio já processado', status: order.melhor_envio_status }), {
        status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${melhorEnvioToken}`,
      'User-Agent': USER_AGENT,
    };

    const items = (order.items as any[]) || [];

    // Step 1: Insert shipment into Melhor Envio cart
    console.log(`[melhor-envio] Inserting shipment for order ${order.reference_id}`);

    const cartPayload = {
      service: order.shipping_service_id,
      agency: null, // Will use default
      from: FROM_ADDRESS,
      to: {
        name: order.customer_name,
        phone: order.customer_phone || "",
        email: order.customer_email,
        document: order.customer_cpf || "",
        address: order.shipping_street || "",
        complement: order.shipping_complement || "",
        number: order.shipping_number || "S/N",
        district: order.shipping_neighborhood || "",
        city: order.shipping_city || "",
        state_abbr: order.shipping_state || "",
        country_id: "BR",
        postal_code: (order.shipping_postal_code || "").replace(/\D/g, ''),
      },
      products: items.map((item: any) => ({
        name: item.name,
        quantity: item.quantity || 1,
        unitary_value: (item.unit_amount || 0) / 100, // Convert from centavos
      })),
      volumes: [{
        height: 5,
        width: 11,
        length: 16,
        weight: Math.max(0.3, items.length * 0.1), // Min 0.3kg
      }],
      options: {
        insurance_value: order.items_total / 100, // In reais
        receipt: false,
        own_hand: false,
        collect: false,
      },
    };

    const cartResponse = await fetch(`${MELHOR_ENVIO_API}/cart`, {
      method: 'POST',
      headers,
      body: JSON.stringify(cartPayload),
    });

    const cartData = await cartResponse.json();
    console.log(`[melhor-envio] Cart response:`, JSON.stringify(cartData).substring(0, 500));

    if (!cartResponse.ok) {
      throw new Error(`Erro ao inserir no carrinho: ${JSON.stringify(cartData)}`);
    }

    const shipmentId = cartData.id;

    // Update order with shipment ID
    await supabase.from('orders').update({
      melhor_envio_shipment_id: shipmentId,
      melhor_envio_status: 'in_cart',
      updated_at: new Date().toISOString(),
    }).eq('id', order_id);

    // Step 2: Checkout (pay from Melhor Envio balance)
    console.log(`[melhor-envio] Checking out shipment ${shipmentId}`);

    const checkoutResponse = await fetch(`${MELHOR_ENVIO_API}/shipment/checkout`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ orders: [shipmentId] }),
    });

    const checkoutData = await checkoutResponse.json();
    console.log(`[melhor-envio] Checkout response:`, JSON.stringify(checkoutData).substring(0, 500));

    if (!checkoutResponse.ok) {
      await supabase.from('orders').update({
        melhor_envio_status: 'checkout_failed',
        updated_at: new Date().toISOString(),
      }).eq('id', order_id);
      throw new Error(`Erro no checkout: ${JSON.stringify(checkoutData)}`);
    }

    await supabase.from('orders').update({
      melhor_envio_status: 'paid',
      updated_at: new Date().toISOString(),
    }).eq('id', order_id);

    // Step 3: Generate label
    console.log(`[melhor-envio] Generating label for shipment ${shipmentId}`);

    const generateResponse = await fetch(`${MELHOR_ENVIO_API}/shipment/generate`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ orders: [shipmentId] }),
    });

    const generateData = await generateResponse.json();
    console.log(`[melhor-envio] Generate response:`, JSON.stringify(generateData).substring(0, 500));

    if (!generateResponse.ok) {
      await supabase.from('orders').update({
        melhor_envio_status: 'generate_failed',
        updated_at: new Date().toISOString(),
      }).eq('id', order_id);
      throw new Error(`Erro ao gerar etiqueta: ${JSON.stringify(generateData)}`);
    }

    // Step 4: Get printable label URL
    const printResponse = await fetch(`${MELHOR_ENVIO_API}/shipment/print`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ mode: 'public', orders: [shipmentId] }),
    });

    const printData = await printResponse.json();
    console.log(`[melhor-envio] Print response:`, JSON.stringify(printData).substring(0, 500));

    const labelUrl = printData?.url || '';

    // Step 5: Get tracking code
    let trackingCode = '';
    try {
      const trackingResponse = await fetch(`${MELHOR_ENVIO_API}/shipment/tracking`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ orders: [shipmentId] }),
      });
      const trackingData = await trackingResponse.json();
      if (trackingData?.[shipmentId]?.tracking) {
        trackingCode = trackingData[shipmentId].tracking;
      }
    } catch (e) {
      console.warn('[melhor-envio] Could not fetch tracking:', e);
    }

    // Update order with final data
    await supabase.from('orders').update({
      melhor_envio_status: 'label_generated',
      melhor_envio_label_url: labelUrl,
      melhor_envio_tracking: trackingCode,
      updated_at: new Date().toISOString(),
    }).eq('id', order_id);

    console.log(`[melhor-envio] ✅ Label generated for order ${order.reference_id}`);

    return new Response(JSON.stringify({
      success: true,
      shipment_id: shipmentId,
      label_url: labelUrl,
      tracking: trackingCode,
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('[melhor-envio] Error:', error);
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
