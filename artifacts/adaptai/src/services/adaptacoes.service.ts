import { delay } from "@/mocks/delay";
import { adaptationsSeed, mismatchAdaptacao } from "@/mocks/fixtures";
import type { Adaptacao, CriarAdaptacaoRequest } from "@/types";
let created: Adaptacao[] = [];
export async function criarAdaptacao(body: CriarAdaptacaoRequest): Promise<Adaptacao> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<Adaptacao>("/adaptacoes", { method: "POST", body: JSON.stringify(body) });
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(900); if (body.titulo.trim().toLowerCase() === "erro") throw new Error("VALIDACAO_FALHOU: O título do documento está inválido.");
  const seed = adaptationsSeed.find((item) => item.formato_saida === body.formato_saida) ?? adaptationsSeed[0];
  const result: Adaptacao = { ...seed, id: `adp-${Date.now()}`, titulo: body.titulo || seed.titulo, formato_saida: body.formato_saida, perfil_aplicado: body.perfil_destinatario, rotulo_perfil_aplicado: body.perfil_destinatario, nicho_setor: body.nicho_setor, dominio_conhecimento: body.dominio_conhecimento, nivel_detalhe: body.nivel_detalhe, criado_em: "Agora", alerta_descompasso: body.perfil_destinatario === "Especialista", conteudo: structuredClone(seed.conteudo) };
  created = [result, ...created]; return result;
  // =========================================
}
export async function listarAdaptacoes(): Promise<Adaptacao[]> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<Adaptacao[]>("/adaptacoes");
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(); return [...created, ...adaptationsSeed, mismatchAdaptacao];
  // =========================================
}
export async function buscarAdaptacao(id: string): Promise<Adaptacao | undefined> {
  // ===== REAL API — endpoint de detalhe a confirmar no contrato =====
  // return request<Adaptacao>(`/adaptacoes/${id}`);
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(450); return [...created, ...adaptationsSeed, mismatchAdaptacao].find((item) => item.id === id);
  // =========================================
}
