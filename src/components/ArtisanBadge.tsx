import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
}

const ArtisanBadge = ({ selectedSize, onSizeChange }: ArtisanBadgeProps) => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div className="space-y-0">
      <div className="space-y-2">
        <div className="max-h-[420px] overflow-y-auto" onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}>
          {/* Tamanhos disponíveis */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-1.5 min-w-0">
              <p className="font-display text-sm font-bold text-foreground whitespace-nowrap">
                14 ao 22 disponíveis
              </p>
              <Select value={selectedSize || "none"} onValueChange={(val) => {
                onSizeChange?.(val === "none" ? "" : val);
              }}>
                <SelectTrigger
                  className="w-[52px] h-7 rounded-md font-display font-bold text-sm px-2 gap-0.5
                    bg-transparent border border-primary text-green-deep
                    hover:shadow-gold-sm focus:ring-primary/40 transition-all [&>svg]:h-3.5 [&>svg]:w-3.5"
                >
                  <SelectValue placeholder="Nº" />
                </SelectTrigger>
                <SelectContent className="w-[60px] min-w-[60px] bg-background/95 backdrop-blur-sm border border-primary rounded-md p-0 shadow-gold-sm">
                  <SelectItem
                    value="none"
                    className="font-body text-xs text-muted-foreground cursor-pointer justify-center px-2 py-1
                      focus:bg-primary/15"
                  >
                    —
                  </SelectItem>
                  {SIZES.map((size) => (
                    <SelectItem
                      key={size}
                      value={String(size)}
                      className="font-body text-sm font-semibold text-green-deep cursor-pointer justify-center px-2 py-1.5
                        focus:bg-primary/15 focus:text-green-deep"
                    >
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowGuide(!showGuide); }}
              onMouseDown={(e) => { e.stopPropagation(); }}
              className="flex items-center gap-1 font-display text-sm font-bold
                text-foreground hover:text-foreground/80 transition-all whitespace-nowrap"
            >
              📏 Como descobrir?
              <ChevronDown size={14} className={`transition-transform duration-200 ${showGuide ? "rotate-180" : ""}`} />
            </button>
          </div>

          {/* Guia inline */}
          {showGuide && (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              {/* Accordion métodos */}
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="method1" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground hover:no-underline py-2.5">
                    ▶️ Método 1: Com um anel que você já tem
                  </AccordionTrigger>
                  <AccordionContent className="text-xs font-body text-muted-foreground space-y-1.5 pb-3">
                    <p>• Pegue um anel que sirva bem no dedo desejado</p>
                    <p>• Coloque sobre uma régua e meça o <strong className="text-foreground">diâmetro interno</strong></p>
                    <p>• Compare com a tabela abaixo</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="method2" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground hover:no-underline py-2.5">
                    ▶️ Método 2: Com barbante ou fita
                  </AccordionTrigger>
                  <AccordionContent className="text-xs font-body text-muted-foreground space-y-1.5 pb-3">
                    <p>• Enrole um barbante na base do dedo (sem apertar)</p>
                    <p>• Marque o ponto de encontro</p>
                    <p>• Estique sobre uma régua e veja em milímetros</p>
                    <p>• Compare com a tabela de circunferência</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="method3" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground hover:no-underline py-2.5">
                    ▶️ Método 3: Com aneleira profissional
                  </AccordionTrigger>
                  <AccordionContent className="text-xs font-body text-muted-foreground space-y-1.5 pb-3">
                    <p>• Visite uma joalheria e peça para medir seu dedo</p>
                    <p>• É o método mais preciso e rápido</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="method4" className="border-primary/20">
                  <AccordionTrigger className="font-display text-xs text-foreground hover:no-underline py-2.5">
                    ▶️ Método 4: Assista ao vídeo explicativo
                  </AccordionTrigger>
                  <AccordionContent className="pb-3">
                    <video
                      src="/videos/como-descobrir-numero-anel-new.mp4"
                      className="w-full rounded-lg"
                      controls
                      playsInline
                    />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Tabela */}
              <div className="rounded-lg border border-primary/20 overflow-hidden">
                <table className="w-full text-xs font-body">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="py-1.5 px-3 text-left font-display text-foreground">Tam.</th>
                      <th className="py-1.5 px-3 text-center font-display text-foreground">Diâmetro</th>
                      <th className="py-1.5 px-3 text-center font-display text-foreground">Circunf.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeTable.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? "bg-secondary/30" : "bg-background"}>
                        <td className="py-1 px-3 font-semibold text-foreground">{row.size}</td>
                        <td className="py-1 px-3 text-center text-muted-foreground">{row.diameter} mm</td>
                        <td className="py-1 px-3 text-center text-muted-foreground">{row.circ} cm</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Dicas */}
              <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 space-y-1">
                <p className="font-display text-xs font-bold text-foreground">💡 Dicas:</p>
                <p className="text-xs font-body text-muted-foreground">• Meça no final do dia</p>
                <p className="text-xs font-body text-muted-foreground">• Entre dois números, escolha o maior</p>
                <p className="text-xs font-body text-muted-foreground">• Mãos esquerda e direita podem diferir</p>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground font-body italic leading-relaxed mt-2">
            Cada anel é produzido manualmente, com carinho e dedicação.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtisanBadge;
