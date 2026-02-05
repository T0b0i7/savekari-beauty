import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown, Sparkles, Globe } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Premium Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Beurre de karité naturel"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-karite/95 via-karite/80 to-karite/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-karite/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-cream/90 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8 shadow-soft animate-fade-in">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-body text-sm font-medium text-earth">
              Soins 100% Naturels • Made in Benin
            </span>
          </div>

          {/* Main Heading - Premium Typography */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-earth leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Des soins naturels qui{" "}
            <span className="text-leaf">subliment</span> vos cheveux et votre{" "}
            <span className="text-gold">peau</span>
          </h1>

          {/* Subheading - Clear & Concise */}
          <p className="font-body text-lg md:text-xl text-earth-light leading-relaxed mb-10 animate-fade-in max-w-xl" style={{ animationDelay: "0.2s" }}>
            Fabriqués avec du pur beurre de karité béninois et des ingrédients naturels. 
            Une tradition familiale au service de votre beauté.
          </p>

          {/* CTA Buttons - Premium Styling */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {/* Primary CTA - WhatsApp */}
            <a
              href="https://wa.me/+2290197981572"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-leaf hover:bg-leaf-light text-primary-foreground font-semibold px-8 py-7 text-lg rounded-full shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Commander sur WhatsApp
              </Button>
            </a>
            
            {/* Secondary CTA - Products */}
            <a href="#produits">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-earth text-earth hover:bg-earth hover:text-cream font-semibold px-8 py-7 text-lg rounded-full transition-all duration-300 hover:-translate-y-1"
              >
                Découvrir les produits
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-leaf rounded-full" />
              <span className="font-body text-sm text-earth-light">100% Naturel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full" />
              <span className="font-body text-sm text-earth-light">Fabrication artisanale</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brown rounded-full" />
              <span className="font-body text-sm text-earth-light">Entreprise familiale</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <a
          href="#apropos"
          className="flex flex-col items-center gap-2 text-earth-light hover:text-leaf transition-colors"
        >
          <span className="font-body text-sm">Découvrir</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
