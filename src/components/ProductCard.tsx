import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.sizes) {
      // Navigate to product page for size selection
      return;
    }
    addItem(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/produto/${product.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-lg bg-card border border-border/50 transition-all duration-500 hover:shadow-gold hover:border-primary/30">
          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-body font-semibold bg-primary text-primary-foreground rounded-full">
              {product.badge}
            </span>
          )}

          {/* Image */}
          <div className="aspect-square overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Quick add overlay */}
          {!product.sizes && (
            <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                onClick={handleQuickAdd}
                className="mb-4 bg-primary/90 backdrop-blur-sm hover:bg-primary text-primary-foreground gap-2"
                size="sm"
              >
                <ShoppingBag size={14} />
                Adicionar
              </Button>
            </div>
          )}

          {/* Info */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
              {product.significance}
            </p>
            <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground font-body mt-1 line-clamp-2">
              {product.shortDescription}
            </p>
            <p className="mt-3 text-lg font-display font-semibold text-primary">
              {formatPrice(product.price)}
            </p>
            {product.sizes && (
              <p className="text-xs text-muted-foreground mt-1">Tamanhos 15 a 21</p>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
