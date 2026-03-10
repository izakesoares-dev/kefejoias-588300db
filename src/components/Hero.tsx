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
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-105 saturate-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content — bottom-left aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-24 pt-32 text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
              {slide.subtitle}
            </p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-6">
              <span className="text-gradient-gold italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                {slide.title}
              </span>
            </h1>
            <Link
              to={slide.href}
              className="inline-block px-8 md:px-10 py-3.5 md:py-4 bg-gradient-gold text-primary-foreground font-body font-semibold text-sm tracking-wide rounded-sm hover:opacity-90 transition-all shadow-gold hover:shadow-lg hover:scale-[1.02]"
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
