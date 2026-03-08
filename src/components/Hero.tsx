import { motion } from "framer-motion";
import heroImage from "@/assets/hero-kefe.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Biojoias Kefe"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body">
            Biojoias · Pedras Naturais · Flores Eternizadas
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight mb-8"
        >
          A natureza encontra a emoção para{" "}
          <span className="text-gradient-gold italic">eternizar histórias</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          Pedras naturais, flores desidratadas, sementes e pimentas encapsuladas em resina. 
          Cada peça carrega um significado, uma memória, um amuleto pessoal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#colecoes"
            className="px-8 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-gold"
          >
            Conheça Nossas Coleções
          </a>
          <a
            href="#contato"
            className="px-8 py-4 border border-primary/30 text-primary font-body font-medium text-sm tracking-wide rounded-sm hover:bg-primary/5 transition-colors"
          >
            Monte Sua Joia Afetiva
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
