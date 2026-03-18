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
    <footer id="contato" className="px-6 py-6 md:px-12 lg:px-20 bg-gradient-footer border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div>
              <h3 className="text-lg font-display font-medium text-gradient-gold mb-1.5">Kefe</h3>
              <p className="text-xs text-white/60 font-body leading-relaxed">
                Joias afetivas feitas à mão com pedras naturais, flores desidratadas, sementes e pimentas encapsuladas em resina — cada peça carrega significado e eterniza uma história.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <a href="mailto:contato@kefe.joias@gmail.com" className="flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors font-body">
                <Mail size={12} className="text-primary/80" /> contato@kefe.joias
              </a>
              <a href="https://wa.me/5511996470414" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-white/50 hover:text-primary transition-colors font-body">
                📱 (11) 99647-0414
              </a>
              <span className="flex items-center gap-1.5 text-xs text-white/50 font-body">
                <MapPin size={12} className="text-primary/80" /> São Paulo, SP
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-display text-[11px] uppercase tracking-wider text-primary mb-1.5">{section.title}</h4>
              <div className="flex flex-col gap-0.5">
                {section.links.map((link) => (
                  <Link key={link.label} to={link.href} className="text-[11px] text-white/50 hover:text-primary transition-colors font-body">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-display text-[11px] uppercase tracking-wider text-primary mb-1.5">Newsletter</h4>
            <p className="text-[11px] text-white/50 font-body mb-1.5">🎁 10% off na 1ª compra</p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-1 mb-3">
              <Input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-gold/20 text-[11px] h-7 text-white placeholder:text-white/30"
                required
              />
              <Button type="submit" size="sm" className="bg-primary text-primary-foreground px-2 h-7 text-[11px] hover:bg-gold-light">
                Assinar
              </Button>
            </form>
            <h4 className="font-display text-[11px] uppercase tracking-wider text-primary mb-1.5">Redes Sociais</h4>
            <div className="flex gap-1.5">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center text-primary/60 hover:text-primary hover:border-primary transition-all" title={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="gold-line-wide mb-2" />
        <div className="flex flex-wrap items-center justify-center gap-3 text-[10px] text-white/50 font-body mb-2">
          <span>🔒 Site Seguro</span>
          <span>💳 Pix • Cartão • Boleto</span>
          <span>🚚 Todo Brasil</span>
          <span>✨ Frete grátis +R$300</span>
        </div>
        <p className="text-center text-[10px] text-white/40 font-body">
          © {new Date().getFullYear()} Kefe Joias. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
