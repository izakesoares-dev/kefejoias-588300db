import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Play, Heart, Sparkles, Shield } from "lucide-react";

const Sobre = () => {
  const testimonials = [
    {
      name: "Camila S.",
      text: "O anel de ametista é simplesmente perfeito! A energia é incrível e o acabamento artesanal é impecável.",
      product: "Anel Ametista",
    },
    {
      name: "Roberto M.",
      text: "Presente para minha esposa com a flor do nosso casamento. Ela chorou de emoção ao receber!",
      product: "Colar Personalizado",
    },
    {
      name: "Ana Paula L.",
      text: "Atendimento excepcional e produto de qualidade. A turmalina negra me acompanha todos os dias.",
      product: "Anel Turmalina Negra",
    },
    {
      name: "Marcos V.",
      text: "Comprei para minha mãe um colar com cravo, pela simbologia do amor materno. Ela amou!",
      product: "Pingente com Cravo",
    },
  ];

  const faqs = [
    {
      question: "As pedras são naturais?",
      answer: "Sim! Trabalhamos exclusivamente com pedras naturais de alta qualidade. Cada pedra é cuidadosamente selecionada por suas propriedades energéticas e beleza.",
    },
    {
      question: "Como funciona a personalização?",
      answer: "Você pode escolher a pedra, flor ou combinação que desejar. Para flores pessoais (buquê de casamento, flores especiais), entre em contato pelo WhatsApp para orientações de envio.",
    },
    {
      question: "Qual o prazo de entrega?",
      answer: "Produtos em estoque são enviados em até 3 dias úteis. Peças personalizadas podem levar de 7 a 15 dias úteis, dependendo da complexidade.",
    },
    {
      question: "A resina amarela com o tempo?",
      answer: "Nossa resina é de alta qualidade com proteção UV. Com os cuidados adequados (evitar exposição prolongada ao sol e produtos químicos), sua joia mantém a transparência por anos.",
    },
    {
      question: "Posso usar no banho?",
      answer: "Recomendamos remover as joias para banho, piscina ou mar. Embora a resina seja resistente, os produtos químicos podem afetar o acabamento a longo prazo.",
    },
    {
      question: "Vocês fazem anéis sob medida?",
      answer: "Sim! Oferecemos tamanhos do 14 ao 21. Se precisar de um tamanho especial, entre em contato que verificamos a possibilidade.",
    },
    {
      question: "Qual a política de trocas?",
      answer: "Trocas podem ser solicitadas em até 7 dias após o recebimento, desde que o produto esteja em perfeitas condições. Para tamanho de anel, entre em contato antes da compra.",
    },
    {
      question: "Vocês entregam em todo o Brasil?",
      answer: "Sim! Entregamos em todo o território nacional via Correios (PAC ou Sedex). Frete grátis para compras acima de R$ 300.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-gradient-gold mb-6"
          >
            Sobre a Kefe
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Biojoias que eternizam histórias, conectam energias e celebram a natureza.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                Nossa História
              </h2>
              <div className="text-muted-foreground font-body space-y-4">
                <p>
                  A Kefe nasceu do amor pela natureza e pela arte de eternizar momentos. 
                  Cada peça é criada artesanalmente em nosso ateliê em São Paulo, com 
                  dedicação e intenção positiva.
                </p>
                <p>
                  Trabalhamos com pedras naturais selecionadas por suas propriedades 
                  energéticas, flores desidratadas que guardam histórias, e sementes que 
                  simbolizam novos começos.
                </p>
                <p>
                  Mais do que joias, criamos amuletos pessoais que carregam significado, 
                  proteção e a energia da natureza.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-foreground mb-1">Feito com Amor</h3>
                <p className="text-xs text-muted-foreground font-body">Cada peça é única</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-foreground mb-1">100% Artesanal</h3>
                <p className="text-xs text-muted-foreground font-body">Trabalho manual</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display text-foreground mb-1">Pedras Naturais</h3>
                <p className="text-xs text-muted-foreground font-body">Energia autêntica</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <span className="text-3xl block mb-3">🌿</span>
                <h3 className="font-display text-foreground mb-1">Sustentável</h3>
                <p className="text-xs text-muted-foreground font-body">Respeito à natureza</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kefe Experience */}
      <section className="px-6 py-16 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
              ✨ Kefe Experience
            </h2>
            <p className="text-muted-foreground font-body mb-8 max-w-xl mx-auto">
              Acompanhe o processo artesanal de criação das nossas biojoias. Cada peça 
              é feita com carinho e intenção.
            </p>
            
            <div className="aspect-video bg-secondary/50 rounded-xl flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground font-body text-sm">
                  Em breve: vídeos do processo artesanal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-center text-foreground mb-10">
            O que dizem nossos clientes
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6"
              >
                <div className="flex items-center gap-1 text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-muted-foreground font-body italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-body text-foreground">{testimonial.name}</span>
                  <span className="text-xs text-primary font-body">{testimonial.product}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 bg-card/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-center text-foreground mb-10">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-lg px-4">
                <AccordionTrigger className="font-body text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Sobre;
