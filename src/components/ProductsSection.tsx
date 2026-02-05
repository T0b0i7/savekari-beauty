import { useState } from "react";
import { products, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ProductModal } from "./ProductModal";
import { Sparkles, Star, Scissors, Package, Leaf } from "lucide-react";

const categories = [
  { id: "all", label: "Tous les produits", icon: Sparkles },
  { id: "cheveux", label: "Soins Cheveux", icon: Scissors },
  { id: "corps", label: "Soins Corps", icon: Package },
  { id: "multi", label: "Multi-usages", icon: Leaf },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="produits" className="py-24 bg-karite-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-leaf uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            Notre gamme
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth mb-6">
            Nos Produits
          </h2>
          <p className="font-body text-lg text-earth-light leading-relaxed">
            Des soins naturels formulés avec amour pour sublimer 
            vos cheveux et votre peau.
          </p>
        </div>

        {/* Category Filter - Premium Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-body text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-leaf text-primary-foreground shadow-card hover:shadow-hover"
                  : "bg-cream text-earth-light hover:bg-karite hover:text-earth border border-border"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onSelect={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-body text-earth-light">
              Aucun produit dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
