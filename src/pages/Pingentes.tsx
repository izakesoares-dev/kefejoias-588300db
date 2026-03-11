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
      <Navbar />

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-medium text-gradient-gold mb-4"
          >
            Pingentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Pingentes únicos com pedras naturais e flores eternizadas em resina cristalina.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {subcategories.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              className="bg-card border border-border rounded-lg px-6 py-4 hover:border-primary/50 transition-all text-center group"
            >
              <span className="text-base font-body font-medium text-foreground group-hover:text-primary transition-colors">
                {sub.label}
              </span>
              <p className="text-sm text-muted-foreground mt-1">{sub.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-display text-foreground mb-6">
            Todos os Pingentes ({allPendants.length})
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
