import { useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Marie K.",
    location: "Cotonou, Bénin",
    rating: 5,
    comment: "Les produits Savèkari ont transformé mes cheveux. Plus forts, plus brillants, je suis ravie !",
    product: "BUKY Pommade",
    avatar: "👩🏾‍🦱"
  },
  {
    id: 2,
    name: "Aminata B.",
    location: "Porto-Novo, Bénin",
    rating: 5,
    comment: "Le beurre de karité pur est exceptionnel. Ma peau n'a jamais été aussi douce.",
    product: "Pure Karité",
    avatar: "👩🏿"
  },
  {
    id: 3,
    name: "Fatou S.",
    location: "Abidjan, Côte d'Ivoire",
    rating: 5,
    comment: "Je recommande vivement SHAM'S. Texture légère et résultats visibles en une semaine !",
    product: "SHAM'S Crème",
    avatar: "👩🏽‍🦱"
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 font-body text-sm font-semibold text-leaf uppercase tracking-wider mb-4">
            <Star className="w-4 h-4" />
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-earth mb-6">
            Ce que nos clients disent
          </h2>
          <p className="font-body text-lg text-earth-light leading-relaxed">
            Découvrez les expériences de ceux qui ont adopté nos produits naturels.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-karite-light rounded-3xl p-8 md:p-12 shadow-card">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-gold/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < currentTestimonial.rating ? 'text-gold fill-current' : 'text-gold/30'}`}
                  />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="font-body text-xl md:text-2xl text-earth leading-relaxed mb-8">
                "{currentTestimonial.comment}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-leaf rounded-full flex items-center justify-center text-2xl shadow-soft">
                    {currentTestimonial.avatar}
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-earth">
                      {currentTestimonial.name}
                    </div>
                    <div className="font-body text-sm text-earth-light">
                      {currentTestimonial.location} • {currentTestimonial.product}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={prevTestimonial}
                    className="rounded-full border-earth text-earth hover:bg-earth hover:text-cream"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={nextTestimonial}
                    className="rounded-full border-earth text-earth hover:bg-earth hover:text-cream"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-leaf w-8' : 'bg-earth/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
