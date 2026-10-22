import { delay } from "@/mocks/delay";
import type { Documento } from "@/types";
export async function uploadDocumento(titulo: string, texto: string, nomeArquivo = "texto-colado.md"): Promise<Documento> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // const form = new FormData(); form.append("arquivo", new File([texto], nomeArquivo)); form.append("titulo", titulo);
  // return request<Documento>("/documentos", { method: "POST", body: form });
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(700); if (titulo.trim().toLowerCase() === "erro") throw new Error("O título do documento não passou na validação. Revise e tente novamente.");
  if (!texto.trim()) throw new Error("Adicione um arquivo ou cole o conteúdo do documento.");
  return { id: `doc-${Date.now()}`, titulo, formato: nomeArquivo.split(".").pop()?.toUpperCase() ?? "TEXTO", status: "concluido", criado_em: "Agora" };
  // =========================================
}
export async function listarDocumentos(): Promise<Documento[]> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<Documento[]>("/documentos");
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(); return [{ id: "doc-vcn", titulo: "Fundamentos de VCN na OCI", formato: "PDF", status: "concluido", criado_em: "Hoje" }];
  // =========================================
}
