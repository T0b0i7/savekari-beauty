import { MessageCircle, Heart, Leaf, MapPin, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-bold mb-4">
              sav<span className="text-gold">è</span>kari
            </h3>
            <p className="font-body text-cream/70 leading-relaxed mb-6 max-w-md">
              Soins naturels à base de beurre de karité béninois. 
              Une tradition familiale au service de votre beauté.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 bg-cream/10 px-3 py-1.5 rounded-full text-xs font-body">
                <Leaf className="w-3.5 h-3.5 text-gold" />
                100% Naturel
              </span>
              <span className="inline-flex items-center gap-1.5 bg-cream/10 px-3 py-1.5 rounded-full text-xs font-body">
                <Globe className="w-3.5 h-3.5 text-gold" />
                Made in Benin
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#accueil", label: "Accueil" },
                { href: "#apropos", label: "À propos" },
                { href: "#valeurs", label: "Nos valeurs" },
                { href: "#produits", label: "Produits" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/70 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/+2290197981572"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body text-sm text-cream/70 hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 bg-cream/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                +229 01 97 98 15 72
              </a>
              <div className="flex items-center gap-3 font-body text-sm text-cream/70">
                <div className="w-8 h-8 bg-cream/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Cotonou, Bénin
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-cream/50 text-center md:text-left">
              © {currentYear} Savèkari. Tous droits réservés.
            </p>
            <p className="font-body text-sm text-cream/50 flex items-center gap-2">
              Fabriqué avec <Heart className="w-4 h-4 text-gold fill-gold" /> au Bénin
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
