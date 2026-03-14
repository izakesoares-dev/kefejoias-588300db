import { useState } from "react";
import { motion } from "framer-motion";
import { stonePendants } from "@/data/pendant-products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link2, Shield, Sparkles, Heart, Gem, Zap, Brain, Moon } from "lucide-react";


const filters = [
{ id: "todos", label: "Todas as Pedras", icon: Gem },
{ id: "protecao", label: "Proteção", icon: Shield },
{ id: "amor", label: "Amor", icon: Heart },
{ id: "prosperidade", label: "Prosperidade", icon: Sparkles },
{ id: "espiritualidade", label: "Espiritualidade", icon: Moon },
{ id: "vitalidade", label: "Vitalidade", icon: Zap },
{ id: "clareza", label: "Clareza Mental", icon: Brain }];


const PingentesPedrasNaturais = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filtered = activeFilter === "todos" ?
  stonePendants :
  stonePendants.filter((p) => {
    const sig = p.significance.toLowerCase();
    const meanings = p.elements.map((e) => e.meaning.toLowerCase()).join(" ");
    const all = sig + " " + meanings;
    if (activeFilter === "protecao") return all.includes("proteção") || all.includes("aterramento") || all.includes("escudo");
    if (activeFilter === "amor") return all.includes("amor") || all.includes("cura") || all.includes("perdão") || all.includes("harmonia");
    if (activeFilter === "prosperidade") return all.includes("prosperidade") || all.includes("sorte") || all.includes("abundância") || all.includes("oportunidade") || all.includes("riqueza");
    if (activeFilter === "espiritualidade") return all.includes("espiritual") || all.includes("intuição") || all.includes("sabedoria") || all.includes("transmutação");
    if (activeFilter === "vitalidade") return all.includes("vitalidade") || all.includes("paixão") || all.includes("vigor") || all.includes("coragem") || all.includes("energia");
    if (activeFilter === "clareza") return all.includes("foco") || all.includes("concentração") || all.includes("clareza") || all.includes("comunicação") || all.includes("mental");
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-2 section-padding bg-gradient-to-b from-secondary/50 to-background shadow">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Pingentes", href: "/pingentes" }, { label: "Pedras Naturais" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center">
            
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Pingentes com <span className="text-gradient-gold">Pedras</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Escolha a pedra que mais combina com sua intenção e use como pingente.
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
                  activeFilter === filter.id ?
                  "bg-primary text-primary-foreground shadow-gold" :
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`
                  }>
                  
                  <Icon size={16} />
                  {filter.label}
                </button>);

            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, index) =>
            <ProductCard key={product.id} product={product} index={index} />
            )}
          </div>

          {filtered.length === 0 &&
          <p className="text-center text-muted-foreground font-body py-12">
              Nenhum pingente encontrado com esse filtro.
            </p>
          }

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Não encontrou a pedra perfeita?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Trabalhamos com mais de 57 tipos de pedras naturais. 
              Entre em contato e criamos seu pingente personalizado.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar um pingente personalizado com uma pedra específica."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold">
              
              👉 Comprar pingente de [sua pedra]
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>);

};

export default PingentesPedrasNaturais;