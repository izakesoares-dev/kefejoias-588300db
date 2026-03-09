import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
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
      { label: "Pingentes de Pedras", href: "/pingentes-pedras-naturais" },
      { label: "Pingentes de Resina", href: "/pingentes-resina-natural" },
    ],
  },
  colares: {
    title: "Colares",
    items: [
      { label: "Colares de Pedras", href: "/colares-pedras" },
      { label: "Colares de Resina", href: "/colares-resina" },
    ],
  },
  pulseiras: {
    title: "Pulseiras",
    items: [
      { label: "Pulseiras de Pedras", href: "/pulseiras-pedras" },
      { label: "Pulseiras de Resina com Macramê", href: "/pulseiras-macrame" },
      { label: "Pulseiras Minimalistas", href: "/pulseiras-minimalistas" },
    ],
  },
  acoInox: {
    title: "Aço Inox",
    items: [
      { label: "Anéis de Aço Inox", href: "/aneis-aco" },
      { label: "Colares de Aço Inox", href: "/colares-aco" },
      { label: "Pulseiras de Aço Inox", href: "/pulseiras-aco" },
      { label: "Pingentes de Aço Inox", href: "/pingentes-aco" },
    ],
  },
  especiais: {
    title: "Especiais",
    items: [
      { label: "Pirâmides Quânticas", href: "/piramides-quanticas" },
      { label: "Santinhas de Pedra", href: "/santinhas-pedra" },
      { label: "Mandalas de Resina", href: "/mandalas-resina" },
      { label: "Incensários de Resina", href: "/incensarios-resina" },
      { label: "Kits Presente", href: "/kits-presente" },
    ],
  },
};

const quickLinks = [
  { label: "Ver todos os produtos", href: "/produtos" },
  { label: "Lançamentos", href: "/lancamentos" },
  { label: "Mais vendidos", href: "/mais-vendidos" },
  { label: "Personalize sua joia", href: "/personalizar" },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-xl z-50"
          onMouseLeave={onClose}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-6 gap-8">
              {Object.entries(menuData).map(([key, category]) => (
                <div key={key}>
                  <h3 className="font-display text-sm uppercase tracking-wider text-primary mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body block py-1"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick links footer */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center justify-center gap-8">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={onClose}
                    className="text-sm font-body text-primary hover:text-primary/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
