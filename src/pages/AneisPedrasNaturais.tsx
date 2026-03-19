import { useState } from "react";
import { motion } from "framer-motion";
import { products, formatPrice, Product } from "@/data/products";
import RingProductCard from "@/components/RingProductCard";
import RingSizeSelector from "@/components/RingSizeSelector";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem } from "lucide-react";


const stoneFilters = [
  { id: "todos", label: "Todas as Pedras", icon: Gem },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "prosperidade", label: "Prosperidade", icon: Sparkles },
  { id: "espiritualidade", label: "Espiritualidade", icon: Sparkles },
  { id: "vitalidade", label: "Vitalidade", icon: Heart },
  { id: "foco", label: "Foco & Clareza", icon: Gem },
];

const AneisPedrasNaturais = () => {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [globalSize, setGlobalSize] = useState("");

  // Filter rings with natural stones
  const stoneRings = products.filter(
    (p) => p.category === "anel" && p.subcategory === "pedras-naturais"
  );

  const filtered = activeFilter === "todos"
    ? stoneRings
    : stoneRings.filter((p) => {
        const sig = p.significance.toLowerCase();
        const meanings = p.elements.map(e => e.meaning.toLowerCase()).join(" ");
        const all = sig + " " + meanings;
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("aterramento");
        if (activeFilter === "amor") return all.includes("amor") || all.includes("cura emocional") || all.includes("feminino");
        if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("sorte") || all.includes("abundância") || all.includes("oportunidade");
        if (activeFilter === "espiritualidade") return all.includes("espiritual") || all.includes("intuição") || all.includes("sabedoria");
        if (activeFilter === "vitalidade") return all.includes("vitalidade") || all.includes("paixão") || all.includes("vigor") || all.includes("criatividade");
        if (activeFilter === "foco") return all.includes("foco") || all.includes("concentração") || all.includes("clareza") || all.includes("comunicação");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-1">
              Anéis com <span className="text-gradient-gold">Pedras Naturais</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Escolha a pedra que combina com sua intenção.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pt-1 pb-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-1.5 mb-3">
            {stoneFilters.map((filter) => {
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

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {filtered.map((product, index) => (
              <RingProductCard key={product.id} product={product} index={index} globalSize={globalSize} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-8 text-sm">
              Nenhum anel encontrado com esse filtro.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-xl p-4 md:p-6"
          >
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-2">
              Não encontrou a pedra perfeita?
            </h2>
            <p className="font-body text-sm text-muted-foreground mb-4 max-w-xl mx-auto">
              Criamos anéis personalizados com a pedra que você escolher.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar um anel personalizado com uma pedra específica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-body text-sm font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Encomendar anel personalizado
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
};

export default AneisPedrasNaturais;
