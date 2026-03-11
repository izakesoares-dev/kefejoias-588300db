import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada!",
      description: "Retornaremos em breve. Obrigada pelo contato! 💖",
    });

    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "(11) 99647-0414",
      href: "https://wa.me/5511996470414",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "E-mail",
      value: "contato@kefe.joias",
      href: "mailto:contato@kefe.joias@gmail.com",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      value: "@kefe.joias",
      href: "https://instagram.com/kefe.joias",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Localização",
      value: "São Paulo, SP",
      href: null,
    },
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "9h às 18h" },
    { day: "Sábado", hours: "9h às 14h" },
    { day: "Domingo", hours: "Fechado" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contato — Kefe Joias"
        description="Entre em contato com a Kefe Joias. Tire dúvidas, faça encomendas especiais ou peça biojoias personalizadas. WhatsApp (11) 99647-0414."
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gradient-gold mb-6"
          >
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Estamos aqui para ajudar! Tire suas dúvidas, faça encomendas especiais 
            ou saiba mais sobre nossas biojoias.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display text-foreground mb-6">
                Envie uma mensagem
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Seu nome *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                  <Input
                    type="email"
                    placeholder="Seu e-mail *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    placeholder="Telefone / WhatsApp"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-card border-border"
                  />
                  <Input
                    placeholder="Assunto *"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="bg-card border-border"
                  />
                </div>
                <Textarea
                  placeholder="Sua mensagem *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-card border-border resize-none"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-gold text-primary-foreground"
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Quick Contact */}
              <div>
                <h2 className="text-2xl font-display text-foreground mb-6">
                  Contato rápido
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-card border border-border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-primary">{info.icon}</div>
                        <span className="text-sm text-muted-foreground font-body">{info.label}</span>
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground font-body hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-foreground font-body">{info.value}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h2 className="text-2xl font-display text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Horário de atendimento
                </h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="space-y-3">
                    {businessHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-muted-foreground font-body">{item.day}</span>
                        <span className="text-foreground font-body font-medium">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-primary font-body mt-4 pt-4 border-t border-border">
                    * Respondemos mensagens do WhatsApp em até 24h úteis
                  </p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 text-center">
                <span className="text-3xl mb-3 block">💬</span>
                <h3 className="text-xl font-display text-foreground mb-2">
                  Prefere WhatsApp?
                </h3>
                <p className="text-sm text-muted-foreground font-body mb-4">
                  Atendimento mais rápido e personalizado
                </p>
                <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                  <a
                    href="https://wa.me/5511996470414?text=Olá! Vim pelo site da Kefe e gostaria de saber mais sobre as biojoias."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Conversar no WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contato;
