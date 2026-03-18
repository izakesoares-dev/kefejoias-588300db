import { useState } from "react";
import { motion } from "framer-motion";
import { incensarioProducts } from "@/data/incensario-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Shield, Sparkles, Heart, Gem, Moon, Zap, Leaf, Flower2 } from "lucide-react";


const filters = [
  { id: "todos", label: "Todos", icon: Gem },
  { id: "flores", label: "Flores", icon: Flower2 },
  { id: "pedras", label: "Pedras", icon: Gem },
  { id: "protecao", label: "Proteção", icon: Shield },
  { id: "amor", label: "Amor", icon: Heart },
  { id: "prosperidade", label: "Prosperidade", icon: Sparkles },
  { id: "espiritualidade", label: "Espiritualidade", icon: Moon },
  { id: "energia", label: "Energia", icon: Zap },
  { id: "equilibrio", label: "Equilíbrio", icon: Leaf },
];

const IncensariosResina = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos"
    ? incensarioProducts
    : incensarioProducts.filter((p) => {
        const all = (p.name + " " + p.significance + " " + p.elements.map(e => e.name + " " + e.meaning).join(" ")).toLowerCase();
        if (activeFilter === "flores") return all.includes("flor") || all.includes("rosa") || all.includes("lavanda") || all.includes("girassol") || all.includes("margarida") || all.includes("pimenta");
        if (activeFilter === "pedras") return all.includes("ametista") || all.includes("quartzo") || all.includes("turmalina") || all.includes("citrino") || all.includes("jade") || all.includes("olho de tigre") || all.includes("lápis") || all.includes("chakra");
        if (activeFilter === "protecao") return all.includes("proteção") || all.includes("escudo") || all.includes("afasta") || all.includes("mau-olhado");
        if (activeFilter === "amor") return all.includes("amor") || all.includes("compaixão") || all.includes("cura") || all.includes("serenidade");
        if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("abundância") || all.includes("riqueza");
        if (activeFilter === "espiritualidade") return all.includes("espiritual") || all.includes("intuição") || all.includes("sabedoria") || all.includes("chakra");
        if (activeFilter === "energia") return all.includes("energia") || all.includes("vitalidade") || all.includes("solar") || all.includes("otimismo");
        if (activeFilter === "equilibrio") return all.includes("equilíbrio") || all.includes("harmonia") || all.includes("alinhamento");
        return true;
      });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-3xl md:text-4xl text-foreground mb-1">
              Incensários de <span className="text-gradient-gold">Resina</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Suportes artesanais com flores e pedras em resina cristalina.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-2 border-y border-border/50 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs text-muted-foreground">
            <span>🌸 Flores ou pedras</span>
            <span>💎 Resina cristalina</span>
            <span>🕯️ Vareta e cone</span>
            <span>✨ 100% artesanal</span>
          </div>
        </div>
      </section>

      <section className="px-4 pt-2 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-3">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-body transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon size={14} />
                  {filter.label}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">
              Nenhum incensário encontrado com esse filtro.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-6 md:p-8"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Quer um incensário personalizado?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Criamos incensários com as flores ou pedras que você escolher. Uma peça funcional e energética exclusiva para seu ritual.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar um incensário de resina personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Comprar incensário
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default IncensariosResina;
