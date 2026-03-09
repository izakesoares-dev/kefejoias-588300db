import { Product } from "./products";

// Stone Necklace Images
import necklaceAmetista from "@/assets/necklace-ametista.jpg";
import necklaceCitrino from "@/assets/necklace-citrino.jpg";
import necklaceQuartzoRosa from "@/assets/necklace-quartzo-rosa.jpg";
import necklaceTurmalinaNegra from "@/assets/necklace-turmalina-negra.jpg";
import necklaceOlhoTigre from "@/assets/necklace-olho-tigre.jpg";
import necklaceJade from "@/assets/necklace-jade.jpg";
import necklaceLapisLazuli from "@/assets/necklace-lapis-lazuli.jpg";
import necklaceCornalina from "@/assets/necklace-cornalina.jpg";
import necklacePedraLua from "@/assets/necklace-pedra-lua.jpg";
import necklaceAventurina from "@/assets/necklace-aventurina.jpg";
import necklaceObsidiana from "@/assets/necklace-obsidiana.jpg";
import necklaceHematita from "@/assets/necklace-hematita.jpg";
import necklaceSodalita from "@/assets/necklace-sodalita.jpg";
import necklaceGranada from "@/assets/necklace-granada.jpg";
import necklaceFluorita from "@/assets/necklace-fluorita.jpg";
import necklaceTurquesa from "@/assets/necklace-turquesa.jpg";
import necklaceJaspeVermelho from "@/assets/necklace-jaspe-vermelho.jpg";
import necklaceUnakita from "@/assets/necklace-unakita.jpg";
import necklaceAmazonita from "@/assets/necklace-amazonita.jpg";
import necklaceCristalQuartzo from "@/assets/necklace-cristal-quartzo.jpg";

// Steel Chain & Cord Necklace Images
import necklaceAcoAmetista from "@/assets/necklace-aco-ametista.jpg";
import necklaceAcoQuartzoRosa from "@/assets/necklace-aco-quartzo-rosa.jpg";
import necklaceAcoOlhoTigre from "@/assets/necklace-aco-olho-tigre.jpg";
import necklaceCordaoTurmalina from "@/assets/necklace-cordao-turmalina.jpg";
import necklaceCordaoCitrino from "@/assets/necklace-cordao-citrino.jpg";
import necklaceCordaoJade from "@/assets/necklace-cordao-jade.jpg";

// Resin Necklace Images
import necklaceResinGirassol from "@/assets/necklace-resin-girassol.jpg";
import necklaceResinPimenta from "@/assets/necklace-resin-pimenta.jpg";
import necklaceResinRosa from "@/assets/necklace-resin-rosa.jpg";
import necklaceResinLavanda from "@/assets/necklace-resin-lavanda.jpg";
import necklaceResinMargarida from "@/assets/necklace-resin-margarida.jpg";
import necklaceResinPimentaRosa from "@/assets/necklace-resin-pimenta-rosa.jpg";

// Resin Steel Chain & Cord Necklace Images
import necklaceResinAcoRosa from "@/assets/necklace-resin-aco-rosa.jpg";
import necklaceResinAcoGirassol from "@/assets/necklace-resin-aco-girassol.jpg";
import necklaceResinAcoLavanda from "@/assets/necklace-resin-aco-lavanda.jpg";
import necklaceResinCordaoPimenta from "@/assets/necklace-resin-cordao-pimenta.jpg";
import necklaceResinCordaoMargarida from "@/assets/necklace-resin-cordao-margarida.jpg";
import necklaceResinCordaoPimentaRosa from "@/assets/necklace-resin-cordao-pimenta-rosa.jpg";

export const stoneNecklaces: Product[] = [
  {
    id: "colar-ametista",
    name: "Colar Ametista",
    slug: "colar-ametista",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de ametista alternadas com contas de aço inoxidável. A Ametista promove conexão espiritual, intuição elevada e calma interior. Comprimento ajustável de 45cm + 5cm de extensão. Fecho em aço inoxidável antialérgico.",
    shortDescription: "Conexão espiritual com pedras de ametista e contas de aço",
    images: [necklaceAmetista],
    elements: [
      { name: "Ametista", meaning: "Transmutação, intuição e conexão espiritual", icon: "🔮" }
    ],
    significance: "Espiritualidade",
    relatedIds: ["colar-quartzo-rosa", "colar-pedra-lua"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "colar-citrino",
    name: "Colar Citrino",
    slug: "colar-citrino",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de citrino alternadas com contas douradas. O Citrino é a pedra da prosperidade e abundância, atraindo riqueza e energia positiva. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Prosperidade e abundância com pedras de citrino dourado",
    images: [necklaceCitrino],
    elements: [
      { name: "Citrino", meaning: "Abundância, autoestima e energia solar", icon: "💛" }
    ],
    significance: "Prosperidade",
    relatedIds: ["colar-jade-verde", "colar-aventurina"],
    inStock: true,
    badge: "Prosperidade",
  },
  {
    id: "colar-quartzo-rosa",
    name: "Colar Quartzo Rosa",
    slug: "colar-quartzo-rosa",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de quartzo rosa alternadas com contas de aço. O Quartzo Rosa é a pedra do amor incondicional, promovendo cura emocional e relacionamentos harmoniosos. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Amor incondicional com pedras de quartzo rosa",
    images: [necklaceQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Amor incondicional, cura emocional e compaixão", icon: "💎" }
    ],
    significance: "Amor e cura",
    relatedIds: ["colar-pedra-lua", "colar-ametista"],
    inStock: true,
    badge: "Amor",
  },
  {
    id: "colar-turmalina-negra",
    name: "Colar Turmalina Negra",
    slug: "colar-turmalina-negra",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 139.90,
    description: "Colar com pedras de turmalina negra alternadas com contas de aço. A Turmalina Negra é o escudo absoluto contra energias densas, oferecendo proteção máxima. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Proteção absoluta com pedras de turmalina negra",
    images: [necklaceTurmalinaNegra],
    elements: [
      { name: "Turmalina Negra", meaning: "Proteção contra negatividade e vampirismo energético", icon: "🖤" }
    ],
    significance: "Proteção absoluta",
    relatedIds: ["colar-olho-tigre", "colar-ametista"],
    inStock: true,
  },
  {
    id: "colar-olho-tigre",
    name: "Colar Olho de Tigre",
    slug: "colar-olho-tigre",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de olho de tigre alternadas com contas douradas. O Olho de Tigre atrai coragem, proteção contra inveja e prosperidade. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Coragem e proteção com pedras de olho de tigre",
    images: [necklaceOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Proteção contra inveja e atração de oportunidades", icon: "🐯" }
    ],
    significance: "Proteção e prosperidade",
    relatedIds: ["colar-turmalina-negra", "colar-citrino"],
    inStock: true,
  },
  {
    id: "colar-jade-verde",
    name: "Colar Jade Verde",
    slug: "colar-jade-verde",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 149.90,
    description: "Colar com pedras de jade verde alternadas com contas douradas. O Jade Verde é o talismã milenar da sorte, trazendo prosperidade e longevidade. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Sorte e prosperidade milenar com pedras de jade verde",
    images: [necklaceJade],
    elements: [
      { name: "Jade Verde", meaning: "Sorte, longevidade e prosperidade milenar", icon: "💚" }
    ],
    significance: "Sorte e longevidade",
    relatedIds: ["colar-citrino", "colar-aventurina"],
    inStock: true,
  },
  {
    id: "colar-lapis-lazuli",
    name: "Colar Lápis-Lazúli",
    slug: "colar-lapis-lazuli",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 159.90,
    description: "Colar com pedras de lápis-lazúli alternadas com contas douradas. O Lápis-Lazúli carrega a sabedoria dos antigos, promovendo verdade e expressão clara. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Sabedoria ancestral com pedras de lápis-lazúli",
    images: [necklaceLapisLazuli],
    elements: [
      { name: "Lápis-Lazúli", meaning: "Sabedoria ancestral, verdade e clareza", icon: "💙" }
    ],
    significance: "Sabedoria",
    relatedIds: ["colar-ametista", "colar-pedra-lua"],
    inStock: true,
  },
  {
    id: "colar-cornalina",
    name: "Colar Cornalina",
    slug: "colar-cornalina",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de cornalina alternadas com contas douradas. A Cornalina traz energia vital, paixão e criatividade para sua vida. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Paixão e energia vital com pedras de cornalina",
    images: [necklaceCornalina],
    elements: [
      { name: "Cornalina", meaning: "Vitalidade, paixão e coragem criativa", icon: "🔥" }
    ],
    significance: "Vitalidade",
    relatedIds: ["colar-olho-tigre", "colar-citrino"],
    inStock: true,
  },
  {
    id: "colar-pedra-lua",
    name: "Colar Pedra da Lua",
    slug: "colar-pedra-lua",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 149.90,
    description: "Colar com pedras da lua alternadas com contas prateadas. A Pedra da Lua conecta com os ciclos femininos e a intuição, promovendo equilíbrio emocional. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Intuição feminina e equilíbrio com pedras da lua",
    images: [necklacePedraLua],
    elements: [
      { name: "Pedra da Lua", meaning: "Intuição, feminilidade e ciclos naturais", icon: "🌙" }
    ],
    significance: "Feminino sagrado",
    relatedIds: ["colar-quartzo-rosa", "colar-ametista"],
    inStock: true,
    badge: "Feminino",
  },
  {
    id: "colar-aventurina",
    name: "Colar Aventurina Verde",
    slug: "colar-aventurina",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de aventurina verde alternadas com contas douradas. A Aventurina Verde é a porta das oportunidades, trazendo sorte e crescimento. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Sorte e oportunidades com pedras de aventurina verde",
    images: [necklaceAventurina],
    elements: [
      { name: "Aventurina Verde", meaning: "Oportunidades, sorte e crescimento", icon: "🍀" }
    ],
    significance: "Oportunidades",
    relatedIds: ["colar-jade-verde", "colar-citrino"],
    inStock: true,
  },
  {
    id: "colar-obsidiana",
    name: "Colar Obsidiana",
    slug: "colar-obsidiana",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de obsidiana alternadas com contas prateadas. A Obsidiana é o espelho da verdade, revelando verdades ocultas e promovendo limpeza energética profunda. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Verdade e limpeza energética com obsidiana",
    images: [necklaceObsidiana],
    elements: [
      { name: "Obsidiana", meaning: "Verdade, transformação e limpeza profunda", icon: "⚫" }
    ],
    significance: "Transformação",
    relatedIds: ["colar-turmalina-negra", "colar-hematita"],
    inStock: true,
  },
  {
    id: "colar-hematita",
    name: "Colar Hematita",
    slug: "colar-hematita",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 119.90,
    description: "Colar com pedras de hematita alternadas com contas de aço. A Hematita é a âncora que conecta à terra, oferecendo aterramento e estabilidade emocional. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Aterramento e estabilidade com hematita",
    images: [necklaceHematita],
    elements: [
      { name: "Hematita", meaning: "Aterramento, foco e estabilidade emocional", icon: "⛓️" }
    ],
    significance: "Aterramento",
    relatedIds: ["colar-obsidiana", "colar-turmalina-negra"],
    inStock: true,
  },
  {
    id: "colar-sodalita",
    name: "Colar Sodalita",
    slug: "colar-sodalita",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de sodalita alternadas com contas prateadas. A Sodalita promove comunicação autêntica, racionalidade e expressão honesta. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Comunicação autêntica com sodalita",
    images: [necklaceSodalita],
    elements: [
      { name: "Sodalita", meaning: "Comunicação autêntica e verdade interior", icon: "🧿" }
    ],
    significance: "Comunicação",
    relatedIds: ["colar-lapis-lazuli", "colar-amazonita"],
    inStock: true,
  },
  {
    id: "colar-granada",
    name: "Colar Granada",
    slug: "colar-granada",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 149.90,
    description: "Colar com pedras de granada alternadas com contas douradas. A Granada é a chama da paixão eterna, revitalizando relacionamentos e despertando energia. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Paixão e energia com pedras de granada",
    images: [necklaceGranada],
    elements: [
      { name: "Granada", meaning: "Paixão, vigor e amor intenso", icon: "❤️‍🔥" }
    ],
    significance: "Paixão",
    relatedIds: ["colar-cornalina", "colar-quartzo-rosa"],
    inStock: true,
  },
  {
    id: "colar-fluorita",
    name: "Colar Fluorita",
    slug: "colar-fluorita",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 139.90,
    description: "Colar com pedras de fluorita alternadas com contas prateadas. A Fluorita promove concentração, organização e aprendizado. Ideal para estudantes e profissionais. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Concentração e foco mental com fluorita",
    images: [necklaceFluorita],
    elements: [
      { name: "Fluorita", meaning: "Foco mental, organização e clareza", icon: "🧠" }
    ],
    significance: "Foco mental",
    relatedIds: ["colar-sodalita", "colar-ametista"],
    inStock: true,
  },
  {
    id: "colar-turquesa",
    name: "Colar Turquesa",
    slug: "colar-turquesa",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 159.90,
    description: "Colar com pedras de turquesa alternadas com contas prateadas. A Turquesa é o amuleto dos viajantes, oferecendo proteção, sabedoria e cura holística. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Proteção viajante e sabedoria com turquesa",
    images: [necklaceTurquesa],
    elements: [
      { name: "Turquesa", meaning: "Proteção viajante, sabedoria ancestral", icon: "🩵" }
    ],
    significance: "Proteção viajante",
    relatedIds: ["colar-lapis-lazuli", "colar-amazonita"],
    inStock: true,
  },
  {
    id: "colar-jaspe-vermelho",
    name: "Colar Jaspe Vermelho",
    slug: "colar-jaspe-vermelho",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de jaspe vermelho alternadas com contas douradas. O Jaspe Vermelho traz resistência física, coragem e proteção ativa. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Resistência e coragem com jaspe vermelho",
    images: [necklaceJaspeVermelho],
    elements: [
      { name: "Jaspe Vermelho", meaning: "Força, resistência e coragem guerreira", icon: "🌋" }
    ],
    significance: "Coragem",
    relatedIds: ["colar-cornalina", "colar-granada"],
    inStock: true,
  },
  {
    id: "colar-unakita",
    name: "Colar Unakita",
    slug: "colar-unakita",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de unakita alternadas com contas douradas. A Unakita equilibra o coração e a mente, promovendo cura emocional gradual. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Equilíbrio coração-mente com unakita",
    images: [necklaceUnakita],
    elements: [
      { name: "Unakita", meaning: "Equilíbrio, paciência e cura gradual", icon: "🌿" }
    ],
    significance: "Equilíbrio",
    relatedIds: ["colar-amazonita", "colar-quartzo-rosa"],
    inStock: true,
  },
  {
    id: "colar-amazonita",
    name: "Colar Amazonita",
    slug: "colar-amazonita",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de amazonita alternadas com contas douradas. A Amazonita promove esperança, harmonia e comunicação do coração. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Esperança e harmonia com amazonita",
    images: [necklaceAmazonita],
    elements: [
      { name: "Amazonita", meaning: "Esperança, equilíbrio e harmonia", icon: "🌊" }
    ],
    significance: "Harmonia",
    relatedIds: ["colar-quartzo-rosa", "colar-unakita"],
    inStock: true,
  },
  {
    id: "colar-cristal-quartzo",
    name: "Colar Cristal de Quartzo",
    slug: "colar-cristal-quartzo",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 129.90,
    description: "Colar com pedras de cristal de quartzo alternadas com contas prateadas. O Cristal de Quartzo é o mestre amplificador, potencializando intenções e clareza mental. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Amplificação e clareza com cristal de quartzo",
    images: [necklaceCristalQuartzo],
    elements: [
      { name: "Cristal de Quartzo", meaning: "Amplificação, clareza e energia universal", icon: "✨" }
    ],
    significance: "Amplificação",
    relatedIds: ["colar-ametista", "colar-citrino"],
    inStock: true,
  },
  // === Colares com Corrente de Aço Inoxidável ===
  {
    id: "colar-aco-ametista",
    name: "Colar Ametista – Corrente de Aço",
    slug: "colar-aco-ametista",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 99.90,
    description: "Pingente de ametista natural em corrente de aço inoxidável antialérgica. Design minimalista e elegante, perfeito para uso diário. A Ametista promove conexão espiritual e calma interior. Comprimento: 45cm + 5cm de extensão. Fecho lagosta em aço inox.",
    shortDescription: "Pingente de ametista em corrente de aço inoxidável",
    images: [necklaceAcoAmetista],
    elements: [
      { name: "Ametista", meaning: "Transmutação, intuição e conexão espiritual", icon: "🔮" }
    ],
    significance: "Espiritualidade",
    relatedIds: ["colar-aco-quartzo-rosa", "colar-aco-olho-tigre"],
    inStock: true,
    badge: "Corrente de Aço",
  },
  {
    id: "colar-aco-quartzo-rosa",
    name: "Colar Quartzo Rosa – Corrente de Aço",
    slug: "colar-aco-quartzo-rosa",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 99.90,
    description: "Pingente de quartzo rosa natural em corrente de aço inoxidável. O Quartzo Rosa é a pedra do amor incondicional, perfeito para manter perto do coração. Comprimento: 45cm + 5cm de extensão. Corrente resistente à água.",
    shortDescription: "Pingente de quartzo rosa em corrente de aço inoxidável",
    images: [necklaceAcoQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Amor incondicional, cura emocional e compaixão", icon: "💎" }
    ],
    significance: "Amor e cura",
    relatedIds: ["colar-aco-ametista", "colar-aco-olho-tigre"],
    inStock: true,
    badge: "Corrente de Aço",
  },
  {
    id: "colar-aco-olho-tigre",
    name: "Colar Olho de Tigre – Corrente de Aço Dourado",
    slug: "colar-aco-olho-tigre",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 109.90,
    description: "Pingente de olho de tigre natural em corrente de aço inoxidável banhada a ouro. O Olho de Tigre atrai coragem e proteção. Design sofisticado para uso diário. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Pingente de olho de tigre em corrente de aço banhada a ouro",
    images: [necklaceAcoOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Proteção contra inveja e atração de oportunidades", icon: "🐯" }
    ],
    significance: "Proteção e prosperidade",
    relatedIds: ["colar-aco-ametista", "colar-aco-quartzo-rosa"],
    inStock: true,
    badge: "Corrente de Aço",
  },
  // === Colares com Cordão de Poliéster Ajustável ===
  {
    id: "colar-cordao-turmalina",
    name: "Colar Turmalina Negra – Cordão Ajustável",
    slug: "colar-cordao-turmalina",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "Pingente de turmalina negra natural em cordão de poliéster 1mm com nó corrediço ajustável. Leve, confortável e perfeito para uso diário. A Turmalina Negra é o escudo absoluto contra energias negativas. Ajustável de 40cm a 70cm.",
    shortDescription: "Turmalina negra em cordão de poliéster ajustável",
    images: [necklaceCordaoTurmalina],
    elements: [
      { name: "Turmalina Negra", meaning: "Proteção contra negatividade e vampirismo energético", icon: "🖤" }
    ],
    significance: "Proteção absoluta",
    relatedIds: ["colar-cordao-citrino", "colar-cordao-jade"],
    inStock: true,
    badge: "Cordão Ajustável",
  },
  {
    id: "colar-cordao-citrino",
    name: "Colar Citrino – Cordão Ajustável",
    slug: "colar-cordao-citrino",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "Pingente de citrino natural em cordão de poliéster 1mm marrom com nó corrediço ajustável. O Citrino atrai prosperidade e energia positiva. Estilo rústico e natural. Ajustável de 40cm a 70cm.",
    shortDescription: "Citrino em cordão de poliéster ajustável",
    images: [necklaceCordaoCitrino],
    elements: [
      { name: "Citrino", meaning: "Abundância, autoestima e energia solar", icon: "💛" }
    ],
    significance: "Prosperidade",
    relatedIds: ["colar-cordao-turmalina", "colar-cordao-jade"],
    inStock: true,
    badge: "Cordão Ajustável",
  },
  {
    id: "colar-cordao-jade",
    name: "Colar Jade Verde – Cordão Ajustável",
    slug: "colar-cordao-jade",
    category: "colar",
    subcategory: "pedras-naturais",
    price: 79.90,
    description: "Pingente de jade verde natural em cordão de poliéster 1mm preto com nó corrediço ajustável. O Jade Verde é o talismã milenar da sorte e prosperidade. Estilo minimalista e elegante. Ajustável de 40cm a 70cm.",
    shortDescription: "Jade verde em cordão de poliéster ajustável",
    images: [necklaceCordaoJade],
    elements: [
      { name: "Jade Verde", meaning: "Sorte, longevidade e prosperidade milenar", icon: "💚" }
    ],
    significance: "Sorte e longevidade",
    relatedIds: ["colar-cordao-turmalina", "colar-cordao-citrino"],
    inStock: true,
    badge: "Cordão Ajustável",
  },
];

export const resinNecklaces: Product[] = [
  {
    id: "colar-resin-girassol",
    name: "Colar Girassol",
    slug: "colar-girassol",
    category: "colar",
    subcategory: "geral",
    price: 119.90,
    description: "Uma semente de girassol encapsulada em resina cristalina, acompanhada de contas douradas. O girassol simboliza vitalidade, prosperidade e alegria. Corrente em aço inoxidável banhada a ouro.",
    shortDescription: "Vitalidade e prosperidade com girassol em resina",
    images: [necklaceResinGirassol],
    elements: [
      { name: "Girassol", meaning: "Felicidade, vitalidade e energia solar", icon: "🌻" }
    ],
    significance: "Vitalidade e prosperidade",
    relatedIds: ["colar-resin-rosa", "colar-resin-margarida"],
    inStock: true,
    badge: "Destaque",
  },
  {
    id: "colar-resin-pimenta",
    name: "Colar Pimenta Vermelha",
    slug: "colar-pimenta-vermelha",
    category: "colar",
    subcategory: "geral",
    price: 109.90,
    description: "Pimenta vermelha real eternizada em resina cristalina com corrente de aço inoxidável. Símbolo milenar de proteção contra más energias e mau-olhado.",
    shortDescription: "Proteção energética com pimenta vermelha eternizada",
    images: [necklaceResinPimenta],
    elements: [
      { name: "Pimenta Vermelha", meaning: "Proteção energética, afasta mau-olhado", icon: "🌶️" }
    ],
    significance: "Proteção energética",
    relatedIds: ["colar-resin-pimenta-rosa", "colar-resin-girassol"],
    inStock: true,
  },
  {
    id: "colar-resin-rosa",
    name: "Colar Rosa Eterna",
    slug: "colar-rosa-eterna",
    category: "colar",
    subcategory: "geral",
    price: 129.90,
    description: "Uma rosa natural preservada e eternizada em resina cristalina, com corrente banhada a ouro. Símbolo de amor eterno e paixão que nunca morre.",
    shortDescription: "Amor eterno com rosa natural eternizada em resina",
    images: [necklaceResinRosa],
    elements: [
      { name: "Rosa", meaning: "Amor eterno, paixão e gratidão", icon: "🌹" }
    ],
    significance: "Amor eterno",
    relatedIds: ["colar-resin-lavanda", "colar-resin-margarida"],
    inStock: true,
    badge: "Amor",
  },
  {
    id: "colar-resin-lavanda",
    name: "Colar Lavanda",
    slug: "colar-lavanda",
    category: "colar",
    subcategory: "geral",
    price: 119.90,
    description: "Flores de lavanda real preservadas em resina cristalina com corrente prateada. A lavanda simboliza calma, purificação e paz interior.",
    shortDescription: "Calma e paz interior com lavanda eternizada",
    images: [necklaceResinLavanda],
    elements: [
      { name: "Lavanda", meaning: "Calma, purificação e paz interior", icon: "💜" }
    ],
    significance: "Paz interior",
    relatedIds: ["colar-resin-rosa", "colar-resin-margarida"],
    inStock: true,
  },
  {
    id: "colar-resin-margarida",
    name: "Colar Margarida",
    slug: "colar-margarida",
    category: "colar",
    subcategory: "geral",
    price: 119.90,
    description: "Uma margarida real eternizada em resina cristalina com corrente banhada a ouro. A margarida simboliza inocência, pureza e novos começos.",
    shortDescription: "Inocência e novos começos com margarida eternizada",
    images: [necklaceResinMargarida],
    elements: [
      { name: "Margarida", meaning: "Inocência, pureza e novos começos", icon: "🌼" }
    ],
    significance: "Pureza e inocência",
    relatedIds: ["colar-resin-rosa", "colar-resin-lavanda"],
    inStock: true,
  },
  {
    id: "colar-resin-pimenta-rosa",
    name: "Colar Pimenta Rosa",
    slug: "colar-pimenta-rosa",
    category: "colar",
    subcategory: "geral",
    price: 109.90,
    description: "Pimentas rosa reais eternizadas em resina cristalina com corrente banhada a ouro. A pimenta rosa simboliza amor delicado e proteção suave.",
    shortDescription: "Amor delicado e proteção com pimenta rosa eternizada",
    images: [necklaceResinPimentaRosa],
    elements: [
      { name: "Pimenta Rosa", meaning: "Amor delicado, proteção suave e feminilidade", icon: "🩷" }
    ],
    significance: "Amor e proteção",
    relatedIds: ["colar-resin-pimenta", "colar-resin-rosa"],
    inStock: true,
  },
  // === Colares de Resina com Corrente de Aço Inoxidável ===
  {
    id: "colar-resin-aco-rosa",
    name: "Colar Rosa Eterna – Corrente de Aço",
    slug: "colar-resin-aco-rosa",
    category: "colar",
    subcategory: "geral",
    price: 109.90,
    description: "Pingente de resina com rosa vermelha real eternizada, em corrente de aço inoxidável prateada. Design elegante e durável. Símbolo de amor eterno. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Rosa eternizada em resina com corrente de aço",
    images: [necklaceResinAcoRosa],
    elements: [
      { name: "Rosa Vermelha", meaning: "Amor eterno, paixão e gratidão", icon: "🌹" }
    ],
    significance: "Amor eterno",
    relatedIds: ["colar-resin-aco-lavanda", "colar-resin-aco-girassol"],
    inStock: true,
    badge: "Corrente de Aço",
  },
  {
    id: "colar-resin-aco-girassol",
    name: "Colar Girassol – Corrente de Aço Dourado",
    slug: "colar-resin-aco-girassol",
    category: "colar",
    subcategory: "geral",
    price: 119.90,
    description: "Pingente de resina com girassol real eternizado, em corrente de aço inoxidável banhada a ouro. Símbolo de vitalidade e alegria. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Girassol eternizado em resina com corrente dourada",
    images: [necklaceResinAcoGirassol],
    elements: [
      { name: "Girassol", meaning: "Felicidade, vitalidade e energia solar", icon: "🌻" }
    ],
    significance: "Vitalidade e prosperidade",
    relatedIds: ["colar-resin-aco-rosa", "colar-resin-aco-lavanda"],
    inStock: true,
    badge: "Corrente de Aço",
  },
  {
    id: "colar-resin-aco-lavanda",
    name: "Colar Lavanda – Corrente de Aço",
    slug: "colar-resin-aco-lavanda",
    category: "colar",
    subcategory: "geral",
    price: 109.90,
    description: "Pingente de resina com flores de lavanda reais eternizadas, em corrente de aço inoxidável prateada. Símbolo de calma e paz interior. Comprimento: 45cm + 5cm de extensão.",
    shortDescription: "Lavanda eternizada em resina com corrente de aço",
    images: [necklaceResinAcoLavanda],
    elements: [
      { name: "Lavanda", meaning: "Calma, purificação e paz interior", icon: "💜" }
    ],
    significance: "Paz interior",
    relatedIds: ["colar-resin-aco-rosa", "colar-resin-aco-girassol"],
    inStock: true,
    badge: "Corrente de Aço",
  },
  // === Colares de Resina com Cordão Ajustável ===
  {
    id: "colar-resin-cordao-pimenta",
    name: "Colar Pimenta Vermelha – Cordão Ajustável",
    slug: "colar-resin-cordao-pimenta",
    category: "colar",
    subcategory: "geral",
    price: 79.90,
    description: "Pingente de resina com pimenta vermelha real eternizada, em cordão de poliéster 1mm preto com nó corrediço ajustável. Proteção contra mau-olhado. Ajustável de 40cm a 70cm.",
    shortDescription: "Pimenta vermelha em resina com cordão ajustável",
    images: [necklaceResinCordaoPimenta],
    elements: [
      { name: "Pimenta Vermelha", meaning: "Proteção energética, afasta mau-olhado", icon: "🌶️" }
    ],
    significance: "Proteção energética",
    relatedIds: ["colar-resin-cordao-pimenta-rosa", "colar-resin-cordao-margarida"],
    inStock: true,
    badge: "Cordão Ajustável",
  },
  {
    id: "colar-resin-cordao-margarida",
    name: "Colar Margarida – Cordão Ajustável",
    slug: "colar-resin-cordao-margarida",
    category: "colar",
    subcategory: "geral",
    price: 79.90,
    description: "Pingente de resina com margarida real eternizada, em cordão de poliéster 1mm marrom com nó corrediço ajustável. Símbolo de pureza e novos começos. Ajustável de 40cm a 70cm.",
    shortDescription: "Margarida em resina com cordão ajustável",
    images: [necklaceResinCordaoMargarida],
    elements: [
      { name: "Margarida", meaning: "Inocência, pureza e novos começos", icon: "🌼" }
    ],
    significance: "Pureza e inocência",
    relatedIds: ["colar-resin-cordao-pimenta", "colar-resin-cordao-pimenta-rosa"],
    inStock: true,
    badge: "Cordão Ajustável",
  },
  {
    id: "colar-resin-cordao-pimenta-rosa",
    name: "Colar Pimenta Rosa – Cordão Ajustável",
    slug: "colar-resin-cordao-pimenta-rosa",
    category: "colar",
    subcategory: "geral",
    price: 79.90,
    description: "Pingente de resina com pimentas rosa reais eternizadas, em cordão de poliéster 1mm preto com nó corrediço ajustável. Amor delicado e proteção suave. Ajustável de 40cm a 70cm.",
    shortDescription: "Pimenta rosa em resina com cordão ajustável",
    images: [necklaceResinCordaoPimentaRosa],
    elements: [
      { name: "Pimenta Rosa", meaning: "Amor delicado, proteção suave e feminilidade", icon: "🩷" }
    ],
    significance: "Amor e proteção",
    relatedIds: ["colar-resin-cordao-pimenta", "colar-resin-cordao-margarida"],
    inStock: true,
    badge: "Cordão Ajustável",
  },
];
