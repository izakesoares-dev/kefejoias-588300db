import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const subcategories = [
  { label: "Pulseiras de Pedras", href: "/pulseiras-pedras", description: "Pedras naturais em elástico resistente" },
  { label: "Pulseiras de Resina com Macramê", href: "/pulseiras-macrame", description: "Flores eternizadas com acabamento macramê" },
  { label: "Pulseiras de Aço", href: "/pulseiras-aco", description: "Base em aço inoxidável com pedras naturais" },
  { label: "Pulseiras Minimalistas", href: "/pulseiras-minimalistas", description: "Mini pedras naturais em fio delicado" },
];

const Pulseiras = () => {
  const allBracelets = products.filter((p) => p.category === "pulseira");

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pulseiras Artesanais com Pedras Naturais"
        description="Pulseiras artesanais com pedras naturais, flores eternizadas e acabamentos premium. Biojoias feitas à mão em São Paulo."
        jsonLd={breadcrumbJsonLd([
          { name: "Início", url: "https://kefejoias.com.br/" },
          { name: "Pulseiras", url: "https://kefejoias.com.br/pulseiras" },
        ])}
      />
      <Navbar />

      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-medium text-gradient-gold mb-4"
          >
            Pulseiras
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Pulseiras artesanais com pedras naturais, flores eternizadas e acabamentos premium.
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
            Todas as Pulseiras ({allBracelets.length})
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allBracelets.map((product, i) => (
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

export default Pulseiras;
