import productAnelProtecao from "@/assets/product-anel-protecao.jpg";
import productColarAmor from "@/assets/product-colar-amor.jpg";
import productPingenteProsp from "@/assets/product-pingente-prosperidade.jpg";
import productPulseiraCalma from "@/assets/product-pulseira-calma.jpg";
import productAnelNoivado from "@/assets/product-anel-noivado.jpg";
import ringOlhoTigre from "@/assets/ring-olho-tigre.jpg";
import ringQuartzoRosa from "@/assets/ring-quartzo-rosa.jpg";
import ringAmetista from "@/assets/ring-ametista.jpg";
import ringTurmalinaNegraImg from "@/assets/ring-turmalina-negra.jpg";
import ringJade from "@/assets/ring-jade.jpg";

export type ProductCategory = "anel" | "colar" | "pingente" | "pulseira";

export interface ProductElement {
  name: string;
  meaning: string;
  icon: string; // emoji
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory?: ProductSubcategory;
  price: number;
  description: string;
  shortDescription: string;
  images: string[];
  elements: ProductElement[];
  sizes?: number[]; // ring sizes
  significance: string;
  relatedIds: string[];
  inStock: boolean;
  badge?: string;
}

export type ProductSubcategory = "pedras-naturais" | "flores" | "pimentas" | "geral";

export const products: Product[] = [
  // === ANÉIS COM PEDRAS NATURAIS ===
  {
    id: "anel-olho-tigre",
    name: "Anel Olho de Tigre",
    slug: "anel-olho-tigre",
    category: "anel",
    subcategory: "pedras-naturais",
    price: 89.90,
    description: "Leve no dedo a energia de coragem e blindagem contra inveja. O Olho de Tigre é conhecido por afastar más vibrações e atrair oportunidades. Cada peça é artesanalmente produzida em resina cristalina com base em aço inoxidável hipoalergênico.",
    shortDescription: "Proteção e prosperidade no seu dia a dia",
    images: [ringOlhoTigre, ringOlhoTigre, ringOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, autoconfiança e proteção contra inveja", icon: "🐯" },
    ],
    sizes: [14, 15, 16, 17, 18, 19, 20, 21],
    significance: "Proteção e prosperidade",
    relatedIds: ["anel-turmalina-negra", "anel-jade"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "anel-quartzo-rosa",
    name: "Anel Quartzo Rosa",
    slug: "anel-quartzo-rosa",
    category: "anel",
    subcategory: "pedras-naturais",
    price: 79.90,
    description: "O Quartzo Rosa é a pedra do amor incondicional. Use este anel para cultivar o amor-próprio e atrair relacionamentos harmoniosos. Acabamento polido com brilho suave em resina cristalina.",
    shortDescription: "Amor-próprio e harmonia emocional",
    images: [ringQuartzoRosa, ringQuartzoRosa, ringQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Cura emocional, amor-próprio e compaixão", icon: "💎" },
    ],
    sizes: [14, 15, 16, 17, 18, 19, 20, 21],
    significance: "Amor-próprio",
    relatedIds: ["colar-amor-proprio", "anel-jade"],
    inStock: true,
  },
  {
    id: "anel-ametista",
    name: "Anel Ametista",
    slug: "anel-ametista",
    category: "anel",
    subcategory: "pedras-naturais",
    price: 99.90,
    description: "A Ametista eleva sua conexão espiritual e intuição. Pedra de sabedoria e paz interior, ideal para quem busca equilíbrio e proteção energética. Base em aço inoxidável com acabamento premium.",
    shortDescription: "Espiritualidade e intuição elevada",
    images: [ringAmetista, ringAmetista, ringAmetista],
    elements: [
      { name: "Ametista", meaning: "Eleva intuição, purifica ambientes e promove calma", icon: "🔮" },
    ],
    sizes: [14, 15, 16, 17, 18, 19, 20, 21],
    significance: "Espiritualidade",
    relatedIds: ["pulseira-calma", "anel-quartzo-rosa"],
    inStock: true,
    badge: "Personalizável",
  },
  {
    id: "anel-turmalina-negra",
    name: "Anel Turmalina Negra",
    slug: "anel-turmalina-negra",
    category: "anel",
    subcategory: "pedras-naturais",
    price: 109.90,
    description: "A Turmalina Negra é o escudo definitivo contra energias densas e vampirismo energético. Proteção pesada para quem precisa de força extra no dia a dia. Resina cristalina com base hipoalergênica.",
    shortDescription: "Proteção máxima contra energias negativas",
    images: [ringTurmalinaNegraImg, ringTurmalinaNegraImg, ringTurmalinaNegraImg],
    elements: [
      { name: "Turmalina Negra", meaning: "Proteção contra vampirismo energético e energias densas", icon: "🖤" },
    ],
    sizes: [14, 15, 16, 17, 18, 19, 20, 21],
    significance: "Proteção pesada",
    relatedIds: ["anel-olho-tigre", "anel-protecao-total"],
    inStock: true,
    badge: "Edição limitada",
  },
  {
    id: "anel-jade",
    name: "Anel Jade",
    slug: "anel-jade",
    category: "anel",
    subcategory: "pedras-naturais",
    price: 94.90,
    description: "O Jade é o talismã milenar da sorte e prosperidade. Esta pedra sagrada atrai abundância e protege quem a usa. Ideal para negócios e novos começos. Acabamento polido premium.",
    shortDescription: "Sorte e prosperidade milenar",
    images: [ringJade, ringJade, ringJade],
    elements: [
      { name: "Jade", meaning: "Prosperidade, sorte e proteção ancestral", icon: "💚" },
    ],
    sizes: [14, 15, 16, 17, 18, 19, 20, 21],
    significance: "Sorte e prosperidade",
    relatedIds: ["pingente-prosperidade", "anel-olho-tigre"],
    inStock: true,
  },
  // === PRODUTOS ORIGINAIS ===
  {
    id: "anel-protecao-total",
    name: "Anel Proteção Total",
    slug: "anel-protecao-total",
    category: "anel",
    price: 189.90,
    description: "Unindo a força do Olho de Tigre com a energia vibrante da Pimenta Vermelha, este anel é um verdadeiro escudo energético. Ideal para quem busca coragem para enfrentar desafios e proteção contra energias negativas. Cada peça é artesanalmente produzida em resina cristalina, preservando a beleza natural dos elementos.",
    shortDescription: "Anel com Olho de Tigre e Pimenta Vermelha para proteção e coragem",
    images: [productAnelProtecao, productAnelProtecao, productAnelProtecao],
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, autoconfiança e proteção contra inveja e manipulação", icon: "🐯" },
      { name: "Pimenta Vermelha", meaning: "Proteção energética, afasta mau-olhado e força vital", icon: "🌶️" },
    ],
    sizes: [15, 16, 17, 18, 19, 20, 21],
    significance: "Coragem e proteção",
    relatedIds: ["colar-amor-proprio", "pulseira-calma"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "colar-amor-proprio",
    name: "Colar Amor-Próprio",
    slug: "colar-amor-proprio",
    category: "colar",
    price: 249.90,
    description: "O Quartzo Rosa é conhecido como a pedra do amor incondicional, e quando combinado com uma rosa natural eternizada em resina, cria uma joia que abraça o coração de quem usa. Perfeito para presentear ou para lembrar-se diariamente do seu valor. Corrente em aço inoxidável banhada a ouro.",
    shortDescription: "Colar com Quartzo Rosa e Rosa natural para amor e cura emocional",
    images: [productColarAmor, productColarAmor, productColarAmor],
    elements: [
      { name: "Quartzo Rosa", meaning: "Cura emocional, amor-próprio e compaixão", icon: "💎" },
      { name: "Rosa", meaning: "Amor eterno, paixão e gratidão", icon: "🌹" },
    ],
    significance: "Amor e cura emocional",
    relatedIds: ["anel-protecao-total", "pingente-prosperidade"],
    inStock: true,
  },
  {
    id: "pingente-prosperidade",
    name: "Pingente Prosperidade",
    slug: "pingente-prosperidade",
    category: "pingente",
    price: 159.90,
    description: "Citrino, a pedra da abundância, junto com a energia solar do Girassol, formam um pingente que atrai prosperidade e alegria para sua vida. Encapsulado em resina cristalina de alta qualidade, é uma peça que irradia positividade. Acompanha cordão ajustável em couro ecológico.",
    shortDescription: "Pingente com Citrino e Girassol para abundância e alegria",
    images: [productPingenteProsp, productPingenteProsp, productPingenteProsp],
    elements: [
      { name: "Citrino", meaning: "Atrai riqueza, autoestima e energia positiva", icon: "💛" },
      { name: "Girassol", meaning: "Felicidade, vitalidade e energia solar", icon: "🌻" },
    ],
    significance: "Abundância e alegria",
    relatedIds: ["colar-amor-proprio", "pulseira-calma"],
    inStock: true,
  },
  {
    id: "pulseira-calma",
    name: "Pulseira Calma",
    slug: "pulseira-calma",
    category: "pulseira",
    price: 139.90,
    description: "A Ametista é reconhecida por suas propriedades calmantes e espirituais, combinada com a suavidade da Lavanda desidratada, cria uma pulseira que convida à paz interior. Ideal para meditação e momentos de introspecção. Fecho ajustável em aço inoxidável.",
    shortDescription: "Pulseira com Ametista e Lavanda para paz e intuição",
    images: [productPulseiraCalma, productPulseiraCalma, productPulseiraCalma],
    elements: [
      { name: "Ametista", meaning: "Eleva intuição, purifica ambientes e promove calma", icon: "🔮" },
      { name: "Lavanda", meaning: "Calma, purificação e paz interior", icon: "💜" },
    ],
    significance: "Paz e intuição",
    relatedIds: ["anel-protecao-total", "colar-amor-proprio"],
    inStock: true,
    badge: "Novo",
  },
  {
    id: "anel-noivado",
    name: "Anel de Noivado",
    slug: "anel-de-noivado",
    category: "anel",
    price: 299.90,
    description: "Uma peça única para um momento único. O Cristal de Quartzo, maestro da energia, amplifica a pureza da Flor de Laranjeira eternizada em resina. Símbolo de união, fertilidade e novos começos. Acabamento premium em aço inoxidável banhado a ouro. Embalagem especial para pedido de casamento.",
    shortDescription: "Anel com Cristal e Flor de Laranjeira para pureza e união",
    images: [productAnelNoivado, productAnelNoivado, productAnelNoivado],
    elements: [
      { name: "Cristal de Quartzo", meaning: "Amplifica intenções, pureza e clareza", icon: "✨" },
      { name: "Flor de Laranjeira", meaning: "Casamento, fertilidade e pureza", icon: "🌸" },
    ],
    sizes: [15, 16, 17, 18, 19, 20, 21],
    significance: "Pureza e união",
    relatedIds: ["colar-amor-proprio", "pingente-prosperidade"],
    inStock: true,
    badge: "Especial",
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getRelatedProducts = (product: Product) =>
  product.relatedIds.map(getProductById).filter(Boolean) as Product[];
export const getProductsByCategory = (category: ProductCategory) =>
  products.filter((p) => p.category === category);

export const formatPrice = (price: number) =>
  price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export const categoryLabels: Record<ProductCategory, string> = {
  anel: "Anéis",
  colar: "Colares",
  pingente: "Pingentes",
  pulseira: "Pulseiras",
};
