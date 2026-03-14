import { useState } from "react";
import { motion } from "framer-motion";
import { kitProducts } from "@/data/kit-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem, Moon, Zap, Leaf, Brain, Gift, Rainbow } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const filters = [
  { id: "todos", label: "Todos", icon: Gift },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "flores", label: "Flores", icon: Leaf },
  { id: "sementes", label: "Sementes", icon: Sparkles },
  { id: "prosperidade", label: "Prosperidade", icon: Sparkles },
  { id: "espiritualidade", label: "Espiritualidade", icon: Moon },
  { id: "energia", label: "Energia", icon: Zap },
  { id: "equilibrio", label: "Equilíbrio", icon: Leaf },
  { id: "clareza", label: "Clareza", icon: Brain },
  { id: "decoracao", label: "Decoração", icon: Gem },
  { id: "chakras", label: "Chakras", icon: Rainbow },
];

const KitsPresente = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? kitProducts
    : kitProducts.filter((p) => {
        const all = (p.name + " " + p.significance + " " + p.elements.map(e => e.name + " " + e.meaning).join(" ")).toLowerCase();
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("escudo") || all.includes("afasta");
        if (activeFilter === "amor") return all.includes("amor") || all.includes("compaixão") || all.includes("cura") || all.includes("paixão") || all.includes("romance");
        if (activeFilter === "flores") return all.includes("rosa") || all.includes("lavanda") || all.includes("margarida") || all.includes("girassol") || all.includes("jasmim") || all.includes("flor");
        if (activeFilter === "sementes") return all.includes("pimenta") || all.includes("semente") || all.includes("dente-de-leão") || all.includes("mostarda");
        if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("abundância") || all.includes("riqueza");
        if (activeFilter === "espiritualidade") return all.includes("espiritual") || all.includes("divina") || all.includes("selenita");
        if (activeFilter === "energia") return all.includes("energia") || all.includes("vitalidade") || all.includes("coragem") || all.includes("força");
        if (activeFilter === "equilibrio") return all.includes("equilíbrio") || all.includes("harmonia") || all.includes("paz") || all.includes("serenidade");
        if (activeFilter === "clareza") return all.includes("clareza") || all.includes("sabedoria") || all.includes("foco") || all.includes("intuição");
        if (activeFilter === "decoracao") return all.includes("mandala") || all.includes("pirâmide") || all.includes("incensário") || all.includes("santinha") || all.includes("decoração");
        if (activeFilter === "chakras") return all.includes("chakra") || all.includes("alinhamento");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-2 section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Especiais", href: "/especiais" }, { label: "Kits Presente" }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Kits <span className="text-gradient-gold">Presente</span>
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-2xl mx-auto">
              Coleções exclusivas que combinam joias, acessórios e peças decorativas artesanais.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-8 section-padding border-y border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "🎁", title: "Embalagem Premium", desc: "Caixa de presente luxuosa" },
            { icon: "💎", title: "Pedras Naturais", desc: "Cristais autênticos selecionados" },
            { icon: "🌹", title: "Flores Eternizadas", desc: "Preservadas em resina cristalina" },
            { icon: "✨", title: "Feito à Mão", desc: "Cada kit é único e artesanal" },
          ].map((h) => (
            <motion.div key={h.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-1">
              <span className="text-2xl">{h.icon}</span>
              <p className="font-display text-sm text-foreground">{h.title}</p>
              <p className="text-xs text-muted-foreground font-body">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <section className="py-4 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {filters.map((f) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                    activeFilter === f.id
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <Icon size={14} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="pb-16 section-padding">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-12">Nenhum kit encontrado para este filtro.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 section-padding bg-card/50 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-3xl text-foreground mb-6">
              A arte de <span className="text-gradient-gold">presentear</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Cada kit Kefe é cuidadosamente montado para criar uma experiência completa de bem-estar e intenção. 
              Combinamos joias artesanais, peças decorativas e acessórios energéticos — todos feitos à mão com resina 
              cristalina, pedras naturais autênticas e flores reais eternizadas. Uma forma única de presentear com significado, 
              beleza e energia.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { emoji: "1️⃣", title: "Escolha a Intenção", desc: "Proteção, amor, prosperidade, paz… cada kit é pensado para uma energia específica." },
                { emoji: "2️⃣", title: "Peças Combinadas", desc: "Anel, colar, pulseira, pirâmide, mandala, incensário e santinha — tudo harmonizado." },
                { emoji: "3️⃣", title: "Entrega Especial", desc: "Embalagem premium com cartão de intenções e guia energético de cada peça." },
              ].map((step) => (
                <div key={step.title} className="p-4 rounded-lg bg-background border border-border/50">
                  <span className="text-xl">{step.emoji}</span>
                  <h3 className="font-display text-foreground mt-2 mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KitsPresente;
