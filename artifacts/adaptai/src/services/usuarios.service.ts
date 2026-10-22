import { delay } from "@/mocks/delay";
import type { Usuario } from "@/types";
export async function getMe(): Promise<Usuario> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<Usuario>("/usuarios/me");
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(); const stored = localStorage.getItem("adaptai-user");
  return stored ? JSON.parse(stored) as Usuario : { id: "usr-01", nome: "Marina", email: "marina@exemplo.com", nivel_declarado: "Iniciante", xp: 820 };
  // =========================================
}
