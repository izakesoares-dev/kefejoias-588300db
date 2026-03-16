import { useState } from "react";
import { Sparkles, Ruler, Play } from "lucide-react";

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel.mp4";

const ArtisanBadge = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
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

      <div className="border-t border-primary/20 pt-2.5 space-y-2">
        <p className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
          <Ruler size={14} className="text-primary" />
          Tamanhos: 14 a 22
        </p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          Não sabe o seu número? Assista ao vídeo e descubra como medir em casa!
        </p>

        {!showVideo ? (
          <button
            onClick={() => setShowVideo(true)}
            className="relative w-full h-11 rounded-lg overflow-hidden bg-black/60 group cursor-pointer flex items-center gap-2.5 px-3"
          >
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
              <Play size={13} className="text-primary-foreground ml-0.5" />
            </div>
            <span className="text-xs text-white font-body font-semibold">
              📏 Como descobrir seu número
            </span>
          </button>
        ) : (
          <video
            src={MEASUREMENT_VIDEO}
            className="w-full rounded-lg"
            controls
            autoPlay
            playsInline
          />
        )}
      </div>
    </div>
  );
};

export default ArtisanBadge;
