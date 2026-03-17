import { Product } from "./products";

// Macramê Bracelet Images
import braceletMacrameLavanda from "@/assets/bracelet-macrame-lavanda.jpg";
import braceletMacramePimenta from "@/assets/bracelet-macrame-pimenta.jpg";
import braceletMacrameGirassol from "@/assets/bracelet-macrame-girassol.jpg";
import braceletMacrameRosa from "@/assets/bracelet-macrame-rosa.jpg";
import braceletMacrameMargarida from "@/assets/bracelet-macrame-margarida.jpg";
import braceletMacramePimentaRosa from "@/assets/bracelet-macrame-pimenta-rosa.jpg";
import braceletMacrameJasmin from "@/assets/bracelet-macrame-jasmin.jpg";
import braceletMacrameDenteLeao from "@/assets/bracelet-macrame-dente-leao.jpg";

// Stone Bracelet Images
import braceletPedrasOlhoTigreQuartzo from "@/assets/bracelet-pedras-olho-tigre-quartzo.jpg";
import braceletPedrasAmetista from "@/assets/bracelet-pedras-ametista.jpg";
import braceletPedrasTurmalina from "@/assets/bracelet-pedras-turmalina.jpg";
import braceletPedrasJadeCitrino from "@/assets/bracelet-pedras-jade-citrino.jpg";
import braceletPedrasLapis from "@/assets/bracelet-pedras-lapis.jpg";
import braceletPedrasQuartzoRosa from "@/assets/bracelet-pedras-quartzo-rosa.jpg";
import braceletPedrasOlhoTigre from "@/assets/bracelet-pedras-olho-tigre.jpg";
import braceletPedrasJade from "@/assets/bracelet-pedras-jade.jpg";
import braceletPedrasCitrino from "@/assets/bracelet-pedras-citrino.jpg";
import braceletPedrasHematita from "@/assets/bracelet-pedras-hematita.jpg";

// Steel Bracelet Images
import braceletAcoOlhoTigre from "@/assets/bracelet-aco-olho-tigre.jpg";
import braceletAcoAmetista from "@/assets/bracelet-aco-ametista.jpg";
import braceletAcoQuartzoRosa from "@/assets/bracelet-aco-quartzo-rosa.jpg";
import braceletAcoJade from "@/assets/bracelet-aco-jade.jpg";
import braceletAcoCitrino from "@/assets/bracelet-aco-citrino.jpg";
import braceletAcoTurmalina from "@/assets/bracelet-aco-turmalina.jpg";
import braceletAcoLapis from "@/assets/bracelet-aco-lapis.jpg";

// Minimalist Bracelet Images (only uploaded photos)
import braceletMiniAmetista2 from "@/assets/bracelet-mini-ametista-2.jpg";
import braceletMiniAmetista3 from "@/assets/bracelet-mini-ametista-3.jpg";
import braceletMiniAmetista4 from "@/assets/bracelet-mini-ametista-4.jpg";
import braceletMiniOlhoTigre2 from "@/assets/bracelet-mini-olho-tigre-2.jpg";
import braceletMiniOlhoTigre3 from "@/assets/bracelet-mini-olho-tigre-3.jpg";
import braceletMiniJade2 from "@/assets/bracelet-mini-jade-2.jpg";
import braceletMiniJade3 from "@/assets/bracelet-mini-jade-3.jpg";
import braceletMiniLapis2 from "@/assets/bracelet-mini-lapis-2.jpg";
import braceletMiniLapis3 from "@/assets/bracelet-mini-lapis-3.jpg";
import braceletMiniGranada from "@/assets/bracelet-mini-granada.jpg";
import braceletMiniGranada2 from "@/assets/bracelet-mini-granada-2.jpg";
import braceletMiniGranada3 from "@/assets/bracelet-mini-granada-3.jpg";
import braceletMiniAguaMarinha from "@/assets/bracelet-mini-agua-marinha.jpg";

// ========== MACRAMÊ ==========
export const macrameBracelets: Product[] = [
  {
    id: "pulseira-macrame-lavanda",
    name: "Pulseira Macramê com Lavanda",
    slug: "pulseira-macrame-lavanda",
    category: "pulseira",
    subcategory: "flores",
    price: 79.90,
    description: "Nó a nó, uma pulseira única com lavanda eternizada em resina cristalina. Feita à mão com técnica de macramê artesanal, cada peça carrega a calma e o equilíbrio da lavanda natural. Tamanho único ajustável com nó corrediço.",
    shortDescription: "Pulseira macramê com lavanda eternizada – calma e equilíbrio",
    images: [braceletMacrameLavanda, braceletMacrameLavanda, braceletMacrameLavanda],
    elements: [
      { name: "Lavanda", meaning: "Calma, purificação e paz interior", icon: "💜" },
    ],
    significance: "Calma e equilíbrio",
    relatedIds: ["pulseira-macrame-rosa", "pulseira-macrame-girassol"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pulseira-macrame-pimenta",
    name: "Pulseira Macramê com Pimenta",
    slug: "pulseira-macrame-pimenta",
    category: "pulseira",
    subcategory: "pimentas",
    price: 79.90,
    description: "Pimenta vermelha eternizada em resina cristalina sobre base de macramê artesanal. Proteção e energia vital no pulso. Tamanho único ajustável.",
    shortDescription: "Pulseira macramê com pimenta – proteção e energia",
    images: [braceletMacramePimenta, braceletMacramePimenta, braceletMacramePimenta],
    elements: [
      { name: "Pimenta Vermelha", meaning: "Proteção energética e força vital", icon: "🌶️" },
    ],
    significance: "Proteção e energia",
    relatedIds: ["pulseira-macrame-lavanda", "pulseira-macrame-girassol"],
    inStock: true,
  },
  {
    id: "pulseira-macrame-girassol",
    name: "Pulseira Macramê com Girassol",
    slug: "pulseira-macrame-girassol",
    category: "pulseira",
    subcategory: "flores",
    price: 79.90,
    description: "Pétalas de girassol eternizadas em resina cristalina sobre base de macramê feito à mão. Alegria e energia solar no seu pulso. Tamanho único ajustável.",
    shortDescription: "Pulseira macramê com girassol – alegria e vitalidade",
    images: [braceletMacrameGirassol, braceletMacrameGirassol, braceletMacrameGirassol],
    elements: [
      { name: "Girassol", meaning: "Felicidade, vitalidade e energia solar", icon: "🌻" },
    ],
    significance: "Alegria e vitalidade",
    relatedIds: ["pulseira-macrame-lavanda", "pulseira-macrame-rosa"],
    inStock: true,
  },
  {
    id: "pulseira-macrame-rosa",
    name: "Pulseira Macramê com Rosa",
    slug: "pulseira-macrame-rosa",
    category: "pulseira",
    subcategory: "flores",
    price: 84.90,
    description: "Pétalas de rosa eternizadas em resina cristalina sobre macramê artesanal. Amor e delicadeza no pulso. Tamanho único ajustável com nó corrediço.",
    shortDescription: "Pulseira macramê com rosa – amor e delicadeza",
    images: [braceletMacrameRosa, braceletMacrameRosa, braceletMacrameRosa],
    elements: [
      { name: "Rosa", meaning: "Amor eterno, paixão e gratidão", icon: "🌹" },
    ],
    significance: "Amor e delicadeza",
    relatedIds: ["pulseira-macrame-lavanda", "pulseira-macrame-margarida"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "pulseira-macrame-margarida",
    name: "Pulseira Macramê com Margarida",
    slug: "pulseira-macrame-margarida",
    category: "pulseira",
    subcategory: "flores",
    price: 79.90,
    description: "Margarida natural eternizada em resina cristalina sobre base de macramê. Pureza e inocência no pulso. Tamanho único ajustável.",
    shortDescription: "Pulseira macramê com margarida – pureza e inocência",
    images: [braceletMacrameMargarida, braceletMacrameMargarida, braceletMacrameMargarida],
    elements: [
      { name: "Margarida", meaning: "Pureza, inocência e novos começos", icon: "🌼" },
    ],
    significance: "Pureza e inocência",
    relatedIds: ["pulseira-macrame-rosa", "pulseira-macrame-girassol"],
    inStock: true,
  },
  {
    id: "pulseira-macrame-pimenta-rosa",
    name: "Pulseira Macramê com Pimenta Rosa",
    slug: "pulseira-macrame-pimenta-rosa",
    category: "pulseira",
    subcategory: "pimentas",
    price: 79.90,
    description: "Pimenta rosa eternizada em resina cristalina sobre base de macramê artesanal. Proteção suave e energia feminina. Tamanho único ajustável.",
    shortDescription: "Pulseira macramê com pimenta rosa – proteção e feminilidade",
    images: [braceletMacramePimentaRosa, braceletMacramePimentaRosa, braceletMacramePimentaRosa],
    elements: [
      { name: "Pimenta Rosa", meaning: "Proteção suave e energia feminina", icon: "🌸" },
    ],
    significance: "Proteção e feminilidade",
    relatedIds: ["pulseira-macrame-pimenta", "pulseira-macrame-rosa"],
    inStock: true,
  },
  {
    id: "pulseira-macrame-jasmin",
    name: "Pulseira Macramê com Jasmim",
    slug: "pulseira-macrame-jasmin",
    category: "pulseira",
    subcategory: "flores",
    price: 84.90,
    description: "Flores de jasmim eternizadas em resina cristalina sobre macramê artesanal. Sensualidade e pureza espiritual no pulso. Tamanho único ajustável.",
    shortDescription: "Pulseira macramê com jasmim – sensualidade e pureza",
    images: [braceletMacrameJasmin, braceletMacrameJasmin, braceletMacrameJasmin],
    elements: [
      { name: "Jasmim", meaning: "Sensualidade, pureza espiritual e amor", icon: "🤍" },
    ],
    significance: "Sensualidade e pureza",
    relatedIds: ["pulseira-macrame-rosa", "pulseira-macrame-lavanda"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "pulseira-macrame-dente-leao",
    name: "Pulseira Macramê Dente-de-Leão",
    slug: "pulseira-macrame-dente-leao",
    category: "pulseira",
    subcategory: "flores",
    price: 89.90,
    description: "Sementes de dente-de-leão eternizadas em resina cristalina sobre macramê artesanal. Símbolo de desejos e esperança. Peça delicada e única. Tamanho ajustável.",
    shortDescription: "Pulseira macramê com dente-de-leão – desejos e esperança",
    images: [braceletMacrameDenteLeao, braceletMacrameDenteLeao, braceletMacrameDenteLeao],
    elements: [
      { name: "Dente-de-Leão", meaning: "Desejos, esperança e novos começos", icon: "🌬️" },
    ],
    significance: "Desejos e esperança",
    relatedIds: ["pulseira-macrame-girassol", "pulseira-macrame-margarida"],
    inStock: true,
    badge: "Edição limitada",
  },
];

// ========== PEDRAS NATURAIS ==========
export const stoneBracelets: Product[] = [
  {
    id: "pulseira-olho-tigre-quartzo-rosa",
    name: "Pulseira Olho de Tigre + Quartzo Rosa",
    slug: "pulseira-olho-tigre-quartzo-rosa",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "Duas pedras poderosas em uma pulseira elástica: Olho de Tigre para proteção e coragem, Quartzo Rosa para amor e cura emocional. Contas de 8mm em elástico reforçado.",
    shortDescription: "Pulseira combinada – proteção e amor",
    images: [braceletPedrasOlhoTigreQuartzo, braceletPedrasOlhoTigreQuartzo, braceletPedrasOlhoTigreQuartzo],
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, proteção e autoconfiança", icon: "🐯" },
      { name: "Quartzo Rosa", meaning: "Amor-próprio e cura emocional", icon: "💎" },
    ],
    significance: "Proteção e amor",
    relatedIds: ["pulseira-pedras-ametista", "pulseira-pedras-turmalina"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pulseira-pedras-ametista",
    name: "Pulseira de Ametista",
    slug: "pulseira-pedras-ametista",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Contas de ametista natural de 8mm em pulseira elástica. A pedra da espiritualidade e calma, ideal para meditação e paz interior.",
    shortDescription: "Pulseira de ametista – calma e espiritualidade",
    images: [braceletPedrasAmetista, braceletPedrasAmetista, braceletPedrasAmetista],
    elements: [
      { name: "Ametista", meaning: "Intuição, calma e proteção espiritual", icon: "🔮" },
    ],
    significance: "Calma e espiritualidade",
    relatedIds: ["pulseira-olho-tigre-quartzo-rosa", "pulseira-pedras-turmalina"],
    inStock: true,
  },
  {
    id: "pulseira-pedras-turmalina",
    name: "Pulseira de Turmalina Negra",
    slug: "pulseira-pedras-turmalina",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 64.90,
    description: "Contas de turmalina negra natural em pulseira elástica. Escudo energético poderoso contra negatividade e estresse.",
    shortDescription: "Pulseira de turmalina negra – proteção total",
    images: [braceletPedrasTurmalina, braceletPedrasTurmalina, braceletPedrasTurmalina],
    elements: [
      { name: "Turmalina Negra", meaning: "Escudo energético e aterramento", icon: "🖤" },
    ],
    significance: "Proteção e aterramento",
    relatedIds: ["pulseira-pedras-ametista", "pulseira-pedras-lapis"],
    inStock: true,
  },
  {
    id: "pulseira-jade-citrino",
    name: "Pulseira Jade + Citrino",
    slug: "pulseira-jade-citrino",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 74.90,
    description: "Combinação de Jade e Citrino em pulseira elástica. Prosperidade, sorte e abundância reunidas. Contas de 8mm.",
    shortDescription: "Pulseira combinada – prosperidade e sorte",
    images: [braceletPedrasJadeCitrino, braceletPedrasJadeCitrino, braceletPedrasJadeCitrino],
    elements: [
      { name: "Jade", meaning: "Sorte, prosperidade e harmonia", icon: "💚" },
      { name: "Citrino", meaning: "Abundância, autoestima e energia positiva", icon: "💛" },
    ],
    significance: "Prosperidade e sorte",
    relatedIds: ["pulseira-olho-tigre-quartzo-rosa", "pulseira-pedras-lapis"],
    inStock: true,
    badge: "Personalizável",
  },
  {
    id: "pulseira-pedras-lapis",
    name: "Pulseira de Lápis-Lazúli",
    slug: "pulseira-pedras-lapis-lazuli",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 69.90,
    description: "Contas de lápis-lazúli natural de 6mm em pulseira elástica. A pedra da sabedoria e verdade, conecta à intuição profunda.",
    shortDescription: "Pulseira de lápis-lazúli – sabedoria e verdade",
    images: [braceletPedrasLapis, braceletPedrasLapis, braceletPedrasLapis],
    elements: [
      { name: "Lápis-Lazúli", meaning: "Sabedoria, verdade e intuição", icon: "💙" },
    ],
    significance: "Sabedoria e verdade",
    relatedIds: ["pulseira-pedras-ametista", "pulseira-jade-citrino"],
    inStock: true,
  },
  {
    id: "pulseira-pedras-quartzo-rosa",
    name: "Pulseira de Quartzo Rosa",
    slug: "pulseira-pedras-quartzo-rosa",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Contas de quartzo rosa natural de 8mm em pulseira elástica. A pedra do amor incondicional, promove cura emocional e autoestima.",
    shortDescription: "Pulseira de quartzo rosa – amor e cura",
    images: [braceletPedrasQuartzoRosa, braceletPedrasQuartzoRosa, braceletPedrasQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Amor-próprio, cura emocional e compaixão", icon: "💎" },
    ],
    significance: "Amor e cura emocional",
    relatedIds: ["pulseira-pedras-ametista", "pulseira-olho-tigre-quartzo-rosa"],
    inStock: true,
  },
  {
    id: "pulseira-pedras-olho-tigre",
    name: "Pulseira de Olho de Tigre",
    slug: "pulseira-pedras-olho-tigre",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 64.90,
    description: "Contas de olho de tigre natural em pulseira elástica. Coragem, proteção e autoconfiança para enfrentar o dia a dia.",
    shortDescription: "Pulseira de olho de tigre – coragem e proteção",
    images: [braceletPedrasOlhoTigre, braceletPedrasOlhoTigre, braceletPedrasOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, proteção e autoconfiança", icon: "🐯" },
    ],
    significance: "Coragem e proteção",
    relatedIds: ["pulseira-pedras-turmalina", "pulseira-olho-tigre-quartzo-rosa"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pulseira-pedras-jade",
    name: "Pulseira de Jade",
    slug: "pulseira-pedras-jade",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 64.90,
    description: "Contas de jade verde natural em pulseira elástica. Prosperidade, harmonia e equilíbrio emocional.",
    shortDescription: "Pulseira de jade – prosperidade e harmonia",
    images: [braceletPedrasJade, braceletPedrasJade, braceletPedrasJade],
    elements: [
      { name: "Jade", meaning: "Sorte, prosperidade e harmonia", icon: "💚" },
    ],
    significance: "Prosperidade e harmonia",
    relatedIds: ["pulseira-jade-citrino", "pulseira-pedras-citrino"],
    inStock: true,
  },
  {
    id: "pulseira-pedras-citrino",
    name: "Pulseira de Citrino",
    slug: "pulseira-pedras-citrino",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 64.90,
    description: "Contas de citrino natural em pulseira elástica. A pedra da abundância e alegria, atrai prosperidade e energia positiva.",
    shortDescription: "Pulseira de citrino – abundância e alegria",
    images: [braceletPedrasCitrino, braceletPedrasCitrino, braceletPedrasCitrino],
    elements: [
      { name: "Citrino", meaning: "Abundância, autoestima e energia positiva", icon: "💛" },
    ],
    significance: "Abundância e alegria",
    relatedIds: ["pulseira-jade-citrino", "pulseira-pedras-jade"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "pulseira-pedras-hematita",
    name: "Pulseira de Hematita",
    slug: "pulseira-pedras-hematita",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Contas de hematita facetada em pulseira elástica. Aterramento, foco e equilíbrio energético. Visual sofisticado e moderno.",
    shortDescription: "Pulseira de hematita – foco e aterramento",
    images: [braceletPedrasHematita, braceletPedrasHematita, braceletPedrasHematita],
    elements: [
      { name: "Hematita", meaning: "Aterramento, foco e equilíbrio energético", icon: "⚫" },
    ],
    significance: "Foco e aterramento",
    relatedIds: ["pulseira-pedras-turmalina", "pulseira-pedras-olho-tigre"],
    inStock: true,
  },
];
export const steelBracelets: Product[] = [
  {
    id: "pulseira-aco-olho-tigre",
    name: "Pulseira de Aço com Olho de Tigre",
    slug: "pulseira-aco-olho-tigre",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 89.90,
    description: "Corrente de aço inoxidável com pingente removível de Olho de Tigre natural. Design clean e sofisticado para o dia a dia. Fecho lagosta ajustável.",
    shortDescription: "Pulseira de aço com Olho de Tigre – coragem e sofisticação",
    images: [braceletAcoOlhoTigre, braceletAcoOlhoTigre, braceletAcoOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, proteção e autoconfiança", icon: "🐯" },
    ],
    significance: "Coragem e sofisticação",
    relatedIds: ["pulseira-aco-ametista", "pulseira-aco-quartzo-rosa"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pulseira-aco-ametista",
    name: "Pulseira de Aço com Ametista",
    slug: "pulseira-aco-ametista",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 89.90,
    description: "Corrente de aço inoxidável prateada com pingente de ametista natural. Elegância e espiritualidade. Fecho lagosta com extensão ajustável.",
    shortDescription: "Pulseira de aço com ametista – elegância e calma",
    images: [braceletAcoAmetista, braceletAcoAmetista, braceletAcoAmetista],
    elements: [
      { name: "Ametista", meaning: "Intuição, calma e proteção espiritual", icon: "🔮" },
    ],
    significance: "Elegância e calma",
    relatedIds: ["pulseira-aco-olho-tigre", "pulseira-aco-jade"],
    inStock: true,
  },
  {
    id: "pulseira-aco-quartzo-rosa",
    name: "Pulseira de Aço com Quartzo Rosa",
    slug: "pulseira-aco-quartzo-rosa",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 89.90,
    description: "Corrente de aço inoxidável com pingente de quartzo rosa natural. Amor-próprio e sofisticação em uma peça durável e antialérgica.",
    shortDescription: "Pulseira de aço com quartzo rosa – amor e elegância",
    images: [braceletAcoQuartzoRosa, braceletAcoQuartzoRosa, braceletAcoQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Amor-próprio e cura emocional", icon: "💎" },
    ],
    significance: "Amor e elegância",
    relatedIds: ["pulseira-aco-ametista", "pulseira-aco-citrino"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "pulseira-aco-jade",
    name: "Pulseira de Aço com Jade",
    slug: "pulseira-aco-jade",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 94.90,
    description: "Corrente de aço inoxidável com pingente de jade verde natural. Prosperidade e harmonia com acabamento premium. Fecho lagosta ajustável.",
    shortDescription: "Pulseira de aço com jade – prosperidade e harmonia",
    images: [braceletAcoJade, braceletAcoJade, braceletAcoJade],
    elements: [
      { name: "Jade", meaning: "Sorte, prosperidade e harmonia", icon: "💚" },
    ],
    significance: "Prosperidade e harmonia",
    relatedIds: ["pulseira-aco-citrino", "pulseira-aco-olho-tigre"],
    inStock: true,
  },
  {
    id: "pulseira-aco-citrino",
    name: "Pulseira de Aço Dourado com Citrino",
    slug: "pulseira-aco-citrino",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 99.90,
    description: "Corrente de aço inoxidável banhada a ouro com pingente de citrino natural. Abundância e luz solar. Peça premium com acabamento dourado.",
    shortDescription: "Pulseira de aço dourado com citrino – abundância e luz",
    images: [braceletAcoCitrino, braceletAcoCitrino, braceletAcoCitrino],
    elements: [
      { name: "Citrino", meaning: "Abundância, autoestima e energia positiva", icon: "💛" },
    ],
    significance: "Abundância e luz",
    relatedIds: ["pulseira-aco-jade", "pulseira-aco-quartzo-rosa"],
    inStock: true,
    badge: "Edição limitada",
  },
  {
    id: "pulseira-aco-turmalina",
    name: "Pulseira de Aço com Turmalina Negra",
    slug: "pulseira-aco-turmalina",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 89.90,
    description: "Corrente de aço inoxidável prateada com pingente de turmalina negra. Escudo energético em um design sofisticado. Fecho lagosta ajustável.",
    shortDescription: "Pulseira de aço com turmalina – proteção e estilo",
    images: [braceletAcoTurmalina, braceletAcoTurmalina, braceletAcoTurmalina],
    elements: [
      { name: "Turmalina Negra", meaning: "Escudo energético e aterramento", icon: "🖤" },
    ],
    significance: "Proteção e estilo",
    relatedIds: ["pulseira-aco-olho-tigre", "pulseira-aco-lapis"],
    inStock: true,
  },
  {
    id: "pulseira-aco-lapis",
    name: "Pulseira de Aço com Lápis-Lazúli",
    slug: "pulseira-aco-lapis-lazuli",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 94.90,
    description: "Corrente de aço inoxidável com pingente de lápis-lazúli natural. Sabedoria e verdade em uma peça premium. Fecho lagosta com extensão.",
    shortDescription: "Pulseira de aço com lápis-lazúli – sabedoria e verdade",
    images: [braceletAcoLapis, braceletAcoLapis, braceletAcoLapis],
    elements: [
      { name: "Lápis-Lazúli", meaning: "Sabedoria, verdade e intuição", icon: "💙" },
    ],
    significance: "Sabedoria e verdade",
    relatedIds: ["pulseira-aco-ametista", "pulseira-aco-turmalina"],
    inStock: true,
    badge: "Novo",
  },
];

// ========== MINIMALISTAS ==========
export const minimalistBracelets: Product[] = [
  {
    id: "pulseira-mini-ametista",
    name: "Pulseira Mini Ametista",
    slug: "pulseira-mini-ametista",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Pedrinhas de ametista delicadamente combinadas com esferas de aço inoxidável. A ametista é a pedra da espiritualidade e intuição, promove calma interior, equilíbrio emocional e proteção espiritual. Ideal para quem busca paz e clareza mental. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de ametista – calma e intuição",
    images: [braceletMiniAmetista2, braceletMiniAmetista3, braceletMiniAmetista4],
    videoUrl: "/__l5e/assets-v1/76c98bc5-6852-4ee2-80a5-0845143388ae/pulseira-mini-ametista.mp4",
    elements: [
      { name: "Ametista", meaning: "Intuição, calma, proteção espiritual e equilíbrio emocional", icon: "🔮" },
    ],
    significance: "Calma e intuição",
    relatedIds: ["pulseira-mini-olho-tigre", "pulseira-mini-jade"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pulseira-mini-olho-tigre",
    name: "Pulseira Mini Olho de Tigre",
    slug: "pulseira-mini-olho-tigre",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Pedrinhas de olho de tigre intercaladas com esferas de aço inoxidável. O olho de tigre é a pedra da coragem e autoconfiança, oferece proteção energética e ajuda a tomar decisões com clareza. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de olho de tigre – proteção e coragem",
    images: [braceletMiniOlhoTigre2, braceletMiniOlhoTigre3, braceletMiniOlhoTigre2],
    videoUrl: "/__l5e/assets-v1/8a13aab2-5dc7-483f-aa81-f408a4e31ea0/pulseira-mini-olho-tigre.mp4",
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, proteção, autoconfiança e clareza mental", icon: "🐯" },
    ],
    significance: "Proteção e coragem",
    relatedIds: ["pulseira-mini-ametista", "pulseira-mini-granada"],
    inStock: true,
  },
  {
    id: "pulseira-mini-jade",
    name: "Pulseira Mini Jade",
    slug: "pulseira-mini-jade",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Pedrinhas de jade verde intercaladas com esferas de aço inoxidável dourado. A jade é a pedra da prosperidade e sorte, promove harmonia, equilíbrio e abundância. Considerada sagrada em diversas culturas. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de jade – prosperidade e harmonia",
    images: [braceletMiniJade, braceletMiniJade2, braceletMiniJade3],
    videoUrl: "/__l5e/assets-v1/a8e44494-9533-410c-97db-3169ba46f203/pulseira-mini-jade.mp4",
    elements: [
      { name: "Jade", meaning: "Prosperidade, sorte, harmonia e equilíbrio", icon: "💚" },
    ],
    significance: "Prosperidade e sorte",
    relatedIds: ["pulseira-mini-lapis", "pulseira-mini-agua-marinha"],
    inStock: true,
  },
  {
    id: "pulseira-mini-lapis",
    name: "Pulseira Mini Lápis-Lazúli",
    slug: "pulseira-mini-lapis-lazuli",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 64.90,
    description: "Pedrinhas de lápis-lazúli intercaladas com esferas de aço dourado. O lápis-lazúli é a pedra da sabedoria e verdade, estimula a comunicação autêntica e a conexão com a intuição profunda. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de lápis-lazúli – sabedoria e verdade",
    images: [braceletMiniLapis, braceletMiniLapis2, braceletMiniLapis3],
    videoUrl: "/__l5e/assets-v1/57b25893-17f3-4c94-97b0-074148177893/pulseira-mini-lapis.mp4",
    elements: [
      { name: "Lápis-Lazúli", meaning: "Sabedoria, verdade, intuição e comunicação", icon: "💙" },
    ],
    significance: "Sabedoria e verdade",
    relatedIds: ["pulseira-mini-ametista", "pulseira-mini-agua-marinha"],
    inStock: true,
    badge: "Edição limitada",
  },
  {
    id: "pulseira-mini-granada",
    name: "Pulseira Mini Granada",
    slug: "pulseira-mini-granada",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 64.90,
    description: "Pedrinhas de granada facetadas intercaladas com esferas de aço inoxidável. A granada é a pedra da paixão e vitalidade, estimula a energia vital, fortalece a coragem e desperta a força interior. Fecho lagosta ajustável.",
    shortDescription: "Pulseira minimalista de granada – paixão e vitalidade",
    images: [braceletMiniGranada, braceletMiniGranada2, braceletMiniGranada3],
    videoUrl: "/__l5e/assets-v1/52ec6adc-5c55-4c4f-8240-f27753ddd8f9/pulseira-mini-granada.mp4",
    elements: [
      { name: "Granada", meaning: "Paixão, vitalidade, coragem e força interior", icon: "❤️‍🔥" },
    ],
    significance: "Paixão e vitalidade",
    relatedIds: ["pulseira-mini-olho-tigre", "pulseira-mini-ametista"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "pulseira-mini-agua-marinha",
    name: "Pulseira Mini Água-Marinha",
    slug: "pulseira-mini-agua-marinha",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 74.90,
    description: "Pedrinhas de água-marinha natural com pingente bruto de água-marinha e acabamento em aço inoxidável. A água-marinha é a pedra da serenidade e comunicação, acalma emoções turbulentas e traz clareza mental. Associada ao elemento água, é ideal para quem busca paz interior. Fecho lagosta ajustável.",
    shortDescription: "Pulseira minimalista de água-marinha – serenidade e clareza",
    images: [braceletMiniAguaMarinha, braceletMiniAguaMarinha, braceletMiniAguaMarinha],
    videoUrl: "/__l5e/assets-v1/8a82684f-2a71-41f9-9fe6-9450ab7bd3f9/pulseira-mini-agua-marinha.mp4",
    elements: [
      { name: "Água-Marinha", meaning: "Serenidade, comunicação, clareza e calma emocional", icon: "🌊" },
    ],
    significance: "Serenidade e clareza",
    relatedIds: ["pulseira-mini-jade", "pulseira-mini-lapis"],
    inStock: true,
    badge: "Exclusivo",
  },
];
