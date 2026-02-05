import { Leaf, Heart, Award, MapPin, Shield, Sparkles, Star, Globe } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "100% Naturel",
    description: "Ingrédients naturels, sans additifs chimiques",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Savoir-faire artisanal transmis de génération en génération",
  },
  {
    icon: MapPin,
    title: "Made in Benin",
    description: "Karité béninois reconnu pour sa qualité unique",
  },
  {
    icon: Heart,
    title: "Soin & Bien-être",
    description: "Nourrir, protéger et sublimer cheveux et peau",
  },
];

export function ValuesSection() {
  return (
    <section id="valeurs" className="py-20 bg-brown text-cream relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-40 h-40 border border-cream rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-cream rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cream rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold uppercase tracking-wider mb-4">
            <Shield className="w-4 h-4" />
            Notre philosophie
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="font-body text-cream/80 leading-relaxed">
            Chez Savèkari, nous croyons que la nature offre les meilleurs soins. 
            Nos valeurs guident chacun de nos produits.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group bg-cream/10 backdrop-blur-sm rounded-2xl p-8 border border-cream/20 hover:bg-cream/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-5">
                <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">
                {value.title}
              </h3>
              <p className="font-body text-sm text-cream/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust CTA */}
        <div className="text-center mt-12">
          <a
            href="#produits"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            Découvrir nos produits naturels
          </a>
        </div>
      </div>
    </section>
  );
}
