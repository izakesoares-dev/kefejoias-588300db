import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const subcategories = [
  { label: "Pirâmides Quânticas", href: "/piramides-quanticas", description: "Orgonites piramidais com pedras e resina", icon: "🔺" },
  { label: "Santinhas de Pedra", href: "/santinhas-pedra", description: "Imagens sacras em pedras naturais lapidadas", icon: "🙏" },
  { label: "Mandalas de Resina", href: "/mandalas-resina", description: "Mandalas artesanais com flores e pedras", icon: "🌀" },
  { label: "Incensários de Resina", href: "/incensarios-resina", description: "Incensários decorativos com flores eternizadas", icon: "🪷" },
  { label: "Kits Presente", href: "/kits-presente", description: "Conjuntos especiais para presentear com propósito", icon: "🎁" },
];

const Especiais = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Peças Especiais — Pirâmides, Mandalas, Incensários e Kits"
        description="Peças especiais e exclusivas: pirâmides quânticas, santinhas de pedra, mandalas e incensários de resina, kits presente. Artesanal e com propósito."
      />
      <Navbar />

      <section className="pt-24 pb-2 px-6">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Especiais" }]} />
          <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-medium text-gradient-gold mb-2"
          >
            Especiais
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Peças especiais e exclusivas: pirâmides, santinhas, mandalas, incensários e kits presente.
          </motion.p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 pt-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
          {subcategories.map((sub, i) => (
            <motion.div
              key={sub.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={sub.href}
                className="block bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all group"
              >
                <span className="text-3xl mb-3 block">{sub.icon}</span>
                <h2 className="text-lg font-display text-foreground group-hover:text-primary transition-colors mb-1">
                  {sub.label}
                </h2>
                <p className="text-sm text-muted-foreground font-body">{sub.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Especiais;
