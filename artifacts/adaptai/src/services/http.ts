export interface ApiErrorShape { status: "erro"; codigo: string; mensagem: string; detalhes?: { campo: string; mensagem: string }[]; request_id?: string; }
export interface ApiRequestOptions { method?: string; body?: BodyInit | null; auth?: boolean; }
/*
// REAL API CLIENT — descomente para integrar
const API_BASE_URL = "/api/v1";
export class ApiError extends Error {
  constructor(public statusCode: number, public payload: ApiErrorShape) { super(payload.mensagem); }
}
export async function request<T>(path: string, options: ApiRequestOptions = {}): Promise<T> {
  const token = tokenStorage.get();
  const headers = new Headers();
  if (options.auth !== false && token) headers.set("Authorization", `Bearer ${token}`);
  if (options.body && !(options.body instanceof FormData)) headers.set("Content-Type", "application/json");
  const response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });
  if (response.status === 204) return undefined as T;
  const payload = await response.json();
  if (!response.ok) {
    const error = new ApiError(response.status, payload as ApiErrorShape);
    if (response.status === 401 && error.payload.codigo === "NAO_AUTENTICADO") {
      tokenStorage.clear(); window.location.assign("/login");
    }
    if (response.status === 409 && error.payload.codigo === "EMAIL_JA_CADASTRADO") throw error;
    if (response.status === 422 && error.payload.codigo === "VALIDACAO_FALHOU") throw error;
    if (response.status === 501 && error.payload.codigo === "NAO_IMPLEMENTADO") throw new Error("Em breve");
    throw error;
  }
  return payload as T;
}
*/
let memoryToken: string | null = null;
export const tokenStorage = {
  get(): string | null { memoryToken ??= localStorage.getItem("adaptai-token"); return memoryToken; },
  set(token: string): void { memoryToken = token; localStorage.setItem("adaptai-token", token); },
  clear(): void { memoryToken = null; localStorage.removeItem("adaptai-token"); },
};
