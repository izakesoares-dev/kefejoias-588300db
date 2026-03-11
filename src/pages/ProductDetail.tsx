import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, Heart, ChevronLeft, Star, Ruler } from "lucide-react";
import { getProductBySlug, getRelatedProducts, formatPrice } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import ProductGallery from "@/components/ProductGallery";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { productJsonLd, breadcrumbJsonLd } from "@/components/SEOHead";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || "");
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | undefined>();
  const [quantity, setQuantity] = useState(1);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Produto não encontrado</h1>
          <Button asChild variant="outline">
            <Link to="/produtos">Voltar aos produtos</Link>
          </Button>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) return;
    addItem(product, quantity, selectedSize);
  };

  const handleBuyNow = () => {
    if (product.sizes && !selectedSize) return;
    addItem(product, quantity, selectedSize);
    window.location.href = "/checkout";
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${product.name} — Biojoia Artesanal`}
        description={product.shortDescription || product.description.slice(0, 155)}
        ogType="product"
        jsonLd={[
          productJsonLd({
            name: product.name,
            description: product.shortDescription || product.description,
            price: product.price,
            image: typeof product.images[0] === "string" ? product.images[0] : "",
            slug: product.slug,
            inStock: product.inStock,
          }),
          breadcrumbJsonLd([
            { name: "Início", url: "https://kefejoias.com.br/" },
            { name: "Produtos", url: "https://kefejoias.com.br/produtos" },
            { name: product.name, url: `https://kefejoias.com.br/produto/${product.slug}` },
          ]),
        ]}
      />
      <Navbar />

      <section className="section-padding pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <Link to="/produtos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
            <ChevronLeft size={16} />
            Voltar aos produtos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Gallery */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <ProductGallery
                images={product.images}
                videoUrl={product.videoUrl}
                productName={product.name}
              />
            </motion.div>

            {/* Product Info */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
              {product.badge && (
                <span className="inline-block px-3 py-1 text-xs font-body font-semibold bg-primary text-primary-foreground rounded-full">
                  {product.badge}
                </span>
              )}

              <div>
                <p className="text-sm text-muted-foreground font-body uppercase tracking-wider mb-1">
                  {product.significance}
                </p>
                <h1 className="font-display text-3xl md:text-4xl text-foreground">{product.name}</h1>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-semibold text-primary">{formatPrice(product.price)}</span>
                <span className="text-sm text-muted-foreground font-body">
                  ou 3x de {formatPrice(product.price / 3)} sem juros
                </span>
              </div>

              <p className="font-body text-muted-foreground leading-relaxed">{product.description}</p>

              {/* Size selector */}
              {product.sizes && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-body font-medium text-foreground">
                      Tamanho do anel
                    </label>
                    <button
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="text-xs text-primary hover:underline font-body flex items-center gap-1"
                    >
                      <Ruler size={12} />
                      Guia de medidas
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 rounded-full text-sm font-body transition-all duration-300 ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground shadow-gold"
                            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {product.sizes && !selectedSize && (
                    <p className="text-xs text-muted-foreground mt-2">Selecione um tamanho</p>
                  )}

                  {showSizeGuide && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 p-4 bg-card rounded-lg border border-border/50"
                    >
                      <h4 className="font-display text-sm text-foreground mb-2">Guia de Medidas</h4>
                      <p className="text-xs text-muted-foreground font-body mb-2">
                        Enrole um fio ou tira de papel ao redor do dedo. Meça o comprimento e compare:
                      </p>
                      <div className="grid grid-cols-2 gap-1 text-xs font-body">
                        {[
                          { size: 15, mm: "49mm" },
                          { size: 16, mm: "51mm" },
                          { size: 17, mm: "53mm" },
                          { size: 18, mm: "56mm" },
                          { size: 19, mm: "58mm" },
                          { size: 20, mm: "60mm" },
                          { size: 21, mm: "62mm" },
                        ].map(({ size, mm }) => (
                          <div key={size} className="flex justify-between py-1 border-b border-border/30">
                            <span className="text-foreground">Tam. {size}</span>
                            <span className="text-muted-foreground">≈ {mm} circunferência</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Quantity */}
              <div>
                <label className="text-sm font-body font-medium text-foreground mb-2 block">
                  Quantidade
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 rounded bg-secondary text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    -
                  </button>
                  <span className="font-body text-foreground w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 rounded bg-secondary text-foreground flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-gold text-primary-foreground font-body font-semibold gap-2"
                  disabled={product.sizes ? !selectedSize : false}
                >
                  <ShoppingBag size={18} />
                  Adicionar ao carrinho
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Heart size={18} />
                </Button>
              </div>

              <Button
                onClick={handleBuyNow}
                variant="outline"
                className="w-full border-primary/50 text-primary hover:bg-primary/10"
                disabled={product.sizes ? !selectedSize : false}
              >
                Comprar agora
              </Button>

              {/* Elements / Meanings */}
              <div className="border-t border-border pt-6">
                <h3 className="font-display text-lg text-foreground mb-4">Significado dos Elementos</h3>
                <div className="space-y-3">
                  {product.elements.map((el) => (
                    <div key={el.name} className="flex gap-3 p-3 rounded-lg bg-card border border-border/50">
                      <span className="text-2xl">{el.icon}</span>
                      <div>
                        <h4 className="font-display text-sm text-foreground">{el.name}</h4>
                        <p className="text-xs text-muted-foreground font-body">{el.meaning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                {[
                  { icon: "🔒", text: "Compra segura" },
                  { icon: "📦", text: "Troca em 7 dias" },
                  { icon: "✨", text: "Artesanal" },
                ].map(({ icon, text }) => (
                  <div key={text} className="text-center">
                    <span className="text-xl">{icon}</span>
                    <p className="text-xs text-muted-foreground font-body mt-1">{text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Reviews placeholder */}
          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-display text-2xl text-foreground mb-6">Avaliações</h2>
            <div className="flex items-center gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="fill-primary text-primary" />
              ))}
              <span className="text-sm text-muted-foreground font-body">5.0 (12 avaliações)</span>
            </div>
            <div className="space-y-4">
              {[
                { name: "Maria S.", text: "Peça linda! Superou minhas expectativas. A qualidade é incrível.", date: "Fev 2026" },
                { name: "Ana P.", text: "Comprei como presente e adoraram! Embalagem impecável.", date: "Jan 2026" },
              ].map((review) => (
                <div key={review.name} className="p-4 rounded-lg bg-card border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground font-body">{review.text}</p>
                  <p className="text-xs text-muted-foreground font-body mt-2">{review.name} · {review.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16 border-t border-border pt-12">
              <h2 className="font-display text-2xl text-foreground mb-6">Produtos Relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;
