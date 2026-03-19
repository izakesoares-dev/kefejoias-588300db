
CREATE TABLE public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_id TEXT NOT NULL UNIQUE,
  pagbank_order_id TEXT,
  status TEXT NOT NULL DEFAULT 'PENDING',
  payment_method TEXT,
  
  -- Customer
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_cpf TEXT,
  customer_phone TEXT,
  
  -- Shipping address
  shipping_street TEXT,
  shipping_number TEXT,
  shipping_complement TEXT,
  shipping_neighborhood TEXT,
  shipping_city TEXT,
  shipping_state TEXT,
  shipping_postal_code TEXT,
  
  -- Shipping service (Melhor Envio)
  shipping_service_id INTEGER,
  shipping_service_name TEXT,
  shipping_company TEXT,
  shipping_price NUMERIC(10,2) DEFAULT 0,
  shipping_delivery_time INTEGER,
  
  -- Melhor Envio tracking
  melhor_envio_shipment_id TEXT,
  melhor_envio_tracking TEXT,
  melhor_envio_label_url TEXT,
  melhor_envio_status TEXT DEFAULT 'pending',
  
  -- Items (stored as JSON)
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  
  -- Totals
  items_total INTEGER NOT NULL DEFAULT 0,
  shipping_amount INTEGER NOT NULL DEFAULT 0,
  total_amount INTEGER NOT NULL DEFAULT 0,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS: public insert (no auth required for checkout), service role for updates
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Allow edge functions to insert/select/update (using service role key)
CREATE POLICY "Service role full access" ON public.orders
  FOR ALL
  USING (true)
  WITH CHECK (true);
