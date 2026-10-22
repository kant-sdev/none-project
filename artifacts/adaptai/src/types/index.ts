export * from "./adaptacao";
export interface Usuario { id: string; nome: string; email: string; nivel_declarado: import("./adaptacao").Nivel; xp: number; }
export interface Perfil { xp_total: number; nivel_atual: import("./adaptacao").Nivel; conceitos: { nome: string; status: "em_aprendizado" | "dominado" }[]; teste_status: "indisponivel" | "disponivel" | "aprovado" | "reprovado"; }
export interface Documento { id: string; titulo: string; formato: string; status: import("./adaptacao").StatusUpload; criado_em: string; }
