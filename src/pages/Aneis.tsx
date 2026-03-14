import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import RingProductCard from "@/components/RingProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import ShippingFooter from "@/components/ShippingFooter";
import { products } from "@/data/products";

const subcategories = [
  { label: "Anéis com Pedras", href: "/aneis-pedras-naturais", description: "Pedras naturais em base de resina cristalina" },
  { label: "Anéis com Flores", href: "/aneis-flores", description: "Flores reais eternizadas em resina" },
];

const Aneis = () => {
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

      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Anéis" }]} />
          <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-medium text-gradient-gold mb-4"
          >
            Anéis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Anéis artesanais com pedras naturais e flores eternizadas em resina cristalina.
          </motion.p>
          </div>
        </div>
      </section>

      {/* Subcategories */}
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

      {/* All Rings */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-display text-foreground mb-6">
            Todos os Anéis ({allRings.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {allRings.map((product, i) => (
              <RingProductCard key={product.id} product={product} index={i} />
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
