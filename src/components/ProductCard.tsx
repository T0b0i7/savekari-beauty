import { type Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Eye, Droplets, Leaf, Star, Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: () => void;
}

export function ProductCard({ product, index, onSelect }: ProductCardProps) {
  const categoryLabels = {
    cheveux: "Soins Cheveux",
    corps: "Soins Corps",
    multi: "Multi-usages",
  };

  const categoryIcons = {
    cheveux: Droplets,
    corps: Star,
    multi: Leaf,
  };

  const CategoryIcon = categoryIcons[product.category];

  // Determine if product is "best seller" (for demo, first two products)
  const isBestSeller = index < 2;
  
  // Get the main benefit for display
  const mainBenefit = product.benefits[0]?.split(",")[0] || product.shortDescription;

  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-all duration-500 hover:-translate-y-2 hover-lift"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-karite-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-cream/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-soft">
          <CategoryIcon className="w-3.5 h-3.5 text-leaf" />
          <span className="font-body text-xs font-medium text-earth">
            {categoryLabels[product.category]}
          </span>
        </div>

        {/* Best Seller Badge */}
        {isBestSeller && (
          <div className="absolute top-4 right-4 bg-gold text-earth px-3 py-1.5 rounded-full shadow-soft">
            <span className="font-body text-xs font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              Best Seller
            </span>
          </div>
        )}

        {/* Natural Badge */}
        {product.category === "multi" && (
          <div className="absolute bottom-4 left-4 bg-leaf/90 text-primary-foreground px-3 py-1.5 rounded-full shadow-soft">
            <span className="font-body text-xs font-medium flex items-center gap-1">
              <Leaf className="w-3 h-3" />
              100% Naturel
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="font-display text-xl font-semibold text-earth mb-2 line-clamp-1 group-hover:text-leaf transition-colors duration-300">
          {product.shortName}
        </h3>
        
        {/* Main Benefit - Key selling point */}
        <p className="font-body text-sm text-earth-light leading-relaxed mb-4 line-clamp-2">
          {mainBenefit}
        </p>
        
        {/* Benefit Icons */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.benefits.slice(0, 2).map((benefit, idx) => (
            <span 
              key={idx}
              className="inline-flex items-center gap-1 font-body text-xs text-leaf bg-leaf/10 px-2.5 py-1 rounded-full"
            >
              <Leaf className="w-3 h-3" />
              {benefit.split(" ").slice(0, 3).join(" ")}...
            </span>
          ))}
        </div>

        {/* Weight Badge */}
        {product.weight && (
          <div className="inline-block font-body text-xs text-muted-foreground bg-muted px-3 py-1.5 rounded-full mb-4">
            <Package className="w-3 h-3 mr-1 inline text-leaf" />
            {product.weight}
          </div>
        )}

        {/* CTA Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={onSelect}
          className="w-full border-2 border-leaf text-leaf hover:bg-leaf hover:text-primary-foreground font-semibold rounded-full transition-all duration-300"
        >
          <Eye className="w-4 h-4 mr-2" />
          Voir détails
        </Button>
      </div>
    </div>
  );
}
