import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, MapPin, Facebook, Music2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrito com sucesso! 🎉",
        description: "Você receberá 10% de desconto na primeira compra.",
      });
      setEmail("");
    }
  };

  const footerLinks = {
    kefe: {
      title: "Kefe",
      links: [
        { label: "Sobre", href: "/sobre" },
        { label: "Contato", href: "/contato" },
        { label: "Trabalhe conosco", href: "/contato" },
      ],
    },
    produtos: {
      title: "Produtos",
      links: [
        { label: "Anéis", href: "/aneis-pedras-naturais" },
        { label: "Pingentes", href: "/pingentes-pedras" },
        { label: "Colares", href: "/colares-pedras" },
        { label: "Pulseiras", href: "/pulseiras-pedras" },
        { label: "Especiais", href: "/kits-presente" },
      ],
    },
    ajuda: {
      title: "Ajuda",
      links: [
        { label: "Como cuidar", href: "/sobre" },
        { label: "FAQ", href: "/sobre" },
        { label: "Trocas e devoluções", href: "/sobre" },
        { label: "Rastrear pedido", href: "/contato" },
      ],
    },
  };

  const socialLinks = [
    { icon: <Instagram size={18} />, href: "https://instagram.com/kefe.joias", label: "Instagram" },
    { icon: <Facebook size={18} />, href: "https://facebook.com/kefe.joias", label: "Facebook" },
    { icon: <Music2 size={18} />, href: "https://tiktok.com/@kefe.joias", label: "TikTok" },
  ];

  return (
    <footer id="contato" className="px-6 py-10 md:px-12 lg:px-24 bg-gradient-footer border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="gold-line-wide mb-8" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="text-xl font-display font-medium text-gradient-gold mb-2">Kefe</h3>
            <p className="text-xs text-white/60 font-body leading-relaxed mb-3">
              Biojoias que eternizam histórias. Pedras naturais, flores desidratadas, 
              sementes e pimentas encapsuladas em resina com significado e afeto.
            </p>
            <div className="flex flex-col gap-1.5">
              <a href="mailto:contato@kefe.joias@gmail.com" className="flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors font-body">
                <Mail size={12} className="text-primary" /> contato@kefe.joias
              </a>
              <a
                href="https://wa.me/5511996470414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors font-body"
              >
                📱 (11) 99647-0414
              </a>
              <span className="flex items-center gap-1.5 text-xs text-white/50 font-body">
                <MapPin size={12} className="text-primary" /> São Paulo, SP
              </span>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * (index + 1) }}
            >
              <h4 className="font-display text-xs uppercase tracking-wider text-primary mb-2">{section.title}</h4>
              <div className="flex flex-col gap-1">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-xs text-white/50 hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Newsletter + Social */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display text-xs uppercase tracking-wider text-primary mb-2">Newsletter</h4>
            <p className="text-xs text-white/50 font-body mb-2">
              🎁 10% off na primeira compra
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-1.5 mb-4">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-gold/20 text-xs h-8 text-white placeholder:text-white/30"
                required
              />
              <Button type="submit" size="sm" className="bg-primary text-primary-foreground px-3 h-8 text-xs hover:bg-gold-light">
                Assinar
              </Button>
            </form>

            <h4 className="font-display text-xs uppercase tracking-wider text-primary mb-2">Redes Sociais</h4>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary hover:shadow-gold-sm transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="gold-line-wide mb-4" />
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-white/50 font-body mb-4">
          <span>🔒 Site Seguro</span>
          <span>💳 Pix • Cartão • Boleto</span>
          <span>🚚 Enviamos para todo Brasil</span>
          <span>✨ Frete grátis acima de R$300</span>
        </div>

        <div className="gold-line-wide mb-3" />
        <p className="text-center text-[11px] text-white/40 font-body">
          © {new Date().getFullYear()} Kefe Joias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
