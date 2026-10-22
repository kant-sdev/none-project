import type { DominioConhecimento, Nivel } from "@/types";
const labels: Record<string, Record<Nivel, string>> = {
  TI: { Iniciante: "Iniciante", Basico: "Dev Júnior", Intermediario: "Dev Pleno", Avancado: "Tech Lead", Especialista: "Arquiteto" },
  Medicina: { Iniciante: "Iniciante", Basico: "Estudante", Intermediario: "Residente", Avancado: "Especialista", Especialista: "Preceptor" },
  Financas: { Iniciante: "Iniciante", Basico: "Analista Júnior", Intermediario: "Analista Pleno", Avancado: "Gestor", Especialista: "CFO" },
  Geral: { Iniciante: "Iniciante", Basico: "Aprendiz", Intermediario: "Praticante", Avancado: "Avançado", Especialista: "Especialista" },
};
export function getRotuloNivel(nivel: Nivel, dominio: DominioConhecimento): string {
  return (labels[dominio] ?? labels.Geral)[nivel];
}
export const formatLabel: Record<string, string> = {
  Basico: "Básico", Intermediario: "Intermediário", Avancado: "Avançado",
  Saude: "Saúde", Educacao: "Educação", Juridico: "Jurídico", Financas: "Finanças",
  Didatico: "Didático", concluido: "Concluído",
};
