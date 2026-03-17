import { useState } from "react";
import ringMeasurementImg from "@/assets/ring-measurement.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, QrCode, Play, Ruler, X } from "lucide-react";
import ArtisanBadge from "@/components/ArtisanBadge";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
interface RingProductCardProps {
  product: Product;
  index?: number;
  globalSize?: string;
}

const SHOWCASE_VIDEO = "/videos/aneis-showcase.mp4";
const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel-new.mp4";

const RingProductCard = ({ product, index = 0, globalSize }: RingProductCardProps) => {
  const { addItem } = useCart();
  const [localSize, setLocalSize] = useState<string>("");
  const [activeThumb, setActiveThumb] = useState<"img" | number | "video1">("img");
  const [showSizeWarning, setShowSizeWarning] = useState(false);
  const [showMeasureModal, setShowMeasureModal] = useState(false);

  const selectedSize = globalSize || localSize;

  const handleBuy = () => {
    if (!selectedSize) {
      setShowSizeWarning(true);
      setTimeout(() => setShowSizeWarning(false), 3000);
      return;
    }
    setShowSizeWarning(false);
    addItem(product, 1, Number(selectedSize));
  };

  const renderPreview = () => {
    if (activeThumb === "video1") {
      const src = product.videoUrl || SHOWCASE_VIDEO;
      return <video src={src} className="w-full h-full object-contain" controls autoPlay muted loop playsInline />;
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
    >
    <Link to={`/produto/${product.slug}`} className="block">
      <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-gold transition-shadow duration-500 bg-card">

      {/* ===== Foto principal + mídias sobrepostas ===== */}
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-3 py-0.5 text-xs font-body font-semibold bg-primary text-primary-foreground rounded-full">
            {product.badge}
          </span>
        )}

        {showPreview && (
          <div className="absolute inset-0 z-10 bg-black/80 flex items-center justify-center p-4">
            <div className="w-full h-full rounded-lg overflow-hidden">
              {renderPreview()}
            </div>
          </div>
        )}

        <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
          {product.images.slice(0, 3).map((img, i) => (
            <button
              key={i}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveThumb(activeThumb === i ? "img" : i); }}
              className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 shadow-md ${
                activeThumb === i ? "border-primary shadow-gold" : "border-white/50 hover:border-primary/60"
              }`}
            >
              <img src={img} alt={`Ângulo ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveThumb(activeThumb === "video1" ? "img" : "video1"); }}
            className={`w-11 h-11 rounded-lg border-2 transition-all flex-shrink-0 overflow-hidden relative shadow-md ${
              activeThumb === "video1" ? "border-primary shadow-gold" : "border-white/50 hover:border-primary/60"
            }`}
          >
            <img src={product.images[0]} alt="Vídeo" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play size={14} className="text-white fill-white" />
            </div>
          </button>
        </div>
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveThumb(activeThumb === "video2" ? "img" : "video2"); }}
          className={`absolute bottom-3 right-3 z-20 w-12 h-12 rounded-lg border-2 transition-all overflow-hidden shadow-md ${
            activeThumb === "video2" ? "border-primary shadow-gold" : "border-white/70 hover:border-primary/60"
          }`}
        >
          <img src={ringMeasurementImg} alt="Medida" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Ruler size={14} className="text-white drop-shadow-md" />
          </div>
        </button>
      </div>

      {/* ===== Informações do produto (compacto) ===== */}
      <div className="px-2 pt-0 pb-1 space-y-0">
        {/* Título e descrição */}
        <div>
          <h3 className="font-display text-base text-foreground leading-tight truncate">{product.name}</h3>
          <p className="text-xs text-muted-foreground font-body truncate">{product.significance}</p>
        </div>

        <ArtisanBadge selectedSize={selectedSize} onSizeChange={setLocalSize} />

        {showSizeWarning && (
          <p className="text-xs text-red-500 font-body font-semibold animate-pulse">
            ⚠️ Escolha o tamanho do anel
          </p>
        )}

        {/* Preço + Pagamento */}
        <div className="flex items-center justify-between">
          <span className="whitespace-nowrap">
            <span className="text-xl font-display font-bold text-green-deep">{formatPrice(product.price)}</span>
            <span className="text-[11px] text-muted-foreground ml-1.5">ou 3x {formatPrice(product.price / 3)}</span>
          </span>
          <div className="flex items-center gap-2 text-foreground text-sm font-bold whitespace-nowrap shrink-0">
            <span className="flex items-center gap-1"><CreditCard size={15} className="text-whatsapp-green" />Cartão</span>
            <span className="flex items-center gap-1"><QrCode size={15} className="text-whatsapp-green" />Pix</span>
          </div>
        </div>

        {/* Comprar */}
        <div className="flex items-center">
          <Button onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleBuy(); }} className="flex-1 h-10 gap-1.5 font-body font-extrabold rounded-xl text-[15px] bg-primary text-secondary hover:bg-gold-dark hover:text-white transition-colors shadow-gold-sm">
            <ShoppingBag size={14} />
            Comprar
          </Button>
        </div>
      </div>
      </div>
    </Link>
    </motion.div>
  );
};

export default RingProductCard;
