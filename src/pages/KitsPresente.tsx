import { useState } from "react";
import { motion } from "framer-motion";
import { kitProducts } from "@/data/kit-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem, Moon, Zap, Leaf, Brain, Gift, Rainbow } from "lucide-react";


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

      <section className="pt-24 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-1">
              Kits <span className="text-gradient-gold">Presente</span>
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-2xl mx-auto">
              Coleções exclusivas com joias, acessórios e peças decorativas artesanais.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-2 border-y border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs text-muted-foreground">
            <span>🎁 Embalagem premium</span>
            <span>💎 Pedras naturais</span>
            <span>🌹 Flores eternizadas</span>
            <span>✨ Feito à mão</span>
          </div>
        </div>
      </section>

      <section className="px-4 pt-1 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-1.5 justify-center mb-3">
            {filters.map((f) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body transition-all duration-300 ${
                    activeFilter === f.id
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon size={12} />
                  {f.label}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground font-body py-8 text-sm">Nenhum kit encontrado para este filtro.</p>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-4 md:p-6"
          >
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">
              A arte de <span className="text-gradient-gold">presentear</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-3 max-w-xl mx-auto">
              Cada kit combina joias, peças decorativas e acessórios energéticos — feitos à mão com resina, pedras e flores reais.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default KitsPresente;
