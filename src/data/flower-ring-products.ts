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
import ringFlorSempreViva from "@/assets/ring-flor-sempre-viva.jpg";

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
    id: "anel-sv-vermelha-quadrado",
    name: "Anel Sempre-Viva Vermelha Quadrado",
    slug: "anel-sv-vermelha-quadrado",
    category: "anel",
    subcategory: "flores",
    price: 99.9,
    description:
      "Sempre-viva vermelha eternizada em resina cristalina, em formato quadrado marcante. Biojoia artesanal que simboliza amor, força e memória afetiva.",
    shortDescription:
      "Sempre-viva vermelha em resina, formato quadrado e presença marcante",
    images: [ringSvVermelha1, ringSvVermelha2],
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
    relatedIds: ["anel-sv-roxa-dome", "anel-sv-roxa-quadrado"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "anel-sv-roxa-dome",
    name: "Anel Sempre-Viva Roxa Dome",
    slug: "anel-sv-roxa-dome",
    category: "anel",
    subcategory: "flores",
    price: 89.9,
    description:
      "Sempre-viva roxa em design dome arredondado, com acabamento translúcido e confortável no uso diário. Um modelo moderno e elegante.",
    shortDescription:
      "Sempre-viva roxa em formato dome arredondado e acabamento cristalino",
    images: [ringSvRoxaDome1, ringSvRoxaDome2, ringSvRoxaDome3, ringSvRoxaDome4],
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
    relatedIds: ["anel-sv-roxa-quadrado", "anel-sv-vermelha-quadrado"],
    inStock: true,
  },
  {
    id: "anel-sv-roxa-quadrado",
    name: "Anel Sempre-Viva Roxa Quadrado",
    slug: "anel-sv-roxa-quadrado",
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
    relatedIds: ["anel-sv-roxa-dome", "anel-sv-vermelha-quadrado"],
    inStock: true,
  },
  {
    id: "anel-sv-amarela",
    name: "Anel Sempre-Viva Amarela Solar",
    slug: "anel-sv-amarela",
    category: "anel",
    subcategory: "flores",
    price: 94.9,
    description:
      "Sempre-viva amarela preservada em resina cristalina, trazendo uma energia alegre e luminosa para o visual.",
    shortDescription:
      "Sempre-viva amarela em resina com energia solar e alegre",
    images: [ringFlorSempreVivaAmarela1, ringFlorSempreVivaAmarela2, ringFlorSempreVivaAmarela3],
    videoUrl: "/videos/anel-sv-amarela.mp4",
    elements: [
      {
        name: "Sempre-Viva Amarela",
        meaning: "Prosperidade, alegria e confiança",
        icon: "🌼",
      },
    ],
    sizes,
    significance: "Alegria e prosperidade",
    relatedIds: ["anel-sv-verde", "anel-sv-mista"],
    inStock: true,
    badge: "Popular",
  },
  {
    id: "anel-sv-rosa",
    name: "Anel Sempre-Viva Rosa Delicada",
    slug: "anel-sv-rosa",
    category: "anel",
    subcategory: "flores",
    price: 89.9,
    description:
      "Sempre-viva rosa em composição suave e feminina, eternizada em resina cristalina para uso diário.",
    shortDescription:
      "Sempre-viva rosa com delicadeza e toque romântico",
    images: [ringFlorSempreVivaRosa1, ringFlorSempreVivaRosa2, ringFlorSempreVivaRosa3],
    videoUrl: "/videos/anel-sv-rosa.mp4",
    elements: [
      {
        name: "Sempre-Viva Rosa",
        meaning: "Afeto, ternura e autocuidado",
        icon: "🌷",
      },
    ],
    sizes,
    significance: "Doçura e afeto",
    relatedIds: ["anel-sv-mista", "anel-sv-vermelha-quadrado"],
    inStock: true,
  },
  {
    id: "anel-sv-verde",
    name: "Anel Sempre-Viva Verde Natural",
    slug: "anel-sv-verde",
    category: "anel",
    subcategory: "flores",
    price: 84.9,
    description:
      "Sempre-viva em tons naturais de verde com estética orgânica e minimalista, preservada em resina transparente.",
    shortDescription:
      "Sempre-viva verde com visual natural e minimalista",
    images: [ringFlorSempreVivaVerde1, ringFlorSempreVivaVerde2, ringFlorSempreViva],
    videoUrl: "/videos/anel-sv-verde.mp4",
    elements: [
      {
        name: "Sempre-Viva Verde",
        meaning: "Cura, crescimento e renovação",
        icon: "🌿",
      },
    ],
    sizes,
    significance: "Renovação e equilíbrio",
    relatedIds: ["anel-sv-amarela", "anel-sv-mista"],
    inStock: true,
  },
  {
    id: "anel-sv-mista",
    name: "Anel Sempre-Viva Mista",
    slug: "anel-sv-mista",
    category: "anel",
    subcategory: "flores",
    price: 84.9,
    description:
      "Composição de sempre-vivas em tonalidades variadas, criando um visual delicado, natural e único em cada peça.",
    shortDescription:
      "Mix de sempre-vivas em resina para um visual artesanal único",
    images: [ringFlorSempreVivaMista, ringFlorSempreViva],
    videoUrl: "/videos/anel-sv-mista.mp4",
    elements: [
      {
        name: "Sempre-Viva Mista",
        meaning: "Renovação, harmonia e leveza",
        icon: "🌸",
      },
    ],
    sizes,
    significance: "Harmonia e renovação",
    relatedIds: ["anel-sv-verde", "anel-sv-amarela"],
    inStock: true,
  },
];
