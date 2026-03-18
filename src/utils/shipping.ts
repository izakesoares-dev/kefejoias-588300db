export interface ViaCepResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

export async function fetchAddress(cep: string): Promise<ViaCepResponse | null> {
  const clean = cep.replace(/\D/g, "");
  if (clean.length !== 8) return null;
  try {
    const res = await fetch(`https://viacep.com.br/ws/${clean}/json/`);
    const data: ViaCepResponse = await res.json();
    if (data.erro) return null;
    return data;
  } catch {
    return null;
  }
}

const FRETE_POR_ESTADO: Record<string, number> = {
  SP: 12.90,
  RJ: 15.90,
  MG: 15.90,
  ES: 15.90,
  PR: 18.90,
  SC: 18.90,
  RS: 18.90,
  MS: 22.90,
  MT: 22.90,
  GO: 22.90,
  DF: 22.90,
  BA: 25.90,
  SE: 25.90,
  AL: 25.90,
  PE: 25.90,
  PB: 25.90,
  RN: 25.90,
  CE: 25.90,
  PI: 25.90,
  MA: 25.90,
  PA: 29.90,
  AP: 29.90,
  AM: 29.90,
  RR: 29.90,
  AC: 29.90,
  RO: 29.90,
  TO: 29.90,
};

export function calcularFrete(uf: string): number {
  return FRETE_POR_ESTADO[uf.toUpperCase()] ?? 29.90;
}

export function estimarPrazo(uf: string): string {
  const u = uf.toUpperCase();
  if (u === "SP") return "3-5 dias úteis";
  if (["RJ", "MG", "ES"].includes(u)) return "5-7 dias úteis";
  if (["PR", "SC", "RS"].includes(u)) return "5-8 dias úteis";
  if (["MS", "MT", "GO", "DF"].includes(u)) return "6-9 dias úteis";
  if (["BA", "SE", "AL", "PE", "PB", "RN", "CE", "PI", "MA"].includes(u)) return "8-12 dias úteis";
  return "10-15 dias úteis";
}
