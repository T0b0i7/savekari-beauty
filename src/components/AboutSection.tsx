import heroBackground from "@/assets/hero-background.jpg";
import { Sparkles, Globe, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="apropos" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src={heroBackground}
                alt="Beurre de karité artisanal"
                className="w-full h-[450px] md:h-[550px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/40 via-transparent to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold text-earth px-8 py-5 rounded-2xl shadow-premium">
              <span className="font-display text-4xl font-bold block">100%</span>
              <span className="font-body text-sm">Naturel</span>
            </div>

            {/* Second Badge */}
            <div className="absolute top-6 -left-4 bg-cream text-earth px-5 py-3 rounded-2xl shadow-card rotate-[-3deg]">
              <span className="font-body text-sm font-medium flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                Fait à la main
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-leaf uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4" />
              Notre histoire
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth mb-8 leading-tight">
              À propos de <span className="text-leaf">Savèkari</span>
            </h2>
            
            <div className="space-y-5 font-body text-earth-light leading-relaxed text-lg">
              <p>
                <strong className="text-earth">Savèkari</strong> est née de notre conviction profonde 
                dans les vertus exceptionnelles du beurre de karité béninois. Nous avons fait le choix 
                de mettre en valeur cette trésor national en développant une approche innovante 
                de son utilisation à travers une gamme complète de soins cosmétiques.
              </p>
              <p>
                Notre expertise réside dans la maîtrise des techniques d'extraction et de transformation 
                du beurre de karité pur que nous intégrons dans des formules uniques. Des baumes 
                nourrissants aux soins capillaires revitalisants, chaque produit est conçu pour 
                maximiser les bienfaits naturels de notre or blanc.
              </p>
              <p>
                Au-delà de la qualité de nos produits, nous sommes fiers de contribuer au développement 
                économique du Bénin. En valorisant les savoir-faire locaux et en créant des opportunités 
                pour les communautés productrices, nous participons à la transmission de notre patrimoine 
                tout en construisant un avenir durable pour notre pays.
              </p>
            </div>

            {/* Stats - Premium Design */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="bg-karite-light rounded-2xl p-5 text-center">
                <span className="font-display text-3xl font-bold text-leaf block">100%</span>
                <span className="font-body text-sm text-earth-light">Artisanal</span>
              </div>
              <div className="bg-karite-light rounded-2xl p-5 text-center">
                <Globe className="w-12 h-12 text-leaf mx-auto mb-2" />
                <span className="font-body text-sm text-earth-light">Made in Benin</span>
              </div>
              <div className="bg-karite-light rounded-2xl p-5 text-center">
                <Heart className="w-12 h-12 text-gold mx-auto mb-2" />
                <span className="font-body text-sm text-earth-light">Avec amour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
