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
    <footer id="contato" className="section-padding bg-gradient-footer border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="gold-line-wide mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-display font-medium text-gradient-gold mb-4">Kefe</h3>
            <p className="text-sm text-white/60 font-body leading-relaxed mb-4">
              Biojoias que eternizam histórias. Pedras naturais, flores desidratadas, 
              sementes e pimentas encapsuladas em resina com significado e afeto.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:contato@kefe.joias@gmail.com" className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors font-body">
                <Mail size={14} className="text-primary" /> contato@kefe.joias
              </a>
              <a
                href="https://wa.me/5511996470414"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/50 hover:text-primary transition-colors font-body"
              >
                📱 (11) 99647-0414
              </a>
              <span className="flex items-center gap-2 text-sm text-white/50 font-body">
                <MapPin size={14} className="text-primary" /> São Paulo, SP
              </span>
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">{section.title}</h4>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-white/50 hover:text-primary transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Newsletter + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-4">Newsletter</h4>
            <p className="text-sm text-white/50 font-body mb-3">
              🎁 10% off na primeira compra
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-gold/20 text-sm h-9 text-white placeholder:text-white/30"
                required
              />
              <Button type="submit" size="sm" className="bg-primary text-primary-foreground px-3 hover:bg-gold-light">
                Assinar
              </Button>
            </form>

            <h4 className="font-display text-sm uppercase tracking-wider text-primary mb-3">Redes Sociais</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary hover:shadow-gold-sm transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="gold-line-wide mb-6" />
        <div className="pb-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/50 font-body">
            <span className="flex items-center gap-1">🔒 Site Seguro</span>
            <span className="flex items-center gap-1">💳 Pix • Cartão • Boleto</span>
            <span className="flex items-center gap-1">🚚 Enviamos para todo Brasil</span>
            <span className="flex items-center gap-1">✨ Frete grátis acima de R$300</span>
          </div>
        </div>

        <div className="gold-line-wide mb-6" />
        <div className="text-center">
          <p className="text-xs text-white/40 font-body">
            © {new Date().getFullYear()} Kefe Joias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
