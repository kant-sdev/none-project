import { delay } from "@/mocks/delay";
export async function checkHealth(): Promise<{ status: string }> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<{ status: string }>("/health", { auth: false });
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay(400); return { status: "operacional" };
  // =========================================
}
