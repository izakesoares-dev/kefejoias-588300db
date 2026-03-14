import mandalaFloresSilvestres from "@/assets/mandala-flores-silvestres.jpg";
import mandalaRosasLavanda from "@/assets/mandala-rosas-lavanda.jpg";
import mandalaGirassolMargarida from "@/assets/mandala-girassol-margarida.jpg";
import mandalaAmetista from "@/assets/mandala-ametista.jpg";
import mandalaQuartzoRosa from "@/assets/mandala-quartzo-rosa.jpg";
import mandalaTurmalina from "@/assets/mandala-turmalina.jpg";
import mandalaCitrino from "@/assets/mandala-citrino.jpg";
import mandalaJade from "@/assets/mandala-jade.jpg";
import mandalaOlhoTigre from "@/assets/mandala-olho-tigre.jpg";
import mandala7Chakras from "@/assets/mandala-7-chakras.jpg";
import mandalaLapisLazuli from "@/assets/mandala-lapis-lazuli.jpg";
import mandalaPimentas from "@/assets/mandala-pimentas.jpg";
import mandalaHematita from "@/assets/mandala-hematita.jpg";
import mandalaCornalina from "@/assets/mandala-cornalina.jpg";
import mandalaSelenita from "@/assets/mandala-selenita.jpg";

import { Product } from "./products";

export const mandalaProducts: Product[] = [
  {
    id: "mandala-flores-silvestres",
    name: "Mandala Flores Silvestres",
    slug: "mandala-flores-silvestres",
    category: "pingente",
    price: 199.90,
    description: "Uma explosão de cores e vida! Flores silvestres variadas são dispostas simetricamente em resina cristalina, formando uma mandala única e irrepetível. Cada peça celebra a alegria da natureza em estado puro. Disponível em 15cm e 20cm. Para pendurar na parede ou apoiar em superfícies.",
    shortDescription: "Flores variadas eternizadas em resina, formando uma mandala única e colorida",
    images: [mandalaFloresSilvestres, mandalaFloresSilvestres, mandalaFloresSilvestres],
    elements: [
      { name: "Flores Silvestres", meaning: "Alegria, espontaneidade e conexão com a natureza", icon: "🌸" },
      { name: "Resina Cristalina", meaning: "Preservação eterna e clareza", icon: "✨" },
    ],
    significance: "Alegria e cor",
    relatedIds: ["mandala-rosas-lavanda", "mandala-girassol-margarida"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "mandala-rosas-lavanda",
    name: "Mandala Rosas & Lavanda",
    slug: "mandala-rosas-lavanda",
    category: "pingente",
    price: 219.90,
    description: "A combinação perfeita do amor e da paz. Rosas rosadas e flores de lavanda são dispostas em padrão sagrado de mandala, eternizadas em resina de alta qualidade. Uma peça que irradia amor-próprio e serenidade para qualquer ambiente. Disponível em 15cm e 20cm.",
    shortDescription: "Rosas e lavanda em padrão sagrado — amor, beleza e serenidade",
    images: [mandalaRosasLavanda, mandalaRosasLavanda, mandalaRosasLavanda],
    elements: [
      { name: "Rosa", meaning: "Amor eterno, paixão e gratidão", icon: "🌹" },
      { name: "Lavanda", meaning: "Calma, purificação e paz interior", icon: "💜" },
    ],
    significance: "Amor e serenidade",
    relatedIds: ["mandala-flores-silvestres", "mandala-quartzo-rosa"],
    inStock: true,
    badge: "Edição limitada",
  },
  {
    id: "mandala-girassol-margarida",
    name: "Mandala Girassol & Margarida",
    slug: "mandala-girassol-margarida",
    category: "pingente",
    price: 199.90,
    description: "A energia solar do girassol combinada com a pureza da margarida cria uma mandala que irradia positividade e alegria. Flores eternizadas em resina dourada para iluminar qualquer espaço. Uma peça cheia de vida e otimismo. Disponível em 15cm e 20cm.",
    shortDescription: "Girassóis e margaridas em resina dourada — energia solar e otimismo",
    images: [mandalaGirassolMargarida, mandalaGirassolMargarida, mandalaGirassolMargarida],
    elements: [
      { name: "Girassol", meaning: "Felicidade, vitalidade e energia solar", icon: "🌻" },
      { name: "Margarida", meaning: "Pureza, inocência e alegria simples", icon: "🌼" },
    ],
    significance: "Energia e otimismo",
    relatedIds: ["mandala-flores-silvestres", "mandala-citrino"],
    inStock: true,
  },
  {
    id: "mandala-ametista",
    name: "Mandala de Ametista",
    slug: "mandala-ametista",
    category: "pingente",
    price: 249.90,
    description: "Cascalhos de ametista, a pedra da elevação espiritual, são dispostos em geometria sagrada dentro da resina cristalina. Uma mandala poderosa para ambientes de meditação, purificando e elevando as vibrações do espaço. Disponível em 15cm e 20cm.",
    shortDescription: "Cascalhos de ametista em geometria sagrada — espiritualidade e purificação",
    images: [mandalaAmetista, mandalaAmetista, mandalaAmetista],
    elements: [
      { name: "Ametista", meaning: "Eleva intuição, purifica ambientes e promove calma espiritual", icon: "🔮" },
    ],
    significance: "Espiritualidade e clareza",
    relatedIds: ["mandala-lapis-lazuli", "mandala-7-chakras"],
    inStock: true,
    badge: "Mais vendido",
  },
  {
    id: "mandala-quartzo-rosa",
    name: "Mandala de Quartzo Rosa",
    slug: "mandala-quartzo-rosa",
    category: "pingente",
    price: 249.90,
    description: "A pedra do amor incondicional ganha forma de mandala. Cascalhos de quartzo rosa são dispostos simetricamente em resina cristalina, criando uma peça que emana acolhimento, compaixão e amor-próprio. Perfeita para quartos e ambientes de cura. Disponível em 15cm e 20cm.",
    shortDescription: "Quartzo rosa em padrão mandala — amor-próprio, cura e compaixão",
    images: [mandalaQuartzoRosa, mandalaQuartzoRosa, mandalaQuartzoRosa],
    elements: [
      { name: "Quartzo Rosa", meaning: "Cura emocional, amor-próprio e compaixão", icon: "💎" },
    ],
    significance: "Amor e cura emocional",
    relatedIds: ["mandala-rosas-lavanda", "mandala-7-chakras"],
    inStock: true,
  },
  {
    id: "mandala-turmalina",
    name: "Mandala de Turmalina Negra",
    slug: "mandala-turmalina",
    category: "pingente",
    price: 259.90,
    description: "A turmalina negra é o escudo máximo contra energias negativas. Em formato de mandala, potencializa sua ação protetora, criando um campo energético de proteção em todo o ambiente. Indicada para entrada de casa, escritório ou qualquer espaço que necessite de proteção. Disponível em 15cm e 20cm.",
    shortDescription: "Turmalina negra em mandala — proteção máxima e blindagem energética",
    images: [mandalaTurmalina, mandalaTurmalina, mandalaTurmalina],
    elements: [
      { name: "Turmalina Negra", meaning: "Proteção máxima, escudo energético e ancoragem", icon: "🖤" },
    ],
    significance: "Proteção e escudo",
    relatedIds: ["mandala-ametista", "mandala-olho-tigre"],
    inStock: true,
    badge: "Edição limitada",
  },
  {
    id: "mandala-citrino",
    name: "Mandala de Citrino",
    slug: "mandala-citrino",
    category: "pingente",
    price: 249.90,
    description: "O citrino, a pedra da abundância, irradia prosperidade e energia positiva em formato de mandala. Uma peça poderosa para atrair riqueza e alegria para sua casa ou negócio. Sua cor dourada ilumina o ambiente e eleva o astral de todos ao redor. Disponível em 15cm e 20cm.",
    shortDescription: "Citrino dourado em geometria sagrada — abundância e prosperidade",
    images: [mandalaCitrino, mandalaCitrino, mandalaCitrino],
    elements: [
      { name: "Citrino", meaning: "Atrai riqueza, autoestima e energia positiva", icon: "💛" },
    ],
    significance: "Prosperidade e energia",
    relatedIds: ["mandala-girassol-margarida", "mandala-7-chakras"],
    inStock: true,
  },
  {
    id: "mandala-jade",
    name: "Mandala de Jade",
    slug: "mandala-jade",
    category: "pingente",
    price: 249.90,
    description: "O jade verde, pedra do equilíbrio e da harmonia, compõe uma mandala que traz serenidade e equilíbrio para o ambiente. Conecta-se à natureza e promove crescimento em todas as áreas da vida. Ideal para salas de estar e jardins internos. Disponível em 15cm e 20cm.",
    shortDescription: "Jade verde em mandala sagrada — equilíbrio, harmonia e crescimento",
    images: [mandalaJade, mandalaJade, mandalaJade],
    elements: [
      { name: "Jade", meaning: "Equilíbrio, harmonia, saúde e boa sorte", icon: "🌿" },
    ],
    significance: "Equilíbrio e harmonia",
    relatedIds: ["mandala-quartzo-rosa", "mandala-citrino"],
    inStock: true,
  },
  {
    id: "mandala-olho-tigre",
    name: "Mandala de Olho de Tigre",
    slug: "mandala-olho-tigre",
    category: "pingente",
    price: 259.90,
    description: "O olho de tigre, pedra da coragem e autoconfiança, forma uma mandala hipnótica com seus tons dourados e marrons. Poderosa para ambientes de trabalho, atrai determinação, foco e sucesso profissional. Disponível em 15cm e 20cm.",
    shortDescription: "Olho de tigre dourado em mandala — coragem, foco e sucesso",
    images: [mandalaOlhoTigre, mandalaOlhoTigre, mandalaOlhoTigre],
    elements: [
      { name: "Olho de Tigre", meaning: "Coragem, autoconfiança e proteção contra inveja", icon: "🐯" },
    ],
    significance: "Coragem e foco",
    relatedIds: ["mandala-turmalina", "mandala-citrino"],
    inStock: true,
  },
  {
    id: "mandala-7-chakras",
    name: "Mandala 7 Chakras",
    slug: "mandala-7-chakras",
    category: "pingente",
    price: 299.90,
    description: "A mandala mais completa e poderosa da coleção. Sete pedras naturais — ametista, lápis-lazúli, quartzo azul, quartzo rosa, citrino, cornalina e jaspe vermelho — dispostas em padrão dos 7 chakras, encapsuladas em resina cristalina. Equilibra e alinha todos os centros energéticos do ser. Disponível em 15cm e 20cm.",
    shortDescription: "Sete pedras dos chakras em mandala sagrada — equilíbrio total do ser",
    images: [mandala7Chakras, mandala7Chakras, mandala7Chakras],
    elements: [
      { name: "7 Pedras dos Chakras", meaning: "Equilíbrio completo dos centros energéticos", icon: "🌈" },
      { name: "Geometria Sagrada", meaning: "Amplifica e direciona as energias das pedras", icon: "✨" },
    ],
    significance: "Equilíbrio total",
    relatedIds: ["mandala-ametista", "mandala-quartzo-rosa", "mandala-citrino"],
    inStock: true,
    badge: "Especial",
  },
  {
    id: "mandala-lapis-lazuli",
    name: "Mandala de Lápis-Lazúli",
    slug: "mandala-lapis-lazuli",
    category: "pingente",
    price: 259.90,
    description: "O lápis-lazúli, pedra da sabedoria e da intuição, compõe uma mandala de profundo azul que inspira clareza mental e conexão espiritual. Usada por reis e faraós, é a pedra da verdade e da visão superior. Ideal para escritórios e locais de estudo. Disponível em 15cm e 20cm.",
    shortDescription: "Lápis-lazúli em mandala — sabedoria, clareza mental e intuição",
    images: [mandalaLapisLazuli, mandalaLapisLazuli, mandalaLapisLazuli],
    elements: [
      { name: "Lápis-Lazúli", meaning: "Sabedoria, verdade, intuição e clareza mental", icon: "🔵" },
    ],
    significance: "Sabedoria e clareza",
    relatedIds: ["mandala-ametista", "mandala-7-chakras"],
    inStock: true,
  },
  {
    id: "mandala-pimentas",
    name: "Mandala das Pimentas",
    slug: "mandala-pimentas",
    category: "pingente",
    price: 199.90,
    description: "Pimentas vermelhas dispostas em padrão de mandala, eternizadas em resina cristalina. Uma peça de forte proteção energética, afastando mau-olhado e energias negativas da sua casa. Muito usada na entrada de residências e estabelecimentos comerciais. Disponível em 15cm e 20cm.",
    shortDescription: "Pimentas vermelhas em mandala — proteção, força e afasta mau-olhado",
    images: [mandalaPimentas, mandalaPimentas, mandalaPimentas],
    elements: [
      { name: "Pimenta Vermelha", meaning: "Proteção energética, afasta mau-olhado e força vital", icon: "🌶️" },
    ],
    significance: "Proteção e força",
    relatedIds: ["mandala-turmalina", "mandala-olho-tigre"],
    inStock: true,
    badge: "Mais vendido",
  },
];
