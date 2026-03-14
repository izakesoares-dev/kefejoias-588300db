import { useState } from "react";
import { motion } from "framer-motion";
import { macrameBracelets } from "@/data/bracelet-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Flower2, Heart, Shield, Sparkles, Gem } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const filters = [
  { id: "todos", label: "Todas", icon: Gem },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "alegria", label: "Alegria", icon: Sparkles },
  { id: "pureza", label: "Pureza", icon: Flower2 },
];

const PulseirasMacrame = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? macrameBracelets
    : macrameBracelets.filter((p) => {
        const all = (p.significance + " " + p.elements.map(e => e.meaning).join(" ")).toLowerCase();
        if (activeFilter === "amor") return all.includes("amor") || all.includes("paixão");
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("energia");
        if (activeFilter === "alegria") return all.includes("alegria") || all.includes("felicidade") || all.includes("vitalidade");
        if (activeFilter === "pureza") return all.includes("pureza") || all.includes("calma") || all.includes("paz");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-2 section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Pulseiras", href: "/pulseiras" }, { label: "Macramê" }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Pulseiras em <span className="text-gradient-gold">Macramê</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Feitas à mão com elementos naturais encapsulados em resina cristalina.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
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
              Quer uma pulseira com sua flor favorita?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Criamos pulseiras personalizadas com a flor ou elemento que você escolher.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar uma pulseira macramê personalizada."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Comprar pulseira macramê
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PulseirasMacrame;
