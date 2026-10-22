import { delay } from "@/mocks/delay";
import { tokenStorage } from "./http";
import type { Nivel } from "@/types";
export interface AuthRequest { email: string; senha: string; }
export interface CadastroRequest extends AuthRequest { nome: string; nivel_declarado: Nivel; }
export interface AuthResponse { token: string; usuario: { id: string; nome: string; email: string; nivel_declarado: Nivel; xp: number }; }
export async function login(body: AuthRequest): Promise<AuthResponse> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<AuthResponse>("/auth/login", { method: "POST", body: JSON.stringify(body), auth: false });
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay();
  if (body.senha === "errada") throw new Error("E-mail ou senha incorretos.");
  const result = { token: "adaptai-mock-token", usuario: { id: "usr-01", nome: "Marina", email: body.email, nivel_declarado: "Iniciante" as Nivel, xp: 820 } };
  tokenStorage.set(result.token); localStorage.setItem("adaptai-user", JSON.stringify(result.usuario)); return result;
  // =========================================
}
export async function cadastro(body: CadastroRequest): Promise<AuthResponse> {
  // ===== REAL API — descomente para integrar (e remova o bloco MOCK) =====
  // return request<AuthResponse>("/auth/cadastro", { method: "POST", body: JSON.stringify(body), auth: false });
  // ========================================================================
  // ===== MOCK — remover após integrar =====
  await delay();
  if (body.email.toLowerCase() === "duplicado@teste.com") throw new Error("Este e-mail já está cadastrado.");
  const result = { token: "adaptai-mock-token", usuario: { id: "usr-new", nome: body.nome, email: body.email, nivel_declarado: body.nivel_declarado, xp: 820 } };
  tokenStorage.set(result.token); localStorage.setItem("adaptai-user", JSON.stringify(result.usuario)); return result;
  // =========================================
}
