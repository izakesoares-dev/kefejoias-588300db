import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, CreditCard, QrCode, ShieldCheck, CheckCircle, Loader2, Truck, Package, BadgePercent, Wallet, Lock, ExternalLink, PenLine, MapPin } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { fetchAddress, calcularFreteMelhorEnvio, calcularFrete, estimarPrazo, type ShippingOption } from "@/utils/shipping";

type PaymentMethod = "pix" | "card";
type CheckoutStep = "cart" | "info" | "payment" | "done";

const Checkout = () => {
  const { items, subtotal, removeItem, updateQuantity, clearCart } = useCart();
  const [step, setStep] = useState<CheckoutStep>("cart");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState<number | null>(null);
  const [prazo, setPrazo] = useState<string>("");
  const [loadingCep, setLoadingCep] = useState(false);
  const [cepError, setCepError] = useState("");
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>([]);
  const [selectedShipping, setSelectedShipping] = useState<number | null>(null);
  const [endereco, setEndereco] = useState({
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [manualAddress, setManualAddress] = useState(false);
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "",
    email: "",
    cpf: "",
    telefone: "",
    numero: "",
    complemento: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateInfoStep = (): boolean => {
    const errors: Record<string, string> = {};
    if (!dadosPessoais.nome.trim()) errors.nome = "Obrigatório";
    if (!dadosPessoais.email.trim()) errors.email = "Obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dadosPessoais.email.trim())) errors.email = "E-mail inválido";
    if (!dadosPessoais.cpf.trim()) errors.cpf = "Obrigatório";
    else if (dadosPessoais.cpf.replace(/\D/g, "").length !== 11) errors.cpf = "CPF inválido";
    if (!dadosPessoais.telefone.trim()) errors.telefone = "Obrigatório";
    if (!cep || cep.length < 8) errors.cep = "CEP obrigatório";
    if (!endereco.rua.trim()) errors.rua = "Obrigatório";
    if (!dadosPessoais.numero.trim()) errors.numero = "Obrigatório";
    if (!endereco.bairro.trim()) errors.bairro = "Obrigatório";
    if (!endereco.cidade.trim()) errors.cidade = "Obrigatório";
    if (!endereco.estado.trim()) errors.estado = "Obrigatório";
    if (frete === null) errors.frete = "Calcule o frete";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleCepChange = useCallback(async (value: string) => {
    const clean = value.replace(/\D/g, "").slice(0, 8);
    setCep(clean);
    setCepError("");

    if (clean.length === 8) {
      setLoadingCep(true);
      setShippingOptions([]);
      setSelectedShipping(null);

      // Fetch address
      const data = await fetchAddress(clean);
      if (data) {
        setEndereco({
          rua: data.logradouro || "",
          bairro: data.bairro || "",
          cidade: data.localidade || "",
          estado: data.uf || "",
        });
      } else {
        setCepError("CEP não encontrado");
        setFrete(null);
        setPrazo("");
        setLoadingCep(false);
        return;
      }

      // Try Melhor Envio API
      try {
        const produtos = items.map((item) => ({
          id: item.product.id,
          price: item.product.price,
          quantity: item.quantity,
        }));
        const opcoes = await calcularFreteMelhorEnvio(clean, produtos);

        if (opcoes.length > 0) {
          setShippingOptions(opcoes);
          setSelectedShipping(0);
          setFrete(opcoes[0].price);
          setPrazo(`${opcoes[0].delivery_time} dias úteis`);
        } else {
          // Fallback to fixed rate
          setFrete(calcularFrete(data.uf));
          setPrazo(estimarPrazo(data.uf));
        }
      } catch (err) {
        console.warn("Melhor Envio indisponível, usando frete fixo:", err);
        setFrete(calcularFrete(data.uf));
        setPrazo(estimarPrazo(data.uf));
      }

      setLoadingCep(false);
      setCepError("");
    } else {
      setFrete(null);
      setPrazo("");
      setShippingOptions([]);
      setSelectedShipping(null);
    }
  }, [items]);

  const handleSelectShipping = (index: number) => {
    setSelectedShipping(index);
    const opt = shippingOptions[index];
    setFrete(opt.price);
    setPrazo(`${opt.delivery_time} dias úteis`);
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

  const shippingCalculatorJSX = (
    <div className="p-4 rounded-lg bg-card border border-border/50">
      <Label className="text-sm font-body text-foreground">Calcular frete</Label>
      <div className="flex gap-2 mt-2 items-center">
        <Input
          placeholder="00000-000"
          value={cep}
          onChange={(e) => handleCepChange(e.target.value)}
          className="max-w-[180px]"
          maxLength={9}
          inputMode="numeric"
        />
        {loadingCep && <Loader2 size={18} className="animate-spin text-muted-foreground" />}
      </div>
      {cepError && (
        <div className="mt-3 p-3 rounded-lg border border-destructive/30 bg-destructive/5 space-y-3">
          <p className="text-sm text-destructive font-body font-medium flex items-center gap-1.5">
            <MapPin size={14} />
            {cepError}
          </p>
          <div className="space-y-2">
            <button
              onClick={() => { setCepError(""); setManualAddress(true); }}
              className="w-full flex items-center gap-2.5 p-2.5 rounded-lg border border-border/50 bg-background hover:border-whatsapp-green/40 transition-all text-left text-sm"
            >
              <PenLine size={15} className="text-whatsapp-green shrink-0" />
              <div>
                <p className="font-body font-medium text-foreground text-xs">Preencher endereço manualmente</p>
                <p className="font-body text-[11px] text-muted-foreground">Digite seu endereço completo sem depender do CEP</p>
              </div>
            </button>
            <a
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2.5 p-2.5 rounded-lg border border-border/50 bg-background hover:border-whatsapp-green/40 transition-all text-left text-sm"
            >
              <ExternalLink size={15} className="text-whatsapp-green shrink-0" />
              <div>
                <p className="font-body font-medium text-foreground text-xs">Buscar CEP nos Correios</p>
                <p className="font-body text-[11px] text-muted-foreground">Descubra seu CEP correto no site oficial</p>
              </div>
            </a>
          </div>
        </div>
      )}

      {/* Melhor Envio options */}
      {shippingOptions.length > 0 && (
        <div className="mt-3 space-y-2">
          {shippingOptions.map((opt, i) => (
            <button
              key={opt.id}
              onClick={() => handleSelectShipping(i)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all text-sm ${
                selectedShipping === i
                  ? "border-whatsapp-green bg-whatsapp-green/10"
                  : "border-border/50 bg-background hover:border-whatsapp-green/30"
              }`}
            >
              <Truck size={16} className={selectedShipping === i ? "text-whatsapp-green" : "text-muted-foreground"} />
              <div className="flex-1 min-w-0">
                <p className={`font-body font-medium ${selectedShipping === i ? "text-foreground" : "text-muted-foreground"}`}>
                  {opt.company} — {opt.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {opt.delivery_time} dias úteis
                </p>
              </div>
              <span className={`font-body font-semibold shrink-0 ${selectedShipping === i ? "text-whatsapp-green" : "text-foreground"}`}>
                {formatPrice(opt.price)}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Fallback display */}
      {shippingOptions.length === 0 && frete !== null && prazo && (
        <p className="text-sm text-muted-foreground mt-2 font-body">
          Frete: {formatPrice(frete)} — Entrega em {prazo}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Checkout" description="Finalize sua compra na Kefe Joias." noindex />
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
                            className="bg-transparent text-foreground text-sm font-bold rounded px-2 py-1 border border-border/50 backdrop-blur-sm"
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

                  {shippingCalculatorJSX}

                  <Button
                    onClick={() => setStep("info")}
                    className="w-full bg-gradient-gold text-primary-foreground font-body font-semibold"
                  >
                    Prosseguir
                  </Button>
                </motion.div>
              )}

              {step === "info" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
                  <div className="p-3 rounded-lg bg-card border border-border/50 space-y-2">
                    <h2 className="font-display text-sm text-foreground">Dados pessoais</h2>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                      <div className="col-span-2 sm:col-span-1">
                        <Label className="text-[11px] leading-tight">Nome completo</Label>
                        <Input placeholder="Seu nome" className={`mt-0.5 h-8 text-xs ${formErrors.nome ? "border-destructive" : ""}`} value={dadosPessoais.nome} onChange={(e) => { setDadosPessoais(p => ({ ...p, nome: e.target.value })); setFormErrors(p => ({ ...p, nome: "" })); }} maxLength={100} />
                        {formErrors.nome && <p className="text-[10px] text-destructive mt-0.5">{formErrors.nome}</p>}
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label className="text-[11px] leading-tight">E-mail</Label>
                        <Input type="email" placeholder="seu@email.com" className={`mt-0.5 h-8 text-xs ${formErrors.email ? "border-destructive" : ""}`} value={dadosPessoais.email} onChange={(e) => { setDadosPessoais(p => ({ ...p, email: e.target.value })); setFormErrors(p => ({ ...p, email: "" })); }} maxLength={255} />
                        {formErrors.email && <p className="text-[10px] text-destructive mt-0.5">{formErrors.email}</p>}
                      </div>
                      <div>
                        <Label className="text-[11px] leading-tight">CPF</Label>
                        <Input placeholder="000.000.000-00" className={`mt-0.5 h-8 text-xs ${formErrors.cpf ? "border-destructive" : ""}`} value={dadosPessoais.cpf} onChange={(e) => { setDadosPessoais(p => ({ ...p, cpf: e.target.value })); setFormErrors(p => ({ ...p, cpf: "" })); }} maxLength={14} />
                        {formErrors.cpf && <p className="text-[10px] text-destructive mt-0.5">{formErrors.cpf}</p>}
                      </div>
                      <div>
                        <Label className="text-[11px] leading-tight">Telefone</Label>
                        <Input placeholder="(11) 99999-9999" className={`mt-0.5 h-8 text-xs ${formErrors.telefone ? "border-destructive" : ""}`} value={dadosPessoais.telefone} onChange={(e) => { setDadosPessoais(p => ({ ...p, telefone: e.target.value })); setFormErrors(p => ({ ...p, telefone: "" })); }} maxLength={15} />
                        {formErrors.telefone && <p className="text-[10px] text-destructive mt-0.5">{formErrors.telefone}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-card border border-border/50 space-y-2">
                    <h2 className="font-display text-base font-bold text-foreground text-center">Endereço de entrega</h2>
                    <div className="grid grid-cols-6 gap-x-2 gap-y-1.5">
                      <div className="col-span-3 sm:col-span-2">
                        <Label className="text-[11px] leading-tight">CEP</Label>
                        <div className="flex gap-1.5 mt-0.5 items-center">
                          <Input
                            placeholder="00000-000"
                            value={cep}
                            onChange={(e) => { handleCepChange(e.target.value); setFormErrors(p => ({ ...p, cep: "" })); }}
                            className={`h-8 text-xs ${formErrors.cep ? "border-destructive" : ""}`}
                          />
                          {loadingCep && <Loader2 size={14} className="animate-spin text-muted-foreground shrink-0" />}
                        </div>
                        {(cepError || formErrors.cep) && <p className="text-[10px] text-destructive mt-0.5">{cepError || formErrors.cep}</p>}
                      </div>
                      <div className="col-span-3 sm:col-span-4">
                        <Label className="text-[11px] leading-tight">Rua</Label>
                        <Input
                          placeholder="Rua, Avenida..."
                          className={`mt-0.5 h-8 text-xs ${formErrors.rua ? "border-destructive" : ""}`}
                          value={endereco.rua}
                          onChange={(e) => { setEndereco((prev) => ({ ...prev, rua: e.target.value })); setFormErrors(p => ({ ...p, rua: "" })); }}
                        />
                        {formErrors.rua && <p className="text-[10px] text-destructive mt-0.5">{formErrors.rua}</p>}
                      </div>
                      <div className="col-span-2">
                        <Label className="text-[11px] leading-tight">Número</Label>
                        <Input placeholder="123" className={`mt-0.5 h-8 text-xs ${formErrors.numero ? "border-destructive" : ""}`} value={dadosPessoais.numero} onChange={(e) => { setDadosPessoais(p => ({ ...p, numero: e.target.value })); setFormErrors(p => ({ ...p, numero: "" })); }} maxLength={10} />
                        {formErrors.numero && <p className="text-[10px] text-destructive mt-0.5">{formErrors.numero}</p>}
                      </div>
                      <div className="col-span-4 sm:col-span-2">
                        <Label className="text-[11px] leading-tight">Complemento</Label>
                        <Input placeholder="Apto, Bloco..." className="mt-0.5 h-8 text-xs" value={dadosPessoais.complemento} onChange={(e) => setDadosPessoais(p => ({ ...p, complemento: e.target.value }))} maxLength={100} />
                      </div>
                      <div className="col-span-3 sm:col-span-2">
                        <Label className="text-[11px] leading-tight">Bairro</Label>
                        <Input
                          placeholder="Bairro"
                          className={`mt-0.5 h-8 text-xs ${formErrors.bairro ? "border-destructive" : ""}`}
                          value={endereco.bairro}
                          onChange={(e) => { setEndereco((prev) => ({ ...prev, bairro: e.target.value })); setFormErrors(p => ({ ...p, bairro: "" })); }}
                        />
                        {formErrors.bairro && <p className="text-[10px] text-destructive mt-0.5">{formErrors.bairro}</p>}
                      </div>
                      <div className="col-span-4 sm:col-span-3">
                        <Label className="text-[11px] leading-tight">Cidade</Label>
                        <Input
                          placeholder="São Paulo"
                          className={`mt-0.5 h-8 text-xs ${formErrors.cidade ? "border-destructive" : ""}`}
                          value={endereco.cidade}
                          onChange={(e) => { setEndereco((prev) => ({ ...prev, cidade: e.target.value })); setFormErrors(p => ({ ...p, cidade: "" })); }}
                        />
                        {formErrors.cidade && <p className="text-[10px] text-destructive mt-0.5">{formErrors.cidade}</p>}
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <Label className="text-[11px] leading-tight">UF</Label>
                        <Input
                          placeholder="SP"
                          className={`mt-0.5 h-8 text-xs ${formErrors.estado ? "border-destructive" : ""}`}
                          maxLength={2}
                          value={endereco.estado}
                          onChange={(e) => { setEndereco((prev) => ({ ...prev, estado: e.target.value })); setFormErrors(p => ({ ...p, estado: "" })); }}
                        />
                        {formErrors.estado && <p className="text-[10px] text-destructive mt-0.5">{formErrors.estado}</p>}
                      </div>
                    </div>

                    {/* Shipping options in address section */}
                    {shippingOptions.length > 0 && (
                      <div className="pt-1 space-y-1">
                        <Label className="text-[11px] text-muted-foreground">Opção de envio</Label>
                        {shippingOptions.map((opt, i) => (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectShipping(i)}
                            className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md border text-left transition-all ${
                              selectedShipping === i
                                ? "border-whatsapp-green bg-whatsapp-green/10"
                                : "border-border/50 bg-background hover:border-whatsapp-green/30"
                            }`}
                          >
                            <Truck size={12} className={selectedShipping === i ? "text-whatsapp-green" : "text-muted-foreground"} />
                            <span className={`font-body text-[11px] flex-1 min-w-0 ${selectedShipping === i ? "text-foreground" : "text-muted-foreground"}`}>
                              {opt.company} — {opt.name} ({opt.delivery_time} dias úteis)
                            </span>
                            <span className={`font-body text-[11px] font-semibold shrink-0 ${selectedShipping === i ? "text-whatsapp-green" : "text-foreground"}`}>
                              {formatPrice(opt.price)}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}

                    {shippingOptions.length === 0 && frete !== null && prazo && (
                      <p className="text-[11px] text-muted-foreground pt-0.5">
                        Frete: {formatPrice(frete)} — {prazo}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 pt-1">
                    <Button variant="outline" size="sm" onClick={() => setStep("cart")}>Voltar</Button>
                    <Button
                      onClick={() => { if (validateInfoStep()) setStep("payment"); }}
                      size="sm"
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
                <div className="sticky top-24 p-4 rounded-lg bg-card border border-border/50 space-y-2">
                  <div className="flex items-center gap-2 pb-1">
                    <Package size={18} className="text-whatsapp-green" />
                    <h3 className="font-body text-base font-bold text-whatsapp-green">Resumo do pedido</h3>
                  </div>
                  <div className="space-y-0.5">
                    {items.map((item) => (
                      <div key={`${item.product.id}-${item.size}`} className="flex justify-between text-xs font-body leading-tight py-0.5">
                        <span className="text-muted-foreground truncate mr-2">
                          {item.quantity}x {item.product.name}
                          {item.size ? ` (${item.size})` : ""}
                        </span>
                        <span className="text-foreground font-medium whitespace-nowrap">{formatPrice(item.product.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border pt-1.5 space-y-0.5">
                    <div className="flex justify-between items-center text-xs font-body leading-tight">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Wallet size={13} className="text-whatsapp-green" />
                        Subtotal
                      </span>
                      <span className="text-foreground font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs font-body leading-tight">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Truck size={13} className="text-whatsapp-green" />
                        Frete
                      </span>
                      <span className="text-foreground font-medium">{frete ? formatPrice(frete) : "A calcular"}</span>
                    </div>
                    {paymentMethod === "pix" && (
                      <div className="flex justify-between items-center text-xs font-body leading-tight">
                        <span className="flex items-center gap-1.5 text-whatsapp-green font-bold">
                          <BadgePercent size={13} className="text-whatsapp-green" />
                          Desconto Pix (5%)
                        </span>
                        <span className="text-whatsapp-green font-bold">-{formatPrice(total * 0.05)}</span>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-border pt-1.5 flex justify-between items-center">
                    <span className="font-body text-whatsapp-green font-bold text-base">Total</span>
                    <span className="font-body text-whatsapp-green text-xl font-bold">
                      {formatPrice(paymentMethod === "pix" ? total * 0.95 : total)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-whatsapp-green font-body font-medium">
                    <Lock size={14} className="text-whatsapp-green" />
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
