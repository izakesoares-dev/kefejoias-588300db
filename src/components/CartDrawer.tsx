import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingCart, CircleDot, Hexagon, Link2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal, totalItems } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="bg-background border-border flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="font-display text-foreground flex items-center gap-2">
            <ShoppingCart size={20} className="text-green-price" />
            Carrinho ({totalItems})
          </SheetTitle>
          <SheetDescription className="text-muted-foreground font-body">
            {items.length === 0 ? "Seu carrinho está vazio" : "Revise seus itens antes de continuar"}
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-5 px-4">
            <div className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center">
              <ShoppingCart size={26} className="text-primary-foreground" />
            </div>
            <div className="text-center space-y-1">
              <p className="font-display text-base text-foreground">Seu carrinho está vazio</p>
              <p className="text-sm text-muted-foreground font-body">Que tal explorar nossas coleções?</p>
            </div>
            <div className="w-full space-y-1.5">
              {[
                { to: "/pulseiras", icon: CircleDot, label: "Pulseiras", desc: "Macramê, pedras e aço" },
                { to: "/aneis", icon: Hexagon, label: "Anéis", desc: "Pedras naturais e flores" },
                { to: "/colares", icon: Link2, label: "Colares", desc: "Resina, pedras e aço" },
                { to: "/especiais", icon: Star, label: "Especiais", desc: "Kits, pirâmides e mais" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsCartOpen(false)}
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-border/50 bg-card hover:border-primary/50 hover:shadow-gold-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-sm">
                    <item.icon size={16} className="text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-body font-semibold text-sm text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Button
              size="sm"
              className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold"
              asChild
              onClick={() => setIsCartOpen(false)}
            >
              <Link to="/produtos">Ver todos os produtos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 pr-1 mt-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-3 p-3 rounded-lg bg-card border border-border/50"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 rounded object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm text-foreground truncate">{item.product.name}</h4>
                    {item.size && (
                      <p className="text-xs text-muted-foreground">Tamanho: {item.size}</p>
                    )}
                    <p className="text-sm font-body font-extrabold text-green-price mt-1">
                      {formatPrice(item.product.price)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                        className="w-6 h-6 rounded bg-transparent border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-body text-foreground w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                        className="w-6 h-6 rounded bg-transparent border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="ml-auto text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-4 space-y-3 mt-4">
              <div className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="bg-gradient-gold text-primary-foreground font-body font-semibold"
                  onClick={() => setIsCartOpen(false)}
                >
                  Voltar
                </Button>
                <Button
                  className="flex-1 bg-gradient-gold text-primary-foreground font-body font-semibold"
                  size="sm"
                  asChild
                  onClick={() => setIsCartOpen(false)}
                >
                  <Link to="/checkout">Finalizar compra</Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
