export type Nivel = "Iniciante" | "Basico" | "Intermediario" | "Avancado" | "Especialista";
export type PerfilSaida = Nivel | "Gestor/Executivo";
export type FormatoSaida = "Tutorial" | "Flashcards" | "Quiz" | "Resumo" | "Roteiro de Aula";
export type Nicho = "Geral" | "Fintech" | "Saude" | "E-commerce" | "Educacao" | "Juridico";
export type NivelDetalhe = "Didatico" | "Intermediario" | "Aprofundado";
export type StatusUpload = "pendente" | "concluido" | "falha";
export type DominioConhecimento = "Geral" | "TI" | "Medicina" | "Financas" | "Juridico" | "Engenharia" | "Educacao";
export type ClassificadorUsado = "local" | "api" | "fallback";

export interface FonteChunk { id: string; trecho: string; pagina: number; relevancia: number; }
export interface FlashcardItem { pergunta: string; resposta: string; dica_didatica: string; fonte_chunk_id: string; dominado?: boolean; }
export interface ConteudoFormatado {
  flashcards?: FlashcardItem[];
  // PROVISÓRIO — aguardando contrato
  tutorial?: { introducao: string; secoes: { titulo: string; conteudo: string; fonte_chunk_id: string }[] };
  // PROVISÓRIO — aguardando contrato
  quiz?: { pergunta: string; opcoes: string[]; correta: number; explicacao: string; fonte_chunk_id: string }[];
  // PROVISÓRIO — aguardando contrato
  resumo?: { abertura: string; pontos: string[]; conclusao: string; fonte_chunk_id: string };
  // PROVISÓRIO — aguardando contrato
  roteiro?: { duracao: string; etapas: { tempo: string; titulo: string; descricao: string; fonte_chunk_id: string }[] };
}
export interface Adaptacao {
  id: string; titulo: string; formato_saida: FormatoSaida; perfil_aplicado: PerfilSaida;
  rotulo_perfil_aplicado: string; nicho_setor: Nicho; dominio_conhecimento: DominioConhecimento;
  nivel_detalhe: NivelDetalhe; criado_em: string; tempo_estimado: string; conceitos_chave: string[];
  prerequisitos: string[]; alerta_descompasso: boolean; cache_hit: boolean;
  ancoragem_fonte_score: number; fidelidade_analogias_score: number; clareza_pedagogica: number;
  chunks_utilizados: number; fontes_chunks: FonteChunk[]; conteudo: ConteudoFormatado;
  status_upload: StatusUpload; analogia?: { mapeamento: { termo: string; analogia: string }[]; limite_da_analogia: string };
  microlearning?: { tarefa: string; minutos: number } | null;
}
export interface CriarAdaptacaoRequest {
  titulo: string; texto: string; perfil_destinatario: PerfilSaida; formato_saida: FormatoSaida;
  nicho_setor: Nicho; nivel_detalhe: NivelDetalhe; dominio_conhecimento: DominioConhecimento;
  incluir_analogias: boolean; incluir_microlearning: boolean;
}
