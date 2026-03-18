import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import RingProductCard from "@/components/RingProductCard";
import RingSizeSelector from "@/components/RingSizeSelector";

import { products } from "@/data/products";

const subcategories = [
  { label: "Pedras Naturais", href: "/aneis-pedras-naturais", icon: "💎" },
  { label: "Flores", href: "/aneis-flores", icon: "🌸" },
];

const Aneis = () => {
  const [globalSize, setGlobalSize] = useState("");
  const allRings = products.filter((p) => p.category === "anel");

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Anéis Artesanais com Pedras Naturais e Flores"
        description="Anéis artesanais com pedras naturais e flores eternizadas em resina cristalina. Biojoias únicas feitas à mão em São Paulo."
        jsonLd={breadcrumbJsonLd([
          { name: "Início", url: "https://kefejoias.com.br/" },
          { name: "Anéis", url: "https://kefejoias.com.br/aneis" },
        ])}
      />
      <Navbar />

      <section className="pt-24 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-gradient-gold mb-1"
          >
            Anéis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Anéis artesanais com pedras naturais e flores eternizadas em resina cristalina.
          </motion.p>
        </div>
      </section>

      <section className="px-4 pb-12 pt-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-display text-foreground mb-4">
            Todos os Anéis ({allRings.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {allRings.map((product, i) => (
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

export default Aneis;
