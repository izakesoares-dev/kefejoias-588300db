export interface Stone {
  id: string;
  name: string;
  title: string;
  benefit: string;
  category: StoneCategory;
  icon: string;
}

export type StoneCategory = 
  | "protecao" 
  | "amor" 
  | "prosperidade" 
  | "clareza" 
  | "espiritualidade" 
  | "energia" 
  | "equilibrio" 
  | "versateis";

export const stoneCategories: Record<StoneCategory, { title: string; description: string; icon: string }> = {
  protecao: {
    title: "Proteção e Blindagem Energética",
    description: "Pedras para afastar energias negativas e fortalecer a aura",
    icon: "🛡️",
  },
  amor: {
    title: "Amor, Cura Emocional e Relacionamentos",
    description: "Pedras que acalmam o coração e atraem afeto",
    icon: "💖",
  },
  prosperidade: {
    title: "Prosperidade e Sucesso",
    description: "Pedras para atrair dinheiro, oportunidades e reconhecimento",
    icon: "💰",
  },
  clareza: {
    title: "Clareza Mental e Comunicação",
    description: "Pedras que organizam a mente e melhoram a expressão",
    icon: "🧠",
  },
  espiritualidade: {
    title: "Espiritualidade e Intuição",
    description: "Pedras para conexão com o divino e elevação espiritual",
    icon: "🌌",
  },
  energia: {
    title: "Energia, Coragem e Motivação",
    description: "Pedras que revigoram e dão força para agir",
    icon: "⚡",
  },
  equilibrio: {
    title: "Equilíbrio, Calma e Saúde Emocional",
    description: "Pedras para ansiedade, estresse e paz interior",
    icon: "🌱",
  },
  versateis: {
    title: "Pedras Versáteis e Amplificadoras",
    description: "Pedras que potencializam outras energias",
    icon: "🔮",
  },
};

export const stones: Stone[] = [
  // Proteção
  { id: "turmalina-negra", name: "Turmalina Negra", title: "O escudo absoluto contra energias densas", benefit: "Proteção contra vampirismo energético e negatividade extrema", category: "protecao", icon: "🖤" },
  { id: "obsidiana", name: "Obsidiana", title: "O espelho da verdade e da transformação", benefit: "Revela verdades ocultas e promove limpeza energética profunda", category: "protecao", icon: "⚫" },
  { id: "olho-tigre", name: "Olho de Tigre", title: "O guardião da coragem e da prosperidade", benefit: "Proteção contra inveja e atração de oportunidades", category: "protecao", icon: "🐯" },
  { id: "hematita", name: "Hematita", title: "A âncora que te conecta à terra", benefit: "Aterramento, estabilidade emocional e força de vontade", category: "protecao", icon: "⛓️" },
  { id: "agata-negra", name: "Ágata Negra", title: "O manto de proteção silenciosa", benefit: "Estabilidade emocional e proteção discreta", category: "protecao", icon: "🌑" },
  { id: "onix", name: "Ônix", title: "A fortaleza interior", benefit: "Força, disciplina e proteção em momentos difíceis", category: "protecao", icon: "◼️" },
  { id: "jaspe-vermelho", name: "Jaspe Vermelho", title: "O escudo do guerreiro", benefit: "Resistência física, coragem e proteção ativa", category: "protecao", icon: "🌋" },

  // Amor e Cura
  { id: "quartzo-rosa", name: "Quartzo Rosa", title: "O abraço do amor incondicional", benefit: "Cura emocional, amor-próprio e relacionamentos harmoniosos", category: "amor", icon: "💎" },
  { id: "rodocrosita", name: "Rodocrosita", title: "O bálsamo para corações feridos", benefit: "Cura de traumas emocionais e abertura para o amor", category: "amor", icon: "💗" },
  { id: "kunzita", name: "Kunzita", title: "A pedra do amor divino", benefit: "Conexão espiritual do coração e paz emocional", category: "amor", icon: "💕" },
  { id: "rodonita", name: "Rodonita", title: "O equilíbrio entre dar e receber amor", benefit: "Cura de feridas emocionais e perdão", category: "amor", icon: "🌸" },
  { id: "amazonita", name: "Amazonita", title: "A pedra da esperança e harmonia", benefit: "Equilíbrio energético e comunicação do coração", category: "amor", icon: "🌊" },
  { id: "unakita", name: "Unakita", title: "O renascimento emocional", benefit: "Liberação de padrões emocionais antigos", category: "amor", icon: "🌿" },
  { id: "morganita", name: "Morganita", title: "A joia do amor compassivo", benefit: "Amor incondicional e cura do coração", category: "amor", icon: "🩷" },

  // Prosperidade
  { id: "citrino", name: "Citrino", title: "O sol da abundância", benefit: "Atrai riqueza, autoestima e energia positiva", category: "prosperidade", icon: "💛" },
  { id: "jade-verde", name: "Jade Verde", title: "O talismã milenar da sorte", benefit: "Prosperidade, sorte nos negócios e longevidade", category: "prosperidade", icon: "💚" },
  { id: "aventurina", name: "Aventurina Verde", title: "A porta das oportunidades", benefit: "Sorte, novos começos e crescimento financeiro", category: "prosperidade", icon: "🍀" },
  { id: "pirita", name: "Pirita", title: "O ouro dos tolos sábios", benefit: "Manifestação de riqueza e proteção financeira", category: "prosperidade", icon: "🪙" },
  { id: "olho-tigre-prosperidade", name: "Olho de Tigre", title: "O magnetizador de oportunidades", benefit: "Atração de sorte e decisões certeiras", category: "prosperidade", icon: "🐯" },
  { id: "jade-amarelo", name: "Jade Amarelo", title: "A alegria da conquista", benefit: "Otimismo, generosidade e sucesso", category: "prosperidade", icon: "💛" },
  { id: "crisoprasio", name: "Crisopásio", title: "A pedra da abundância verde", benefit: "Prosperidade emocional e material", category: "prosperidade", icon: "💚" },

  // Clareza Mental
  { id: "fluorita", name: "Fluorita", title: "O organizador da mente brilhante", benefit: "Concentração, organização e aprendizado", category: "clareza", icon: "🧠" },
  { id: "sodalita", name: "Sodalita", title: "A voz da verdade interior", benefit: "Comunicação autêntica e racionalidade", category: "clareza", icon: "🧿" },
  { id: "lapis-lazuli", name: "Lápis-Lazúli", title: "A sabedoria dos antigos", benefit: "Verdade, sabedoria e expressão clara", category: "clareza", icon: "💙" },
  { id: "amazonita-clareza", name: "Amazonita", title: "O filtro da comunicação compassiva", benefit: "Expressão honesta e pacífica", category: "clareza", icon: "🌊" },
  { id: "agua-marinha", name: "Água-Marinha", title: "A serenidade do oceano", benefit: "Clareza mental, coragem e comunicação fluida", category: "clareza", icon: "🌊" },
  { id: "howlita", name: "Howlita", title: "O silêncio que organiza", benefit: "Calma mental, paciência e absorção de conhecimento", category: "clareza", icon: "🤍" },
  { id: "apatita", name: "Apatita Azul", title: "O foco do estudante", benefit: "Concentração, motivação e clareza de objetivos", category: "clareza", icon: "📘" },

  // Espiritualidade
  { id: "ametista", name: "Ametista", title: "O portal da consciência elevada", benefit: "Intuição, proteção espiritual e paz interior", category: "espiritualidade", icon: "🔮" },
  { id: "pedra-lua", name: "Pedra da Lua", title: "A conexão com o feminino sagrado", benefit: "Intuição, ciclos naturais e equilíbrio emocional", category: "espiritualidade", icon: "🌙" },
  { id: "labradorita", name: "Labradorita", title: "O véu entre os mundos", benefit: "Proteção espiritual, magia e transformação", category: "espiritualidade", icon: "✨" },
  { id: "selenita", name: "Selenita", title: "A luz da purificação", benefit: "Limpeza energética, conexão angelical e paz", category: "espiritualidade", icon: "🌟" },
  { id: "lepidolita", name: "Lepidolita", title: "A pedra da transição suave", benefit: "Calma espiritual, mudanças e libertação", category: "espiritualidade", icon: "💜" },
  { id: "cianita", name: "Cianita Azul", title: "A ponte entre dimensões", benefit: "Alinhamento de chakras e comunicação espiritual", category: "espiritualidade", icon: "🦋" },
  { id: "charoita", name: "Charoita", title: "A transformadora espiritual", benefit: "Superação de medos e despertar espiritual", category: "espiritualidade", icon: "🌌" },

  // Energia e Coragem
  { id: "cornalina", name: "Cornalina", title: "O fogo da criatividade", benefit: "Vitalidade, motivação e coragem para agir", category: "energia", icon: "🔥" },
  { id: "granada", name: "Granada", title: "A chama da paixão", benefit: "Energia vital, paixão e determinação", category: "energia", icon: "❤️‍🔥" },
  { id: "jaspe-energia", name: "Jaspe Vermelho", title: "A força da terra", benefit: "Resistência, vigor e energia física", category: "energia", icon: "🌋" },
  { id: "agata-fogo", name: "Ágata de Fogo", title: "O despertar do guerreiro interior", benefit: "Coragem, vitalidade sexual e proteção", category: "energia", icon: "🔥" },
  { id: "rubi", name: "Rubi", title: "A pedra da liderança", benefit: "Paixão, poder pessoal e vitalidade", category: "energia", icon: "❤️" },
  { id: "heliotrópio", name: "Heliotrópio", title: "O sangue de dragão", benefit: "Força, coragem e purificação", category: "energia", icon: "💪" },

  // Equilíbrio e Calma
  { id: "ametista-equilibrio", name: "Ametista", title: "A paz que acalma tempestades", benefit: "Calma mental, sono tranquilo e equilíbrio", category: "equilibrio", icon: "🔮" },
  { id: "turquesa", name: "Turquesa", title: "O céu que abraça", benefit: "Serenidade, proteção e sabedoria ancestral", category: "equilibrio", icon: "🏔️" },
  { id: "amazonita-equilibrio", name: "Amazonita", title: "A harmonia dos opostos", benefit: "Equilíbrio energético e esperança", category: "equilibrio", icon: "🌊" },
  { id: "quartzo-verde", name: "Quartzo Verde", title: "O coração da natureza", benefit: "Cura emocional e conexão com a natureza", category: "equilibrio", icon: "💚" },
  { id: "prehnita", name: "Prehnita", title: "A pedra da meditação", benefit: "Paz interior, sonhos lúcidos e cura", category: "equilibrio", icon: "🍃" },
  { id: "crisocola", name: "Crisocola", title: "A voz da serenidade", benefit: "Comunicação gentil e equilíbrio feminino", category: "equilibrio", icon: "🌿" },
  { id: "agata-musgo", name: "Ágata Musgo", title: "A conexão com a terra", benefit: "Estabilidade, crescimento e novos começos", category: "equilibrio", icon: "🌱" },

  // Versáteis
  { id: "cristal-quartzo", name: "Cristal de Quartzo", title: "O mestre amplificador", benefit: "Amplifica qualquer intenção e energia", category: "versateis", icon: "✨" },
  { id: "quartzo-fumado", name: "Quartzo Fumado", title: "O transmutador de energias", benefit: "Proteção, aterramento e limpeza", category: "versateis", icon: "🌫️" },
  { id: "quartzo-rutilado", name: "Quartzo Rutilado", title: "Os fios dourados do destino", benefit: "Manifestação, clareza e proteção", category: "versateis", icon: "⚡" },
  { id: "agata", name: "Ágata", title: "A pedra de mil cores", benefit: "Equilíbrio, proteção e estabilidade", category: "versateis", icon: "🌈" },
  { id: "jaspe", name: "Jaspe", title: "O nutriz da terra", benefit: "Nutrição, força e proteção", category: "versateis", icon: "🪨" },
  { id: "calcita", name: "Calcita", title: "O amplificador de cores", benefit: "Limpeza energética e amplificação", category: "versateis", icon: "💎" },
];

export const getStonesByCategory = (category: StoneCategory) => 
  stones.filter((stone) => stone.category === category);
