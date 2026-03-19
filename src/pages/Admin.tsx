import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut, RefreshCw, Loader2, Truck, Package, ExternalLink, Search } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { toast } from "sonner";

interface Order {
  id: string;
  reference_id: string;
  pagbank_order_id: string | null;
  status: string;
  payment_method: string | null;
  customer_name: string;
  customer_email: string;
  customer_phone: string | null;
  items: any;
  items_total: number;
  shipping_amount: number;
  total_amount: number;
  shipping_city: string | null;
  shipping_state: string | null;
  shipping_service_name: string | null;
  shipping_company: string | null;
  melhor_envio_status: string | null;
  melhor_envio_tracking: string | null;
  melhor_envio_label_url: string | null;
  melhor_envio_shipment_id: string | null;
  created_at: string;
  updated_at: string;
}


const shippingStatusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  shipped: "bg-green-100 text-green-800",
  delivered: "bg-emerald-100 text-emerald-800",
  failed: "bg-red-100 text-red-800",
};

const formatCentavos = (v: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v / 100);

const Admin = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [updatingOrder, setUpdatingOrder] = useState<string | null>(null);
  const [resendingLabel, setResendingLabel] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchOrders();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/admin/login");
      return;
    }
    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      await supabase.auth.signOut();
      navigate("/admin/login");
    }
  };

  const fetchOrders = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Erro ao carregar pedidos");
      console.error(error);
    } else {
      setOrders(data || []);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const handleUpdateStatus = async (orderId: string, newStatus: string) => {
    setUpdatingOrder(orderId);
    try {
      const { data, error } = await supabase.functions.invoke("admin-orders", {
        body: { action: "update_status", order_id: orderId, status: newStatus },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success(`Status atualizado para ${newStatus}`);
      fetchOrders();
    } catch (err: any) {
      toast.error(err.message || "Erro ao atualizar status");
    } finally {
      setUpdatingOrder(null);
    }
  };

  const handleResendLabel = async (orderId: string) => {
    setResendingLabel(orderId);
    try {
      const { data, error } = await supabase.functions.invoke("admin-orders", {
        body: { action: "resend_label", order_id: orderId },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      toast.success("Etiqueta reenviada com sucesso!");
      fetchOrders();
    } catch (err: any) {
      toast.error(err.message || "Erro ao reenviar etiqueta");
    } finally {
      setResendingLabel(null);
    }
  };

  const filtered = orders.filter((o) => {
    const matchSearch =
      !search ||
      o.reference_id.toLowerCase().includes(search.toLowerCase()) ||
      o.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      o.customer_email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Admin - Pedidos" description="Painel administrativo Kefe Joias" noindex />

      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="text-primary" size={24} />
            <h1 className="font-display text-xl text-foreground">Kefe Admin</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={fetchOrders}>
              <RefreshCw size={16} />
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut size={16} className="mr-1" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 space-y-4">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total", value: orders.length, color: "bg-card" },
            { label: "Pagos", value: orders.filter((o) => o.status === "PAID").length, color: "bg-green-50" },
            { label: "Pendentes", value: orders.filter((o) => ["PENDING", "CREATED"].includes(o.status)).length, color: "bg-yellow-50" },
            { label: "Enviados", value: orders.filter((o) => o.melhor_envio_status === "shipped").length, color: "bg-blue-50" },
          ].map((stat) => (
            <div key={stat.label} className={`${stat.color} rounded-lg border border-border p-4 text-center`}>
              <p className="text-2xl font-display text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-body">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por referência, nome ou email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="PENDING">Pendente</SelectItem>
              <SelectItem value="CREATED">Criado</SelectItem>
              <SelectItem value="PAID">Pago</SelectItem>
              <SelectItem value="DECLINED">Recusado</SelectItem>
              <SelectItem value="CANCELED">Cancelado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders Table */}
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="animate-spin text-muted-foreground" size={32} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-body">Nenhum pedido encontrado.</p>
          </div>
        ) : (
          <div className="border border-border rounded-lg overflow-x-auto bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-body text-xs">Pedido</TableHead>
                  <TableHead className="font-body text-xs">Data</TableHead>
                  <TableHead className="font-body text-xs">Cliente</TableHead>
                  <TableHead className="font-body text-xs">Itens</TableHead>
                  <TableHead className="font-body text-xs">Total</TableHead>
                  <TableHead className="font-body text-xs">Pagamento</TableHead>
                  <TableHead className="font-body text-xs">Status</TableHead>
                  <TableHead className="font-body text-xs">Envio</TableHead>
                  <TableHead className="font-body text-xs">Rastreamento</TableHead>
                  <TableHead className="font-body text-xs">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-mono text-xs whitespace-nowrap">
                      {order.reference_id}
                    </TableCell>
                    <TableCell className="text-xs whitespace-nowrap">
                      {new Date(order.created_at).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell className="text-xs">
                      <div className="font-medium">{order.customer_name}</div>
                      <div className="text-muted-foreground">{order.customer_email}</div>
                      {order.shipping_city && (
                        <div className="text-muted-foreground">
                          {order.shipping_city}/{order.shipping_state}
                        </div>
                      )}
                    </TableCell>
                    <TableCell className="text-xs">
                      {Array.isArray(order.items)
                        ? (order.items as any[]).map((it: any, i: number) => (
                            <div key={i}>{it.quantity}x {it.name}</div>
                          ))
                        : "-"}
                    </TableCell>
                    <TableCell className="text-xs whitespace-nowrap font-medium">
                      {formatCentavos(order.total_amount)}
                    </TableCell>
                    <TableCell className="text-xs">
                      <Badge variant="outline" className="text-[10px]">
                        {order.payment_method === "pix" ? "PIX" : "Cartão"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Select
                        value={order.status}
                        onValueChange={(v) => handleUpdateStatus(order.id, v)}
                        disabled={updatingOrder === order.id}
                      >
                        <SelectTrigger className="h-7 text-[10px] w-[110px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="PENDING">Pendente</SelectItem>
                          <SelectItem value="CREATED">Criado</SelectItem>
                          <SelectItem value="PAID">Pago</SelectItem>
                          <SelectItem value="DECLINED">Recusado</SelectItem>
                          <SelectItem value="CANCELED">Cancelado</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                    <TableCell className="text-xs">
                      <div className="space-y-1">
                        {order.shipping_service_name && (
                          <div className="text-muted-foreground">
                            {order.shipping_company} - {order.shipping_service_name}
                          </div>
                        )}
                        <Badge
                          variant="secondary"
                          className={`text-[10px] ${shippingStatusColors[order.melhor_envio_status || "pending"] || ""}`}
                        >
                          {order.melhor_envio_status || "pendente"}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">
                      {order.melhor_envio_tracking ? (
                        <span className="font-mono">{order.melhor_envio_tracking}</span>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {order.melhor_envio_label_url && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-7 text-xs"
                            asChild
                          >
                            <a href={order.melhor_envio_label_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={12} className="mr-1" /> Etiqueta
                            </a>
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs"
                          onClick={() => handleResendLabel(order.id)}
                          disabled={resendingLabel === order.id || !order.shipping_service_name}
                        >
                          {resendingLabel === order.id ? (
                            <Loader2 size={12} className="animate-spin" />
                          ) : (
                            <>
                              <Truck size={12} className="mr-1" /> Reenviar
                            </>
                          )}
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
