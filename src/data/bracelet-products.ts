import { Product } from "./products";

// Macramê Bracelet Images
import braceletMacrameLavanda from "@/assets/bracelet-macrame-lavanda.jpg";
import braceletMacramePimenta from "@/assets/bracelet-macrame-pimenta.jpg";
import braceletMacrameGirassol from "@/assets/bracelet-macrame-girassol.jpg";
import braceletMacrameRosa from "@/assets/bracelet-macrame-rosa.jpg";
import braceletMacrameMargarida from "@/assets/bracelet-macrame-margarida.jpg";

// Stone Bracelet Images
import braceletPedrasOlhoTigreQuartzo from "@/assets/bracelet-pedras-olho-tigre-quartzo.jpg";
import braceletPedrasAmetista from "@/assets/bracelet-pedras-ametista.jpg";
import braceletPedrasTurmalina from "@/assets/bracelet-pedras-turmalina.jpg";
import braceletPedrasJadeCitrino from "@/assets/bracelet-pedras-jade-citrino.jpg";
import braceletPedrasLapis from "@/assets/bracelet-pedras-lapis.jpg";

// Steel Bracelet Images
import braceletAcoOlhoTigre from "@/assets/bracelet-aco-olho-tigre.jpg";
import braceletAcoAmetista from "@/assets/bracelet-aco-ametista.jpg";
import braceletAcoQuartzoRosa from "@/assets/bracelet-aco-quartzo-rosa.jpg";
import braceletAcoJade from "@/assets/bracelet-aco-jade.jpg";
import braceletAcoCitrino from "@/assets/bracelet-aco-citrino.jpg";

// Minimalist Bracelet Images
import braceletMiniQuartzoRosa from "@/assets/bracelet-mini-quartzo-rosa.jpg";
import braceletMiniAmetista from "@/assets/bracelet-mini-ametista.jpg";
import braceletMiniOlhoTigre from "@/assets/bracelet-mini-olho-tigre.jpg";
import braceletMiniTurquesa from "@/assets/bracelet-mini-turquesa.jpg";
import braceletMiniJade from "@/assets/bracelet-mini-jade.jpg";

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
];

// ========== AÇO INOXIDÁVEL ==========
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
];

// ========== MINIMALISTAS ==========
export const minimalistBracelets: Product[] = [
  {
    id: "pulseira-mini-quartzo-rosa",
    name: "Pulseira Mini Quartzo Rosa",
    slug: "pulseira-mini-quartzo-rosa",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Pedrinhas de quartzo rosa intercaladas com esferas de aço inoxidável. Amor-próprio discreto e elegante. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de quartzo rosa – amor discreto",
    images: [braceletMiniQuartzoRosa, braceletMiniQuartzoRosa, braceletMiniQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Amor-próprio e cura emocional", icon: "💎" },
    ],
    significance: "Amor discreto",
    relatedIds: ["pulseira-mini-ametista", "pulseira-mini-olho-tigre"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "pulseira-mini-ametista",
    name: "Pulseira Mini Ametista",
    slug: "pulseira-mini-ametista",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Pedrinhas de ametista delicadamente combinadas com esferas de aço. Calma e intuição em uma peça discreta e sofisticada. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de ametista – calma e intuição",
    images: [braceletMiniAmetista, braceletMiniAmetista, braceletMiniAmetista],
    elements: [
      { name: "Ametista", meaning: "Intuição, calma e proteção espiritual", icon: "🔮" },
    ],
    significance: "Calma e intuição",
    relatedIds: ["pulseira-mini-quartzo-rosa", "pulseira-mini-turquesa"],
    inStock: true,
  },
  {
    id: "pulseira-mini-olho-tigre",
    name: "Pulseira Mini Olho de Tigre",
    slug: "pulseira-mini-olho-tigre",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Pedrinhas de olho de tigre intercaladas com esferas de aço inoxidável. Proteção e coragem com elegância minimalista. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de olho de tigre – proteção elegante",
    images: [braceletMiniOlhoTigre, braceletMiniOlhoTigre, braceletMiniOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, proteção e autoconfiança", icon: "🐯" },
    ],
    significance: "Proteção elegante",
    relatedIds: ["pulseira-mini-quartzo-rosa", "pulseira-mini-jade"],
    inStock: true,
  },
  {
    id: "pulseira-mini-turquesa",
    name: "Pulseira Mini Turquesa",
    slug: "pulseira-mini-turquesa",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 64.90,
    description: "Pedrinhas de turquesa intercaladas com esferas de aço inoxidável. Comunicação e proteção em uma peça vibrante e delicada. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de turquesa – comunicação e proteção",
    images: [braceletMiniTurquesa, braceletMiniTurquesa, braceletMiniTurquesa],
    elements: [
      { name: "Turquesa", meaning: "Comunicação, proteção e cura", icon: "🩵" },
    ],
    significance: "Comunicação e proteção",
    relatedIds: ["pulseira-mini-ametista", "pulseira-mini-jade"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "pulseira-mini-jade",
    name: "Pulseira Mini Jade",
    slug: "pulseira-mini-jade",
    category: "pulseira",
    subcategory: "pedras-naturais",
    price: 59.90,
    description: "Pedrinhas de jade verde intercaladas com esferas de aço inoxidável dourado. Prosperidade e harmonia em um design minimalista. Fecho ajustável.",
    shortDescription: "Pulseira minimalista de jade – prosperidade discreta",
    images: [braceletMiniJade, braceletMiniJade, braceletMiniJade],
    elements: [
      { name: "Jade", meaning: "Sorte, prosperidade e harmonia", icon: "💚" },
    ],
    significance: "Prosperidade discreta",
    relatedIds: ["pulseira-mini-olho-tigre", "pulseira-mini-quartzo-rosa"],
    inStock: true,
  },
];
