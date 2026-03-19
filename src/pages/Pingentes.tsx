import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";

import { products } from "@/data/products";

const subcategories = [
  { label: "Pedras Naturais", href: "/pingentes-pedras-naturais", icon: "💎" },
  { label: "Resina Natural", href: "/pingentes-resina-natural", icon: "🌸" },
];

const Pingentes = () => {
  const allPendants = products.filter((p) => p.category === "pingente");

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pingentes Artesanais com Pedras e Flores em Resina"
        description="Pingentes únicos com pedras naturais e flores eternizadas em resina cristalina. Biojoias artesanais feitas à mão."
        jsonLd={breadcrumbJsonLd([
          { name: "Início", url: "https://kefejoias.com.br/" },
          { name: "Pingentes", url: "https://kefejoias.com.br/pingentes" },
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
            Pingentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Pingentes únicos com pedras naturais e flores eternizadas em resina cristalina.
          </motion.p>
        </div>
      </section>

      <section className="px-4 py-1">
        <div className="max-w-xs mx-auto grid grid-cols-2 gap-2">
          {subcategories.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              className="flex flex-col items-center bg-card border border-border/50 rounded-md px-2 py-2.5 hover:border-primary/40 transition-all group"
            >
              <span className="text-xl mb-1">{sub.icon}</span>
              <span className="text-[11px] font-display text-foreground group-hover:text-primary transition-colors leading-tight text-center">
                {sub.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12 pt-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-display text-foreground mb-4 text-center">
            Todos os Pingentes ({allPendants.length})
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allPendants.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pingentes;
