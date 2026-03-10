import { motion } from "framer-motion";

const categories = [
  {
    icon: "💐",
    title: "Flores com História",
    items: ["Buquê de casamento", "Folhas com significado especial", "Plantas do jardim da família", "Dente-de-leão"],
  },
  {
    icon: "👶",
    title: "Lembranças de Bebês",
    items: ["Cabelo do primeiro corte", "Mechinha do bebê", "Dente de leite", "Pulseirinha de hospital", "Primeira chupeta"],
  },
  {
    icon: "📿",
    title: "Objetos Pessoais",
    items: ["Pedrinhas de praia", "Conchinhas", "Fragmentos de tecido", "Areia", "Carta ou bilhete"],
  },
  {
    icon: "🕯️",
    title: "Memórias de Entes Queridos",
    items: ["Cinzas", "Cabelo de familiar", "Tecido de roupa favorita"],
  },
];

const flowerMeanings = [
  { name: "Rosa", meaning: "Amor eterno, paixão", emoji: "🌹" },
  { name: "Lavanda", meaning: "Calma, paz interior", emoji: "💜" },
  { name: "Margarida", meaning: "Inocência, pureza", emoji: "🌼" },
  { name: "Girassol", meaning: "Felicidade, vitalidade", emoji: "🌻" },
  { name: "Jasmim", meaning: "Espiritualidade, esperança", emoji: "🤍" },
  { name: "Alecrim", meaning: "Proteção, fidelidade", emoji: "🌿" },
];

const FlowersSection = () => {
  return (
    <section id="flores" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
            Joias Afetivas
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-4">
            Eternize Suas <span className="italic text-gradient-gold">Memórias</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Transformamos momentos especiais em joias únicas. Flores, lembranças de bebê, 
            objetos pessoais e memórias de quem amamos — tudo eternizado em resina cristalina.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gradient-card border border-border/50 rounded-sm p-6 hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-3xl mb-3 block">{cat.icon}</span>
              <h3 className="font-display text-lg mb-3 text-foreground">{cat.title}</h3>
              <ul className="space-y-1.5">
                {cat.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground font-body flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-[8px]">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Flower Meanings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-center font-display text-xl md:text-2xl text-foreground mb-6">
            💐 Flores com Significado Especial
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {flowerMeanings.map((flower, i) => (
              <motion.div
                key={flower.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-gradient-card border border-border/50 rounded-sm p-4 text-center hover:border-primary/30 transition-all duration-300"
              >
                <span className="text-xl mb-1 block">{flower.emoji}</span>
                <h4 className="font-display text-sm text-foreground">{flower.name}</h4>
                <p className="text-[10px] text-muted-foreground font-body mt-1">{flower.meaning}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5511996470414?text=Olá! Gostaria de eternizar uma memória especial em uma joia personalizada."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-gold"
          >
            Peça Sob Medida
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlowersSection;
