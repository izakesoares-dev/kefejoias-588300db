import { useState } from "react";
import { Sparkles, Play, X } from "lucide-react";

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel-new.mp4";

const SIZES = [14, 15, 16, 17, 18, 19, 20, 21, 22];

const ArtisanBadge = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="space-y-0">
      {/* Selo Peça Única */}
      <div className="rounded-xl border border-primary/30 bg-[#F9F6F0] dark:bg-card px-3 py-2 space-y-1">
        <p className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
          <Sparkles size={14} className="text-whatsapp-green" />
          Peça Única Artesanal
        </p>
        <p className="text-xs text-muted-foreground font-body italic leading-relaxed">
          Cada anel é produzido manualmente, com carinho e dedicação.
          A flor que você receberá será muito semelhante à da foto,
          mas com as variações naturais que tornam cada peça especial e exclusiva.
        </p>
      </div>

      {/* Tamanhos + barra de rolagem na mesma linha */}
      <div className="rounded-xl border border-primary/30 bg-[#F9F6F0] dark:bg-card px-3 py-2 space-y-1.5">
        <div className="flex items-center gap-2">
          <p className="font-display text-sm font-bold text-foreground whitespace-nowrap">
            Tamanhos:
          </p>
          <div className="flex-1 overflow-x-auto scrollbar-hide">
            <div className="flex gap-1.5">
              {SIZES.map((size) => (
                <span
                  key={size}
                  className="shrink-0 w-8 h-8 rounded-full bg-background border border-border text-xs font-body font-semibold text-foreground flex items-center justify-center"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Link para vídeo */}
        {!showVideo ? (
          <button
            onClick={() => setShowVideo(true)}
            className="flex items-center gap-1.5 text-xs font-body font-semibold text-whatsapp-green hover:text-whatsapp-green/80 transition-colors"
          >
            <Play size={12} className="fill-whatsapp-green" />
            📏 Como descobrir seu número
          </button>
        ) : (
          <div className="relative">
            <video
              src={MEASUREMENT_VIDEO}
              className="w-full rounded-lg max-h-40"
              controls
              autoPlay
              playsInline
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center text-xs hover:bg-black/80 transition-colors"
            >
              <X size={12} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtisanBadge;
