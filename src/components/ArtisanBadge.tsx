import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SIZES = [14, 15, 16, 17, 18, 19, 20, 21, 22];

const sizeTable = [
  { size: 14, diameter: "16,2", circ: "5,4" },
  { size: 15, diameter: "16,5", circ: "5,5" },
  { size: 16, diameter: "16,8", circ: "5,6" },
  { size: 17, diameter: "17,2", circ: "5,7" },
  { size: 18, diameter: "17,5", circ: "5,8" },
  { size: 19, diameter: "17,8", circ: "5,9" },
  { size: 20, diameter: "18,2", circ: "6,0" },
  { size: 21, diameter: "18,5", circ: "6,1" },
  { size: 22, diameter: "18,8", circ: "6,2" },
];

interface ArtisanBadgeProps {
  selectedSize?: string;
  onSizeChange?: (size: string) => void;
  collapsed?: boolean;
  hideArtisanNote?: boolean;
  artisanType?: "flor" | "pedra" | "pimenta" | "semente";
}

const artisanLabels: Record<string, string> = {
  flor: "A flor que você receberá será muito semelhante à da foto, mas com variações naturais que tornam cada peça especial.",
  pedra: "A pedra que você receberá será muito semelhante à da foto, mas com variações naturais que tornam cada peça especial.",
  pimenta: "A pimenta que você receberá será muito semelhante à da foto, mas com variações naturais que tornam cada peça especial.",
  semente: "A semente que você receberá será muito semelhante à da foto, mas com variações naturais que tornam cada peça especial.",
};

const ArtisanBadge = ({ selectedSize, onSizeChange, collapsed, hideArtisanNote, artisanType = "flor" }: ArtisanBadgeProps) => {
  const [showGuide, setShowGuide] = useState(false);
  const [sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const sizeDropdownRef = useRef<HTMLDivElement | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleCloseTimer = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setSizeDropdownOpen(false);
    }, 1000);
  };

  useEffect(() => {
    if (collapsed) {
      setShowGuide(false);
      setSizeDropdownOpen(false);
      clearCloseTimer();
    }
  }, [collapsed]);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!sizeDropdownRef.current?.contains(event.target as Node)) {
        setSizeDropdownOpen(false);
        clearCloseTimer();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      clearCloseTimer();
    };
  }, []);

  const handleSizeChange = (size: string) => {
    onSizeChange?.(size);
    setSizeDropdownOpen(false);
    setShowGuide(false);
    clearCloseTimer();
  };

  return (
    <div className="space-y-0">
      <div className="space-y-1">
        <div
          className="scrollbar-none"
          style={{ scrollbarWidth: "none" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="space-y-1 mb-2">
            <div className="flex items-center justify-between w-full">
              <p className="font-display text-sm font-bold text-foreground whitespace-nowrap">
                14 ao 22 disponíveis
              </p>

              <div
                ref={sizeDropdownRef}
                className="relative flex items-center gap-1"
                onMouseEnter={clearCloseTimer}
                onMouseLeave={() => {
                  if (sizeDropdownOpen) scheduleCloseTimer();
                }}
              >
                <span className="font-display text-sm font-bold text-foreground whitespace-nowrap">📏 Seu tamanho</span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    clearCloseTimer();
                    setSizeDropdownOpen((prev) => !prev);
                  }}
                  className="flex h-7 w-[52px] items-center justify-between rounded-md border border-primary bg-transparent px-2 text-sm font-display font-bold text-green-deep transition-all hover:shadow-gold-sm"
                >
                  <span>{selectedSize || "Nº"}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${sizeDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {sizeDropdownOpen && (
                  <div className="absolute right-0 bottom-full z-50 mb-1 w-[60px] min-w-[60px] max-h-[260px] overflow-y-auto rounded-md border border-primary bg-background p-1 shadow-gold-sm backdrop-blur-sm">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleSizeChange("");
                      }}
                      className="flex w-full items-center justify-center rounded-sm px-2 py-1 text-xs font-body text-muted-foreground transition-colors hover:bg-primary/15"
                    >
                      —
                    </button>
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleSizeChange(String(size));
                        }}
                        className="flex w-full items-center justify-center rounded-sm px-2 py-1.5 text-sm font-body font-semibold text-green-deep transition-colors hover:bg-primary/15"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowGuide(!showGuide);
              }}
              onMouseDown={(e) => {
                e.stopPropagation();
              }}
              className="flex items-center gap-1 font-display text-xs font-bold text-foreground transition-all hover:text-foreground/80 whitespace-nowrap"
            >
              Como descobrir seu tamanho?
              <ChevronDown size={12} className={`transition-transform duration-200 ${showGuide ? "rotate-180" : ""}`} />
            </button>
          </div>

          {showGuide && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="method1" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground py-2.5 hover:no-underline">
                    ▶️ Método 1: Com um anel que você já tem
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1.5 pb-3 text-sm font-body text-muted-foreground">
                    <p>• Pegue um anel que sirva bem no dedo desejado</p>
                    <p>• Coloque sobre uma régua e meça o <strong className="text-foreground">diâmetro interno</strong></p>
                    <p>• Compare com a tabela abaixo</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="method2" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground py-2.5 hover:no-underline">
                    ▶️ Método 2: Com barbante ou fita
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1.5 pb-3 text-sm font-body text-muted-foreground">
                    <p>• Enrole um barbante na base do dedo (sem apertar)</p>
                    <p>• Marque o ponto de encontro</p>
                    <p>• Estique sobre uma régua e veja em milímetros</p>
                    <p>• Compare com a tabela de circunferência</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="method3" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground py-2.5 hover:no-underline">
                    ▶️ Método 3: Com aneleira profissional
                  </AccordionTrigger>
                  <AccordionContent className="space-y-1.5 pb-3 text-sm font-body text-muted-foreground">
                    <p>• Visite uma joalheria e peça para medir seu dedo</p>
                    <p>• É o método mais preciso e rápido</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="method4" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground py-2.5 hover:no-underline">
                    ▶️ Método 4: Assista ao vídeo explicativo
                  </AccordionTrigger>
                  <AccordionContent className="pb-3">
                    <video
                      src="/videos/como-descobrir-numero-anel-new.mp4"
                      className="w-full rounded-lg"
                      controls
                      playsInline
                      onEnded={() => setShowGuide(false)}
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="overflow-hidden rounded-lg border border-primary/20">
                <table className="w-full text-xs font-body">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="px-3 py-1.5 text-left font-display text-foreground">Tamanho</th>
                      <th className="px-3 py-1.5 text-center font-display text-foreground">Diâmetro</th>
                      <th className="px-3 py-1.5 text-center font-display text-foreground">Circunf.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeTable.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? "bg-secondary/30" : "bg-background"}>
                        <td className="px-3 py-1 font-semibold text-foreground">{row.size}</td>
                        <td className="px-3 py-1 text-center text-muted-foreground">{row.diameter} mm</td>
                        <td className="px-3 py-1 text-center text-muted-foreground">{row.circ} cm</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-1 rounded-lg border border-primary/20 bg-primary/5 p-3">
                <p className="font-display text-xs font-bold text-foreground">💡 Dicas:</p>
                <p className="text-xs font-body text-muted-foreground">• Meça no final do dia</p>
                <p className="text-xs font-body text-muted-foreground">• Entre dois números, escolha o maior</p>
                <p className="text-xs font-body text-muted-foreground">• Mãos esquerda e direita podem diferir</p>
              </div>
            </div>
          )}

          {!hideArtisanNote && (
            <div className="mt-1 space-y-0">
              <p className="text-[11px] text-center font-display font-bold text-foreground">✨ Peça Única Artesanal</p>
              <p className="text-[11px] font-body italic leading-snug text-muted-foreground">
                Cada anel é produzido manualmente, com carinho e dedicação. {artisanLabels[artisanType] || artisanLabels.pedra}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtisanBadge;
