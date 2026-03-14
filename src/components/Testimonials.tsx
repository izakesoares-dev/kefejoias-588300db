import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    text: "Eternizei as flores do meu buquê de casamento em um pingente. Cada vez que olho, revivo aquele dia especial. A Kefe transformou memória em arte.",
    rating: 5,
  },
  {
    name: "Juliana M.",
    text: "Presenteei minha mãe com um colar de quartzo rosa. Ela chorou ao ler o significado. É mais que uma joia — é um abraço que ela carrega no peito.",
    rating: 5,
  },
  {
    name: "Fernanda S.",
    text: "O anel de turmalina negra virou meu amuleto diário. A energia mudou. A qualidade é impecável e a embalagem chegou linda demais.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-base md:text-lg tracking-[0.3em] uppercase text-green-deep mb-4 font-body font-extrabold">
            Depoimentos
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium">
            Histórias de Quem <span className="text-primary">Usa</span>
          </h2>
          <div className="gold-line mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-gradient-card border border-border/50 rounded-sm p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <p className="font-display text-sm text-foreground">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
