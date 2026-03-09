import { useState } from "react";
import { motion } from "framer-motion";
import { minimalistBracelets } from "@/data/bracelet-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem } from "lucide-react";

const filters = [
  { id: "todos", label: "Todas", icon: Gem },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "prosperidade", label: "Prosperidade", icon: Sparkles },
];

const PulseirasMinimalistas = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? minimalistBracelets
    : minimalistBracelets.filter((p) => {
        const all = (p.significance + " " + p.elements.map(e => e.meaning).join(" ")).toLowerCase();
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("coragem");
        if (activeFilter === "amor") return all.includes("amor") || all.includes("cura");
        if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("sorte");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-12 section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="gold-line mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Pulseiras <span className="text-gradient-gold">Minimalistas</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
              Pequenas pedras, grandes significados
            </p>
            <p className="font-body text-muted-foreground max-w-3xl mx-auto">
              Pedrinhas naturais delicadamente combinadas com acabamento em aço inoxidável. Elegância discreta para o dia a dia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-6 border-y border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>✨ Pedrinhas naturais de 3-4mm</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>⛓️ Esferas de aço inoxidável</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>🔒 Fecho ajustável</span>
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
              Escolha sua pedra favorita
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Cada pedra tem um significado especial. Monte sua pulseira minimalista personalizada.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de escolher a pedra para minha pulseira minimalista."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Escolher pedra
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PulseirasMinimalistas;
