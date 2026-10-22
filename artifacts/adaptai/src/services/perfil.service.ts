import { delay } from "@/mocks/delay";
import type { Perfil } from "@/types";
export async function getPerfil(): Promise<Perfil> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<Perfil>("/perfil");
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(); return { xp_total: 820, nivel_atual: "Intermediario", conceitos: [
    { nome: "Redes virtuais", status: "dominado" }, { nome: "Regiões e disponibilidade", status: "dominado" },
    { nome: "Controle de acesso IAM", status: "em_aprendizado" }, { nome: "Segurança em nuvem", status: "em_aprendizado" },
  ], teste_status: "disponivel" };
  // =========================================
}
