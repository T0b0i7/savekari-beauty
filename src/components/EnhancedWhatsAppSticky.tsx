import { useState, useEffect } from "react";
import { MessageCircle, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnhancedWhatsAppSticky() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "+2290197981572";
  const message = encodeURIComponent("Bonjour ! Je suis intéressé(e) par vos produits naturels.");

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-premium p-4 mb-2 animate-scale-in max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-leaf rounded-full flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-display text-sm font-semibold text-earth">
                Savèkari
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-body text-xs text-earth-light">En ligne</span>
              </div>
            </div>
          </div>
          
          <p className="font-body text-sm text-earth-light mb-3">
            👋 Bonjour ! Comment puis-je vous aider aujourd'hui ?
          </p>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')}
              className="bg-leaf hover:bg-leaf-light text-white text-xs rounded-full px-3 py-1"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              Chatter
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="border-earth text-earth text-xs rounded-full px-3 py-1"
            >
              Plus tard
            </Button>
          </div>
        </div>
      )}

      {/* Main Button */}
      <div className="relative">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-leaf rounded-full animate-ping opacity-20" />
        
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-leaf hover:bg-leaf-light text-white rounded-full w-14 h-14 shadow-premium hover:shadow-hover transition-all duration-300 hover:scale-110 relative"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageCircle className="w-6 h-6" />
              <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-gold" />
            </div>
          )}
        </Button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gold rounded-full flex items-center justify-center animate-bounce">
            <span className="text-xs font-bold text-earth">1</span>
          </div>
        )}
      </div>
    </div>
  );
}
