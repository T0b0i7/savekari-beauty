import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#valeurs", label: "Nos valeurs" },
  { href: "#produits", label: "Produits" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream/98 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#accueil" className="flex items-center gap-2 group">
          <span className="font-display text-2xl md:text-3xl font-bold text-earth group-hover:text-leaf transition-colors duration-300">
            sav<span className="text-leaf group-hover:text-gold transition-colors duration-300">è</span>kari
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-earth-light hover:text-leaf transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-leaf after:left-0 after:-bottom-1 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <a
          href="https://wa.me/+2290197981572"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <Button 
            size="sm" 
            className="bg-leaf hover:bg-leaf-light text-primary-foreground font-semibold rounded-full px-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Commander
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-earth hover:text-leaf transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream/98 backdrop-blur-md shadow-card animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-lg font-medium text-earth-light hover:text-leaf transition-colors py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/+2290197981572"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4"
            >
              <Button 
                size="lg" 
                className="w-full bg-leaf hover:bg-leaf-light text-primary-foreground font-semibold rounded-full shadow-card"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Commander sur WhatsApp
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
