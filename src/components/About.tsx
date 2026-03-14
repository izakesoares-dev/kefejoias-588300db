import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-base md:text-lg tracking-[0.3em] uppercase text-green-deep mb-4 font-body font-extrabold">
            Nossa Essência
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-8">
            Joias que Contam <span className="italic text-primary">Histórias</span>
          </h2>
          <div className="gold-line mx-auto mb-10" />
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">
            Na Kefe, a natureza encontra a emoção para criar biojoias que eternizam histórias. 
            Unimos pedras naturais, flores desidratadas, sementes, pimentas e resina em peças únicas, 
            cheias de significado e estilo.
          </p>
          <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
            Cada colar, anel ou pulseira é pensado para quem busca mais que um acessório — 
            deseja carregar consigo um pedaço da natureza, uma memória afetiva, um amuleto pessoal.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100%", label: "Artesanal" },
              { number: "500+", label: "Peças Criadas" },
              { number: "50+", label: "Pedras Naturais" },
              { number: "∞", label: "Histórias Eternizadas" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-3xl font-display text-gradient-gold font-semibold mb-1">{stat.number}</p>
                <p className="text-xs text-muted-foreground font-body tracking-wide uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
