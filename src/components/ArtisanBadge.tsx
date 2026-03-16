import { Sparkles, Ruler } from "lucide-react";

const ArtisanBadge = () => (
  <div className="rounded-xl border border-primary/30 bg-[#F9F6F0] dark:bg-card p-4 space-y-3">
    <div className="space-y-1.5">
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
    <div className="border-t border-primary/20 pt-2.5 space-y-1">
      <p className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
        <Ruler size={14} className="text-primary" />
        Escolha o tamanho
      </p>
      <p className="text-xs text-muted-foreground font-body leading-relaxed">
        Disponível do <span className="font-semibold text-foreground">14</span> ao <span className="font-semibold text-foreground">22</span>.
        Não sabe o seu número? Consulte nosso guia de medidas ou entre em contato.
      </p>
    </div>
  </div>
);

export default ArtisanBadge;
