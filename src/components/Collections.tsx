import { motion } from "framer-motion";
import collectionFlores from "@/assets/collection-flores.jpg";
import collectionPedras from "@/assets/collection-pedras.jpg";
import collectionPimentas from "@/assets/collection-pimentas.jpg";

const collections = [
  {
    title: "Flores com História",
    description: "Pétalas eternizadas em resina. Cada flor carrega uma memória, um instante preservado para sempre.",
    image: collectionFlores,
    href: "#flores",
  },
  {
    title: "Pedras com Propósito",
    description: "Gemas escolhidas a dedo por seus significados ancestrais — amor, proteção, prosperidade.",
    image: collectionPedras,
    href: "#pedras",
  },
  {
    title: "Pimentas & Sementes",
    description: "Ousadia e proteção em joias que contam histórias e despertam sentimentos profundos.",
    image: collectionPimentas,
    href: "#pimentas",
  },
];

const Collections = () => {
  return (
    <section id="colecoes" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Coleções
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Beleza com Significado
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((col, i) => (
            <motion.a
              key={col.title}
              href={col.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-sm bg-card block"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-display font-medium mb-2 text-foreground group-hover:text-primary transition-colors">
                  {col.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {col.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
