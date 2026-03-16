import { Product } from "./products";

import ringFlorSempreVivaVerde1 from "@/assets/ring-flor-sempre-viva-verde-1.jpg";
import ringFlorSempreVivaVerde2 from "@/assets/ring-flor-sempre-viva-verde-2.jpg";
import ringFlorSempreVivaAmarela1 from "@/assets/ring-flor-sempre-viva-amarela-1.jpg";
import ringFlorSempreVivaAmarela2 from "@/assets/ring-flor-sempre-viva-amarela-2.jpg";
import ringFlorSempreVivaAmarela3 from "@/assets/ring-flor-sempre-viva-amarela-3.jpg";
import ringFlorSempreVivaRosa1 from "@/assets/ring-flor-sempre-viva-rosa-1.jpg";
import ringFlorSempreVivaRosa2 from "@/assets/ring-flor-sempre-viva-rosa-2.jpg";
import ringFlorSempreVivaRosa3 from "@/assets/ring-flor-sempre-viva-rosa-3.jpg";
import ringFlorSempreVivaMista from "@/assets/ring-flor-sempre-viva-mista.jpg";

import ringSvVermelha1 from "@/assets/ring-sv-vermelha-1.jpg";
import ringSvVermelha2 from "@/assets/ring-sv-vermelha-2.jpg";
import ringSvRoxaDome1 from "@/assets/ring-sv-roxa-dome-1.jpg";
import ringSvRoxaDome2 from "@/assets/ring-sv-roxa-dome-2.jpg";
import ringSvRoxaDome3 from "@/assets/ring-sv-roxa-dome-3.jpg";
import ringSvRoxaDome4 from "@/assets/ring-sv-roxa-dome-4.jpg";
import ringSvRoxaQuad1 from "@/assets/ring-sv-roxa-quad-1.jpg";
import ringSvRoxaQuad2 from "@/assets/ring-sv-roxa-quad-2.jpg";
import ringSvRoxaQuad3 from "@/assets/ring-sv-roxa-quad-3.jpg";

const sizes = [14, 15, 16, 17, 18, 19, 20, 21, 22];

export const flowerRings: Product[] = [
  {
    id: "anel-flor-rosa",
    name: "Anel Sempre-Viva Vermelha Quadrado",
    slug: "anel-flor-rosa",
    category: "anel",
    subcategory: "flores",
    price: 99.9,
    description:
      "Sempre-viva vermelha eternizada em resina cristalina, em formato quadrado marcante. Biojoia artesanal que simboliza amor, força e memória afetiva.",
    shortDescription:
      "Sempre-viva vermelha em resina, formato quadrado e presença marcante",
    images: [ringSvVermelha1, ringSvVermelha2, ringFlorSempreVivaRosa1],
    videoUrl: "/videos/anel-sv-vermelha.mp4",
    elements: [
      {
        name: "Sempre-Viva Vermelha",
        meaning: "Amor duradouro, paixão e vitalidade",
        icon: "🌺",
      },
    ],
    sizes,
    significance: "Amor eterno",
    relatedIds: ["anel-flor-pimenta", "anel-flor-cerejeira"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "anel-flor-lavanda",
    name: "Anel Sempre-Viva Roxa Dome",
    slug: "anel-flor-lavanda",
    category: "anel",
    subcategory: "flores",
    price: 89.9,
    description:
      "Sempre-viva roxa em design dome arredondado, com acabamento translúcido e confortável no uso diário. Um modelo moderno e elegante.",
    shortDescription:
      "Sempre-viva roxa em formato dome arredondado e acabamento cristalino",
    images: [ringSvRoxaDome1, ringSvRoxaDome2, ringSvRoxaDome3],
    videoUrl: "/videos/anel-sv-roxa-dome.mp4",
    elements: [
      {
        name: "Sempre-Viva Roxa",
        meaning: "Calma, intuição e equilíbrio emocional",
        icon: "💜",
      },
    ],
    sizes,
    significance: "Serenidade e proteção",
    relatedIds: ["anel-flor-violeta", "anel-flor-orquidea"],
    inStock: true,
  },
  {
    id: "anel-flor-girassol",
    name: "Anel Sempre-Viva Amarela Solar",
    slug: "anel-flor-girassol",
    category: "anel",
    subcategory: "flores",
    price: 94.9,
    description:
      "Sempre-viva amarela preservada em resina cristalina, trazendo uma energia alegre e luminosa para o visual.",
    shortDescription:
      "Sempre-viva amarela em resina com energia solar e alegre",
    images: [ringFlorSempreVivaAmarela1, ringFlorSempreVivaAmarela2, ringFlorSempreVivaAmarela3],
    videoUrl: "/videos/anel-sv-vermelha.mp4",
    elements: [
      {
        name: "Sempre-Viva Amarela",
        meaning: "Prosperidade, alegria e confiança",
        icon: "🌼",
      },
    ],
    sizes,
    significance: "Alegria e prosperidade",
    relatedIds: ["anel-flor-cravo", "anel-flor-hortensia"],
    inStock: true,
    badge: "Popular",
  },
  {
    id: "anel-flor-margarida",
    name: "Anel Sempre-Viva Mista",
    slug: "anel-flor-margarida",
    category: "anel",
    subcategory: "flores",
    price: 84.9,
    description:
      "Composição de sempre-vivas em tonalidades variadas, criando um visual delicado, natural e único em cada peça.",
    shortDescription:
      "Mix de sempre-vivas em resina para um visual artesanal único",
    images: [ringFlorSempreVivaMista, ringFlorSempreVivaVerde1, ringFlorSempreVivaVerde2],
    videoUrl: "/videos/anel-sv-roxa-dome.mp4",
    elements: [
      {
        name: "Sempre-Viva Mista",
        meaning: "Renovação, harmonia e leveza",
        icon: "🌸",
      },
    ],
    sizes,
    significance: "Harmonia e renovação",
    relatedIds: ["anel-flor-sempre-viva", "anel-flor-hortensia"],
    inStock: true,
  },
  {
    id: "anel-flor-pimenta",
    name: "Anel Sempre-Viva Vermelha Intensa",
    slug: "anel-flor-pimenta",
    category: "anel",
    subcategory: "flores",
    price: 89.9,
    description:
      "Variação intensa da sempre-viva vermelha em resina, com aspecto vibrante e elegante para compor looks com personalidade.",
    shortDescription:
      "Sempre-viva vermelha intensa com visual marcante e sofisticado",
    images: [ringSvVermelha1, ringSvVermelha2, ringFlorSempreVivaRosa2],
    videoUrl: "/videos/anel-sv-vermelha.mp4",
    elements: [
      {
        name: "Sempre-Viva Vermelha",
        meaning: "Força, coragem e proteção afetiva",
        icon: "❤️",
      },
    ],
    sizes,
    significance: "Força e presença",
    relatedIds: ["anel-flor-rosa", "anel-flor-cerejeira"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "anel-flor-pimenta-rosa",
    name: "Anel Sempre-Viva Rosa Delicada",
    slug: "anel-flor-pimenta-rosa",
    category: "anel",
    subcategory: "flores",
    price: 89.9,
    description:
      "Sempre-viva rosa em composição suave e feminina, eternizada em resina cristalina para uso diário.",
    shortDescription:
      "Sempre-viva rosa com delicadeza e toque romântico",
    images: [ringFlorSempreVivaRosa1, ringFlorSempreVivaRosa2, ringFlorSempreVivaRosa3],
    videoUrl: "/videos/anel-sv-vermelha.mp4",
    elements: [
      {
        name: "Sempre-Viva Rosa",
        meaning: "Afeto, ternura e autocuidado",
        icon: "🌷",
      },
    ],
    sizes,
    significance: "Doçura e afeto",
    relatedIds: ["anel-flor-rosa", "anel-flor-laranjeira"],
    inStock: true,
  },
  {
    id: "anel-flor-jasmin",
    name: "Anel Sempre-Viva Roxa Quadrado",
    slug: "anel-flor-jasmin",
    category: "anel",
    subcategory: "flores",
    price: 94.9,
    description:
      "Sempre-viva roxa em formato quadrado com visual contemporâneo. Uma peça artesanal que valoriza a beleza natural da flor.",
    shortDescription:
      "Sempre-viva roxa em formato quadrado moderno",
    images: [ringSvRoxaQuad1, ringSvRoxaQuad2, ringSvRoxaQuad3],
    videoUrl: "/videos/anel-sv-roxa-quad.mp4",
    elements: [
      {
        name: "Sempre-Viva Roxa",
        meaning: "Espiritualidade, equilíbrio e criatividade",
        icon: "🔮",
      },
    ],
    sizes,
    significance: "Equilíbrio e intuição",
    relatedIds: ["anel-flor-violeta", "anel-flor-orquidea"],
    inStock: true,
  },
  {
    id: "anel-flor-dente-leao",
    name: "Anel Sempre-Viva Roxa Dome Premium",
    slug: "anel-flor-dente-leao",
    category: "anel",
    subcategory: "flores",
    price: 99.9,
    description:
      "Modelo dome premium com sempre-viva roxa em alta definição, com brilho intenso e excelente acabamento artesanal.",
    shortDescription:
      "Sempre-viva roxa dome premium com brilho intenso",
    images: [ringSvRoxaDome2, ringSvRoxaDome4, ringSvRoxaDome3],
    videoUrl: "/videos/anel-sv-roxa-dome.mp4",
    elements: [
      {
        name: "Sempre-Viva Roxa Premium",
        meaning: "Transformação, proteção e elegância",
        icon: "✨",
      },
    ],
    sizes,
    significance: "Transformação e proteção",
    relatedIds: ["anel-flor-lavanda", "anel-flor-violeta"],
    inStock: true,
    badge: "Exclusivo",
  },
  {
    id: "anel-flor-laranjeira",
    name: "Anel Sempre-Viva Roxa Quadrado Luxo",
    slug: "anel-flor-laranjeira",
    category: "anel",
    subcategory: "flores",
    price: 99.9,
    description:
      "Versão luxo da sempre-viva roxa em formato quadrado, ideal para quem busca um anel expressivo e sofisticado.",
    shortDescription:
      "Sempre-viva roxa quadrada em versão luxo",
    images: [ringSvRoxaQuad2, ringSvRoxaQuad1, ringFlorSempreVivaMista],
    videoUrl: "/videos/anel-sv-roxa-quad.mp4",
    elements: [
      {
        name: "Sempre-Viva Roxa Luxo",
        meaning: "Refinamento, estabilidade e beleza eterna",
        icon: "💎",
      },
    ],
    sizes,
    significance: "Elegância e refinamento",
    relatedIds: ["anel-flor-jasmin", "anel-flor-orquidea"],
    inStock: true,
    badge: "Especial",
  },
  {
    id: "anel-flor-sempre-viva",
    name: "Anel Sempre-Viva Verde Natural",
    slug: "anel-flor-sempre-viva",
    category: "anel",
    subcategory: "flores",
    price: 84.9,
    description:
      "Sempre-viva em tons naturais de verde com estética orgânica e minimalista, preservada em resina transparente.",
    shortDescription:
      "Sempre-viva verde com visual natural e minimalista",
    images: [ringFlorSempreVivaVerde1, ringFlorSempreVivaVerde2, ringFlorSempreVivaMista],
    videoUrl: "/videos/anel-sv-roxa-dome.mp4",
    elements: [
      {
        name: "Sempre-Viva Verde",
        meaning: "Cura, crescimento e renovação",
        icon: "🌿",
      },
    ],
    sizes,
    significance: "Renovação e equilíbrio",
    relatedIds: ["anel-flor-margarida", "anel-flor-hortensia"],
    inStock: true,
  },
  {
    id: "anel-flor-violeta",
    name: "Anel Sempre-Viva Lilás Clássico",
    slug: "anel-flor-violeta",
    category: "anel",
    subcategory: "flores",
    price: 89.9,
    description:
      "Sempre-viva lilás com acabamento clássico e versátil, combinando com diferentes estilos no dia a dia.",
    shortDescription:
      "Sempre-viva lilás clássica, versátil e elegante",
    images: [ringSvRoxaDome1, ringSvRoxaDome4, ringSvRoxaQuad3],
    elements: [
      {
        name: "Sempre-Viva Lilás",
        meaning: "Sabedoria, sensibilidade e harmonia",
        icon: "🪻",
      },
    ],
    sizes,
    significance: "Sabedoria e harmonia",
    relatedIds: ["anel-flor-lavanda", "anel-flor-jasmin"],
    inStock: true,
  },
  {
    id: "anel-flor-orquidea",
    name: "Anel Sempre-Viva Roxa Premium Quadrado",
    slug: "anel-flor-orquidea",
    category: "anel",
    subcategory: "flores",
    price: 109.9,
    description:
      "Sempre-viva roxa premium em formato quadrado, com acabamento de alto padrão para composições sofisticadas.",
    shortDescription:
      "Sempre-viva roxa premium em quadrado sofisticado",
    images: [ringSvRoxaQuad1, ringSvRoxaQuad2, ringSvRoxaDome1],
    elements: [
      {
        name: "Sempre-Viva Roxa Premium",
        meaning: "Nobreza, presença e autoconfiança",
        icon: "👑",
      },
    ],
    sizes,
    significance: "Presença e nobreza",
    relatedIds: ["anel-flor-jasmin", "anel-flor-laranjeira"],
    inStock: true,
    badge: "Premium",
  },
  {
    id: "anel-flor-cravo",
    name: "Anel Sempre-Viva Mista Radiante",
    slug: "anel-flor-cravo",
    category: "anel",
    subcategory: "flores",
    price: 89.9,
    description:
      "Composição radiante de sempre-vivas com mix de tons quentes e frios, resultando em uma biojoia expressiva.",
    shortDescription:
      "Mix radiante de sempre-vivas em resina cristalina",
    images: [ringSvVermelha2, ringFlorSempreVivaAmarela2, ringFlorSempreVivaMista],
    elements: [
      {
        name: "Sempre-Viva Mista",
        meaning: "Vitalidade, alegria e movimento",
        icon: "🌈",
      },
    ],
    sizes,
    significance: "Energia e vitalidade",
    relatedIds: ["anel-flor-girassol", "anel-flor-rosa"],
    inStock: true,
  },
  {
    id: "anel-flor-hortensia",
    name: "Anel Sempre-Viva Roxa Contemporâneo",
    slug: "anel-flor-hortensia",
    category: "anel",
    subcategory: "flores",
    price: 94.9,
    description:
      "Design contemporâneo com sempre-viva roxa, unindo acabamento moderno e visual artístico.",
    shortDescription:
      "Sempre-viva roxa com design contemporâneo",
    images: [ringSvRoxaQuad3, ringSvRoxaDome3, ringFlorSempreVivaVerde2],
    elements: [
      {
        name: "Sempre-Viva Roxa",
        meaning: "Criatividade, presença e autenticidade",
        icon: "🎨",
      },
    ],
    sizes,
    significance: "Autenticidade e estilo",
    relatedIds: ["anel-flor-violeta", "anel-flor-sempre-viva"],
    inStock: true,
  },
  {
    id: "anel-flor-cerejeira",
    name: "Anel Sempre-Viva Rosa & Roxa",
    slug: "anel-flor-cerejeira",
    category: "anel",
    subcategory: "flores",
    price: 99.9,
    description:
      "Combinação de sempre-vivas em tons rosa e roxo para um visual delicado e elegante, com acabamento artesanal.",
    shortDescription:
      "Mix de sempre-viva rosa e roxa em peça artesanal",
    images: [ringFlorSempreVivaRosa3, ringSvRoxaQuad2, ringSvVermelha1],
    elements: [
      {
        name: "Sempre-Viva Rosa & Roxa",
        meaning: "Amor, intuição e sensibilidade",
        icon: "💐",
      },
    ],
    sizes,
    significance: "Sensibilidade e beleza",
    relatedIds: ["anel-flor-rosa", "anel-flor-violeta"],
    inStock: true,
    badge: "Novo",
  },
];
