import { Product } from "./products";

// Stone Pendant Images
import stonePendantOlhoTigre from "@/assets/stone-pendant-olho-tigre.jpg";
import stonePendantAmetista from "@/assets/stone-pendant-ametista.jpg";
import stonePendantTurmalinaNegra from "@/assets/stone-pendant-turmalina-negra.jpg";
import stonePendantQuartzoRosa from "@/assets/stone-pendant-quartzo-rosa.jpg";
import stonePendantCitrino from "@/assets/stone-pendant-citrino.jpg";
import stonePendantLapisLazuli from "@/assets/stone-pendant-lapis-lazuli.jpg";
import stonePendantCornalina from "@/assets/stone-pendant-cornalina.jpg";
import stonePendantPedraLua from "@/assets/stone-pendant-pedra-lua.jpg";
import stonePendantAventurina from "@/assets/stone-pendant-aventurina.jpg";
import stonePendantObsidiana from "@/assets/stone-pendant-obsidiana.jpg";
import stonePendantJade from "@/assets/stone-pendant-jade.jpg";
import stonePendantCristalQuartzo from "@/assets/stone-pendant-cristal-quartzo.jpg";
import stonePendantHematita from "@/assets/stone-pendant-hematita.jpg";
import stonePendantAmazonita from "@/assets/stone-pendant-amazonita.jpg";
import stonePendantSodalita from "@/assets/stone-pendant-sodalita.jpg";
import stonePendantGranada from "@/assets/stone-pendant-granada.jpg";
import stonePendantFluorita from "@/assets/stone-pendant-fluorita.jpg";
import stonePendantTurquesa from "@/assets/stone-pendant-turquesa.jpg";
import stonePendantJaspeVermelho from "@/assets/stone-pendant-jaspe-vermelho.jpg";
import stonePendantUnakita from "@/assets/stone-pendant-unakita.jpg";

// Stone Pendants - using the same stones as rings
export const stonePendants: Product[] = [
  {
    id: "pingente-turmalina-negra",
    name: "Pingente Turmalina Negra",
    slug: "pingente-turmalina-negra",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Turmalina Negra é conhecida como o escudo absoluto contra energias densas. Este pingente mantém sua aura protegida, afastando negatividade e vampirismo energético. Disponível com corrente de aço inoxidável inclusa ou apenas o pingente.",
    shortDescription: "Escudo energético contra negatividade e proteção da aura",
    images: [stonePendantTurmalinaNegra],
    elements: [
      { name: "Turmalina Negra", meaning: "Proteção contra vampirismo energético e negatividade extrema", icon: "🖤" }
    ],
    significance: "Proteção absoluta",
    relatedIds: ["pingente-obsidiana", "pingente-olho-tigre"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pingente-olho-tigre",
    name: "Pingente Olho de Tigre",
    slug: "pingente-olho-tigre",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "O Olho de Tigre é o guardião da coragem e da prosperidade. Perfeito para usar no peito e manter sua aura protegida, este pingente detecta energias tóxicas e atrai oportunidades. Disponível com corrente de aço inoxidável.",
    shortDescription: "Detector de energias tóxicas e atrator de oportunidades",
    images: [stonePendantOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Proteção contra inveja e atração de oportunidades", icon: "🐯" }
    ],
    significance: "Proteção e prosperidade",
    relatedIds: ["pingente-turmalina-negra", "pingente-citrino"],
    inStock: true,
  },
  {
    id: "pingente-quartzo-rosa",
    name: "Pingente Quartzo Rosa",
    slug: "pingente-quartzo-rosa",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "O Quartzo Rosa é a pedra do amor incondicional. Este pingente abraça o coração de quem usa, promovendo cura emocional, amor-próprio e relacionamentos harmoniosos. Mantenha-o perto do coração para sentir seus benefícios.",
    shortDescription: "Cura emocional, amor-próprio e relacionamentos harmoniosos",
    images: [stonePendantQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Amor incondicional, cura emocional e compaixão", icon: "💎" }
    ],
    significance: "Amor e cura",
    relatedIds: ["pingente-rodonita", "pingente-amazonita"],
    inStock: true,
    badge: "Amor",
  },
  {
    id: "pingente-ametista",
    name: "Pingente Ametista",
    slug: "pingente-ametista",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Ametista é a pedra da transmutação espiritual e conexão com o divino. Este pingente eleva a intuição, purifica ambientes e promove calma interior. Ideal para meditação e momentos de introspecção.",
    shortDescription: "Intuição elevada, purificação e calma espiritual",
    images: [stonePendantAmetista],
    elements: [
      { name: "Ametista", meaning: "Transmutação, intuição e conexão espiritual", icon: "🔮" }
    ],
    significance: "Espiritualidade",
    relatedIds: ["pingente-fluorita", "pingente-lapis-lazuli"],
    inStock: true,
  },
  {
    id: "pingente-citrino",
    name: "Pingente Citrino",
    slug: "pingente-citrino",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "O Citrino é o sol da abundância. Este pingente atrai riqueza, autoestima e energia positiva para sua vida. Conhecido como a pedra dos comerciantes, é perfeito para quem busca prosperidade.",
    shortDescription: "Atrai riqueza, autoestima e energia positiva",
    images: [stonePendantCitrino],
    elements: [
      { name: "Citrino", meaning: "Abundância, autoestima e energia solar", icon: "💛" }
    ],
    significance: "Prosperidade",
    relatedIds: ["pingente-jade-verde", "pingente-aventurina"],
    inStock: true,
    badge: "Prosperidade",
  },
  {
    id: "pingente-jade-verde",
    name: "Pingente Jade Verde",
    slug: "pingente-jade-verde",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 79.90,
    description: "O Jade Verde é o talismã milenar da sorte. Este pingente traz prosperidade, sorte nos negócios e longevidade. Uma pedra reverenciada há milênios por sua energia de abundância.",
    shortDescription: "Prosperidade, sorte nos negócios e longevidade",
    images: [stonePendantJade],
    elements: [
      { name: "Jade Verde", meaning: "Sorte, longevidade e prosperidade milenar", icon: "💚" }
    ],
    significance: "Sorte e longevidade",
    relatedIds: ["pingente-citrino", "pingente-aventurina"],
    inStock: true,
  },
  {
    id: "pingente-obsidiana",
    name: "Pingente Obsidiana",
    slug: "pingente-obsidiana",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Obsidiana é o espelho da verdade e da transformação. Este pingente revela verdades ocultas e promove limpeza energética profunda. Perfeito para quem busca autoconhecimento.",
    shortDescription: "Revela verdades e promove limpeza energética profunda",
    images: [stonePendantObsidiana],
    elements: [
      { name: "Obsidiana", meaning: "Verdade, transformação e limpeza profunda", icon: "⚫" }
    ],
    significance: "Transformação",
    relatedIds: ["pingente-turmalina-negra", "pingente-hematita"],
    inStock: true,
  },
  {
    id: "pingente-hematita",
    name: "Pingente Hematita",
    slug: "pingente-hematita",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "A Hematita é a âncora que te conecta à terra. Este pingente oferece aterramento, estabilidade emocional e força de vontade. Ideal para momentos que exigem foco e determinação.",
    shortDescription: "Aterramento, estabilidade e força de vontade",
    images: [stonePendantHematita],
    elements: [
      { name: "Hematita", meaning: "Aterramento, foco e estabilidade emocional", icon: "⛓️" }
    ],
    significance: "Aterramento",
    relatedIds: ["pingente-obsidiana", "pingente-turmalina-negra"],
    inStock: true,
  },
  {
    id: "pingente-lapis-lazuli",
    name: "Pingente Lápis-Lazúli",
    slug: "pingente-lapis-lazuli",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 89.90,
    description: "O Lápis-Lazúli carrega a sabedoria dos antigos. Este pingente promove verdade, sabedoria e expressão clara. Era a pedra favorita dos faraós egípcios.",
    shortDescription: "Verdade, sabedoria e expressão clara",
    images: [stonePendantLapisLazuli],
    elements: [
      { name: "Lápis-Lazúli", meaning: "Sabedoria ancestral, verdade e clareza", icon: "💙" }
    ],
    significance: "Sabedoria",
    relatedIds: ["pingente-sodalita", "pingente-fluorita"],
    inStock: true,
  },
  {
    id: "pingente-sodalita",
    name: "Pingente Sodalita",
    slug: "pingente-sodalita",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Sodalita é a voz da verdade interior. Este pingente promove comunicação autêntica, racionalidade e expressão honesta. Perfeito para quem trabalha com comunicação.",
    shortDescription: "Comunicação autêntica e racionalidade",
    images: [stonePendantSodalita],
    elements: [
      { name: "Sodalita", meaning: "Comunicação autêntica e verdade interior", icon: "🧿" }
    ],
    significance: "Comunicação",
    relatedIds: ["pingente-lapis-lazuli", "pingente-amazonita"],
    inStock: true,
  },
  {
    id: "pingente-aventurina",
    name: "Pingente Aventurina Verde",
    slug: "pingente-aventurina",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Aventurina Verde é a porta das oportunidades. Este pingente traz sorte, novos começos e crescimento financeiro. Ideal para quem está iniciando novos projetos.",
    shortDescription: "Sorte, novos começos e crescimento financeiro",
    images: [stonePendantAventurina],
    elements: [
      { name: "Aventurina Verde", meaning: "Oportunidades, sorte e crescimento", icon: "🍀" }
    ],
    significance: "Oportunidades",
    relatedIds: ["pingente-citrino", "pingente-jade-verde"],
    inStock: true,
  },
  {
    id: "pingente-fluorita",
    name: "Pingente Fluorita",
    slug: "pingente-fluorita",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Fluorita é o organizador da mente brilhante. Este pingente promove concentração, organização e aprendizado. Perfeito para estudantes e profissionais.",
    shortDescription: "Concentração, organização e aprendizado",
    images: [stonePendantFluorita],
    elements: [
      { name: "Fluorita", meaning: "Foco mental, organização e clareza", icon: "🧠" }
    ],
    significance: "Foco mental",
    relatedIds: ["pingente-sodalita", "pingente-ametista"],
    inStock: true,
  },
  {
    id: "pingente-amazonita",
    name: "Pingente Amazonita",
    slug: "pingente-amazonita",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Amazonita é a pedra da esperança e harmonia. Este pingente promove equilíbrio energético e comunicação do coração. Perfeito para quem busca paz interior.",
    shortDescription: "Esperança, harmonia e comunicação do coração",
    images: [stonePendantAmazonita],
    elements: [
      { name: "Amazonita", meaning: "Esperança, equilíbrio e harmonia", icon: "🌊" }
    ],
    significance: "Harmonia",
    relatedIds: ["pingente-quartzo-rosa", "pingente-rodonita"],
    inStock: true,
  },
  {
    id: "pingente-cornalina",
    name: "Pingente Cornalina",
    slug: "pingente-cornalina",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Cornalina é o fogo da paixão e criatividade. Este pingente traz energia vital, coragem e motivação. Perfeito para quem busca mais vigor na vida.",
    shortDescription: "Paixão, criatividade e energia vital",
    images: [stonePendantCornalina],
    elements: [
      { name: "Cornalina", meaning: "Vitalidade, paixão e coragem criativa", icon: "🔥" }
    ],
    significance: "Vitalidade",
    relatedIds: ["pingente-jaspe-vermelho", "pingente-granada"],
    inStock: true,
  },
  {
    id: "pingente-jaspe-vermelho",
    name: "Pingente Jaspe Vermelho",
    slug: "pingente-jaspe-vermelho",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "O Jaspe Vermelho é o escudo do guerreiro. Este pingente traz resistência física, coragem e proteção ativa. Ideal para momentos que exigem força.",
    shortDescription: "Resistência, coragem e proteção ativa",
    images: [stonePendantJaspeVermelho],
    elements: [
      { name: "Jaspe Vermelho", meaning: "Força, resistência e coragem guerreira", icon: "🌋" }
    ],
    significance: "Coragem",
    relatedIds: ["pingente-cornalina", "pingente-granada"],
    inStock: true,
  },
  {
    id: "pingente-granada",
    name: "Pingente Granada",
    slug: "pingente-granada",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 79.90,
    description: "A Granada é a chama da paixão eterna. Este pingente revitaliza relacionamentos, traz energia e desperta a sensualidade. Uma pedra de amor intenso.",
    shortDescription: "Paixão, energia e revitalização de relacionamentos",
    images: [stonePendantGranada],
    elements: [
      { name: "Granada", meaning: "Paixão, vigor e amor intenso", icon: "❤️‍🔥" }
    ],
    significance: "Paixão",
    relatedIds: ["pingente-cornalina", "pingente-quartzo-rosa"],
    inStock: true,
  },
  {
    id: "pingente-pedra-lua",
    name: "Pingente Pedra da Lua",
    slug: "pingente-pedra-lua",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 79.90,
    description: "A Pedra da Lua conecta com os ciclos femininos e a intuição. Este pingente promove sensibilidade, proteção materna e equilíbrio emocional.",
    shortDescription: "Intuição feminina e equilíbrio emocional",
    images: [stonePendantPedraLua],
    elements: [
      { name: "Pedra da Lua", meaning: "Intuição, feminilidade e ciclos naturais", icon: "🌙" }
    ],
    significance: "Feminino sagrado",
    relatedIds: ["pingente-ametista", "pingente-quartzo-rosa"],
    inStock: true,
    badge: "Feminino",
  },
  {
    id: "pingente-cristal-quartzo",
    name: "Pingente Cristal de Quartzo",
    slug: "pingente-cristal-quartzo",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "O Cristal de Quartzo é o mestre amplificador. Este pingente potencializa suas intenções e clareza mental. A pedra mais versátil para qualquer propósito.",
    shortDescription: "Amplificação de intenções e clareza mental",
    images: [stonePendantCristalQuartzo],
    elements: [
      { name: "Cristal de Quartzo", meaning: "Amplificação, clareza e energia universal", icon: "✨" }
    ],
    significance: "Amplificação",
    relatedIds: ["pingente-ametista", "pingente-citrino"],
    inStock: true,
  },
  {
    id: "pingente-turquesa",
    name: "Pingente Turquesa",
    slug: "pingente-turquesa",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 89.90,
    description: "A Turquesa é o amuleto dos viajantes. Este pingente oferece proteção em jornadas, sabedoria e cura holística. Uma pedra reverenciada por diversas culturas.",
    shortDescription: "Proteção em viagens, sabedoria e cura holística",
    images: [stonePendantTurquesa],
    elements: [
      { name: "Turquesa", meaning: "Proteção viajante, sabedoria ancestral", icon: "🩵" }
    ],
    significance: "Proteção viajante",
    relatedIds: ["pingente-lapis-lazuli", "pingente-amazonita"],
    inStock: true,
  },
  {
    id: "pingente-unakita",
    name: "Pingente Unakita",
    slug: "pingente-unakita",
    category: "pingente",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "A Unakita equilibra o coração e a mente. Este pingente promove cura emocional gradual e paciência. Perfeito para processos de transformação pessoal.",
    shortDescription: "Equilíbrio coração-mente e cura gradual",
    images: [stonePendantUnakita],
    elements: [
      { name: "Unakita", meaning: "Equilíbrio, paciência e cura gradual", icon: "🌿" }
    ],
    significance: "Equilíbrio",
    relatedIds: ["pingente-amazonita", "pingente-quartzo-rosa"],
    inStock: true,
  },
];

// Resin Pendants - flowers, peppers, and seeds
import pendantPimentaVermelha from "@/assets/pendant-pimenta-vermelha.jpg";
import pendantPimentaRosa from "@/assets/pendant-pimenta-rosa.jpg";
import pendantSementeGirassol from "@/assets/pendant-semente-girassol.jpg";
import pendantSementeMostarda from "@/assets/pendant-semente-mostarda.jpg";
import pendantRosaEterna from "@/assets/pendant-rosa-eterna.jpg";
import pendantLavanda from "@/assets/pendant-lavanda.jpg";
import pendantMargarida from "@/assets/pendant-margarida.jpg";
import pendantFlorLaranjeira from "@/assets/pendant-flor-laranjeira.jpg";
import pendantJasmin from "@/assets/pendant-jasmin.jpg";
import pendantDenteLeao from "@/assets/pendant-dente-leao.jpg";
import pendantSempreViva from "@/assets/pendant-sempre-viva.jpg";

export const resinPendants: Product[] = [
  {
    id: "pingente-pimenta-vermelha",
    name: "Pingente Pimenta Vermelha",
    slug: "pingente-pimenta-vermelha",
    category: "pingente",
    subcategory: "geral",
    price: 59.90,
    description: "A pimenta vermelha é símbolo milenar de proteção contra más energias. Eternizada em resina cristalina, este pingente mantém a força vital e afasta o mau-olhado. Use perto do coração para proteção constante.",
    shortDescription: "Proteção contra más energias e força vital",
    images: [pendantPimentaVermelha],
    elements: [
      { name: "Pimenta Vermelha", meaning: "Proteção energética, afasta mau-olhado e força vital", icon: "🌶️" }
    ],
    significance: "Proteção energética",
    relatedIds: ["pingente-pimenta-rosa", "pingente-semente-girassol"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pingente-pimenta-rosa",
    name: "Pingente Pimenta Rosa",
    slug: "pingente-pimenta-rosa",
    category: "pingente",
    subcategory: "geral",
    price: 59.90,
    description: "A pimenta rosa traz a delicadeza da proteção feminina. Eternizada em resina, combina a força protetora com a energia do amor. Perfeita para mulheres que buscam proteção suave.",
    shortDescription: "Proteção delicada e energia feminina",
    images: [pendantPimentaRosa],
    elements: [
      { name: "Pimenta Rosa", meaning: "Proteção feminina, delicadeza e amor", icon: "💗" }
    ],
    significance: "Proteção feminina",
    relatedIds: ["pingente-pimenta-vermelha", "pingente-rosa-eterna"],
    inStock: true,
  },
  {
    id: "pingente-semente-girassol",
    name: "Pingente Semente de Girassol",
    slug: "pingente-semente-girassol",
    category: "pingente",
    subcategory: "geral",
    price: 54.90,
    description: "A semente de girassol simboliza a busca pela luz e prosperidade. Eternizada em resina, este pingente atrai energia solar, alegria e abundância para sua vida.",
    shortDescription: "Energia solar, alegria e prosperidade",
    images: [pendantSementeGirassol],
    elements: [
      { name: "Semente de Girassol", meaning: "Luz, prosperidade e energia solar", icon: "🌻" }
    ],
    significance: "Energia solar",
    relatedIds: ["pingente-semente-mostarda", "pingente-pimenta-vermelha"],
    inStock: true,
  },
  {
    id: "pingente-semente-mostarda",
    name: "Pingente Semente de Mostarda",
    slug: "pingente-semente-mostarda",
    category: "pingente",
    subcategory: "geral",
    price: 54.90,
    description: "A semente de mostarda representa a fé que move montanhas. Eternizada em resina cristalina, este pingente é um lembrete diário do poder da crença e da esperança.",
    shortDescription: "Fé, esperança e pequenos começos grandiosos",
    images: [pendantSementeMostarda],
    elements: [
      { name: "Semente de Mostarda", meaning: "Fé inabalável, esperança e novos começos", icon: "🌱" }
    ],
    significance: "Fé e esperança",
    relatedIds: ["pingente-semente-girassol", "pingente-margarida"],
    inStock: true,
  },
  {
    id: "pingente-rosa-eterna",
    name: "Pingente Rosa Eterna",
    slug: "pingente-rosa-eterna",
    category: "pingente",
    subcategory: "flores",
    price: 69.90,
    description: "A rosa é o símbolo universal do amor eterno. Eternizada em resina cristalina, este pingente captura a essência da paixão e da gratidão. Um presente perfeito para quem você ama.",
    shortDescription: "Amor eterno, paixão e gratidão",
    images: [pendantRosaEterna],
    elements: [
      { name: "Rosa", meaning: "Amor eterno, paixão e gratidão profunda", icon: "🌹" }
    ],
    significance: "Amor eterno",
    relatedIds: ["pingente-lavanda", "pingente-margarida"],
    inStock: true,
    badge: "Romântico",
  },
  {
    id: "pingente-lavanda",
    name: "Pingente Lavanda",
    slug: "pingente-lavanda",
    category: "pingente",
    subcategory: "flores",
    price: 64.90,
    description: "A lavanda é conhecida por suas propriedades calmantes e purificadoras. Eternizada em resina, este pingente traz paz interior, purificação e serenidade para o dia a dia.",
    shortDescription: "Calma, purificação e paz interior",
    images: [pendantLavanda],
    elements: [
      { name: "Lavanda", meaning: "Calma, purificação e paz interior", icon: "💜" }
    ],
    significance: "Paz interior",
    relatedIds: ["pingente-rosa-eterna", "pingente-jasmin"],
    inStock: true,
  },
  {
    id: "pingente-margarida",
    name: "Pingente Margarida",
    slug: "pingente-margarida",
    category: "pingente",
    subcategory: "flores",
    price: 59.90,
    description: "A margarida simboliza a pureza e a inocência. Eternizada em resina, este pingente traz a energia da renovação, leveza e alegria simples da vida.",
    shortDescription: "Pureza, inocência e alegria simples",
    images: [pendantMargarida],
    elements: [
      { name: "Margarida", meaning: "Pureza, renovação e alegria", icon: "🌼" }
    ],
    significance: "Pureza",
    relatedIds: ["pingente-rosa-eterna", "pingente-flor-laranjeira"],
    inStock: true,
  },
  {
    id: "pingente-flor-laranjeira",
    name: "Pingente Flor de Laranjeira",
    slug: "pingente-flor-laranjeira",
    category: "pingente",
    subcategory: "flores",
    price: 69.90,
    description: "A flor de laranjeira é símbolo de casamento, fertilidade e pureza. Eternizada em resina, este pingente é perfeito para noivas ou como presente de união.",
    shortDescription: "Casamento, fertilidade e pureza",
    images: [pendantFlorLaranjeira],
    elements: [
      { name: "Flor de Laranjeira", meaning: "União, fertilidade e novos começos", icon: "🌸" }
    ],
    significance: "União",
    relatedIds: ["pingente-rosa-eterna", "pingente-jasmin"],
    inStock: true,
    badge: "Noivas",
  },
  {
    id: "pingente-jasmin",
    name: "Pingente Jasmim",
    slug: "pingente-jasmin",
    category: "pingente",
    subcategory: "flores",
    price: 64.90,
    description: "O jasmim é a flor da sensualidade e do amor divino. Eternizada em resina, este pingente atrai amor, aumenta a autoestima e desperta a sensualidade natural.",
    shortDescription: "Sensualidade, amor divino e autoestima",
    images: [pendantJasmin],
    elements: [
      { name: "Jasmim", meaning: "Sensualidade, amor divino e autoestima", icon: "🤍" }
    ],
    significance: "Sensualidade",
    relatedIds: ["pingente-lavanda", "pingente-rosa-eterna"],
    inStock: true,
  },
  {
    id: "pingente-dente-leao",
    name: "Pingente Dente-de-Leão",
    slug: "pingente-dente-leao",
    category: "pingente",
    subcategory: "flores",
    price: 64.90,
    description: "O dente-de-leão representa os sonhos e desejos que voam para o universo. Eternizado em resina, este pingente é um lembrete de que seus sonhos podem se realizar.",
    shortDescription: "Sonhos, desejos e leveza",
    images: [pendantDenteLeao],
    elements: [
      { name: "Dente-de-Leão", meaning: "Sonhos, desejos e liberdade", icon: "🌬️" }
    ],
    significance: "Sonhos",
    relatedIds: ["pingente-margarida", "pingente-semente-girassol"],
    inStock: true,
  },
  {
    id: "pingente-sempre-viva",
    name: "Pingente Sempre-Viva",
    slug: "pingente-sempre-viva",
    category: "pingente",
    subcategory: "flores",
    price: 64.90,
    description: "A sempre-viva simboliza a eternidade e o amor imortal. Esta flor que nunca murcha, eternizada em resina, representa a permanência dos sentimentos verdadeiros e a imortalidade da alma.",
    shortDescription: "Eternidade, amor imortal e permanência",
    images: [pendantSempreViva],
    elements: [
      { name: "Sempre-Viva", meaning: "Eternidade, amor imortal e permanência", icon: "🌺" }
    ],
    significance: "Eternidade",
    relatedIds: ["pingente-rosa-eterna", "pingente-lavanda"],
    inStock: true,
    badge: "Especial",
  },
];

export const allPendants: Product[] = [...stonePendants, ...resinPendants];
