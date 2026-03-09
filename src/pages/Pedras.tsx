import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { stones, stoneCategories, getStonesByCategory, type StoneCategory } from "@/data/stones-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Pedras = () => {
  const [activeCategory, setActiveCategory] = useState<StoneCategory>("protecao");

  const categories = Object.entries(stoneCategories) as [StoneCategory, typeof stoneCategories[StoneCategory]][];

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
            Pedras com Propósito
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground font-body max-w-2xl mx-auto"
          >
            Descubra o poder ancestral das pedras naturais. Cada cristal carrega uma energia única 
            que pode transformar sua vida. Escolha a pedra que ressoa com sua intenção.
          </motion.p>
        </div>
      </section>

      {/* Categories Navigation */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as StoneCategory)}>
            <TabsList className="w-full flex-wrap h-auto gap-2 bg-transparent p-0 justify-center">
              {categories.map(([key, cat]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 text-sm"
                >
                  <span className="mr-2">{cat.icon}</span>
                  {cat.title.split(" ")[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(([key, cat]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-2xl md:text-3xl font-display text-foreground mb-2">
                    {cat.icon} {cat.title}
                  </h2>
                  <p className="text-muted-foreground font-body">{cat.description}</p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {getStonesByCategory(key).map((stone, index) => (
                    <motion.div
                      key={stone.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-card border border-border rounded-lg p-5 hover:border-primary/50 transition-all group"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <span className="text-2xl">{stone.icon}</span>
                        <div>
                          <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                            {stone.name}
                          </h3>
                          <p className="text-sm text-primary font-body italic">{stone.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground font-body mb-4">
                        {stone.benefit}
                      </p>
                      <Link
                        to={`/produtos?pedra=${stone.id}`}
                        className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors font-body"
                      >
                        Ver joias com {stone.name}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* All Stones Grid */}
      <section className="px-6 py-16 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display text-center text-foreground mb-8">
            Todas as Pedras ({stones.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {stones.map((stone) => (
              <Link
                key={stone.id}
                to={`/produtos?pedra=${stone.id}`}
                className="bg-card border border-border rounded-lg p-3 text-center hover:border-primary/50 transition-all group"
              >
                <span className="text-xl block mb-2">{stone.icon}</span>
                <span className="text-sm font-body text-foreground group-hover:text-primary transition-colors">
                  {stone.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display text-foreground mb-4">
            Não encontrou a pedra que procura?
          </h2>
          <p className="text-muted-foreground font-body mb-6">
            Entre em contato conosco para encomendar uma joia personalizada com a pedra de sua preferência.
          </p>
          <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground">
            <a href="https://wa.me/5511996470414?text=Olá! Gostaria de encomendar uma joia personalizada com uma pedra específica." target="_blank" rel="noopener noreferrer">
              Encomendar pedra especial
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Pedras;
