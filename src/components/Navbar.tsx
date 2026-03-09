import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, ShoppingBag, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import kefeLogo from "@/assets/kefe-logo.png";
import { useCart } from "@/contexts/CartContext";
import MegaMenu from "./MegaMenu";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Produtos", href: "/produtos", hasMegaMenu: true },
  { label: "Pedras", href: "/pedras" },
  { label: "Flores", href: "/flores" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const mobileMenuData = {
  aneis: {
    title: "Anéis",
    items: [
      { label: "Anéis com Pedras", href: "/aneis-pedras-naturais" },
      { label: "Anéis com Flores", href: "/aneis-flores" },
    ],
  },
  pingentes: {
    title: "Pingentes",
    items: [
      { label: "Pingentes de Pedras", href: "/pingentes-pedras" },
      { label: "Pingentes de Resina", href: "/pingentes-resina-flores" },
    ],
  },
  colares: {
    title: "Colares",
    items: [
      { label: "Colares de Pedras", href: "/colares-pedras" },
      { label: "Colares de Resina", href: "/colares-resina-flores" },
    ],
  },
  pulseiras: {
    title: "Pulseiras",
    items: [
      { label: "Pulseiras de Pedras", href: "/pulseiras-pedras" },
      { label: "Pulseiras de Aço", href: "/pulseiras-aco" },
    ],
  },
  especiais: {
    title: "Especiais",
    items: [
      { label: "Pirâmides Quânticas", href: "/piramides-quanticas" },
      { label: "Kits Presente", href: "/kits-presente" },
    ],
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={kefeLogo} alt="Kefe Joias" className="h-8 invert" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.hasMegaMenu ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
              >
                <button
                  className="flex items-center gap-1 text-sm font-body tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-body tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          ))}
          <a
            href="https://instagram.com/kefe.joias"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-muted-foreground hover:text-primary transition-colors"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-body font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile toggle + cart */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-foreground"
          >
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-body font-bold flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border max-h-[80vh] overflow-y-auto"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {/* Main Links */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="text-base font-body text-muted-foreground hover:text-primary transition-colors"
              >
                Início
              </Link>

              {/* Products Accordion */}
              <div>
                <button
                  onClick={() => setExpandedCategory(expandedCategory === "produtos" ? null : "produtos")}
                  className="flex items-center justify-between w-full text-base font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  Produtos
                  <ChevronDown className={`w-4 h-4 transition-transform ${expandedCategory === "produtos" ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {expandedCategory === "produtos" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-3"
                    >
                      {Object.entries(mobileMenuData).map(([key, category]) => (
                        <div key={key}>
                          <span className="text-xs uppercase tracking-wider text-primary font-body">{category.title}</span>
                          <div className="mt-1 space-y-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.href}
                                to={item.href}
                                onClick={() => setOpen(false)}
                                className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Links */}
              {navLinks.filter(l => !l.hasMegaMenu && l.href !== "/").map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Instagram */}
              <a
                href="https://instagram.com/kefe.joias"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-base font-body text-muted-foreground hover:text-primary transition-colors"
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
