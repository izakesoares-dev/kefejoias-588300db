import { motion } from "framer-motion";
import { products } from "@/data/products";
import RingProductCard from "@/components/RingProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { breadcrumbJsonLd } from "@/components/SEOHead";



const AneisFlores = () => {
  const flowerRings = products.filter(
    (p) => p.category === "anel" && p.subcategory === "flores"
  );

  // Fallback: if no flower subcategory, show all rings not in pedras-naturais
  const displayRings = flowerRings.length > 0
    ? flowerRings
    : products.filter(
        (p) => p.category === "anel" && p.subcategory !== "pedras-naturais"
      );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Anéis com Flores Eternizadas em Resina"
        description="Anéis artesanais com flores reais eternizadas em resina cristalina. Biojoias únicas feitas à mão."
        jsonLd={breadcrumbJsonLd([
          { name: "Início", url: "https://kefejoias.com.br/" },
          { name: "Anéis", url: "https://kefejoias.com.br/aneis" },
          { name: "Flores", url: "https://kefejoias.com.br/aneis-flores" },
        ])}
      />
      <Navbar />

      <section className="pt-24 pb-2 section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs items={[{ label: "Anéis", href: "/aneis" }, { label: "Flores" }]} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Anéis com <span className="text-gradient-gold">Flores Eternizadas</span>
            </h1>
            <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto">
              Flores reais capturadas para sempre em resina cristalina — beleza eterna no seu dedo.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayRings.map((product, index) => (
              <RingProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {displayRings.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">
              Em breve novos anéis com flores.
            </p>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-12"
          >
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
              Quer um anel com uma flor especial?
            </h2>
            <p className="font-body text-muted-foreground mb-6 max-w-xl mx-auto">
              Criamos anéis personalizados com a flor que você escolher.
            </p>
            <a
              href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar um anel com flores personalizado."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-body font-medium hover:bg-primary/90 transition-all shadow-gold"
            >
              👉 Encomendar anel personalizado
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <WhatsAppButton />
    </div>
  );
};

export default AneisFlores;
