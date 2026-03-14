import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, CreditCard, QrCode, Barcode, Play } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RingProductCardProps {
  product: Product;
  index?: number;
}

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel.mp4";

const RingProductCard = ({ product, index = 0 }: RingProductCardProps) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [cep, setCep] = useState("");
  const [shippingResult, setShippingResult] = useState<string | null>(null);
  const [shippingLoading, setShippingLoading] = useState(false);
  const [activeThumb, setActiveThumb] = useState<"img" | number | "video1" | "video2">("img");

  const sizes = product.sizes || [14, 15, 16, 17, 18, 19, 20, 21, 22];

  const handleBuy = () => {
    if (!selectedSize) return;
    addItem(product, 1, Number(selectedSize));
  };

  const handleCalcShipping = () => {
    if (!cep || cep.length < 8) return;
    setShippingLoading(true);
    setTimeout(() => {
      setShippingResult("R$ 18,90 — 5 a 8 dias úteis");
      setShippingLoading(false);
    }, 1000);
  };

  const renderPreview = () => {
    if (activeThumb === "video1") {
      const src = product.videoUrl || MEASUREMENT_VIDEO;
      return <video src={src} className="w-full h-full object-contain" controls autoPlay muted loop playsInline />;
    }
    if (activeThumb === "video2") {
      return <video src={MEASUREMENT_VIDEO} className="w-full h-full object-contain" controls autoPlay muted loop playsInline />;
    }
    if (typeof activeThumb === "number") {
      return <img src={product.images[activeThumb]} alt={product.name} className="w-full h-full object-cover rounded-lg" />;
    }
    return null;
  };

  const showPreview = activeThumb !== "img";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-gold transition-shadow duration-500 bg-card"
    >
      {/* ===== PARTE SUPERIOR: Foto principal + mídias sobrepostas ===== */}
      <div className="relative">
        {/* Foto principal de fundo */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        {/* Overlay escuro para contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-0.5 text-xs font-body font-semibold bg-primary text-primary-foreground rounded-full">
            {product.badge}
          </span>
        )}

        {/* Preview expandido (quando clica em miniatura/vídeo) */}
        {showPreview && (
          <div className="absolute inset-0 z-10 bg-black/80 flex items-center justify-center p-4">
            <div className="w-full h-full rounded-lg overflow-hidden">
              {renderPreview()}
            </div>
          </div>
        )}

        {/* Miniaturas + vídeos sobrepostos na parte inferior da foto */}
        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
          {product.images.slice(0, 3).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveThumb(activeThumb === i ? "img" : i)}
              className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 shadow-md ${
                activeThumb === i ? "border-primary shadow-gold" : "border-white/50 hover:border-primary/60"
              }`}
            >
              <img src={img} alt={`Ângulo ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
          <button
            onClick={() => setActiveThumb(activeThumb === "video1" ? "img" : "video1")}
            className={`w-11 h-11 rounded-lg border-2 transition-all flex-shrink-0 flex items-center justify-center bg-black/60 shadow-md ${
              activeThumb === "video1" ? "border-primary shadow-gold" : "border-white/50 hover:border-primary/60"
            }`}
          >
            <Play size={13} className="text-white" />
          </button>
          <button
            onClick={() => setActiveThumb(activeThumb === "video2" ? "img" : "video2")}
            className={`w-11 h-11 rounded-lg border-2 transition-all flex-shrink-0 flex items-center justify-center bg-black/60 shadow-md ${
              activeThumb === "video2" ? "border-primary shadow-gold" : "border-white/50 hover:border-primary/60"
            }`}
          >
            <span className="text-[8px] text-white leading-tight text-center">📏<br/>Medida</span>
          </button>
        </div>
      </div>

      {/* ===== PARTE INFERIOR: Informações do produto ===== */}
      <div className="p-4 space-y-3">
        {/* Título & Preço */}
        <div>
          <p className="text-[10px] text-muted-foreground font-body uppercase tracking-wider">{product.significance}</p>
          <h3 className="font-display text-lg text-foreground mt-0.5 leading-tight">{product.name}</h3>
          <p className="text-sm text-muted-foreground font-body mt-0.5 line-clamp-1">{product.shortDescription}</p>
          <div className="flex items-baseline gap-2 mt-1.5">
            <span className="text-2xl font-display font-bold text-primary">{formatPrice(product.price)}</span>
            <span className="text-xs text-muted-foreground">ou 3x {formatPrice(product.price / 3)}</span>
          </div>
        </div>

        {/* Tamanho + Comprar */}
        <div className="flex items-center gap-2">
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-28 h-10 text-sm">
              <SelectValue placeholder="Tamanho" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((s) => (
                <SelectItem key={s} value={String(s)}>Tam. {s}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={handleBuy} disabled={!selectedSize} className="flex-1 h-10 gap-2 font-body font-semibold rounded-xl">
            <ShoppingBag size={16} />
            Comprar
          </Button>
        </div>

        {/* Frete */}
        <div className="flex items-center gap-2">
          <Truck size={14} className="text-primary flex-shrink-0" />
          <Input
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
            className="flex-1 h-8 text-xs"
            maxLength={9}
          />
          <Button onClick={handleCalcShipping} variant="outline" size="sm" disabled={shippingLoading || cep.length < 8} className="h-8 text-xs">
            {shippingLoading ? "..." : "Calcular"}
          </Button>
        </div>
        {shippingResult && (
          <p className="text-xs text-foreground font-body bg-secondary/50 rounded px-2 py-1">{shippingResult}</p>
        )}

        {/* Pagamento */}
        <div className="flex items-center gap-3 text-muted-foreground text-xs pt-1 border-t border-border/50">
          <span className="flex items-center gap-1"><CreditCard size={12} className="text-primary" />Cartão</span>
          <span className="flex items-center gap-1"><QrCode size={12} className="text-primary" />Pix</span>
          <span className="flex items-center gap-1"><Barcode size={12} className="text-primary" />Boleto</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RingProductCard;
