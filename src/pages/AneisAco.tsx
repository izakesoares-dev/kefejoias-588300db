import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import RingProductCard from "@/components/RingProductCard";
import RingSizeSelector from "@/components/RingSizeSelector";
import { products } from "@/data/products";

const AneisAco = () => {
  const [globalSize, setGlobalSize] = useState("");
  const rings = products.filter((p) => p.category === "anel" && p.id.includes("aco"));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Anéis de Aço Inox com Pedras Naturais"
        description="Anéis em aço inoxidável com pedras naturais. Resistentes, hipoalergênicos e com brilho duradouro. Biojoias artesanais feitas à mão."
        jsonLd={breadcrumbJsonLd([
          { name: "Início", url: "https://kefejoias.com.br/" },
          { name: "Aço Inox", url: "https://kefejoias.com.br/aco-inox" },
          { name: "Anéis de Aço Inox", url: "https://kefejoias.com.br/aneis-aco" },
        ])}
      />
      <Navbar />

      <section className="pt-28 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-gradient-gold mb-1"
          >
            Anéis de Aço Inox
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Anéis elegantes em aço inoxidável — resistentes, hipoalergênicos e com brilho duradouro.
          </motion.p>
        </div>
      </section>

      <section className="px-4 pb-12 pt-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-display text-foreground mb-4">
            Todos os Anéis de Aço Inox ({rings.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {rings.map((product, i) => (
              <RingProductCard key={product.id} product={product} index={i} globalSize={globalSize} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AneisAco;
