import { useState } from "react";
import { motion } from "framer-motion";
import { resinEarrings } from "@/data/earring-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Flower2, Flame, Sprout, Heart } from "lucide-react";

const filters = [
  { id: "todos", label: "Todos", icon: Heart },
  { id: "flores", label: "Flores", icon: Flower2 },
  { id: "pimentas", label: "Pimentas", icon: Flame },
  { id: "sementes", label: "Sementes", icon: Sprout },
];

const BrincosResinaNatural = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered =
    activeFilter === "todos"
      ? resinEarrings
      : resinEarrings.filter((p) => {
          const name = p.name.toLowerCase();
          if (activeFilter === "flores")
            return name.includes("rosa") || name.includes("lavanda") || name.includes("margarida") || name.includes("jasmin") || name.includes("laranjeira") || name.includes("dente");
          if (activeFilter === "pimentas") return name.includes("pimenta");
          if (activeFilter === "sementes") return name.includes("semente");
          return true;
        });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-1">
              Brincos com <span className="text-gradient-gold">Alma</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Flores, pimentas e sementes em resina cristalina.
            </p>
          </motion.div>
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
              Nenhum brinco encontrado com esse filtro.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-4 md:p-6"
          >
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">
              Quer eternizar uma flor especial?
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
              Criamos brincos com flores do seu jardim ou buquê de casamento.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar um brinco de resina personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Escolher meu brinco natural
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BrincosResinaNatural;
