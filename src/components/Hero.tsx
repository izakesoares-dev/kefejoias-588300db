import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroAnel from "@/assets/hero-slide-anel.jpg";
import heroColar from "@/assets/hero-slide-colar.jpg";
import heroPulseiras from "@/assets/hero-slide-pulseiras.jpg";
import heroPingentes from "@/assets/hero-slide-pingentes.jpg";
import heroEspeciais from "@/assets/hero-slide-especiais.jpg";
import heroAcoInox from "@/assets/hero-slide-aco-inox.jpg";
import heroMandalas from "@/assets/hero-slide-mandalas.jpg";
import heroIncensarios from "@/assets/hero-slide-incensarios.jpg";

const slides = [
  {
    image: heroAnel,
    subtitle: "Anéis Artesanais",
    title: "Elegância em Cada Detalhe",
    buttonText: "Ver Anéis",
    href: "/aneis",
  },
  {
    image: heroColar,
    subtitle: "Colares com Alma",
    title: "O Presente Perfeito",
    buttonText: "Comprar Agora",
    href: "/colares",
  },
  {
    image: heroPulseiras,
    subtitle: "Pulseiras Exclusivas",
    title: "Sua História, Seu Estilo",
    buttonText: "Explorar Coleção",
    href: "/pulseiras",
  },
  {
    image: heroAcoInox,
    subtitle: "Coleção Aço Inox",
    title: "Brilho que Não se Apaga",
    buttonText: "Ver Aço Inox",
    href: "/aco-inox",
  },
  {
    image: heroMandalas,
    subtitle: "Mandalas de Resina",
    title: "Geometria Sagrada em Suas Mãos",
    buttonText: "Ver Mandalas",
    href: "/mandalas-resina",
  },
  {
    image: heroIncensarios,
    subtitle: "Incensários de Resina",
    title: "Rituais de Paz e Harmonia",
    buttonText: "Ver Incensários",
    href: "/incensarios-resina",
  },
  {
    image: heroPingentes,
    subtitle: "Pingentes Naturais",
    title: "Energia Perto do Coração",
    buttonText: "Ver Pingentes",
    href: "/pingentes",
  },
  {
    image: heroEspeciais,
    subtitle: "Peças Especiais",
    title: "Arte, Energia e Propósito",
    buttonText: "Descobrir Especiais",
    href: "/especiais",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-110 contrast-105 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-6 font-body">
              {slide.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight mb-8">
              <span className="text-gradient-gold italic">{slide.title}</span>
            </h1>
            <Link
              to={slide.href}
              className="inline-block px-10 py-4 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 transition-opacity shadow-gold"
            >
              {slide.buttonText}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 bg-background/30 backdrop-blur-sm text-foreground hover:bg-primary/10 transition-colors"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 bg-background/30 backdrop-blur-sm text-foreground hover:bg-primary/10 transition-colors"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-primary" : "w-4 bg-primary/30"
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
