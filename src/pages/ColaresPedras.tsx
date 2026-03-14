import { useState } from "react";
import { motion } from "framer-motion";
import { stoneNecklaces } from "@/data/necklace-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem, Zap, Moon } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const filters = [
  { id: "todos", label: "Todas as Pedras", icon: Gem },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "prosperidade", label: "Prosperidade", icon: Sparkles },
  { id: "espiritualidade", label: "Espiritualidade", icon: Moon },
  { id: "vitalidade", label: "Vitalidade", icon: Zap },
];

const ColaresPedras = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? stoneNecklaces
    : stoneNecklaces.filter((p) => {
        const sig = p.significance.toLowerCase();
        const meanings = p.elements.map(e => e.meaning.toLowerCase()).join(" ");
        const all = sig + " " + meanings;
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("escudo");
        if (activeFilter === "amor") return all.includes("amor") || all.includes("cura") || all.includes("feminil");
        if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("sorte") || all.includes("abundância") || all.includes("oportunidade") || all.includes("riqueza");
        if (activeFilter === "espiritualidade") return all.includes("espiritual") || all.includes("intuição") || all.includes("sabedoria");
        if (activeFilter === "vitalidade") return all.includes("vitalidade") || all.includes("paixão") || all.includes("energia") || all.includes("coragem");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-2 section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Colares", href: "/colares" }, { label: "Pedras" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Colares com <span className="text-gradient-gold">Pedras</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Colares com pedras naturais selecionadas, prontos para usar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding py-4">
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Quer um colar com sua pedra favorita?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Criamos colares personalizados com a pedra que você escolher. 
              Entre em contato e monte sua peça exclusiva.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar um colar personalizado com pedras naturais."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Comprar colar de ametista
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ColaresPedras;
