import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body = await req.json();
    console.log('PagBank webhook received:', JSON.stringify(body, null, 2));

    const { id, reference_id, charges } = body;

    if (charges && charges.length > 0) {
      const charge = charges[0];
      const status = charge.status;
      console.log(`Order ${id} | Reference: ${reference_id} | Status: ${status}`);

      // Update order status in database
      const { data: order, error: updateError } = await supabase
        .from('orders')
        .update({ 
          status: status, 
          pagbank_order_id: id,
          updated_at: new Date().toISOString() 
        })
        .eq('reference_id', reference_id)
        .select('id, melhor_envio_status, shipping_service_id')
        .single();

      if (updateError) {
        console.error('Error updating order:', updateError);
      } else {
        console.log(`Order ${reference_id} updated to status: ${status}`);
      }

      // If payment is confirmed (PAID), trigger Melhor Envio shipping
      if (status === 'PAID' && order && order.shipping_service_id && order.melhor_envio_status === 'pending') {
        console.log(`Payment confirmed for order ${reference_id}. Triggering Melhor Envio shipping...`);

        try {
          const melhorEnvioUrl = `${supabaseUrl}/functions/v1/melhor-envio-enviar`;
          const response = await fetch(melhorEnvioUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseServiceKey}`,
            },
            body: JSON.stringify({ order_id: order.id }),
          });

          const result = await response.json();
          console.log(`Melhor Envio response for ${reference_id}:`, JSON.stringify(result));

          if (!response.ok) {
            console.error(`Melhor Envio shipping failed for ${reference_id}:`, result.error);
          } else {
            console.log(`✅ Shipping label generated for order ${reference_id}`);
          }
        } catch (shippingError) {
          console.error(`Error triggering shipping for ${reference_id}:`, shippingError);
          // Don't fail the webhook — the payment was already confirmed
        }
      }
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Webhook error:', error);
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
