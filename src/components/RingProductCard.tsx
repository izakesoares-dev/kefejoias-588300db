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

  // Determine what to show in the large preview area
  const renderPreview = () => {
    if (activeThumb === "video1" && product.videoUrl) {
      return <video src={product.videoUrl} className="w-full h-full object-contain" controls autoPlay muted loop playsInline />;
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
      className="relative rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-gold transition-shadow duration-500"
    >
      {/* Full background image */}
      <img
        src={product.images[0]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/85" />

      {/* ALL content overlaid */}
      <div className="relative z-10 p-4 flex flex-col gap-3">
        {/* Badge */}
        {product.badge && (
          <span className="self-start px-3 py-0.5 text-xs font-body font-semibold bg-primary text-primary-foreground rounded-full">
            {product.badge}
          </span>
        )}

        {/* Preview area (only when a thumb/video is active) */}
        {showPreview && (
          <div className="aspect-video rounded-lg overflow-hidden bg-black/40">
            {renderPreview()}
          </div>
        )}

        {/* Thumbnails row: 3 images + 2 videos */}
        <div className="flex items-center gap-2">
          {product.images.slice(0, 3).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveThumb(activeThumb === i ? "img" : i)}
              className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                activeThumb === i ? "border-primary shadow-gold" : "border-white/30 hover:border-primary/60"
              }`}
            >
              <img src={img} alt={`Ângulo ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
          <button
            onClick={() => setActiveThumb(activeThumb === "video1" ? "img" : "video1")}
            className={`w-12 h-12 rounded-lg border-2 transition-all flex-shrink-0 flex items-center justify-center bg-black/40 ${
              activeThumb === "video1" ? "border-primary shadow-gold" : "border-white/30 hover:border-primary/60"
            }`}
          >
            <Play size={14} className="text-white" />
          </button>
          <button
            onClick={() => setActiveThumb(activeThumb === "video2" ? "img" : "video2")}
            className={`w-12 h-12 rounded-lg border-2 transition-all flex-shrink-0 flex items-center justify-center bg-black/40 ${
              activeThumb === "video2" ? "border-primary shadow-gold" : "border-white/30 hover:border-primary/60"
            }`}
          >
            <span className="text-[9px] text-white leading-tight text-center">📏<br/>Medida</span>
          </button>
        </div>

        {/* Title & Price */}
        <div>
          <p className="text-[10px] text-white/60 font-body uppercase tracking-wider">{product.significance}</p>
          <h3 className="font-display text-lg text-white mt-0.5 leading-tight">{product.name}</h3>
          <p className="text-sm text-white/70 font-body mt-0.5 line-clamp-1">{product.shortDescription}</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-display font-bold text-primary">{formatPrice(product.price)}</span>
            <span className="text-xs text-white/50">ou 3x {formatPrice(product.price / 3)}</span>
          </div>
        </div>

        {/* Size + Buy — compact row */}
        <div className="flex items-center gap-2">
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-28 h-10 bg-white/10 border-white/20 text-white text-sm">
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

        {/* Shipping */}
        <div className="flex items-center gap-2">
          <Truck size={14} className="text-primary flex-shrink-0" />
          <Input
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
            className="flex-1 h-8 text-xs bg-white/10 border-white/20 text-white placeholder:text-white/40"
            maxLength={9}
          />
          <Button onClick={handleCalcShipping} variant="outline" size="sm" disabled={shippingLoading || cep.length < 8} className="h-8 text-xs border-white/20 text-white hover:bg-white/10">
            {shippingLoading ? "..." : "Calcular"}
          </Button>
        </div>
        {shippingResult && (
          <p className="text-xs text-white/80 font-body bg-white/10 rounded px-2 py-1">{shippingResult}</p>
        )}

        {/* Payment */}
        <div className="flex items-center gap-3 text-white/60 text-xs">
          <span className="flex items-center gap-1"><CreditCard size={12} className="text-primary" />Cartão</span>
          <span className="flex items-center gap-1"><QrCode size={12} className="text-primary" />Pix</span>
          <span className="flex items-center gap-1"><Barcode size={12} className="text-primary" />Boleto</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RingProductCard;
