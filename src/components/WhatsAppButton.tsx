import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511996470414?text=Ol%C3%A1%20Kefe!%20Gostaria%20de%20saber%20mais%20sobre%20as%20biojoias."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)] rounded-full shadow-lg hover:scale-105 transition-transform font-body text-sm font-medium"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Fale com a Kefe</span>
    </a>
  );
};

export default WhatsAppButton;
