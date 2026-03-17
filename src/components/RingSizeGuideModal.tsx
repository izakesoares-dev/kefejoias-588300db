import { useState } from "react";
import { Ruler, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel-new.mp4";

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

interface RingSizeGuideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RingSizeGuideModal = ({ open, onOpenChange }: RingSizeGuideModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md w-[92vw] max-h-[85vh] overflow-y-auto p-4 sm:p-5 bg-background border-2 border-primary/40 rounded-2xl shadow-gold">
        <DialogTitle className="font-display text-lg text-foreground text-center">
          📏 Como descobrir o tamanho do seu anel
        </DialogTitle>

        {/* Video */}
        <div className="rounded-lg overflow-hidden">
          <video
            src={MEASUREMENT_VIDEO}
            className="w-full rounded-lg"
            controls
            playsInline
          />
        </div>

        {/* Accordion Methods */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="method1" className="border-primary/20">
            <AccordionTrigger className="font-display text-sm text-foreground hover:no-underline py-3">
              ▶️ Método 1: Com um anel que você já tem
            </AccordionTrigger>
            <AccordionContent className="text-xs font-body text-muted-foreground space-y-1.5 pb-3">
              <p>• Pegue um anel que sirva bem no dedo desejado</p>
              <p>• Coloque sobre uma régua e meça o <strong className="text-foreground">diâmetro interno</strong> (parte de dentro, de uma borda a outra)</p>
              <p>• Compare com a tabela abaixo</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="method2" className="border-primary/20">
            <AccordionTrigger className="font-display text-sm text-foreground hover:no-underline py-3">
              ▶️ Método 2: Com barbante ou fita
            </AccordionTrigger>
            <AccordionContent className="text-xs font-body text-muted-foreground space-y-1.5 pb-3">
              <p>• Enrole um barbante na base do dedo (sem apertar)</p>
              <p>• Marque o ponto de encontro</p>
              <p>• Estique sobre uma régua e veja a medida em milímetros</p>
              <p>• Compare com a tabela de circunferência</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="method3" className="border-primary/20">
            <AccordionTrigger className="font-display text-sm text-foreground hover:no-underline py-3">
              ▶️ Método 3: Com aneleira (medidor profissional)
            </AccordionTrigger>
            <AccordionContent className="text-xs font-body text-muted-foreground space-y-1.5 pb-3">
              <p>• Visite uma joalheria e peça para medir seu dedo</p>
              <p>• É o método mais preciso e rápido</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Size Table */}
        <div className="rounded-lg border border-primary/20 overflow-hidden">
          <table className="w-full text-xs font-body">
            <thead>
              <tr className="bg-primary/10">
                <th className="py-2 px-3 text-left font-display text-foreground">Tamanho</th>
                <th className="py-2 px-3 text-center font-display text-foreground">Diâmetro</th>
                <th className="py-2 px-3 text-center font-display text-foreground">Circunf.</th>
              </tr>
            </thead>
            <tbody>
              {sizeTable.map((row, i) => (
                <tr key={row.size} className={i % 2 === 0 ? "bg-secondary/30" : "bg-background"}>
                  <td className="py-1.5 px-3 font-semibold text-foreground">{row.size}</td>
                  <td className="py-1.5 px-3 text-center text-muted-foreground">{row.diameter} mm</td>
                  <td className="py-1.5 px-3 text-center text-muted-foreground">{row.circ} cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tips */}
        <div className="rounded-lg bg-primary/5 border border-primary/20 p-3 space-y-1.5">
          <p className="font-display text-xs font-bold text-foreground">💡 Dicas importantes:</p>
          <p className="text-xs font-body text-muted-foreground">• Meça no final do dia (dedos mais quentes)</p>
          <p className="text-xs font-body text-muted-foreground">• Se ficar entre dois números, escolha o maior</p>
          <p className="text-xs font-body text-muted-foreground">• Dedos da mão esquerda e direita podem ter tamanhos diferentes</p>
        </div>

        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="w-full py-2.5 rounded-full bg-primary text-primary-foreground font-body font-medium text-sm hover:bg-primary/90 transition-all shadow-gold"
        >
          Fechar
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default RingSizeGuideModal;
