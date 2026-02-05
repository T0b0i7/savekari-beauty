import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ValuesSection } from "@/components/ValuesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { EnhancedWhatsAppSticky } from "@/components/EnhancedWhatsAppSticky";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ValuesSection />
        <ProductsSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <EnhancedWhatsAppSticky />
      <ScrollToTop />
    </div>
  );
};

export default Index;
