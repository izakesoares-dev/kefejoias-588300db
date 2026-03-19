import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const MELHOR_ENVIO_URL = "https://melhorenvio.com.br/api/v2/me/shipment/calculate";

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get('MELHOR_ENVIO_TOKEN');
    if (!token) {
      throw new Error('MELHOR_ENVIO_TOKEN não configurado');
    }

    const { cep_destino, produtos } = await req.json();

    if (!cep_destino || typeof cep_destino !== 'string' || cep_destino.replace(/\D/g, '').length !== 8) {
      return new Response(JSON.stringify({ error: 'CEP de destino inválido' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (!produtos || !Array.isArray(produtos) || produtos.length === 0) {
      return new Response(JSON.stringify({ error: 'Produtos são obrigatórios' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Build payload for Melhor Envio
    // Services: 1=PAC, 2=SEDEX, 3=Mini Envios (Correios)
    // Also include other popular carriers
    const body = {
      from: { postal_code: "01001000" }, // CEP de origem da loja (São Paulo)
      to: { postal_code: cep_destino.replace(/\D/g, '') },
      services: "1,2,3,4,7,9,10,11,12,17,22,23,27,28,29,30",
      products: produtos.map((p: any) => ({
        id: String(p.id || "1"),
        width: p.width || 11,
        height: p.height || 5,
        length: p.length || 16,
        weight: p.weight || 0.3, // Mínimo 0.3kg para PAC
        insurance_value: p.price || 50,
        quantity: p.quantity || 1,
      })),
    };

    const response = await fetch(MELHOR_ENVIO_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'User-Agent': 'Kefe Joias (contato@kefejoias.com.br)',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Melhor Envio API error:', JSON.stringify(data));
      throw new Error(`Melhor Envio API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    // Log all services for debugging (including errors)
    console.log('Melhor Envio raw response:', JSON.stringify(data.map((s: any) => ({
      id: s.id, name: s.name, company: s.company?.name, price: s.price, error: s.error
    }))));

    // Filter only services without errors and sort by price
    const opcoes = (Array.isArray(data) ? data : [])
      .filter((s: any) => !s.error && s.price)
      .map((s: any) => ({
        id: s.id,
        name: s.name,
        company: s.company?.name || '',
        price: parseFloat(s.custom_price || s.price),
        delivery_time: s.delivery_time,
        currency: s.currency || 'R$',
      }))
      .sort((a: any, b: any) => a.price - b.price);

    return new Response(JSON.stringify({ opcoes }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('Error calculating shipping:', error);
    const message = error instanceof Error ? error.message : 'Erro desconhecido';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
