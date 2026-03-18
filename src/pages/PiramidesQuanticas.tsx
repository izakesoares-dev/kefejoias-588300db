import { useState } from "react";
import { motion } from "framer-motion";
import { pyramidProducts } from "@/data/pyramid-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem, Moon, Zap } from "lucide-react";


const filters = [
  { id: "todos", label: "Todas as Pedras", icon: Gem },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "prosperidade", label: "Prosperidade", icon: Sparkles },
  { id: "espiritualidade", label: "Espiritualidade", icon: Moon },
  { id: "vitalidade", label: "Vitalidade", icon: Zap },
];

const PiramidesQuanticas = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? pyramidProducts
    : pyramidProducts.filter((p) => {
        const all = (p.significance + " " + p.elements.map(e => e.meaning).join(" ")).toLowerCase();
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("escudo") || all.includes("coragem");
        if (activeFilter === "amor") return all.includes("amor") || all.includes("harmonia") || all.includes("cura");
        if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("abundância") || all.includes("sorte");
        if (activeFilter === "espiritualidade") return all.includes("espiritual") || all.includes("intuição") || all.includes("sabedoria") || all.includes("divina") || all.includes("limpeza");
        if (activeFilter === "vitalidade") return all.includes("vitalidade") || all.includes("criatividade") || all.includes("energia") || all.includes("clareza");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-1">
              Pirâmides <span className="text-gradient-gold">Quânticas</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Geometria sagrada e energia cristalina para meditação e harmonização.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="px-4 py-2 border-y border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs text-muted-foreground">
            <span>📐 Base: 5x5cm</span>
            <span>💎 Pedra natural</span>
            <span>🔺 Geometria sagrada</span>
            <span>✨ Resina cristalina</span>
          </div>
        </div>
      </section>

      <section className="px-4 pt-1 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-1.5 mb-3">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon size={12} />
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-8 text-sm">
              Nenhuma pirâmide encontrada com esse filtro.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-4 md:p-6"
          >
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">
              Quer uma pirâmide com sua pedra favorita?
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
              Criamos pirâmides personalizadas com a pedra e tamanho que você escolher.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar uma pirâmide quântica personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Comprar pirâmide quântica
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PiramidesQuanticas;
