import { useState } from "react";
import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ShippingFooter = () => {
  const [cep, setCep] = useState("");
  const [shippingResult, setShippingResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCalc = () => {
    if (!cep || cep.length < 8) return;
    setLoading(true);
    setTimeout(() => {
      setShippingResult("R$ 18,90 — 5 a 8 dias úteis");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center gap-3">
        <Truck size={18} className="text-primary flex-shrink-0" />
        <span className="text-sm font-body font-medium text-foreground">Calcular frete:</span>
        <Input
          placeholder="Digite seu CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
          className="w-36 h-9 text-sm"
          maxLength={9}
        />
        <Button onClick={handleCalc} variant="outline" size="sm" disabled={loading || cep.length < 8} className="h-9 text-sm">
          {loading ? "..." : "Calcular"}
        </Button>
        {shippingResult && (
          <span className="text-sm text-foreground font-body bg-secondary/50 rounded px-3 py-1">{shippingResult}</span>
        )}
      </div>
    </div>
  );
};

export default ShippingFooter;
