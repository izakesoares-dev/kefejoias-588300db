import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, CreditCard, QrCode, Play } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCart();
  const [activeThumb, setActiveThumb] = useState<"img" | number | "video">("img");

  const CATEGORY_VIDEOS: Record<string, string> = {
    anel: "/videos/aneis-showcase.mp4",
    colar: "/videos/colares-showcase.mp4",
    pulseira: "/videos/pulseiras-showcase.mp4",
    pingente: "/videos/pingentes-showcase.mp4",
  };

  const getCategoryVideo = (p: Product): string => {
    if (p.videoUrl) return p.videoUrl;
    if (p.id.startsWith("mandala")) return "/videos/mandalas-showcase.mp4";
    if (p.id.startsWith("incensario")) return "/videos/incensarios-showcase.mp4";
    if (p.id.startsWith("piramide")) return "/videos/piramides-showcase.mp4";
    if (p.id.startsWith("santinha")) return "/videos/santinhas-showcase.mp4";
    if (p.id.startsWith("kit")) return "/videos/kits-showcase.mp4";
    return CATEGORY_VIDEOS[p.category] || "/videos/colares-showcase.mp4";
  };

  const videoUrl = getCategoryVideo(product);

  const displayImages = product.images.length >= 3
    ? product.images.slice(0, 3)
    : [product.images[0], product.images[0], product.images[0]];

  const handleBuy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.sizes) return;
    addItem(product);
  };

  const renderPreview = () => {
    if (activeThumb === "video") {
      return (
        <video
          src={videoUrl}
          className="w-full h-full object-contain"
          controls
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    if (typeof activeThumb === "number") {
      return (
        <img
          src={displayImages[activeThumb]}
          alt={product.name}
          className="w-full h-full object-cover rounded-lg"
        />
      );
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
        <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg hover:shadow-gold transition-shadow duration-500 bg-card group">
          {/* ===== Main image ===== */}
          <Link to={`/produto/${product.slug}`} className="block">
            <div className="relative">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full aspect-square object-cover"
                loading="lazy"
                decoding="async"
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

              {/* Thumbnail strip */}
              <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
                {displayImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveThumb(activeThumb === i ? "img" : i);
                    }}
                    className={`w-11 h-11 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 shadow-md ${
                      activeThumb === i ? "border-primary shadow-gold" : "border-white/50 hover:border-primary/60"
                    }`}
                  >
                    <img src={img} alt={`Ângulo ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveThumb(activeThumb === "video" ? "img" : "video");
                  }}
                  className={`w-11 h-11 rounded-lg border-2 transition-all flex-shrink-0 overflow-hidden relative shadow-md ${
                    activeThumb === "video" ? "border-primary shadow-gold" : "border-white/50 hover:border-primary/60"
                  }`}
                >
                  <img src={product.images[0]} alt="Vídeo" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <Play size={14} className="text-white fill-white" />
                  </div>
                </button>
              </div>
            </div>
          </Link>

          {/* ===== Product info ===== */}
          <div className="px-2 pt-0 pb-1.5 space-y-0">
            <Link to={`/produto/${product.slug}`} className="block">
              <h3 className="font-display text-sm text-foreground leading-tight truncate">{product.name}</h3>
              <p className="text-[11px] text-muted-foreground font-body truncate">{product.significance}</p>
            </Link>

            {/* Preço + Pagamento */}
            <div className="flex items-center justify-between mt-0.5">
              <span className="whitespace-nowrap">
                <span className="text-xl font-display font-extrabold text-green-price drop-shadow-sm">{formatPrice(product.price)}</span>
                <span className="text-[10px] text-muted-foreground ml-1">ou 3x {formatPrice(product.price / 3)}</span>
              </span>
              <div className="flex items-center gap-1.5 text-foreground text-xs font-bold whitespace-nowrap shrink-0">
                <span className="flex items-center gap-0.5"><CreditCard size={13} className="text-whatsapp-green" />Cartão</span>
                <span className="flex items-center gap-0.5"><QrCode size={13} className="text-whatsapp-green" />Pix</span>
              </div>
            </div>

            {/* Comprar */}
            <div className="flex items-center mt-1">
              <Button
                onClick={handleBuy}
                className="flex-1 h-9 gap-1.5 font-body font-extrabold rounded-xl text-sm bg-primary text-secondary hover:bg-gold-dark hover:text-white transition-colors shadow-gold-sm"
              >
                <ShoppingCart size={13} />
                {product.sizes ? "Ver tamanhos" : "Comprar"}
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
