import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { flowers } from "@/data/flowers-data";
import { Button } from "@/components/ui/button";
import { ChevronRight, Send, MessageCircle } from "lucide-react";

const Flores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 pb-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-medium text-gradient-gold mb-2"
          >
            Flores com História
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Escolha uma flor do nosso catálogo ou envie a sua para eternizarmos em resina.
          </motion.p>
        </div>
      </section>

      {/* Flowers Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {flowers.map((flower, index) => (
              <motion.div
                key={flower.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border-2 border-green-deep/30 rounded-xl p-6 hover:border-green-deep transition-all group shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{flower.icon}</span>
                  <div>
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {flower.name}
                    </h3>
                    <p className="text-sm text-primary font-body italic">{flower.meaning}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
                  {flower.description}
                </p>
                <Link
                  to={`/produtos?flor=${flower.id}`}
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors font-body"
                >
                  Ver joias com {flower.name}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Flower Section */}
      <section className="px-6 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-5xl mb-4 block">💐</span>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Envie sua própria flor
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Você tem uma flor especial que gostaria de eternizar? Um buquê de casamento, 
              uma flor do jardim da avó, ou aquela rosa que recebeu em um momento único?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">1. Envie</h3>
              <p className="text-sm text-muted-foreground font-body">
                Entre em contato e envie sua flor desidratada ou fresca (orientaremos o processo)
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">2. Criamos</h3>
              <p className="text-sm text-muted-foreground font-body">
                Encapsulamos sua flor em resina cristalina com todo cuidado artesanal
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💎</span>
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">3. Eternize</h3>
              <p className="text-sm text-muted-foreground font-body">
                Receba sua joia única, carregando para sempre a memória dessa flor especial
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground">
              <a 
                href="https://wa.me/5511996470414?text=Olá! Gostaria de eternizar uma flor especial em uma joia personalizada." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Quero eternizar minha flor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6">
            Como cuidamos das suas flores
          </h2>
          <div className="text-muted-foreground font-body space-y-4 text-left">
            <p>
              Cada flor passa por um processo cuidadoso de desidratação e preparação antes de ser 
              encapsulada em resina cristalina de alta qualidade. Esse processo preserva as cores 
              e a forma original da flor por anos.
            </p>
            <p>
              Trabalhamos com flores frescas e desidratadas. Se você tiver uma flor fresca, 
              orientamos como prepará-la para o envio ou você pode enviá-la in natura que 
              cuidamos de todo o processo.
            </p>
            <p className="text-sm text-primary">
              ⚠️ O resultado final pode variar de acordo com o tipo e condição da flor enviada. 
              Sempre conversamos antes para alinhar expectativas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Flores;
