import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    console.log('PagBank webhook received:', JSON.stringify(body, null, 2));

    // PagBank Orders v4 sends notifications with transaction/order updates
    const { id, reference_id, charges } = body;

    if (charges && charges.length > 0) {
      const charge = charges[0];
      const status = charge.status;
      console.log(`Order ${id} | Reference: ${reference_id} | Status: ${status}`);
      
      // Statuses: AUTHORIZED, PAID, IN_ANALYSIS, DECLINED, CANCELED
      // You can extend this to update a database, send emails, etc.
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
