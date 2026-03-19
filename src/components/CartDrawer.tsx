import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingCart, Sparkles, Gem, Flower2, Gift } from "lucide-react";
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
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <ShoppingCart size={48} className="text-muted-foreground/30" />
            <p className="text-muted-foreground font-body text-sm">Nenhum item no carrinho</p>
            <Button variant="outline" onClick={() => setIsCartOpen(false)} asChild>
              <Link to="/produtos">Explorar produtos</Link>
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
