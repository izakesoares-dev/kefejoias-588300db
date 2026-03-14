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
          <p className="text-base md:text-lg tracking-[0.3em] uppercase text-green-deep mb-4 font-body font-extrabold">
            Destaques
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Mais <span className="text-primary">Vendidos</span>
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
            className="inline-block px-10 py-3.5 bg-primary text-green-deep font-body font-extrabold text-[16px] tracking-wide rounded-xl hover:bg-gold-dark hover:text-white transition-colors shadow-gold-sm"
          >
            Ver todos os produtos
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
