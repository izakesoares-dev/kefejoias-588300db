import { Sparkles } from "lucide-react";

const ArtisanBadge = () => (
  <div className="rounded-xl border border-primary/30 bg-[#F9F6F0] dark:bg-card p-4 space-y-1.5">
    <p className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
      <Sparkles size={14} className="text-primary" />
      Peça Única Artesanal
    </p>
    <p className="text-xs text-muted-foreground font-body italic leading-relaxed">
      Cada anel é produzido manualmente, com carinho e dedicação.
      A flor que você receberá será muito semelhante à da foto,
      mas com as variações naturais que tornam cada peça especial e exclusiva.
    </p>
  </div>
);

export default ArtisanBadge;
