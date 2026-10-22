import type { Adaptacao } from "@/types";
export const sourceChunks = [
  { id: "oci-01", trecho: "A Oracle Cloud Infrastructure organiza recursos em regiões e domínios de disponibilidade isolados. Uma região pode conter um ou mais domínios de disponibilidade.", pagina: 12, relevancia: 0.98 },
  { id: "oci-02", trecho: "Os domínios de falha agrupam hardware e infraestrutura dentro de um domínio de disponibilidade para reduzir impactos de falhas simultâneas.", pagina: 15, relevancia: 0.93 },
  { id: "oci-03", trecho: "Uma Virtual Cloud Network (VCN) é uma rede privada e personalizável, com sub-redes, tabelas de rota e gateways.", pagina: 28, relevancia: 0.96 },
];
export const flashcardsAdaptacao: Adaptacao = {
  id: "adp-oci", titulo: "Fundamentos de VCN na OCI", formato_saida: "Flashcards", perfil_aplicado: "Iniciante",
  rotulo_perfil_aplicado: "Iniciante", nicho_setor: "Geral", dominio_conhecimento: "TI", nivel_detalhe: "Didatico",
  criado_em: "Hoje, 10:42", tempo_estimado: "12 min", conceitos_chave: ["Regiões", "Domínios de disponibilidade", "VCN", "Domínios de falha"],
  prerequisitos: ["Noções de rede", "O que é computação em nuvem"], alerta_descompasso: false, cache_hit: false,
  ancoragem_fonte_score: 94, fidelidade_analogias_score: 89, clareza_pedagogica: 96, chunks_utilizados: 3, fontes_chunks: sourceChunks,
  conteudo: { flashcards: [
    { pergunta: "O que é uma VCN na OCI?", resposta: "Uma rede privada e personalizável na nuvem Oracle, onde você define sub-redes, rotas e gateways.", dica_didatica: "Pense nela como o terreno murado da sua infraestrutura.", fonte_chunk_id: "oci-03" },
    { pergunta: "Qual é a diferença entre região e domínio de disponibilidade?", resposta: "A região é uma área geográfica. Dentro dela, domínios de disponibilidade são infraestruturas isoladas para aumentar a resiliência.", dica_didatica: "Região é a cidade; cada domínio é um campus independente.", fonte_chunk_id: "oci-01" },
    { pergunta: "Para que servem os domínios de falha?", resposta: "Para distribuir recursos em grupos de hardware distintos e reduzir o impacto de uma falha localizada.", dica_didatica: "Como separar equipamentos em salas diferentes do mesmo prédio.", fonte_chunk_id: "oci-02" },
  ]},
  analogia: { mapeamento: [{ termo: "VCN", analogia: "terreno murado" }, { termo: "Sub-rede", analogia: "quadra dentro do terreno" }], limite_da_analogia: "Na nuvem, redes e rotas são configuradas por software; não há muros físicos." },
  microlearning: { tarefa: "Desenhe uma VCN com duas sub-redes e indique uma rota.", minutos: 4 }, status_upload: "concluido",
};
export const quizAdaptacao: Adaptacao = { ...flashcardsAdaptacao, id: "adp-quiz", titulo: "Quiz: redes virtuais na OCI", formato_saida: "Quiz", cache_hit: true,
  conteudo: { quiz: [
    { pergunta: "O que define uma região na OCI?", opcoes: ["Um conjunto geográfico de domínios de disponibilidade", "Uma subnet pública", "Um tipo de gateway"], correta: 0, explicacao: "A região é uma área geográfica que pode conter vários domínios de disponibilidade.", fonte_chunk_id: "oci-01" },
    { pergunta: "Qual componente permite criar uma rede privada na OCI?", opcoes: ["Domínio de falha", "VCN", "Bucket"], correta: 1, explicacao: "A VCN é a rede privada personalizável da OCI.", fonte_chunk_id: "oci-03" },
  ]},
};
export const resumoAdaptacao: Adaptacao = { ...flashcardsAdaptacao, id: "adp-resumo", titulo: "Resumo: arquitetura de rede OCI", formato_saida: "Resumo",
  conteudo: { resumo: { abertura: "A infraestrutura de rede da OCI combina isolamento geográfico e controle de rede virtual para criar ambientes resilientes.", pontos: ["Regiões agrupam domínios de disponibilidade em uma área geográfica.", "Domínios de falha distribuem recursos entre grupos de hardware.", "VCNs oferecem redes privadas com sub-redes, tabelas de rota e gateways."], conclusao: "Ao distribuir recursos por domínios e desenhar bem a VCN, você equilibra isolamento e conectividade.", fonte_chunk_id: "oci-03" } },
};
export const tutorialAdaptacao: Adaptacao = { ...flashcardsAdaptacao, id: "adp-tutorial", titulo: "Primeiros passos com VCN", formato_saida: "Tutorial",
  conteudo: { tutorial: { introducao: "Vamos montar o mapa mental da rede OCI: primeiro entenda onde os recursos vivem, depois como se conectam.", secoes: [
    { titulo: "1. Comece pela região", conteudo: "Escolha uma região geográfica próxima de seus usuários e requisitos de residência de dados. A região contém domínios de disponibilidade.", fonte_chunk_id: "oci-01" },
    { titulo: "2. Desenhe a rede", conteudo: "Crie uma VCN e divida o espaço em sub-redes para organizar os recursos. Configure rotas e gateways de acordo com o tráfego.", fonte_chunk_id: "oci-03" },
    { titulo: "3. Distribua para resiliência", conteudo: "Distribua recursos entre domínios de disponibilidade e domínios de falha para reduzir pontos únicos de falha.", fonte_chunk_id: "oci-02" },
  ]} },
};
export const roteiroAdaptacao: Adaptacao = { ...flashcardsAdaptacao, id: "adp-roteiro", titulo: "Aula: redes OCI sem mistério", formato_saida: "Roteiro de Aula",
  conteudo: { roteiro: { duracao: "25 min", etapas: [
    { tempo: "0–5 min", titulo: "Mapa da OCI", descricao: "Apresente regiões e domínios de disponibilidade com um mapa simples.", fonte_chunk_id: "oci-01" },
    { tempo: "5–15 min", titulo: "Construindo uma VCN", descricao: "Demonstre sub-redes, tabelas de rota e gateways em um cenário de aplicação.", fonte_chunk_id: "oci-03" },
    { tempo: "15–25 min", titulo: "Resiliência em prática", descricao: "Peça à turma para distribuir recursos por domínios de falha e justificar escolhas.", fonte_chunk_id: "oci-02" },
  ]} },
};
export const mismatchAdaptacao: Adaptacao = { ...tutorialAdaptacao, id: "adp-mismatch", titulo: "Segurança em nuvem: IAM", alerta_descompasso: true };
export const adaptationsSeed = [flashcardsAdaptacao, quizAdaptacao, resumoAdaptacao, tutorialAdaptacao, roteiroAdaptacao];
