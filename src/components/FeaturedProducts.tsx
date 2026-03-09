import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const featuredIds = [
  "anel-protecao-total",
  "colar-amor-proprio",
  "pingente-prosperidade",
  "pulseira-calma",
  "piramide-ametista",
  "mandala-quartzo-rosa",
  "kit-protecao-total",
  "incensario-quartzo-rosa",
];

const FeaturedProducts = () => {
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean);
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Destaques
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Mais <span className="text-gradient-gold">Vendidos</span>
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            to="/produtos"
            className="inline-block px-8 py-3 border border-primary/30 text-primary font-body font-medium text-sm tracking-wide rounded-sm hover:bg-primary/5 transition-colors"
          >
            Ver todos os produtos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
