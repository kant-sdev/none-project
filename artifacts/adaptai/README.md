# AdaptAI

Aplicação web de estudo adaptativo em React, TypeScript, Vite e Tailwind. Interface em pt-BR, com geração simulada local e cinco formatos de saída.

## Rodar

```sh
pnpm install
pnpm --filter @workspace/adaptai dev
```

O app abre na rota `/`. Também é possível executar os comandos no diretório `artifacts/adaptai` (`pnpm dev`, `pnpm build` e `pnpm typecheck`).

## Demonstração mock

Rotas públicas: `/`, `/login` e `/cadastro`. As rotas do app exigem o token local de demonstração. Na tela de login, qualquer e-mail e senha funcionam; a senha `errada` reproduz erro de autenticação. No cadastro, `duplicado@teste.com` reproduz o erro de conflito. Na nova adaptação, o título `erro` reproduz validação inválida.

Não há chamadas de API ativas. Serviços mockados usam latência simulada, e o token fica em memória e `localStorage`. Para integrar, siga `src/services/README.md`; os trechos de cliente e chamadas reais estão comentados. O proxy Vite `/api` e `/docs` está preparado como comentário.

## Mapa de telas para serviços

| Tela | Serviço(s) |
|---|---|
| Landing | Sem serviço |
| Login e cadastro | `login`, `cadastro` |
| Painel | `getMe`, `listarAdaptacoes` |
| Nova adaptação | `uploadDocumento`, `criarAdaptacao` |
| Minhas adaptações | `listarAdaptacoes` |
| Resultado | `buscarAdaptacao` |
| Documentos | `listarDocumentos` |
| Minha trilha | `getPerfil` |
| Health | `checkHealth` (disponível para integração) |
