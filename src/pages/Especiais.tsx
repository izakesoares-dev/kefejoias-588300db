import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";


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

      <section className="pt-24 pb-1 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-medium text-gradient-gold mb-1"
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
      </section>

      <section className="px-4 pb-6 pt-1">
        <div className="max-w-xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-2">
          {subcategories.map((sub, i) => (
            <Link
              key={sub.href}
              to={sub.href}
              className="flex flex-col items-center text-center bg-card border border-border/50 rounded-md px-2 py-2.5 hover:border-primary/40 transition-all group"
            >
              <span className="text-xl mb-1">{sub.icon}</span>
              <span className="text-[11px] font-display text-foreground group-hover:text-primary transition-colors leading-tight">
                {sub.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Especiais;
