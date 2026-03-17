import { useState } from "react";
import { Play, X, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel-new.mp4";

const SIZES = [14, 15, 16, 17, 18, 19, 20, 21, 22];

interface ArtisanBadgeProps {
  selectedSize?: string;
  onSizeChange?: (size: string) => void;
}

const ArtisanBadge = ({ selectedSize, onSizeChange }: ArtisanBadgeProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="space-y-0">
      <div className="rounded-xl border border-primary/30 bg-[#F9F6F0] dark:bg-card px-3 py-2 space-y-1.5">
        <div className="h-[200px] overflow-y-auto border border-border/50 rounded-lg p-2 bg-background" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          {/* Tamanhos disponíveis - linha única com dropdown */}
          <div className="flex items-center gap-2 mb-3">
            <p className="font-display text-sm font-bold text-foreground whitespace-nowrap">
              Tamanhos disponíveis
            </p>
            <Select value={selectedSize} onValueChange={(val) => onSizeChange?.(val)}>
              <SelectTrigger
                className="w-[100px] h-8 rounded-lg font-body font-semibold text-sm
                  bg-transparent border-2 border-primary text-green-deep
                  shadow-sm hover:shadow-gold-sm focus:ring-primary/40 transition-all"
              >
                <SelectValue placeholder="14 - 22" />
              </SelectTrigger>
              <SelectContent className="bg-background/80 backdrop-blur-sm border-2 border-primary rounded-lg shadow-gold-sm">
                {SIZES.map((size) => (
                  <SelectItem
                    key={size}
                    value={String(size)}
                    className="font-body font-semibold text-green-deep cursor-pointer
                      focus:bg-primary/15 focus:text-green-deep"
                  >
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <p className="text-xs text-muted-foreground font-body italic leading-relaxed">
            Cada anel é produzido manualmente, com carinho e dedicação.
            A flor que você receberá será muito semelhante à da foto,
            mas com as variações naturais que tornam cada peça especial e exclusiva.
          </p>
        </div>

        {/* Link para vídeo */}
        {!showVideo ? (
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowVideo(true); }}
            className="flex items-center gap-1.5 text-xs font-body font-semibold text-whatsapp-green hover:text-whatsapp-green/80 transition-colors"
          >
            <Play size={12} className="fill-whatsapp-green" />
            📏 Como descobrir seu número
          </button>
        ) : (
          <div className="relative" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
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
