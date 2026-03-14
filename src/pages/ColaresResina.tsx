import { useState } from "react";
import { motion } from "framer-motion";
import { resinNecklaces } from "@/data/necklace-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Flower2, Flame, Heart } from "lucide-react";


const filters = [
  { id: "todos", label: "Todos", icon: Heart },
  { id: "flores", label: "Flores", icon: Flower2 },
  { id: "pimentas", label: "Pimentas", icon: Flame },
];

const ColaresResina = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? resinNecklaces
    : resinNecklaces.filter((p) => {
        const name = p.name.toLowerCase();
        if (activeFilter === "flores") return name.includes("rosa") || name.includes("lavanda") || name.includes("margarida") || name.includes("girassol");
        if (activeFilter === "pimentas") return name.includes("pimenta");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-0 px-6 bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Colares com <span className="text-gradient-gold">Elementos Naturais</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Flores, pimentas e sementes encapsuladas em resina cristalina.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pt-2 pb-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
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

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">
              Nenhum colar encontrado com esse filtro.
            </p>
          )}

          {/* Symbolism Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-8"
          >
            <div className="text-center p-6 rounded-xl bg-card border border-border/50">
              <span className="text-4xl mb-4 block">🌹</span>
              <h3 className="font-display text-lg text-foreground mb-2">Flores</h3>
              <p className="font-body text-sm text-muted-foreground">
                Amor, beleza, pureza e novos começos. Cada flor carrega um significado único.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border/50">
              <span className="text-4xl mb-4 block">🌶️</span>
              <h3 className="font-display text-lg text-foreground mb-2">Pimentas</h3>
              <p className="font-body text-sm text-muted-foreground">
                Proteção contra energias negativas, mau-olhado e inveja. Força vital e coragem.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-card border border-border/50">
              <span className="text-4xl mb-4 block">🌻</span>
              <h3 className="font-display text-lg text-foreground mb-2">Sementes</h3>
              <p className="font-body text-sm text-muted-foreground">
                Prosperidade, fé e novos começos. Símbolos de potencial infinito.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Quer eternizar algo especial?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Podemos criar colares personalizados com flores do seu jardim, 
              buquê de casamento ou qualquer elemento natural especial.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar um colar de resina personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Escolher colar natural
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ColaresResina;
