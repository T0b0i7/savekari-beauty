import { MessageCircle } from "lucide-react";

export function WhatsAppSticky() {
  return (
    <a
      href="https://wa.me/+2290197981572"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden"
      aria-label="Commander sur WhatsApp"
    >
      <div className="bg-leaf hover:bg-leaf-light text-primary-foreground rounded-full p-4 shadow-premium hover:shadow-hover transition-all duration-300 hover:scale-110 animate-pulse">
        <MessageCircle className="w-7 h-7" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-earth text-cream text-xs font-body px-3 py-2 rounded-lg shadow-card whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
        Commander sur WhatsApp
      </div>
    </a>
  );
}
