import { useState } from "react";
import { Sparkles, Ruler, Play, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel.mp4";

const SIZE_TABLE = [
  { size: 14, mm: "14,5 mm" },
  { size: 15, mm: "15,0 mm" },
  { size: 16, mm: "15,5 mm" },
  { size: 17, mm: "16,0 mm" },
  { size: 18, mm: "17,0 mm" },
  { size: 19, mm: "17,5 mm" },
  { size: 20, mm: "18,0 mm" },
  { size: 21, mm: "19,0 mm" },
  { size: 22, mm: "19,5 mm" },
];

const ArtisanBadge = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

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

        {/* Guia completo expansível */}
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="w-full flex items-center justify-between text-xs font-body font-semibold text-primary hover:text-primary/80 transition-colors pt-1"
        >
          <span>📏 Como descobrir o tamanho do seu anel</span>
          {showGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {showGuide && (
          <div className="space-y-3 pt-1 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Método 1 */}
            <div className="space-y-1">
              <p className="text-xs font-body font-bold text-foreground">
                👉 Método 1 (anel que já serve):
              </p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                Meça o <strong className="text-foreground">diâmetro interno</strong> (parte de dentro, de uma borda à outra) com uma régua e compare com a tabela.
              </p>
            </div>

            {/* Método 2 */}
            <div className="space-y-1">
              <p className="text-xs font-body font-bold text-foreground">
                👉 Método 2 (medir o dedo):
              </p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">
                Use um barbante ou tira de papel, dê uma volta no dedo, marque e meça com régua. Depois confira na tabela.
              </p>
            </div>

            {/* Dicas */}
            <div className="space-y-1 bg-primary/5 rounded-lg p-2.5">
              <p className="text-xs font-body font-bold text-foreground">💡 Dicas importantes:</p>
              <ul className="text-xs text-muted-foreground font-body space-y-0.5 list-none">
                <li>• Meça no final do dia (dedos mais inchadinhos)</li>
                <li>• Se ficar entre dois números, escolha o maior</li>
                <li>• Em caso de dúvida, entre em contato!</li>
              </ul>
            </div>

            {/* Tabela */}
            <div className="space-y-1.5">
              <p className="text-xs font-body font-bold text-foreground">✨ Tabela de medidas (diâmetro interno):</p>
              <div className="grid grid-cols-3 gap-x-2 gap-y-0.5">
                {SIZE_TABLE.map(({ size, mm }) => (
                  <div key={size} className="flex items-center justify-between text-xs font-body py-0.5 px-1.5 rounded bg-background/60">
                    <span className="font-semibold text-foreground">{size}</span>
                    <span className="text-muted-foreground">→ {mm}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA contato */}
            <a
              href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda para descobrir meu número de anel."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-body font-semibold text-green-700 hover:text-green-800 transition-colors"
            >
              <MessageCircle size={13} />
              Dúvidas? Fale conosco no WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtisanBadge;
