# Serviços e integração

Toda a interface chama funções de `src/services`. Os blocos MOCK ficam ativos; não há chamadas de rede no fluxo atual.

| Função | Endpoint previsto | Arquivo |
|---|---|---|
| `cadastro` | `POST /auth/cadastro` | `auth.service.ts` |
| `login` | `POST /auth/login` | `auth.service.ts` |
| `getMe` | `GET /usuarios/me` | `usuarios.service.ts` |
| `uploadDocumento` | `POST /documentos` (multipart) | `documentos.service.ts` |
| `listarDocumentos` | `GET /documentos` | `documentos.service.ts` |
| `criarAdaptacao` | `POST /adaptacoes` | `adaptacoes.service.ts` |
| `listarAdaptacoes` | `GET /adaptacoes` | `adaptacoes.service.ts` |
| `buscarAdaptacao` | `GET /adaptacoes/{id}` (detalhe a confirmar) | `adaptacoes.service.ts` |
| `getPerfil` | `GET /perfil` | `perfil.service.ts` |
| `checkHealth` | `GET /health` | `health.service.ts` |

## Trocar mocks pelo backend

1. Descomente o cliente tipado em `http.ts` e mantenha o tratamento dos códigos de erro e a autenticação.
2. Descomente o bloco `REAL API` de cada função de serviço.
3. Apague o respectivo bloco `MOCK` após validar os contratos.
4. Confira `API_BASE_URL` e habilite o proxy Vite de `/api` e `/docs` para `http://localhost`.

O token de demonstração usa memória e `localStorage`; ele pode ser substituído pela resposta de autenticação sem alterar os componentes.
