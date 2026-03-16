import { useState } from "react";
import { Sparkles, Ruler, Play, ChevronDown, ChevronUp, MessageCircle, Circle, Lightbulb } from "lucide-react";

const MEASUREMENT_VIDEO = "/videos/como-descobrir-numero-anel-new.mp4";

const ArtisanBadge = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

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

      {/* Guia de Tamanho */}
      <div className="rounded-xl border border-primary/30 bg-[#F9F6F0] dark:bg-card px-3 py-2 space-y-1.5">
        <p className="font-display text-sm font-bold text-foreground flex items-center gap-1.5">
          <Ruler size={14} className="text-whatsapp-green" />
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
            <div className="w-7 h-7 rounded-full bg-whatsapp-green flex items-center justify-center shrink-0">
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
          className="w-full flex items-center justify-between text-xs font-body font-semibold text-whatsapp-green hover:text-whatsapp-green/80 transition-colors pt-1"
        >
          <span className="flex items-center gap-1.5">
            <Ruler size={13} className="text-whatsapp-green" />
            Como descobrir o tamanho do seu anel
          </span>
          {showGuide ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>

        {showGuide && (
          <div className="space-y-3 pt-1 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Método 1 */}
            <div className="space-y-1">
              <p className="text-xs font-body font-bold text-foreground flex items-center gap-1.5">
                <Circle size={10} className="text-whatsapp-green fill-whatsapp-green" />
                Método 1: Com um anel que você já tem
              </p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed pl-4">
                Pegue um anel que sirva no dedo desejado. Coloque sobre uma régua e meça o <strong className="text-foreground">diâmetro interno</strong> – a parte de dentro, de uma borda à outra. Depois compare com a tabela abaixo.
              </p>
            </div>

            {/* Método 2 */}
            <div className="space-y-1">
              <p className="text-xs font-body font-bold text-foreground flex items-center gap-1.5">
                <Circle size={10} className="text-whatsapp-green fill-whatsapp-green" />
                Método 2: Medindo o dedo com barbante ou fita
              </p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed pl-4">
                Enrole um barbante ou tira de papel na <strong className="text-foreground">base do dedo</strong>, sem apertar. Marque onde encontra a outra ponta, estique sobre uma régua e confira a <strong className="text-foreground">circunferência</strong> na tabela.
              </p>
              <div className="pl-4">
                <MethodVideo videoSrc={VIDEO_METODO_BARBANTE} label="Ver demonstração com barbante" />
              </div>
            </div>

            {/* Método 3 */}
            <div className="space-y-1">
              <p className="text-xs font-body font-bold text-foreground flex items-center gap-1.5">
                <Circle size={10} className="text-whatsapp-green fill-whatsapp-green" />
                Método 3: Usando uma aneleira
              </p>
              <p className="text-xs text-muted-foreground font-body leading-relaxed pl-4">
                É um kit com aros numerados — experimente até achar o mais confortável. Joalherias costumam ter esse medidor e podem ajudar!
              </p>
              <div className="pl-4">
                <MethodVideo videoSrc={VIDEO_METODO_ANELEIRA} label="Ver demonstração com aneleira" />
              </div>
            </div>

            {/* Dicas */}
            <div className="space-y-1 bg-primary/5 rounded-lg p-2.5">
              <p className="text-xs font-body font-bold text-foreground flex items-center gap-1.5">
                <Lightbulb size={13} className="text-whatsapp-green" />
                Dicas importantes:
              </p>
              <ul className="text-xs text-muted-foreground font-body space-y-0.5 list-none pl-5">
                <li>• Meça no final do dia, quando os dedos estão mais quentes</li>
                <li>• Se ficar entre dois números, escolha o maior — melhor folgado que apertado</li>
                <li>• Em caso de dúvida, entre em contato!</li>
              </ul>
            </div>

            {/* Tabela */}
            <div className="space-y-1.5">
              <p className="text-xs font-body font-bold text-foreground flex items-center gap-1.5">
                <Sparkles size={13} className="text-whatsapp-green" />
                Tabela de medidas:
              </p>
              <div className="grid grid-cols-1 gap-y-0.5">
                <div className="flex items-center text-[10px] font-body font-bold text-muted-foreground px-1.5 pb-0.5">
                  <span className="w-10">Tam.</span>
                  <span className="flex-1">Diâmetro</span>
                  <span className="flex-1 text-right">Circunf.</span>
                </div>
                {SIZE_TABLE.map(({ size, mm, circ }) => (
                  <div key={size} className="flex items-center text-xs font-body py-0.5 px-1.5 rounded bg-background/60">
                    <span className="w-10 font-semibold text-foreground">{size}</span>
                    <span className="flex-1 text-muted-foreground">{mm}</span>
                    <span className="flex-1 text-right text-muted-foreground">{circ}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA contato */}
            <a
              href="https://wa.me/5511996470414?text=Olá! Preciso de ajuda para descobrir meu número de anel."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-body font-semibold text-whatsapp-green hover:text-whatsapp-green/80 transition-colors"
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
