import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, CreditCard, QrCode, ShieldCheck, CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

type PaymentMethod = "pix" | "card";
type CheckoutStep = "cart" | "info" | "payment" | "done";

const Checkout = () => {
  const { items, subtotal, removeItem, updateQuantity, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("cart");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState<number | null>(null);

  const calcFrete = () => {
    if (cep.length >= 8) setFrete(15.90);
  };

  const total = subtotal + (frete ?? 0);

  if (items.length === 0 && step !== "done") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-4">
            <h1 className="font-display text-3xl text-foreground">Carrinho vazio</h1>
            <Button asChild variant="outline">
              <Link to="/produtos">Ver produtos</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (step === "done") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4 max-w-md px-6"
          >
            <CheckCircle size={64} className="text-primary mx-auto" />
            <h1 className="font-display text-3xl text-foreground">Pedido realizado!</h1>
            <p className="text-muted-foreground font-body">
              Obrigada por comprar na Kefe! Você receberá um e-mail de confirmação em breve.
            </p>
            <p className="text-sm text-muted-foreground font-body">
              Pedido #{Math.random().toString(36).substring(2, 8).toUpperCase()}
            </p>
            <Button asChild className="bg-gradient-gold text-primary-foreground">
              <Link to="/">Voltar à loja</Link>
            </Button>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="section-padding pt-24">
        <div className="max-w-4xl mx-auto">
          <Link to="/produtos" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors font-body mb-6">
            <ChevronLeft size={16} />
            Continuar comprando
          </Link>

          <h1 className="font-display text-3xl text-foreground mb-8">Checkout</h1>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-10">
            {["Carrinho", "Dados", "Pagamento"].map((label, i) => {
              const stepMap: CheckoutStep[] = ["cart", "info", "payment"];
              const isActive = stepMap.indexOf(step) >= i;
              return (
                <div key={label} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body ${isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                    {i + 1}
                  </div>
                  <span className={`text-sm font-body ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                    {label}
                  </span>
                  {i < 2 && <div className={`flex-1 h-px ${isActive ? "bg-primary/50" : "bg-border"}`} />}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-6">
              {step === "cart" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4 p-4 rounded-lg bg-card border border-border/50">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-20 h-20 rounded object-cover" />
                      <div className="flex-1">
                        <h3 className="font-display text-foreground">{item.product.name}</h3>
                        {item.size && <p className="text-xs text-muted-foreground">Tam. {item.size}</p>}
                        <p className="text-sm text-primary font-display mt-1">{formatPrice(item.product.price)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <select
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, Number(e.target.value), item.size)}
                            className="bg-secondary text-foreground text-sm rounded px-2 py-1 border border-border"
                          >
                            {[1, 2, 3, 4, 5].map((q) => (
                              <option key={q} value={q}>{q}</option>
                            ))}
                          </select>
                          <button
                            onClick={() => removeItem(item.product.id, item.size)}
                            className="text-xs text-muted-foreground hover:text-destructive transition-colors ml-auto"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* CEP */}
                  <div className="p-4 rounded-lg bg-card border border-border/50">
                    <Label className="text-sm font-body text-foreground">Calcular frete</Label>
                    <div className="flex gap-2 mt-2">
                      <Input
                        placeholder="00000-000"
                        value={cep}
                        onChange={(e) => setCep(e.target.value.replace(/\D/g, "").slice(0, 8))}
                        className="max-w-[180px]"
                      />
                      <Button variant="outline" onClick={calcFrete} disabled={cep.length < 8}>Calcular</Button>
                    </div>
                    {frete !== null && (
                      <p className="text-sm text-muted-foreground mt-2 font-body">
                        Frete: {formatPrice(frete)} — Entrega em 5-8 dias úteis
                      </p>
                    )}
                  </div>

                  <Button
                    onClick={() => setStep("info")}
                    className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold"
                  >
                    Prosseguir
                  </Button>
                </motion.div>
              )}

              {step === "info" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                  <h2 className="font-display text-xl text-foreground">Dados pessoais</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Nome completo</Label>
                      <Input placeholder="Seu nome" className="mt-1" />
                    </div>
                    <div>
                      <Label>E-mail</Label>
                      <Input type="email" placeholder="seu@email.com" className="mt-1" />
                    </div>
                    <div>
                      <Label>CPF</Label>
                      <Input placeholder="000.000.000-00" className="mt-1" />
                    </div>
                    <div>
                      <Label>Telefone</Label>
                      <Input placeholder="(11) 99999-9999" className="mt-1" />
                    </div>
                  </div>

                  <h2 className="font-display text-xl text-foreground pt-4">Endereço de entrega</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label>Rua</Label>
                      <Input placeholder="Rua, Avenida..." className="mt-1" />
                    </div>
                    <div>
                      <Label>Número</Label>
                      <Input placeholder="123" className="mt-1" />
                    </div>
                    <div>
                      <Label>Complemento</Label>
                      <Input placeholder="Apto, Bloco..." className="mt-1" />
                    </div>
                    <div>
                      <Label>Cidade</Label>
                      <Input placeholder="São Paulo" className="mt-1" />
                    </div>
                    <div>
                      <Label>Estado</Label>
                      <Input placeholder="SP" className="mt-1" />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" onClick={() => setStep("cart")}>Voltar</Button>
                    <Button
                      onClick={() => setStep("payment")}
                      className="flex-1 bg-gradient-gold text-primary-foreground font-body font-semibold"
                    >
                      Ir para pagamento
                    </Button>
                  </div>
                </motion.div>
              )}

              {step === "payment" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                  <h2 className="font-display text-xl text-foreground">Forma de pagamento</h2>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setPaymentMethod("pix")}
                      className={`flex-1 p-4 rounded-lg border text-center transition-all ${
                        paymentMethod === "pix" ? "border-primary bg-primary/10" : "border-border bg-card"
                      }`}
                    >
                      <QrCode size={24} className={paymentMethod === "pix" ? "text-primary mx-auto" : "text-muted-foreground mx-auto"} />
                      <p className={`text-sm font-body mt-2 ${paymentMethod === "pix" ? "text-primary" : "text-muted-foreground"}`}>
                        Pix
                      </p>
                      <p className="text-xs text-muted-foreground">5% de desconto</p>
                    </button>
                    <button
                      onClick={() => setPaymentMethod("card")}
                      className={`flex-1 p-4 rounded-lg border text-center transition-all ${
                        paymentMethod === "card" ? "border-primary bg-primary/10" : "border-border bg-card"
                      }`}
                    >
                      <CreditCard size={24} className={paymentMethod === "card" ? "text-primary mx-auto" : "text-muted-foreground mx-auto"} />
                      <p className={`text-sm font-body mt-2 ${paymentMethod === "card" ? "text-primary" : "text-muted-foreground"}`}>
                        Cartão
                      </p>
                      <p className="text-xs text-muted-foreground">Até 3x sem juros</p>
                    </button>
                  </div>

                  {paymentMethod === "pix" && (
                    <div className="p-6 rounded-lg bg-card border border-border/50 text-center space-y-3">
                      <div className="w-40 h-40 mx-auto bg-secondary rounded-lg flex items-center justify-center">
                        <QrCode size={80} className="text-muted-foreground/30" />
                      </div>
                      <p className="text-sm text-muted-foreground font-body">
                        O QR Code será gerado após a confirmação do pedido
                      </p>
                      <p className="text-lg font-display text-primary font-semibold">
                        Total com Pix: {formatPrice(total * 0.95)}
                      </p>
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="space-y-4 p-4 rounded-lg bg-card border border-border/50">
                      <div>
                        <Label>Número do cartão</Label>
                        <Input placeholder="0000 0000 0000 0000" className="mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Validade</Label>
                          <Input placeholder="MM/AA" className="mt-1" />
                        </div>
                        <div>
                          <Label>CVV</Label>
                          <Input placeholder="123" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label>Nome no cartão</Label>
                        <Input placeholder="Como no cartão" className="mt-1" />
                      </div>
                      <div>
                        <Label>Parcelas</Label>
                        <select className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm text-foreground">
                          <option>1x de {formatPrice(total)} (sem juros)</option>
                          <option>2x de {formatPrice(total / 2)} (sem juros)</option>
                          <option>3x de {formatPrice(total / 3)} (sem juros)</option>
                          <option>4x de {formatPrice(total / 4 * 1.02)} (com juros)</option>
                          <option>5x de {formatPrice(total / 5 * 1.03)} (com juros)</option>
                          <option>6x de {formatPrice(total / 6 * 1.04)} (com juros)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={() => setStep("info")}>Voltar</Button>
                    <Button
                      onClick={() => { clearCart(); setStep("done"); }}
                      className="flex-1 bg-gradient-gold text-primary-foreground font-body font-semibold gap-2"
                    >
                      <ShieldCheck size={18} />
                      Finalizar pedido
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Order summary sidebar */}
            {(step as string) !== "done" && (
              <div className="lg:col-span-1">
                <div className="sticky top-24 p-5 rounded-lg bg-card border border-border/50 space-y-4">
                  <h3 className="font-display text-lg text-foreground">Resumo do pedido</h3>
                  <div className="space-y-3">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.size}`} className="flex justify-between text-sm font-body">
                        <span className="text-muted-foreground">
                          {item.quantity}x {item.product.name}
                          {item.size ? ` (${item.size})` : ""}
                        </span>
                        <span className="text-foreground">{formatPrice(item.product.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-3 space-y-2">
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="text-foreground">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-body">
                      <span className="text-muted-foreground">Frete</span>
                      <span className="text-foreground">{frete ? formatPrice(frete) : "A calcular"}</span>
                    </div>
                    {paymentMethod === "pix" && (
                      <div className="flex justify-between text-sm font-body">
                        <span className="text-primary">Desconto Pix (5%)</span>
                        <span className="text-primary">-{formatPrice(total * 0.05)}</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="font-display text-foreground font-semibold">Total</span>
                    <span className="font-display text-primary text-xl font-semibold">
                      {formatPrice(paymentMethod === "pix" ? total * 0.95 : total)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-body pt-2">
                    <ShieldCheck size={14} className="text-primary" />
                    Compra 100% segura
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
