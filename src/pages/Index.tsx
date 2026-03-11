import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import FeaturedProducts from "@/components/FeaturedProducts";
import StonesSection from "@/components/StonesSection";
import FlowersSection from "@/components/FlowersSection";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead, { organizationJsonLd } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Kefe Joias | Biojoias Artesanais com Significado"
        description="Biojoias artesanais com pedras naturais, flores desidratadas e elementos encapsulados em resina. Joias afetivas e personalizadas em São Paulo."
        jsonLd={organizationJsonLd}
      />
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedProducts />
      <StonesSection />
      <FlowersSection />
      <About />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
