import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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

    const body = await req.json();
    const { order_id } = body;

    if (!order_id) {
      return new Response(JSON.stringify({ error: 'order_id é obrigatório' }), {
        status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(`${PAGBANK_API}/orders/${order_id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: `Erro ao consultar pedido: ${response.status}` }), {
        status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();

    // Check charges status
    const charge = data.charges?.[0];
    const qrCode = data.qr_codes?.[0];

    let status = 'PENDING';
    if (charge?.status === 'PAID') status = 'PAID';
    else if (charge?.status === 'DECLINED') status = 'DECLINED';
    else if (qrCode?.status === 'PAID' || data.status === 'PAID') status = 'PAID';

    return new Response(JSON.stringify({ status, order_status: data.status }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error in pagbank-order-status:', error);
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
