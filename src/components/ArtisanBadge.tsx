import { useState } from "react";
import { Ruler } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import RingSizeGuideModal from "@/components/RingSizeGuideModal";

const SIZES = [14, 15, 16, 17, 18, 19, 20, 21, 22];

interface ArtisanBadgeProps {
  selectedSize?: string;
  onSizeChange?: (size: string) => void;
}

const ArtisanBadge = ({ selectedSize, onSizeChange }: ArtisanBadgeProps) => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="space-y-0">
      <div className="rounded-xl border border-primary/30 bg-[#F9F6F0] dark:bg-card px-3 py-2 space-y-1.5">
        <div className="h-[200px] overflow-y-auto border border-border/50 rounded-lg p-2 bg-background" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          {/* Tamanhos disponíveis - linha única com dropdown + botão guia */}
          <div className="flex items-center gap-2 mb-3">
            <p className="font-display text-sm font-bold text-foreground whitespace-nowrap">
              Tamanhos disponíveis
            </p>
            <Select value={selectedSize} onValueChange={(val) => onSizeChange?.(val)}>
              <SelectTrigger
                className="w-[90px] h-7 rounded-md font-body font-semibold text-xs px-2 gap-1
                  bg-transparent border border-primary text-green-deep
                  hover:shadow-gold-sm focus:ring-primary/40 transition-all"
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

            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowGuide(true); }}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-body font-semibold
                border border-primary/50 text-primary bg-primary/5
                hover:bg-primary/10 hover:shadow-gold-sm transition-all whitespace-nowrap"
            >
              📏 Como descobrir?
            </button>
          </div>

          <p className="text-xs text-muted-foreground font-body italic leading-relaxed">
            Cada anel é produzido manualmente, com carinho e dedicação.
            A flor que você receberá será muito semelhante à da foto,
            mas com as variações naturais que tornam cada peça especial e exclusiva.
          </p>
        </div>
      </div>

      <RingSizeGuideModal open={showGuide} onOpenChange={setShowGuide} />
    </div>
  );
};

export default ArtisanBadge;
