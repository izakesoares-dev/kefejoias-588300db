import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Truck, CreditCard, QrCode, Barcode, Play } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RingProductCardProps {
  product: Product;
  index?: number;
}

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel.mp4";

const RingProductCard = ({ product, index = 0 }: RingProductCardProps) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | undefined>(undefined);
  const [cep, setCep] = useState("");
  const [shippingResult, setShippingResult] = useState<string | null>(null);
  const [shippingLoading, setShippingLoading] = useState(false);
  const [activeMedia, setActiveMedia] = useState<"img" | number | "video1" | "video2">("img");

  const sizes = product.sizes || [14, 15, 16, 17, 18, 19, 20, 21, 22];

  const handleBuy = () => {
    if (!selectedSize) {
      // Highlight size selector
      document.getElementById(`size-${product.id}`)?.focus();
      return;
    }
    addItem(product, 1, selectedSize);
  };

  const handleCalcShipping = () => {
    if (!cep || cep.length < 8) return;
    setShippingLoading(true);
    // Simulated shipping calc
    setTimeout(() => {
      setShippingResult("Frete: R$ 18,90 — Prazo: 5 a 8 dias úteis");
      setShippingLoading(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="relative rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg hover:shadow-gold transition-shadow duration-500"
    >
      {/* Background image with low opacity */}
      <div className="absolute inset-0 z-0">
        <img
          src={product.images[0]}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/80 via-card/90 to-card" />
      </div>

      <div className="relative z-10 p-5 space-y-4">
        {/* Badge */}
        {product.badge && (
          <span className="inline-block px-3 py-1 text-xs font-body font-semibold bg-primary text-primary-foreground rounded-full">
            {product.badge}
          </span>
        )}

        {/* Main media area */}
        <div className="aspect-square rounded-xl overflow-hidden bg-secondary/30">
          {activeMedia === "img" && (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          )}
          {typeof activeMedia === "number" && (
            <img
              src={product.images[activeMedia]}
              alt={`${product.name} - ângulo ${activeMedia + 1}`}
              className="w-full h-full object-cover"
            />
          )}
          {activeMedia === "video1" && product.videoUrl && (
            <video
              src={product.videoUrl}
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          )}
          {activeMedia === "video2" && (
            <video
              src={MEASUREMENT_VIDEO}
              className="w-full h-full object-contain bg-black"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          )}
        </div>

        {/* Thumbnails row: 3 images + 2 videos */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {product.images.slice(0, 3).map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveMedia(i)}
              className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                activeMedia === i ? "border-primary shadow-gold" : "border-border/50 hover:border-primary/50"
              }`}
            >
              <img src={img} alt={`Ângulo ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}

          {/* Video 1 - ring in motion */}
          {product.videoUrl && (
            <button
              onClick={() => setActiveMedia("video1")}
              className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center bg-secondary/50 ${
                activeMedia === "video1" ? "border-primary shadow-gold" : "border-border/50 hover:border-primary/50"
              }`}
            >
              <Play size={16} className="text-primary" />
              <span className="text-[9px] text-muted-foreground ml-0.5">Anel</span>
            </button>
          )}

          {/* Video 2 - measurement guide (fixed for all) */}
          <button
            onClick={() => setActiveMedia("video2")}
            className={`flex-shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center bg-secondary/50 ${
              activeMedia === "video2" ? "border-primary shadow-gold" : "border-border/50 hover:border-primary/50"
            }`}
          >
            <span className="text-[9px] text-center text-muted-foreground leading-tight">📏<br />Medida</span>
          </button>
        </div>

        {/* Title & Price */}
        <div>
          <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">
            {product.significance}
          </p>
          <h3 className="font-display text-lg text-foreground mt-1">{product.name}</h3>
          <p className="text-sm text-muted-foreground font-body mt-1 line-clamp-2">
            {product.shortDescription}
          </p>
          <p className="mt-2 text-2xl font-display font-bold text-primary">
            {formatPrice(product.price)}
          </p>
          <p className="text-xs text-muted-foreground">
            ou 3x de {formatPrice(product.price / 3)} sem juros
          </p>
        </div>

        {/* Size selector */}
        <div>
          <label htmlFor={`size-${product.id}`} className="text-sm font-body font-medium text-foreground mb-2 block">
            Tamanho do anel:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-9 h-9 rounded-full text-sm font-body font-medium transition-all ${
                  selectedSize === size
                    ? "bg-primary text-primary-foreground shadow-gold"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          {!selectedSize && (
            <p className="text-xs text-destructive mt-1 font-body">Selecione o tamanho</p>
          )}
        </div>

        {/* Buy button */}
        <Button
          onClick={handleBuy}
          className="w-full gap-2 h-12 text-base font-body font-semibold rounded-xl"
          size="lg"
        >
          <ShoppingBag size={18} />
          Comprar
        </Button>

        {/* Shipping calculator */}
        <div className="border-t border-border/50 pt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <Truck size={16} className="text-primary" />
            <span>Calcular frete e prazo</span>
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Digite seu CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
              className="flex-1 h-9 text-sm"
              maxLength={9}
            />
            <Button
              onClick={handleCalcShipping}
              variant="outline"
              size="sm"
              disabled={shippingLoading || cep.length < 8}
              className="h-9 text-xs"
            >
              {shippingLoading ? "..." : "Calcular"}
            </Button>
          </div>
          {shippingResult && (
            <p className="text-sm text-foreground font-body bg-secondary/50 rounded-lg px-3 py-2">
              {shippingResult}
            </p>
          )}
        </div>

        {/* Payment methods */}
        <div className="border-t border-border/50 pt-3">
          <p className="text-xs text-muted-foreground font-body mb-2">Formas de pagamento:</p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="flex items-center gap-1 text-xs">
              <CreditCard size={14} className="text-primary" />
              <span>Cartão</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <QrCode size={14} className="text-primary" />
              <span>Pix</span>
            </div>
            <div className="flex items-center gap-1 text-xs">
              <Barcode size={14} className="text-primary" />
              <span>Boleto</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RingProductCard;
