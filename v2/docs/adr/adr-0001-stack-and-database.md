# ADR-001: Stack e Banco de Dados

- **Status:** Aceito
- **Data:** 2026-04-05
- **Autores:** Raul Andrade

---

## Contexto

O projeto `randomfy` está sendo reescrito do zero. A versão anterior utilizava Next.js com Pages Router, React Query, Axios e next-i18next — uma arquitetura centrada no cliente. Os novos requisitos (RNF 0001, 0003, 0017, 0018) determinam explicitamente o uso de App Router, Server Components e Server Actions como padrão arquitetural, com comunicação autenticada com a Spotify API ocorrendo exclusivamente server-side.

Além disso, os requisitos funcionais indicam que o estado de sessão (lista de curtidos, progresso, histórico) não precisa persistir entre dispositivos ou sessões (RF 0034, RF 0035) — ele dura apenas enquanto o usuário navega.

---

## Decisão

### Banco de dados

**Não será utilizado banco de dados nesta versão.**

Toda a sessão do usuário é efêmera e local à navegação. Os dados necessários (tokens de autenticação, progresso da sessão) serão mantidos via:

- **Cookies server-side** (`cookies()` do Next.js) para tokens de acesso e refresh
- **Estado em Server Actions / URL** para progresso da sessão quando necessário

Caso requisitos futuros demandem persistência entre sessões ou dispositivos (ex: histórico de playlists geradas), a decisão de banco será revisada em uma nova ADR.

### Stack

| Camada                            | Tecnologia                                     | Justificativa                                        |
| --------------------------------- | ---------------------------------------------- | ---------------------------------------------------- |
| Framework                         | Next.js 15 (App Router)                        | RNF 0001 — padrão arquitetural definido em requisito |
| Linguagem                         | TypeScript (strict)                            | RNF 0016                                             |
| Estilização                       | Tailwind CSS + dark mode                       | RNF 0008                                             |
| Comunicação com Spotify           | Spotify Web API Node + Fetch nativo            | RNF 0003, 0018 — chamadas exclusivamente server-side |
| Cookies                           | `cookies()` nativo do Next.js                  | RNF 0004, 0020 — gerenciamento server-side           |
| Autenticação / renovação de token | `middleware.ts` do Next.js                     | RNF 0019                                             |
| Internacionalização               | LinguiJS                                       | RNF 0013 — especificado explicitamente               |
| Testes                            | Jest + Testing Library + MSW                   | RNF 0006, 0007 — cobertura mínima de 80%             |
| CI/CD                             | GitHub Actions + semantic-release + commitlint | RNF 0010, 0011, 0012                                 |
| Hospedagem                        | Vercel                                         | RNF 0002                                             |
| Runtime                           | Node.js 20.x+                                  | RNF 0014                                             |

---

## Alternativas consideradas

### React Query

Descartado. Na versão anterior era usado para cache e gerenciamento de estado assíncrono no cliente. Com Server Components e Server Actions, os dados chegam do servidor diretamente — não há necessidade de cache client-side para o fluxo principal.

### Axios

Descartado. Faz sentido em ambientes client-side. Com fetch nativo do Next.js é possível usar as estratégias de cache integradas (`no-store`, `revalidate`, `force-cache`), alinhando com o RNF 0003.

### nookies

Descartado. Era usado para manipulação de cookies em Pages Router (client e server). A API nativa `cookies()` do Next.js App Router substitui com menos dependência e mais controle server-side, conforme RNF 0020.

### next-i18next

Descartado. O RNF 0013 especifica explicitamente LinguiJS como solução de i18n.

### next-pwa / PWA completo

Descartado. O `next-pwa` foi abandonado pelo autor original e tem suporte limitado para App Router no Next.js 15. Mais importante: os benefícios de PWA (cache offline, instalação recorrente) não se aplicam bem ao randomfy — a experiência inteira depende da Spotify API em tempo real e o uso é ocasional. Será mantido apenas um `manifest.json` estático para preservar instalabilidade básica sem complexidade extra.

### Banco de dados (ex: Prisma + PostgreSQL, Redis)

Descartado para esta versão. A sessão é efêmera por definição dos requisitos funcionais. Adicionar banco agora seria over-engineering sem ganho real.

---

## Consequências

**Positivas:**

- Arquitetura alinhada desde o início com os RNFs, sem dívida técnica de migração
- Menos dependências client-side, bundle menor
- Remoção do next-pwa elimina dependência abandonada e incompatível com App Router — `manifest.json` estático preserva instalabilidade básica sem overhead
- Comunicação autenticada com Spotify inteiramente server-side, sem exposição de tokens no cliente (RNF 0018)
- Renovação de token transparente via middleware (RNF 0019)

**Negativas / trade-offs:**

- LinguiJS tem curva de aprendizado maior que next-i18next
- Sem banco, não há histórico entre sessões — limitação conhecida e aceita
- Server Actions têm algumas limitações de DX (debugging, error boundaries) comparado ao React Query

---

## Referências

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [LinguiJS Docs](https://lingui.dev/)
- [Spotify Web API Node](https://github.com/thelinmichael/spotify-web-api-node)
- `requirements.md` — Requisitos Funcionais e Não Funcionais do projeto
