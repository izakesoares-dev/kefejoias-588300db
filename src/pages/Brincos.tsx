import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import { stoneEarrings, resinEarrings } from "@/data/earring-products";

const subcategories = [
  { label: "Pedras Naturais", href: "/brincos-pedras-naturais", icon: "💎" },
  { label: "Resina Natural", href: "/brincos-resina-natural", icon: "🌸" },
];

const Brincos = () => {
  const allEarrings = [...stoneEarrings, ...resinEarrings];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Brincos Artesanais com Pedras e Flores em Resina"
        description="Brincos únicos com pedras naturais e flores eternizadas em resina cristalina. Biojoias artesanais feitas à mão."
        jsonLd={breadcrumbJsonLd([
          { name: "Início", url: "https://kefejoias.com.br/" },
          { name: "Brincos", url: "https://kefejoias.com.br/brincos" },
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
            Brincos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Brincos únicos com pedras naturais e flores eternizadas em resina cristalina.
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
          {allEarrings.length > 0 ? (
            <>
              <h2 className="text-xl font-display text-foreground mb-4 text-center">
                Todos os Brincos ({allEarrings.length})
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {allEarrings.map((product, i) => (
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
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-body text-sm">
                Em breve novos brincos! Explore as subcategorias acima.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Brincos;
