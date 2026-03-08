import { motion } from "framer-motion";
import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="section-padding bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-medium text-gradient-gold mb-4">Kefe</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Biojoias que eternizam histórias. Pedras naturais, flores desidratadas, 
              sementes e pimentas encapsuladas em resina com significado e afeto.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Navegue</h4>
            <div className="flex flex-col gap-2">
              {["Coleções", "Pedras com Propósito", "Flores com História", "Pimentas & Sementes", "Sobre a Kefe"].map(
                (link) => (
                  <a key={link} href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    {link}
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@kefe.joias@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                <Mail size={14} /> contato@kefe.joias
              </a>
              <a
                href="https://wa.me/5511996470414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                📱 (11) 99647-0414
              </a>
              <a
                href="https://instagram.com/kefe.joias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body"
              >
                <Instagram size={14} /> @kefe.joias
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                <MapPin size={14} /> São Paulo, SP
              </span>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Kefe Joias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
