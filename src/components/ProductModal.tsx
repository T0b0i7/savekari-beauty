import { type Product } from "@/data/products";
import { Check, MessageCircle, Leaf, Sparkles, Globe, Package, User, CircleCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Bonjour Savèkari ! Je suis intéressé(e) par le produit "${product.name}". Pouvez-vous me donner plus d'informations ?`
  );

  // Benefit icons mapping
  const benefitIcons = [
    { icon: Leaf, color: "text-leaf" },
    { icon: Sparkles, color: "text-gold" },
    { icon: Check, color: "text-leaf" },
    { icon: Leaf, color: "text-gold" },
    { icon: Check, color: "text-leaf" },
  ];

  return (
    <Dialog open={!!product} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-cream border-none shadow-premium rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl md:text-3xl text-earth">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-karite-light shadow-card">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            
            {/* Natural Badge */}
            <div className="absolute top-4 left-4 bg-leaf/90 text-primary-foreground px-4 py-2 rounded-full shadow-soft">
              <span className="font-body text-sm font-medium flex items-center gap-1.5">
                <Leaf className="w-4 h-4" />
                100% Naturel
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Description */}
            <div>
              <h4 className="font-display text-lg font-semibold text-earth mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                Description
              </h4>
              <p className="font-body text-earth-light leading-relaxed">
                {product.fullDescription}
              </p>
            </div>

            {/* Benefits - With Icons */}
            <div>
              <h4 className="font-display text-lg font-semibold text-earth mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                Bienfaits
              </h4>
              <ul className="space-y-3">
                {product.benefits.map((benefit, idx) => {
                  const { icon: Icon, color } = benefitIcons[idx % benefitIcons.length];
                  return (
                    <li key={idx} className="flex items-start gap-3 bg-karite-light/50 rounded-xl px-4 py-3">
                      <div className={`w-6 h-6 rounded-full bg-cream flex items-center justify-center flex-shrink-0 ${color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-body text-sm text-earth leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Usage */}
            {product.usage && (
              <div className="bg-leaf/10 rounded-xl px-5 py-4">
                <h4 className="font-display text-md font-semibold text-leaf mb-2 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Utilisation
                </h4>
                <p className="font-body text-sm text-earth-light">
                  {product.usage}
                </p>
              </div>
            )}

            {/* Weight */}
            {product.weight && (
              <div className="inline-flex items-center gap-3 bg-karite px-5 py-3 rounded-full">
                <span className="font-body text-sm text-earth-light">
                  <Package className="w-4 h-4 inline mr-2" />
                  Format :
                </span>
                <span className="font-body text-sm font-semibold text-earth">
                  {product.weight}
                </span>
              </div>
            )}

            {/* CTA - Premium WhatsApp Button */}
            <a
              href={`https://wa.me/+2290197981572?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="w-full bg-leaf hover:bg-leaf-light text-primary-foreground font-semibold rounded-full shadow-card hover:shadow-hover transition-all duration-300 py-6 text-lg hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Commander ce produit
              </Button>
            </a>

            {/* Trust Message */}
            <p className="font-body text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
              <CircleCheck className="w-3 h-3 text-leaf" />
              Réponse rapide • Conseils personnalisés
            </p>

            {/* Savèkari mention */}
            <p className="font-body text-xs text-center text-earth-light pt-2 border-t border-border">
              Un produit <span className="font-semibold text-earth">Savèkari</span> • Made in Benin
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
