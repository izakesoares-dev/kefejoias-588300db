import { motion } from "framer-motion";
import { Shield, Heart, Gem, Brain, Sparkles, Zap, Leaf, Star } from "lucide-react";

const categories = [
  { icon: Shield, title: "Proteção", desc: "Turmalina Negra, Ônix, Obsidiana", color: "text-primary" },
  { icon: Heart, title: "Amor", desc: "Quartzo Rosa, Esmeralda, Rodocrosita", color: "text-primary" },
  { icon: Gem, title: "Prosperidade", desc: "Citrino, Pirita, Aventurina", color: "text-primary" },
  { icon: Brain, title: "Clareza Mental", desc: "Lápis-Lazúli, Fluorita, Sodalita", color: "text-primary" },
  { icon: Sparkles, title: "Espiritualidade", desc: "Ametista, Labradorita, Selenita", color: "text-primary" },
  { icon: Zap, title: "Energia", desc: "Cornalina, Granada, Jaspe Vermelho", color: "text-primary" },
  { icon: Leaf, title: "Equilíbrio", desc: "Amazonita, Lepidolita, Howlita", color: "text-primary" },
  { icon: Star, title: "Versáteis", desc: "Opala, Pérola, Calcita", color: "text-primary" },
];

const StonesSection = () => {
  return (
    <section id="pedras" className="section-padding bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Pedras com Propósito
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Encontre Sua Pedra
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Cada gema carrega significados ancestrais. Escolha pela intenção que deseja trazer para sua vida.
          </p>
          <div className="gold-line mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-gradient-card rounded-sm p-6 lg:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-gold"
            >
              <cat.icon className={`${cat.color} mb-4 h-6 w-6 group-hover:scale-110 transition-transform`} />
              <h3 className="font-display text-lg mb-1 text-foreground">{cat.title}</h3>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StonesSection;
