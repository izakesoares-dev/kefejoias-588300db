import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import kefeLogo from "@/assets/kefe-logo-dark.png";
import { useCart } from "@/contexts/CartContext";

const categoryMenuData = {
  aneis: {
    label: "Anéis",
    href: "/aneis",
    items: [
      { label: "Anéis com Pedras", href: "/aneis-pedras-naturais" },
      { label: "Anéis com Flores", href: "/aneis-flores" },
    ],
  },
  pingentes: {
    label: "Pingentes",
    href: "/pingentes",
    items: [
      { label: "Pingentes de Pedras", href: "/pingentes-pedras-naturais" },
      { label: "Pingentes de Resina", href: "/pingentes-resina-natural" },
    ],
  },
  colares: {
    label: "Colares",
    href: "/colares",
    items: [
      { label: "Colares de Pedras", href: "/colares-pedras" },
      { label: "Colares de Resina", href: "/colares-resina" },
    ],
  },
  pulseiras: {
    label: "Pulseiras",
    href: "/pulseiras",
    items: [
      { label: "Pulseiras de Pedras", href: "/pulseiras-pedras" },
      { label: "Pulseiras de Resina com Macramê", href: "/pulseiras-macrame" },
      { label: "Pulseiras Minimalistas", href: "/pulseiras-minimalistas" },
    ],
  },
  acoInox: {
    label: "Aço Inox",
    href: "/aco-inox",
    items: [
      { label: "Anéis de Aço Inox", href: "/aneis-aco" },
      { label: "Colares de Aço Inox", href: "/colares-aco" },
      { label: "Pulseiras de Aço Inox", href: "/pulseiras-aco" },
      { label: "Pingentes de Aço Inox", href: "/pingentes-aco" },
    ],
  },
  especiais: {
    label: "Especiais",
    href: "/especiais",
    items: [
      { label: "Pirâmides Quânticas", href: "/piramides-quanticas" },
      { label: "Santinhas de Pedra", href: "/santinhas-pedra" },
      { label: "Mandalas de Resina", href: "/mandalas-resina" },
      { label: "Incensários de Resina", href: "/incensarios-resina" },
      { label: "Kits Presente", href: "/kits-presente" },
    ],
  },
};

const categories = Object.entries(categoryMenuData);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { totalItems, setIsCartOpen } = useCart();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-1.5">
          <img src={kefeLogo} alt="Kefe Joias" className="h-10 md:h-12 rounded-sm" />
          <span className="text-[9px] md:text-[11px] tracking-[0.12em] text-green-deep font-body uppercase whitespace-nowrap">Para todos os seus momentos</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {categories.map(([key, cat]) => (
            <div
              key={key}
              className="relative"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={cat.href}
                className="flex items-center gap-1 text-[15px] font-body tracking-wide text-green-deep hover:text-primary transition-colors duration-300"
              >
                {cat.label}
                <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`} />
              </Link>

              <AnimatePresence>
                {activeDropdown === key && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 bg-white border border-border rounded-lg shadow-elegant py-2 min-w-[220px] z-50"
                  >
                    <Link
                      to={cat.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2.5 text-[15px] font-body font-extrabold text-green-deep bg-primary rounded-lg mx-2 mb-1 text-center hover:bg-gold-dark hover:text-white transition-colors"
                    >
                      Ver todos
                    </Link>
                    <div className="border-t border-border my-1" />
                    {cat.items.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 text-sm font-body text-foreground/70 hover:text-green-deep hover:bg-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <a
            href="https://instagram.com/kefe.joias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-whatsapp-green hover:text-whatsapp-green/80 transition-colors"
          >
            <Instagram size={18} />
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-whatsapp-green hover:text-whatsapp-green/80 transition-colors"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-body font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile toggle + cart */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-green-deep"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-body font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-green-deep">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-b border-border max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-6 gap-3">
              {categories.map(([key, cat]) => (
                <div key={key}>
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === key ? null : key)}
                    className="flex items-center justify-between w-full text-base font-body text-green-deep hover:text-primary transition-colors"
                  >
                    {cat.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${expandedMobile === key ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {expandedMobile === key && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 mt-2 space-y-1"
                      >
                        <Link
                          to={cat.href}
                          onClick={() => setOpen(false)}
                          className="block text-[15px] font-body font-extrabold text-green-deep bg-primary rounded-lg px-3 py-2 text-center hover:bg-gold-dark hover:text-white transition-colors"
                        >
                          Ver todos
                        </Link>
                        {cat.items.map((item) => (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setOpen(false)}
                            className="block text-sm text-foreground/60 hover:text-green-deep transition-colors py-1"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <div className="gold-line-wide my-2" />

              <a
                href="https://instagram.com/kefe.joias"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-base font-body text-primary/70 hover:text-primary transition-colors mt-2"
              >
                <Instagram size={16} />
                @kefe.joias
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
