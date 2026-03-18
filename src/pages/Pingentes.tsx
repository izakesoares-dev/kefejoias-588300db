import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";

import { products } from "@/data/products";

const subcategories = [
  { label: "Pingentes de Pedras", href: "/pingentes-pedras-naturais", description: "Pedras naturais lapidadas com cordão" },
  { label: "Pingentes de Resina", href: "/pingentes-resina-natural", description: "Flores e sementes eternizadas em resina" },
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

      <section className="pt-24 pb-1 px-4">
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

      <section className="px-4 py-2">
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-3">
          {subcategories.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              className="bg-card border-2 border-green-deep/30 rounded-lg px-4 py-3 hover:border-green-deep transition-all text-center group shadow-sm"
            >
              <span className="text-sm font-body font-medium text-foreground group-hover:text-primary transition-colors">
                {sub.label}
              </span>
              <p className="text-xs text-muted-foreground mt-0.5">{sub.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 pb-12 pt-2">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-display text-foreground mb-4">
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
