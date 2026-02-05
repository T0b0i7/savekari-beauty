import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Phone, Sparkles, Globe, Heart } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-leaf uppercase tracking-wider mb-4">
            <Phone className="w-4 h-4" />
            Contactez-nous
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth mb-6">
            Prêt à commander ?
          </h2>
          <p className="font-body text-lg text-earth-light leading-relaxed">
            Nous sommes disponibles pour vous conseiller et répondre à toutes 
            vos questions. Contactez-nous sur WhatsApp !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* WhatsApp Card - Premium */}
            <div className="bg-karite-light rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-leaf rounded-2xl flex items-center justify-center shadow-soft">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-earth">
                    WhatsApp
                  </h3>
                  <p className="font-body text-sm text-earth-light">
                    Notre canal principal
                  </p>
                </div>
              </div>
              
              <p className="font-body text-earth-light mb-6 leading-relaxed">
                Envoyez-nous un message pour commander, poser des questions 
                ou obtenir des conseils personnalisés sur nos produits.
              </p>

              <a
                href="https://wa.me/+2290197981572"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full bg-leaf hover:bg-leaf-light text-primary-foreground font-semibold rounded-full shadow-card hover:shadow-hover transition-all duration-300 py-6 text-lg hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Parlez-nous sur WhatsApp
                </Button>
              </a>

              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-leaf rounded-full animate-pulse" />
                <p className="font-body text-sm text-earth-light">
                  Réponse rapide • Conseils personnalisés
                </p>
              </div>
            </div>

            {/* Info Cards - Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-karite-light rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <h4 className="font-display text-lg font-semibold text-earth mb-1">
                  Localisation
                </h4>
                <p className="font-body text-sm text-earth-light">
                  Cotonou, Bénin
                </p>
              </div>

              <div className="bg-karite-light rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow duration-300">
                <div className="w-12 h-12 bg-leaf/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-leaf" />
                </div>
                <h4 className="font-display text-lg font-semibold text-earth mb-1">
                  Disponibilité
                </h4>
                <p className="font-body text-sm text-earth-light">
                  Lun - Sam : 8h - 20h
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 bg-cream px-4 py-2 rounded-full text-xs font-body text-earth border border-border">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                100% Naturel
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cream px-4 py-2 rounded-full text-xs font-body text-earth border border-border">
                <Globe className="w-3.5 h-3.5 text-leaf" />
                Made in Benin
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cream px-4 py-2 rounded-full text-xs font-body text-earth border border-border">
                <Heart className="w-3.5 h-3.5 text-gold" />
                Entreprise familiale
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden shadow-card h-[450px] lg:h-full min-h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.67606812546!2d2.2944082!3d6.3702928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102354e5b6a3a9ad%3A0x8b8b1b9a2b5b0c9e!2sCotonou%2C%20Benin!5e0!3m2!1sen!2sfr!4v1706800000000!5m2!1sen!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Savèkari - Cotonou, Bénin"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Map Overlay */}
            <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-leaf rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="font-display text-sm font-semibold text-earth block">
                    Savèkari
                  </span>
                  <span className="font-body text-xs text-earth-light">
                    Cotonou, Bénin
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
