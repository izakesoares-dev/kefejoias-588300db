import { motion } from "framer-motion";

const flowers = [
  { name: "Rosa", meaning: "Amor eterno, paixão, gratidão", emoji: "🌹" },
  { name: "Lavanda", meaning: "Calma, purificação, paz interior", emoji: "💜" },
  { name: "Margarida", meaning: "Inocência, pureza, novos começos", emoji: "🌼" },
  { name: "Girassol", meaning: "Felicidade, vitalidade, energia solar", emoji: "🌻" },
  { name: "Jasmim", meaning: "Sensualidade, espiritualidade, esperança", emoji: "🤍" },
  { name: "Alecrim", meaning: "Lembrança, fidelidade, proteção do lar", emoji: "🌿" },
];

const FlowersSection = () => {
  return (
    <section id="flores" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
              Flores com História
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6">
              Eternize Suas <span className="italic text-gradient-gold">Memórias</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Uma rosa do primeiro encontro, um alecrim colhido no jardim da avó. 
              Capturamos a delicadeza das flores em resina cristalina, eternizando 
              sua beleza e o momento que representam.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              <span className="text-primary font-medium">Envie sua própria flor</span> — 
              eternizamos a flor que carrega sua história em uma joia única.
            </p>
            <a
              href="#contato"
              className="inline-block px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-gold"
            >
              Peça Sob Medida
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3"
          >
            {flowers.map((flower, i) => (
              <motion.div
                key={flower.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-gradient-card border border-border/50 rounded-sm p-5 hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-2xl mb-2 block">{flower.emoji}</span>
                <h4 className="font-display text-base mb-1 text-foreground">{flower.name}</h4>
                <p className="text-xs text-muted-foreground font-body">{flower.meaning}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlowersSection;
