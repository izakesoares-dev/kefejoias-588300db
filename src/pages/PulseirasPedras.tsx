import { useState } from "react";
import { motion } from "framer-motion";
import { stoneBracelets } from "@/data/bracelet-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem, Moon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const filters = [
  { id: "todos", label: "Todas as Pedras", icon: Gem },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "prosperidade", label: "Prosperidade", icon: Sparkles },
  { id: "espiritualidade", label: "Espiritualidade", icon: Moon },
];

const PulseirasPedras = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? stoneBracelets
    : stoneBracelets.filter((p) => {
        const all = (p.significance + " " + p.elements.map(e => e.meaning).join(" ")).toLowerCase();
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("escudo") || all.includes("coragem");
        if (activeFilter === "amor") return all.includes("amor") || all.includes("cura");
        if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("sorte") || all.includes("abundância");
        if (activeFilter === "espiritualidade") return all.includes("espiritual") || all.includes("intuição") || all.includes("sabedoria");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Pulseiras", href: "/pulseiras" }, { label: "Pedras" }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="gold-line mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Pulseiras de <span className="text-gradient-gold">Pedras</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Energia que acompanha seus passos
            </p>
            <p className="font-body text-muted-foreground max-w-3xl mx-auto">
              Combine pedras e crie sua pulseira de intenção. Simples ou combinadas, cada pedra carrega um significado especial.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-6 border-y border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>💎 Pedras naturais selecionadas</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>📏 Contas de 6mm a 8mm</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>🔗 Elástico reforçado</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-body transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon size={16} />
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">
              Nenhuma pulseira encontrada com esse filtro.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Monte sua pulseira de intenção
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Escolha suas pedras e criamos uma pulseira exclusiva com os significados que mais combinam com você.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de montar uma pulseira de pedras personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Montar minha pulseira
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PulseirasPedras;
