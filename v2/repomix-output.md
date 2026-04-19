This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
.github/
  workflows/
    coverage.yml
    quality.yml
    release.yml
.husky/
  commit-msg
  pre-commit
docs/
  adr/
    adr-0001-stack-and-database.md
    adr-0002-project-structure.md
    adr-0003-svg-and-icons.md
  issues.md
  local-setup.md
  requirements.md
public/
  manifest.json
src/
  app/
    (auth)/
      login/
        page.tsx
    (session)/
      discover/
        page.tsx
      result/
        page.tsx
      error.tsx
      layout.tsx
    about/
      page.tsx
    api/
      callback/
        route.spec.ts
        route.ts
      discover/
        init/
          route.ts
      login/
        route.ts
    error.tsx
    favicon.ico
    globals.css
    layout.tsx
    not-found.tsx
    page.tsx
  components/
    icons/
      HeartIcon.tsx
      index.ts
      PauseIcon.tsx
      PlayIcon.tsx
      SpotifyIcon.tsx
      XIcon.tsx
    shared/
      error-fallback.tsx
      footer.tsx
      header-nav.tsx
      header.tsx
    ui/
      button.tsx
      heading.tsx
      index.ts
      surface.tsx
      wordmark.tsx
  features/
    auth/
      actions.ts
      build-login-url.ts
      cookies.spec.ts
      cookies.ts
      handle-callback.ts
      index.ts
      token.spec.ts
      token.ts
      types.ts
    discover/
      components/
        artist-card.skeleton.tsx
        artist-card.tsx
        audio-player.tsx
        discover-card-surface.ts
        discover-content.tsx
        progress-counter.tsx
      queries/
        get-top-artists.spec.ts
        get-top-artists.ts
      actions.ts
      cookies.spec.ts
      cookies.ts
      index.ts
      session.spec.ts
      session.ts
      types.ts
    playlist/
      components/
        playlist-embed.skeleton.tsx
        playlist-embed.tsx
      mutations/
        create-playlist.spec.ts
        create-playlist.ts
      queries/
        get-user-profile.ts
      actions.ts
      index.ts
      types.ts
    result/
      components/
        collage-grid.tsx
        create-playlist-button.tsx
        festival-poster.tsx
        result-content.tsx
      queries/
        get-artists-by-ids.spec.ts
        get-artists-by-ids.ts
      index.ts
  lib/
    i18n/
      locales/
        en/
          messages.js
          messages.po
        es/
          messages.js
          messages.po
        pt/
          messages.js
          messages.po
      index.ts
    spotify/
      queries/
        get-artist-track.spec.ts
        get-artist-track.ts
        get-related-artists.spec.ts
        get-related-artists.ts
      client.ts
    types/
      spotify.ts
    session.ts
  middleware.ts
test/
  msw/
    handlers/
      auth.ts
      discover.ts
      index.ts
      result.ts
    server.ts
  utils/
    render.tsx
.gitignore
.nvmrc
.prettierignore
.prettierrc
.releaserc.json
AGENTS.md
CLAUDE.md
commitlint.config.ts
eslint.config.mjs
jest.config.ts
jest.setup.ts
lingui.config.ts
next.config.ts
package.json
postcss.config.mjs
README.md
tsconfig.json
```

# Files

## File: .github/workflows/coverage.yml
````yaml
name: Coverage

on:
  pull_request:
    branches: [main]

jobs:
  coverage:
    name: Test Coverage (≥ 80%)
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
          cache-dependency-path: v2/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: v2

      - name: Test with coverage
        run: npm run test:coverage -- --ci
        working-directory: v2
````

## File: .github/workflows/quality.yml
````yaml
name: Quality

on:
  pull_request:
    branches: [main]

jobs:
  quality:
    name: Typecheck, Lint, Test
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
          cache-dependency-path: v2/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: v2

      - name: Typecheck
        run: npm run typecheck
        working-directory: v2

      - name: Lint
        run: npm run lint
        working-directory: v2

      - name: Test
        run: npm run test -- --ci
        working-directory: v2
````

## File: .github/workflows/release.yml
````yaml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    name: Semantic Release
    runs-on: ubuntu-latest
    permissions:
      contents: write
      issues: write
      pull-requests: write
      id-token: write

    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"
          cache-dependency-path: v2/package-lock.json

      - name: Install dependencies
        run: npm ci
        working-directory: v2

      - name: Release
        run: npm run release
        working-directory: v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
````

## File: .husky/commit-msg
````
npx --no -- commitlint --edit "$1"
````

## File: .husky/pre-commit
````
npx lint-staged
````

## File: docs/adr/adr-0001-stack-and-database.md
````markdown
# ADR-001: Stack e Banco de Dados

- **Status:** Aceito
- **Data:** 2026-04-05
- **Autores:** Raul Andrade

---

## Contexto

O projeto `randomfy` está sendo reescrito do zero. A versão anterior utilizava Next.js com Pages Router, React Query, Axios e next-i18next — uma arquitetura centrada no cliente. Os novos requisitos (RNF 0001, 0003, 0017, 0018) determinam explicitamente o uso de App Router, Server Components e Server Actions como padrão arquitetural, com comunicação autenticada com a Spotify API ocorrendo exclusivamente server-side.

Além disso, os requisitos funcionais indicam que o estado de sessão (lista de curtidos, progresso, histórico) não precisa persistir entre dispositivos ou sessões (RF 0030, RF 0031) — ele dura apenas enquanto o usuário navega.

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
````

## File: docs/adr/adr-0002-project-structure.md
````markdown
# ADR-002: Estrutura de Pastas e Organização do Projeto

- **Status:** Aceito
- **Data:** 2026-04-05
- **Autores:** Raul Andrade

---

## Contexto

Com a stack definida na ADR-001 (Next.js 15, App Router, Server Components, Server Actions), é necessário estabelecer uma convenção de organização de pastas que reflita os princípios arquiteturais adotados:

- Separação clara entre leitura e escrita (RNF 0016 — inspirado em CQRS)
- Comunicação com a Spotify API exclusivamente server-side (RNF 0017)
- Server Actions como mecanismo de escrita (RF 0032)
- Ausência de estado client-side para o fluxo principal

A versão anterior do projeto usava uma organização flat com pastas globais (`/components`, `/queries`, `/services`, `/templates`, `/contexts`), o que tornava difícil rastrear o que pertence a qual domínio e gerava acoplamento implícito entre features.

---

## Decisão

Adotar uma **arquitetura em camadas com organização feature-based**, onde as dependências fluem em uma única direção: `app → features → lib / components`.

### Diagrama de camadas

```
┌─────────────────────────────────────┐
│                 app/                │  ← orquestrador, conhece tudo
├─────────────────────────────────────┤
│              features/              │  ← lógica de negócio por domínio
├──────────────────┬──────────────────┤
│      lib/        │   components/    │  ← base reutilizável, sem negócio
└──────────────────┴──────────────────┘
          dependências fluem para cima
```

### Regras de dependência

| Camada       | Pode importar de         | Não pode importar de       |
| ------------ | ------------------------ | -------------------------- |
| `app/`       | `features/`, `lib/`, `components/` | —                |
| `features/`  | `lib/`, `components/`    | `app/`                     |
| `components/`| `lib/`                   | `features/`, `app/`        |
| `lib/`       | —                        | `features/`, `components/`, `app/` |

Essas regras serão enforçadas via ESLint com a rule `import/no-restricted-paths`.

### Estrutura de pastas

```
src/
├── app/                              # orquestrador — conhece tudo
│   ├── middleware.ts                 # renovação de token (RNF 0018)
│   ├── layout.tsx                    # root layout (i18n, providers)
│   ├── (auth)/
│   │   └── login/
│   │       └── page.tsx
│   ├── (session)/                    # rotas protegidas pelo middleware
│   │   ├── layout.tsx
│   │   ├── discover/
│   │   │   └── page.tsx
│   │   └── result/
│   │       └── page.tsx
│   └── about/
│       └── page.tsx
│
├── features/                         # lógica de negócio — conhece lib e components
│   ├── auth/
│   │   ├── actions.ts                # login, logout
│   │   ├── cookies.ts                # get/set de authorization e refreshToken
│   │   ├── token.ts                  # lógica de renovação (consumida pelo middleware)
│   │   └── types.ts
│   ├── discover/
│   │   ├── queries/
│   │   │   ├── get-top-artists.ts
│   │   │   └── get-related-artists.ts
│   │   ├── actions.ts                # like, dislike, encerrar sessão
│   │   ├── components/
│   │   │   ├── artist-card.tsx
│   │   │   ├── artist-card.skeleton.tsx
│   │   │   └── progress-counter.tsx
│   │   └── types.ts
│   ├── playlist/
│   │   ├── mutations/
│   │   │   └── create-playlist.ts
│   │   ├── actions.ts                # criar playlist no Spotify
│   │   ├── components/
│   │   │   ├── playlist-embed.tsx
│   │   │   └── playlist-embed.skeleton.tsx
│   │   └── types.ts
│   └── collage/
│       ├── components/
│       │   ├── collage-grid.tsx
│       │   └── festival-poster.tsx
│       └── types.ts
│
├── components/                       # primitivos visuais — não conhece ninguém
│   ├── ui/                           # Button, Skeleton, Toast, Input...
│   └── shared/                       # Header, Footer, ErrorFallback
│
├── lib/                              # infra transversal — não conhece ninguém
│   ├── spotify/
│   │   └── client.ts                 # fetch autenticado (base de todas as features)
│   └── i18n/                         # config e utils do LinguiJS
│
└── test/
    ├── msw/
    │   ├── handlers/
    │   └── server.ts
    ├── fixtures/
    └── utils/                        # render helpers, wrappers de teste
```

### Convenções internas das features

Cada feature segue a mesma estrutura interna:

- **`queries/`** — funções de leitura chamadas em Server Components
- **`mutations/`** — funções de escrita chamadas dentro de Server Actions
- **`actions.ts`** — Server Actions da feature (arquivo com `"use server"`)
- **`components/`** — componentes exclusivos da feature
- **`types.ts`** — tipos e interfaces do domínio

Arquivos `.spec.ts` / `.spec.tsx` ficam colocalizados com o arquivo que testam.

### Separação entre `playlist` e `collage`

Playlist e collage são outputs independentes construídos a partir do fluxo de `discover`, exibidos na rota `result` ao atingir o mínimo do RF 0014. A `app/` orquestra essa composição nas pages.

---

## Alternativas consideradas

### Organização flat por tipo (modelo da v1)

Pastas globais como `/components`, `/queries`, `/services`, `/templates`. Descartado porque mistura domínios e dificulta rastrear o que pertence a cada feature. Escalar esse modelo gera acoplamento implícito e pastas com dezenas de arquivos.

### Tudo dentro de `app/` (colocação máxima)

Colocar `_components/` e `actions.ts` diretamente dentro de cada rota. Descartado porque amarra a lógica de negócio ao roteamento do Next.js, dificultando testes unitários isolados e reuso entre rotas.

### Monorepo com pacotes por feature

Descartado por overhead desnecessário para o tamanho e escopo do projeto.

---

## Consequências

**Positivas:**

- Domínios autocontidos — é possível entender e testar uma feature sem conhecer o resto do projeto
- Dependências explícitas e unidirecionais — eliminam acoplamento acidental entre features
- `app/` como orquestrador puro — pages são composições de features, sem lógica de negócio própria
- Facilita cobertura de testes por feature (RNF 0005)

**Negativas / trade-offs:**

- Requer disciplina para não criar imports cruzados entre features
- A rule de ESLint precisa ser configurada e mantida para garantir as restrições de camada

---

## Referências

- ADR-001 — Stack e Banco de Dados
- `requirements.md` — RF 0032, RNF 0016, RNF 0017
- [Next.js App Router — Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)
````

## File: docs/adr/adr-0003-svg-and-icons.md
````markdown
# ADR-003: Convenção de SVG e Ícones

- **Status:** Aceito
- **Data:** 2026-04-05
- **Autores:** Raul Andrade

---

## Contexto

Sem uma convenção estabelecida, SVGs inline tendem a aparecer espalhados em componentes de features e páginas — misturando markup visual de baixo nível com lógica de negócio. Isso gera três problemas concretos:

- **Acessibilidade difícil de auditar:** atributos como `aria-hidden`, `role` e `aria-label` ficam inconsistentes entre usos
- **Inconsistência visual:** tamanho e cor do ícone são definidos de formas diferentes (classes Tailwind, atributos inline, `style`)
- **Duplicação silenciosa:** o mesmo ícone pode ser reimplementado em mais de um lugar sem que seja óbvio

O projeto não utiliza nenhuma biblioteca de ícones externa — todos os SVGs são customizados.

---

## Decisão

### Regra central

**Nenhum SVG pode ser escrito diretamente dentro de componentes de features, páginas ou outros componentes.** Todo ícone deve ser encapsulado em um componente dedicado dentro de `src/components/icons/`.

### Localização

```
src/components/icons/
├── PlayIcon.tsx
├── PauseIcon.tsx
├── HeartIcon.tsx
└── index.ts        ← barrel de exportação
```

`components/icons/` é uma subpasta de `components/`, seguindo a hierarquia de camadas da ADR-002. Ícones ficam em `components/` (e não em `lib/`) porque são componentes React — não utilitários framework-agnostic.

### Contrato de interface

Todos os ícones devem seguir o mesmo tipo de props:

```tsx
type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};
```

### Convenções obrigatórias

| Regra                           | Justificativa                                                                        |
| ------------------------------- | ------------------------------------------------------------------------------------ |
| `fill="currentColor"` sempre    | Herda a cor do contexto CSS — sem props de cor, sem classes de cor internas          |
| `aria-hidden={true}` por padrão | Ícone é decorativo por natureza; acessibilidade contextual é responsabilidade do pai |
| `size` como número (px)         | Controle explícito de dimensão sem dependência de classes utilitárias                |
| Named export — nunca `default`  | Consistência com o restante do projeto; evita ambiguidade no import                  |
| Sem lógica, estado ou efeitos   | Ícone é um componente puramente presentacional                                       |

### Exemplo canônico

```tsx
// src/components/icons/PlayIcon.tsx

type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function PlayIcon({
  className,
  size = 16,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      viewBox="0  0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d="..." />
    </svg>
  );
}
```

### Uso correto — responsabilidade do pai

`className` expõe customização de posicionamento ou cor para o componente pai. Não deve ser usado para sobrescrever `fill` ou dimensões — use `size` para isso.

Quando o ícone estiver dentro de um elemento interativo sem label visível (ex: `<button>` icon-only), o pai é responsável por fornecer `aria-label`:

```tsx
// correto
<button aria-label="Play">
  <PlayIcon />
</button>

// incorreto — ícone com aria-hidden dentro de botão sem label
<button>
  <PlayIcon aria-hidden={false} />
</button>
```

---

## Alternativas consideradas

### SVG inline diretamente nos componentes

Mais rápido no curto prazo, mas gera duplicação, impossibilita auditoria de acessibilidade e mistura markup de baixo nível com lógica de feature. Descartado.

### Biblioteca de ícones externa (ex: Lucide React, Heroicons)

Reduziria o trabalho de criar e manter SVGs manualmente. Descartado nesta versão porque o projeto usa um conjunto pequeno de ícones customizados, e adicionar uma dependência externa para poucos ícones seria over-engineering. Caso o conjunto de ícones cresça significativamente, essa decisão deve ser revisada — e os ícones externos devem ser reexportados via `components/icons/` para preservar o ponto único de entrada.

### Sprite SVG (`<use>`)

Técnica válida para performance em projetos com muitos ícones repetidos. Descartada por complexidade de setup desnecessária para o escopo atual e por tornar o componente menos legível e testável isoladamente.

---

## Consequências

**Positivas:**

- Ponto único para auditar acessibilidade de todos os ícones do projeto
- Consistência garantida de cor (`currentColor`) e dimensão (`size`) sem depender de convenção implícita
- Ícones são componentes testáveis e isolados
- Sem SVG inline fora de `components/icons/` — regra simples e verificável via lint ou code review

**Negativas / trade-offs:**

- Um arquivo por ícone — overhead pequeno, mas real
- Ícones não-quadrados (ex: logos com proporção específica) precisam expor `width` e `height` separadamente; a ADR permite isso como exceção explícita desde que `fill="currentColor"` e `aria-hidden` sejam mantidos

---

## Referências

- ADR-002 — Estrutura de Pastas e Organização do Projeto
- [MDN — SVG aria-hidden](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)
- [WCAG 2.1 — Non-text Content (1.1.1)](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
````

## File: docs/issues.md
````markdown

````

## File: docs/local-setup.md
````markdown
# Local Setup

## Configurando o Spotify OAuth localmente

### Contexto

Desde abril de 2025, o Spotify passou a rejeitar `localhost` como redirect URI válida. O erro exibido é:

```
redirect_uri: Insecure
```

A exigência agora é usar o endereço de loopback explícito `127.0.0.1` no lugar de `localhost`, conforme a [documentação oficial do Spotify](https://developer.spotify.com/documentation/web-api/concepts/redirect_uri).

### Configurando o Spotify Developer Dashboard

1. Acesse [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard)
2. Selecione o app do RandomFy
3. Vá em **Settings** → **Redirect URIs**
4. Adicione a URI: `http://127.0.0.1:3000/api/callback`
5. Clique em **Save**

### Configurando o `.env.local`

```env
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/api/callback
```

### Rodando localmente

Inicie o servidor normalmente:

```bash
nvm use
npm run dev
```

### ⚠️ Acesse sempre via `http://127.0.0.1:3000`

**Não** use `http://localhost:3000`. O Spotify redireciona de volta para o IP registrado (`127.0.0.1`), então o browser precisa estar na mesma origem durante todo o fluxo.

#### Por quê

O fluxo OAuth depende de um cookie `oauthState` (RNF 0021) para validar que o callback do Spotify veio da mesma sessão que iniciou o login:

1. `/api/login` seta o cookie `oauthState` no origin atual
2. Usuário é redirecionado para `accounts.spotify.com`
3. Spotify redireciona de volta para `SPOTIFY_REDIRECT_URI` (obrigatoriamente `127.0.0.1`)
4. `/api/callback` lê o cookie e compara com o `state` da URL

Cookies são isolados por origin, e `localhost` e `127.0.0.1` **são origins diferentes** na visão do browser — mesmo apontando para o mesmo servidor. Se você acessar o app via `localhost`:

- o cookie é gravado no origin `localhost`
- o callback executa no origin `127.0.0.1`
- o cookie não é enviado → `state` validation falha → redirect silencioso para `/login`

#### Sintoma

Loop de login: clica em "Continue with Spotify", autoriza no Spotify, a tela "volta" mas cai de novo em `/login` sem mensagem de erro.

Se isso acontecer, confirme que a URL no browser começa com `http://127.0.0.1:3000` — não `localhost`.
````

## File: docs/requirements.md
````markdown
# Requisitos Funcionais

- [x] RF 0001: O sistema deve permitir que o usuário faça login via conta do Spotify usando OAuth 2.0
- [x] RF 0002: O sistema deve redirecionar o usuário para a página principal após autenticação bem-sucedida
- [x] RF 0003: O sistema deve armazenar os tokens de acesso e refresh em cookies após o login
- [x] RF 0004: O sistema deve selecionar aleatoriamente um artista entre os 50 mais ouvidos do usuário no Spotify como ponto de partida
- [x] RF 0005: O sistema deve buscar artistas relacionados ao artista semente selecionado
- [x] RF 0006: O sistema deve exibir uma recomendação de artista por vez ao usuário, incluindo imagem, nome e música
- [x] RF 0007: O usuário deve poder curtir uma recomendação de artista
- [x] RF 0008: O usuário deve poder rejeitar (dislike) uma recomendação de artista
- [x] RF 0009: Ao curtir um artista, o sistema deve usar esse artista como nova semente para buscar a próxima recomendação
- [x] RF 0010: O sistema deve exibir um contador de progresso indicando quantos artistas foram curtidos (ex: 3/20)
- [x] RF 0011: O sistema deve evitar exibir músicas que o usuário já curtiu anteriormente na sessão; complementarmente ao RF 0031, que trata da deduplicação de artistas
- [x] RF 0012: O sistema deve permitir a reprodução de preview de áudio da música do artista recomendado, implementado como exceção controlada de interatividade client-side
- [x] RF 0013: O sistema deve garantir que apenas um preview de áudio seja reproduzido por vez
- [x] RF 0014: O usuário pode criar playlist e collage ao atingir um mínimo de 5 artistas curtidos, sendo 20 o número máximo da sessão
- [x] RF 0015: O sistema deve criar uma playlist pública no Spotify com as músicas dos artistas curtidos
- [x] RF 0016: Após a criação da playlist, o sistema deve exibir o player embed do Spotify com a playlist gerada
- [x] RF 0017: O sistema deve exibir um collage de imagens com as capas das músicas dos artistas curtidos ao atingir o mínimo de curtidas definido no RF 0014
- [x] RF 0018: O usuário deve poder fazer download da imagem do collage gerada
- [x] RF 0019: O sistema deve gerar um pôster de festival com os nomes dos artistas curtidos ordenados por popularidade, disponível exclusivamente ao atingir 20 curtidas, garantindo um layout previsível e completo
- [x] RF 0020: O usuário deve poder fazer download do pôster de festival gerado
- [x] RF 0021: O sistema deve permitir que o usuário faça logout, destruindo os cookies de autenticação
- [x] RF 0022: O sistema deve exibir um link para abrir o artista/música diretamente no Spotify
- [x] RF 0023: O sistema deve exibir feedback visual (toast) de sucesso ou erro ao criar uma playlist
- [x] RF 0024: O sistema deve exibir um skeleton loader enquanto as recomendações estão sendo carregadas
- [x] RF 0025: O sistema deve exibir um componente de erro com botão "tentar novamente" quando uma requisição falhar
- RF 0026: O sistema deve suportar os idiomas inglês, espanhol e português
- [x] RF 0027: O sistema deve ter uma página "Sobre" descrevendo o funcionamento da aplicação e o autor
- [x] RF 0028: Quando não houver artistas relacionados disponíveis, o sistema deve usar os top artistas do usuário como fallback para as recomendações
- [x] RF 0029: O sistema deve renovar o token de acesso automaticamente usando o refresh token quando receber erro 401
- [x] RF 0030: O sistema deve encerrar a sessão de recomendações ao atingir 20 artistas curtidos ou ao usuário optar por encerrar antes, respeitando o mínimo de 5 curtidas definido no RF 0014
- [x] RF 0031: O sistema deve manter uma lista de artistas já exibidos na sessão (curtidos ou rejeitados) e nunca reapresentar o mesmo artista; complementarmente ao RF 0011, que trata da deduplicação de músicas
- [x] RF 0032: As interações de curtir e rejeitar devem ser implementadas via Server Actions, com revalidação server-side para carregar a próxima recomendação sem estado client-side
- [x] RF 0033: O header da aplicação deve exibir links contextuais ao estado de autenticação: para usuários autenticados, links de navegação da sessão (Discover, Playlist/resultado e Sobre) e logout; para visitantes não autenticados, apenas o link Sobre
- [x] RF 0034: A playlist criada no Spotify deve ter o nome "Randomfy" e uma descrição que referencia o projeto com a URL da aplicação
- [x] RF 0035: O embed do Spotify exibido após a criação da playlist deve usar o tema escuro (parâmetro `theme=0` na URL do embed)
- [x] RF 0036: O pôster de festival deve exibir o ano atual dinamicamente no layout
- [x] RF 0037: O collage de imagens deve usar as capas de álbum das músicas dos artistas curtidos (não a imagem do artista)
- [x] RF 0038: Ao fazer download do collage ou do pôster de festival, o botão de download e eventuais legendas devem ser ocultados da imagem gerada, garantindo um output limpo sem elementos de UI
- [x] RF 0039: O sistema deve exibir uma página de erro global com opção de tentar novamente quando ocorrer uma falha não tratada durante a navegação (equivalente ao `error.tsx` do Next.js App Router)
- [x] RF 0040: A aplicação deve exibir uma página 404 personalizada para rotas inexistentes
- [x] RF 0041: A aplicação deve disponibilizar um `manifest.json` estático para suporte básico de instalabilidade (PWA lite), sem service worker ou cache offline

---

# Requisitos Não Funcionais

- RNF 0001: A aplicação deve ser construída com Next.js na versão mais recente, utilizando App Router e Server Components como padrão arquitetural, com serverless functions para endpoints de backend
- RNF 0002: A aplicação deve ser hospedada na Vercel
- RNF 0003: A aplicação deve usar App Router e Server Components, com fetch nativo do Next.js e suas estratégias de cache (force-cache, no-store, revalidate)
- [x] RNF 0004: A autenticação e dados sensíveis (tokens) devem ser armazenados em cookies com suporte a configuração de maxAge e secure
- RNF 0005: A cobertura de testes deve ser de no mínimo 80% das linhas de código
- RNF 0006: O projeto deve utilizar MSW (Mock Service Worker) para mock de requisições HTTP nos testes
- RNF 0007: O sistema deve utilizar Tailwind CSS para estilização, com suporte a dark mode
- RNF 0008: A aplicação deve ser responsiva, com suporte a dispositivos móveis e desktop
- RNF 0009: O projeto deve seguir padrões de commit convencionais (Conventional Commits) com validação via commitlint e husky
- RNF 0010: O projeto deve utilizar semantic-release para geração automática de versões e changelog
- RNF 0011: O pipeline de CI/CD deve incluir etapas de typecheck, lint e cobertura de testes via GitHub Actions
- RNF 0012: O sistema deve suportar internacionalização (i18n) com LinguiJS, com locale padrão em inglês e suporte a português e espanhol
- RNF 0013: O sistema deve requerer Node.js na versão 20.x ou superior
- RNF 0014: O header x-origin-id deve ser enviado nas requisições com o código do país do usuário, usado como parâmetro de mercado na API do Spotify
- RNF 0015: O projeto deve ter tipagem estrita com TypeScript em modo strict
- RNF 0016: O projeto deve fazer uso correto de queries e actions inspirado em CQRS, separando claramente operações de leitura (Server Components e fetch) de operações de escrita (Server Actions)
- [x] RNF 0017: Toda comunicação com a API do Spotify deve ocorrer server-side, via Server Components ou Server Actions, eliminando chamadas autenticadas pelo cliente; o preview de áudio definido no RF 0012 é a única exceção permitida de interatividade client-side
- [x] RNF 0018: A renovação automática do access token deve ser tratada no middleware do Next.js (middleware.ts), que verifica a validade do token antes de qualquer requisição e o renova via Spotify API quando necessário, atualizando o cookie de forma transparente
- [x] RNF 0019: O gerenciamento de cookies de autenticação (authorization e refreshToken) deve ocorrer exclusivamente server-side, usando a API de cookies do Next.js (cookies())
- [x] RNF 0020: Os cookies de autenticação devem ser configurados com as flags `httpOnly: true` e `sameSite: lax` além de `secure: true` em produção, evitando exposição ao JavaScript client-side e ataques CSRF
- [x] RNF 0021: O fluxo OAuth deve gerar um `state` aleatório por requisição, armazená-lo em cookie server-side e validá-lo no callback antes de trocar o código pelo token, prevenindo CSRF no handshake com o Spotify
- [x] RNF 0022: Os scopes solicitados ao Spotify devem ser os mínimos necessários para as funcionalidades da aplicação: `playlist-modify-public`, `user-top-read` e `user-read-recently-played`
- RNF 0023: O atributo `lang` do elemento `<html>` deve refletir dinamicamente o locale ativo da requisição, não um valor fixo
- RNF 0024: Todas as strings visíveis ao usuário devem ser internacionalizadas via LinguiJS; nenhum texto de interface pode ser hardcoded em inglês ou qualquer outro idioma
- RNF 0025: Os domínios `i.scdn.co` e `mosaic.scdn.co` (CDNs de imagens do Spotify) devem ser os únicos domínios externos permitidos na configuração de `remotePatterns` do `next/image`
- [x] RNF 0026: A aplicação deve expor metadados Open Graph (`og:title`, `og:description`, `og:image`) e Twitter Card para permitir previews em redes sociais
- [x] RNF 0027: O projeto deve ter um contrato explícito de variáveis de ambiente, distinguindo variáveis server-side (`SPOTIFY_CLIENT_ID`, `SPOTIFY_CLIENT_SECRET`, `CALLBACK_URL`) de variáveis públicas; nenhuma credencial deve ser exposta ao cliente
- RNF 0028: O servidor MSW nos testes deve ser configurado com `onUnhandledRequest: 'error'`, garantindo que requisições não mockadas causem falha explícita nos testes
- RNF 0029: O sistema não deve implementar tratamento de rate limit (HTTP 429) da API do Spotify nesta versão; erros de limite devem ser propagados normalmente como falhas de requisição
````

## File: public/manifest.json
````json
{
  "name": "Randomfy",
  "short_name": "Randomfy",
  "description": "Discover artists you'll love based on what you already listen to.",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#22c55e",
  "background_color": "#ffffff",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "any",
      "type": "image/x-icon"
    }
  ]
}
````

## File: src/app/(auth)/login/page.tsx
````typescript
import Link from "next/link";
import { SpotifyIcon } from "@/components/icons";
import { Button, Heading } from "@/components/ui";

const heroGlowTopLeft =
  "pointer-events-none absolute -left-[min(40vw,280px)] -top-[min(35vw,240px)] h-[min(85vw,560px)] w-[min(85vw,560px)] rounded-full bg-primary/20 blur-[120px]";
const heroGlowBottomRight =
  "pointer-events-none absolute -bottom-[min(25vw,160px)] -right-[min(35vw,220px)] h-[min(75vw,500px)] w-[min(75vw,500px)] rounded-full bg-fuchsia-600/25 blur-[120px]";

export default function LoginPage() {
  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className={heroGlowTopLeft} />
        <div className={heroGlowBottomRight} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-10 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="animate-fade-in motion-reduce:animate-none flex flex-col text-left">
            <Heading level="eyebrow" as="p" className="mb-4">
              <span className="text-primary" aria-hidden>
                ●
              </span>{" "}
              Side B · 2026 Edition
            </Heading>

            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              <span className="block">Discover artists</span>
              <span className="text-primary block italic">you&apos;ll love.</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              Built from your most-listened Spotify artists. Swipe twenty picks.
              Walk away with a playlist, a collage, and a festival poster of your
              taste.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <form action="/api/login" method="get">
                <Button type="submit" variant="spotify" size="lg">
                  <SpotifyIcon width={20} height={20} />
                  Continue with Spotify
                </Button>
              </form>
              <Link
                href="/about#how-it-works"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                How it works ↗
              </Link>
            </div>
          </div>

          <div
            className="relative mx-auto hidden h-[min(22rem,70vw)] w-[min(22rem,70vw)] shrink-0 lg:flex lg:items-center lg:justify-center"
            aria-hidden
          >
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
              <div
                className="border-spotify/35 absolute inset-0 rounded-full border-2 border-t-spotify motion-reduce:animate-none motion-reduce:opacity-80 animate-spin-slow"
              />
              <div className="absolute inset-4 rounded-full border border-subtle/60" />
              <span className="font-display text-spotify text-center text-3xl font-semibold tracking-tight sm:text-4xl">
                Randomfy
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
````

## File: src/app/(session)/discover/page.tsx
````typescript
import { Suspense } from "react";
import { DiscoverContent } from "@/features/discover/components/discover-content";
import { ArtistCardSkeleton } from "@/features/discover/components/artist-card.skeleton";
import { ProgressCounter } from "@/features/discover/components/progress-counter";
import { parseDiscoverParams } from "@/features/discover/session";
import type { DiscoverSearchParams } from "@/features/discover/types";

const discoverGlowTop =
  "pointer-events-none absolute left-1/2 top-0 h-[min(78vmin,480px)] w-[min(96vw,760px)] -translate-x-1/2 -translate-y-[42%] rounded-full bg-primary/14 blur-[120px]";

interface DiscoverPageProps {
  searchParams: Promise<DiscoverSearchParams>;
}

export default async function DiscoverPage({
  searchParams,
}: DiscoverPageProps) {
  const params = await searchParams;
  const { liked } = parseDiscoverParams(params);

  return (
    <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className={discoverGlowTop} />
      </div>

      <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col items-center overflow-hidden px-4 py-2 sm:py-3">
        <div className="flex h-full min-h-0 w-full max-w-md flex-1 flex-col gap-2 sm:gap-3">
          <div className="shrink-0">
            <ProgressCounter
              likedParam={params.liked ?? ""}
              albumsParam={params.albums ?? ""}
              likedCount={liked.length}
            />
          </div>

          <div className="flex h-full min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
            <Suspense fallback={<ArtistCardSkeleton />}>
              <DiscoverContent searchParams={params} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
````

## File: src/app/(session)/result/page.tsx
````typescript
import { ResultContent } from "@/features/result/components/result-content";
import type { ResultSearchParams } from "@/lib/types/spotify";

const resultGlowTop =
  "pointer-events-none absolute left-1/2 top-0 h-[min(72vmin,440px)] w-[min(92vw,720px)] -translate-x-1/2 -translate-y-[38%] rounded-full bg-primary/12 blur-[100px]";

const resultGlowGreen =
  "pointer-events-none absolute left-1/2 top-[min(28vh,220px)] h-[min(48vmin,320px)] w-[min(80vw,520px)] -translate-x-1/2 rounded-full bg-spotify/8 blur-[90px]";

const resultGlowMagenta =
  "pointer-events-none absolute -right-[min(20vw,120px)] bottom-0 h-[min(56vmin,360px)] w-[min(72vw,480px)] translate-y-[20%] rounded-full bg-fuchsia-950/35 blur-[100px]";

interface ResultPageProps {
  searchParams: Promise<ResultSearchParams>;
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const params = await searchParams;

  return (
    <main className="relative flex flex-1 flex-col overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className={resultGlowTop} />
        <div className={resultGlowGreen} />
        <div className={resultGlowMagenta} />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center gap-14 px-4 py-12 sm:gap-16 sm:py-16 md:py-20">
        <ResultContent searchParams={params} />
      </div>
    </main>
  );
}
````

## File: src/app/(session)/error.tsx
````typescript
"use client";

import { ErrorFallback } from "@/components/shared/error-fallback";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function SessionError(props: ErrorProps) {
  return <ErrorFallback {...props} />;
}
````

## File: src/app/(session)/layout.tsx
````typescript
export default function SessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
````

## File: src/app/about/page.tsx
````typescript
import { Heading } from "@/components/ui";

export default function AboutPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="max-w-2xl mx-auto w-full px-6 py-12 flex flex-col gap-16">
        <section className="flex flex-col gap-4">
          <Heading level="eyebrow">About</Heading>
          <p className="text-base leading-relaxed">
            Randomfy takes your most listened to Spotify artists, selects one of
            them, and shows you similar artists so you can discover new artists
            based on your preferences.
          </p>
          <p className="text-base leading-relaxed">
            Disclaimer: Randomfy is not affiliated with Spotify. This site was
            built with Next.js and the Spotify API.
          </p>
        </section>

        <section id="how-it-works" className="flex flex-col gap-4 scroll-mt-24">
          <Heading level="eyebrow">How it works</Heading>
          <p className="text-base leading-relaxed">
            When you sign in, a recommendation is shown based on your Spotify
            listening history.
          </p>
          <p className="text-base leading-relaxed">
            Like or pass on each artist. Once you have 5 or more, create a
            playlist and download your collage or festival poster.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <Heading level="eyebrow">Developer</Heading>
          <p className="text-base">
            Built by{" "}
            <a
              href="https://github.com/raulandrade"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              Raul Andrade
            </a>
            .
          </p>
          <ul className="flex items-center gap-4 text-sm text-muted">
            <li>
              <a
                href="https://github.com/andraderaul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </li>
            <li aria-hidden="true" className="opacity-30">·</li>
            <li>
              <a
                href="https://linkedin.com/in/andraderaul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li aria-hidden="true" className="opacity-30">·</li>
            <li>
              <a
                href="https://twitter.com/theandraderaul"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
````

## File: src/app/api/callback/route.spec.ts
````typescript
/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { NextRequest } from "next/server";
import { server } from "../../../../test/msw/server";
import { GET } from "./route";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "http://localhost:3000";
const VALID_STATE = "mock-oauth-state";

jest.mock("next/navigation", () => ({
  redirect: jest.fn((url: string) => {
    throw Object.assign(new Error("NEXT_REDIRECT"), { digest: `NEXT_REDIRECT;${url}` });
  }),
}));

jest.mock("@/features/auth/cookies", () => ({
  setTokens: jest.fn(),
  getOAuthState: jest.fn(),
  clearOAuthState: jest.fn(),
}));

import { redirect } from "next/navigation";
import {
  setTokens,
  getOAuthState,
  clearOAuthState,
} from "@/features/auth/cookies";

const mockRedirect = redirect as jest.MockedFunction<typeof redirect>;
const mockSetTokens = setTokens as jest.MockedFunction<typeof setTokens>;
const mockGetOAuthState = getOAuthState as jest.MockedFunction<
  typeof getOAuthState
>;
const mockClearOAuthState = clearOAuthState as jest.MockedFunction<
  typeof clearOAuthState
>;

beforeEach(() => {
  process.env.SPOTIFY_CLIENT_ID = "test-client-id";
  process.env.SPOTIFY_CLIENT_SECRET = "test-client-secret";
  process.env.SPOTIFY_REDIRECT_URI = "http://localhost:3000/api/callback";
  mockSetTokens.mockResolvedValue(undefined);
  mockGetOAuthState.mockResolvedValue(VALID_STATE);
  mockClearOAuthState.mockResolvedValue(undefined);
});

afterEach(() => {
  jest.clearAllMocks();
  delete process.env.SPOTIFY_CLIENT_ID;
  delete process.env.SPOTIFY_CLIENT_SECRET;
  delete process.env.SPOTIFY_REDIRECT_URI;
});

function makeRequest(options: { code?: string; state?: string } = {}): NextRequest {
  const url = new URL("/api/callback", BASE_URL);
  if (options.code) url.searchParams.set("code", options.code);
  if (options.state) url.searchParams.set("state", options.state);
  return new NextRequest(url.toString());
}

describe("GET /api/callback", () => {
  it("redirects to /login when code param is missing", async () => {
    const request = makeRequest({ state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
  });

  it("exchanges code for tokens and redirects to /discover", async () => {
    const request = makeRequest({ code: "valid-code", state: VALID_STATE });

    await expect(GET(request)).rejects.toMatchObject({
      message: "NEXT_REDIRECT",
    });

    expect(mockSetTokens).toHaveBeenCalledWith(
      "mock-access-token",
      "mock-refresh-token",
      3600,
    );
    expect(mockRedirect).toHaveBeenCalledWith("/discover");
    expect(mockClearOAuthState).toHaveBeenCalled();
  });

  it("redirects to /login when state param is missing", async () => {
    const request = makeRequest({ code: "valid-code" });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when state cookie is missing", async () => {
    mockGetOAuthState.mockResolvedValue(undefined);

    const request = makeRequest({ code: "valid-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when state does not match stored cookie", async () => {
    const request = makeRequest({ code: "valid-code", state: "wrong-state" });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
    expect(mockClearOAuthState).toHaveBeenCalled();
  });

  it("redirects to /login when Spotify token exchange fails", async () => {
    server.use(
      http.post(SPOTIFY_TOKEN_URL, () =>
        HttpResponse.json({ error: "invalid_grant" }, { status: 400 }),
      ),
    );

    const request = makeRequest({ code: "bad-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when refresh_token is missing in token response", async () => {
    server.use(
      http.post(SPOTIFY_TOKEN_URL, () =>
        HttpResponse.json({
          access_token: "mock-access-token",
          expires_in: 3600,
          token_type: "Bearer",
        }),
      ),
    );

    const request = makeRequest({ code: "valid-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
    expect(mockSetTokens).not.toHaveBeenCalled();
  });

  it("redirects to /login when env vars are missing", async () => {
    delete process.env.SPOTIFY_CLIENT_ID;

    const request = makeRequest({ code: "some-code", state: VALID_STATE });
    const response = await GET(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toContain("/login");
  });
});
````

## File: src/app/api/callback/route.ts
````typescript
import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { handleOAuthCallback } from "@/features/auth/handle-callback";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const code = searchParams.get("code");
  const state = searchParams.get("state");

  if (!code) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const result = await handleOAuthCallback(code, state);

  if (!result.success) {
    return NextResponse.redirect(new URL(result.redirectTo, request.url));
  }

  redirect("/discover");
}
````

## File: src/app/api/discover/init/route.ts
````typescript
import { NextRequest, NextResponse } from "next/server";
import { setDiscoverSeed } from "@/features/discover/cookies";
import { buildDiscoverUrl, parseLikedPairs, parseIds, parseAlbumImageUrls } from "@/features/discover/session";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;

  const seed = searchParams.get("seed");
  const liked = searchParams.get("liked") ?? undefined;
  const seen = searchParams.get("seen") ?? undefined;
  const tracks = searchParams.get("tracks") ?? undefined;
  const albums = searchParams.get("albums") ?? undefined;

  if (!seed) {
    return NextResponse.redirect(new URL("/discover", request.url));
  }

  await setDiscoverSeed(seed);

  const discoverUrl = buildDiscoverUrl({
    liked: parseLikedPairs(liked),
    seen: parseIds(seen),
    tracks: parseIds(tracks),
    albums: parseAlbumImageUrls(albums),
  });

  return NextResponse.redirect(new URL(discoverUrl, request.url));
}
````

## File: src/app/api/login/route.ts
````typescript
import { NextResponse } from "next/server";
import { buildSpotifyAuthUrl } from "@/features/auth";
import { OAUTH_STATE_KEY } from "@/features/auth/cookies";

const TEN_MINUTES = 60 * 10;

export async function GET(): Promise<NextResponse> {
  const { url, state } = buildSpotifyAuthUrl();

  const response = NextResponse.redirect(url);
  response.cookies.set(OAUTH_STATE_KEY, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: TEN_MINUTES,
    path: "/",
  });

  return response;
}
````

## File: src/app/error.tsx
````typescript
"use client";

import { ErrorFallback } from "@/components/shared/error-fallback";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError(props: ErrorProps) {
  return <ErrorFallback {...props} />;
}
````

## File: src/app/globals.css
````css
@import "tailwindcss";

/*
  CSS custom properties are defined in :root and overridden in dark mode.
  @theme inline maps Tailwind utility tokens → var() so utilities like
  bg-surface, text-muted, border-subtle adapt automatically to dark mode
  via the CSS var cascade — no dark: prefix needed in components.

  Primary stays green in both modes.
*/

:root {
  --bg: #ffffff;
  --fg: #171717;
  --c-surface: #ffffff;
  --c-surface-muted: #f7f7f8;
  --c-subtle: #ececee;
  --c-muted: #6b7280;
  --c-spotify: #1db954;
  --c-spotify-hover: #1ed760;
  --c-spotify-fg: #0a0a0a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0a0a0a;
    --fg: #ededed;
    --c-surface: #111113;
    --c-surface-muted: #1a1a1d;
    --c-subtle: #26262a;
    --c-muted: #9ca3af;
    /* Brighter green + light label so the CTA reads on dark UI and green glows */
    --c-spotify: #1ed760;
    --c-spotify-hover: #3be477;
    --c-spotify-fg: #0a0a0a;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes discover-card-enter {
  from {
    opacity: 0;
    transform: translateY(8px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgb(34 197 94 / 0.4);
  }
  50% {
    box-shadow: 0 0 0 16px rgb(34 197 94 / 0);
  }
}

@theme inline {
  --color-background: var(--bg);
  --color-foreground: var(--fg);
  --color-surface: var(--c-surface);
  --color-surface-muted: var(--c-surface-muted);
  --color-subtle: var(--c-subtle);
  --color-muted: var(--c-muted);
  --color-primary: #22c55e;
  --color-primary-hover: #4ade80;
  /* Semantic aliases (discover actions, shadcn-style snippets) */
  --color-border: var(--c-subtle);
  --color-card: var(--c-surface);
  --color-secondary: var(--c-surface-muted);
  --color-muted-foreground: var(--c-muted);
  --color-primary-foreground: #ffffff;
  --background-image-gradient-primary: linear-gradient(
    to bottom right,
    var(--color-primary-hover),
    var(--color-primary)
  );
  --shadow-glow: 0 0 44px -8px rgb(34 197 94 / 0.55),
    0 14px 28px -10px rgb(0 0 0 / 0.45);
  --color-spotify: var(--c-spotify);
  --color-spotify-hover: var(--c-spotify-hover);
  --color-spotify-fg: var(--c-spotify-fg);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-display: var(--font-fraunces), ui-serif, Georgia, serif;
  --font-mono: var(--font-geist-mono), ui-monospace, monospace;
  --animate-fade-in: fade-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  --animate-scale-in: scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
  --animate-discover-card: discover-card-enter 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
  --animate-spin-slow: spin-slow 20s linear infinite;
  --animate-pulse-glow: pulse-glow 2.4s ease-out infinite;
}

body {
  background: var(--bg);
  color: var(--fg);
}

@media (prefers-reduced-motion: reduce) {
  .animate-fade-in,
  .animate-scale-in,
  .animate-discover-card {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }

  .animate-pulse-glow,
  .animate-spin-slow {
    animation: none !important;
  }
}
````

## File: src/app/layout.tsx
````typescript
import type { Metadata } from "next";
import { Fraunces, Geist_Mono, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { getAccessToken, logoutAction } from "@/features/auth";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Randomfy",
  description:
    "Discover artists you'll love based on what you already listen to.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Randomfy",
    description:
      "Discover artists you'll love based on what you already listen to.",
    url: "https://randomfy.app",
    siteName: "Randomfy",
  },
  twitter: { card: "summary_large_image" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getAccessToken();

  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${geistMono.variable} min-h-dvh antialiased font-sans`}
    >
      <body className="flex min-h-dvh flex-col">
        <Header isAuthenticated={!!token} onLogout={logoutAction} />
        <div className="flex min-h-0 flex-1 flex-col">{children}</div>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
````

## File: src/app/not-found.tsx
````typescript
import Link from "next/link";
import { ErrorFallback } from "@/components/shared/error-fallback";

export default function NotFound() {
  return (
    <ErrorFallback
      title="Page not found"
      description="The page you're looking for doesn't exist or has been moved."
      action={
        <Link
          href="/"
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black hover:bg-primary-hover transition-colors"
        >
          Go home
        </Link>
      }
    />
  );
}
````

## File: src/app/page.tsx
````typescript
import { redirect } from "next/navigation";

export default function HomePage() {
  return redirect("/login");
}
````

## File: src/components/icons/HeartIcon.tsx
````typescript
type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function HeartIcon({
  className,
  size = 16,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
  );
}
````

## File: src/components/icons/index.ts
````typescript
export { HeartIcon } from "./HeartIcon";
export { PauseIcon } from "./PauseIcon";
export { PlayIcon } from "./PlayIcon";
export { SpotifyIcon } from "./SpotifyIcon";
export { XIcon } from "./XIcon";
````

## File: src/components/icons/PauseIcon.tsx
````typescript
type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function PauseIcon({
  className,
  size = 16,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        fillRule="evenodd"
        d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
````

## File: src/components/icons/PlayIcon.tsx
````typescript
type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function PlayIcon({
  className,
  size = 16,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
````

## File: src/components/icons/SpotifyIcon.tsx
````typescript
type SpotifyIconProps = {
  className?: string;
  width?: number;
  height?: number;
  "aria-hidden"?: boolean;
};

export function SpotifyIcon({
  className,
  width = 20,
  height = 20,
  "aria-hidden": ariaHidden = true,
}: SpotifyIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
````

## File: src/components/icons/XIcon.tsx
````typescript
type IconProps = {
  className?: string;
  size?: number;
  "aria-hidden"?: boolean;
};

export function XIcon({
  className,
  size = 16,
  "aria-hidden": ariaHidden = true,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden={ariaHidden}
    >
      <path
        fillRule="evenodd"
        d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}
````

## File: src/components/shared/error-fallback.tsx
````typescript
"use client";

import { useEffect } from "react";
import type { ReactNode } from "react";
import { Heading } from "@/components/ui";

interface ErrorFallbackProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  error?: Error & { digest?: string };
  reset?: () => void;
  icon?: ReactNode;
}

export function ErrorFallback({
  title = "Something went wrong",
  description = "An unexpected error occurred. You can try again or come back later.",
  action,
  error,
  reset,
  icon,
}: ErrorFallbackProps) {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-5 px-4 text-center">
      {icon ?? (
        <div
          aria-hidden="true"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-muted text-muted text-lg"
        >
          !
        </div>
      )}
      <Heading level="title" as="h1">
        {title}
      </Heading>
      <p className="text-sm text-muted max-w-sm">{description}</p>
      {action ??
        (reset && (
          <button
            onClick={reset}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-black hover:bg-primary-hover transition-colors"
          >
            Try again
          </button>
        ))}
    </main>
  );
}
````

## File: src/components/shared/footer.tsx
````typescript
export function Footer() {
  return (
    <footer className="py-6 text-center text-xs text-muted">
      <span>Randomfy</span>
      <span aria-hidden="true" className="mx-2 opacity-30">·</span>
      <span>Not affiliated with Spotify</span>
      <span aria-hidden="true" className="mx-2 opacity-30">·</span>
      <a
        href="https://github.com/andraderaul"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-foreground hover:underline transition-colors"
      >
        Raul Andrade
      </a>
    </footer>
  );
}
````

## File: src/components/shared/header-nav.tsx
````typescript
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface HeaderNavProps {
  isAuthenticated: boolean;
  logoutSlot?: ReactNode;
}

interface NavLink {
  href: string;
  label: string;
}

const publicLinks: NavLink[] = [
  {
    href: "/about",
    label: "About",
  },
];

const sessionLinks: NavLink[] = [
  { href: "/discover", label: "Discover" },
  { href: "/result", label: "Playlist" },
  { href: "/about", label: "About" },
];

export function HeaderNav({ isAuthenticated, logoutSlot }: HeaderNavProps) {
  const pathname = usePathname();
  const links = isAuthenticated ? sessionLinks : publicLinks;

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className="flex flex-wrap items-center justify-end gap-4 text-sm font-medium sm:gap-6">
      {links.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`transition-colors ${
              active
                ? "text-gray-900 underline decoration-2 underline-offset-8 dark:text-foreground dark:decoration-foreground"
                : "text-gray-500 hover:text-gray-900 dark:text-muted dark:hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
      {isAuthenticated && logoutSlot}
    </nav>
  );
}
````

## File: src/components/shared/header.tsx
````typescript
import Link from "next/link";
import { Wordmark } from "@/components/ui";
import { HeaderNav } from "./header-nav";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout?: () => Promise<void>;
}

export function Header({ isAuthenticated, onLogout }: HeaderProps) {
  const logoutSlot = onLogout ? (
    <form action={onLogout}>
      <button
        type="submit"
        className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Log out
      </button>
    </form>
  ) : null;

  return (
    <header className="flex items-center justify-between gap-4 border-b border-subtle/50 px-6 py-4 dark:border-white/10">
      <Link
        href={isAuthenticated ? "/discover" : "/"}
        className="shrink-0"
        aria-label="Randomfy"
      >
        <Wordmark size="sm" />
      </Link>

      <HeaderNav isAuthenticated={isAuthenticated} logoutSlot={logoutSlot} />
    </header>
  );
}
````

## File: src/components/ui/button.tsx
````typescript
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "spotify" | "finish";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-black hover:bg-primary-hover focus-visible:outline-primary",
  spotify:
    "bg-spotify text-spotify-fg hover:bg-spotify-hover focus-visible:outline-spotify",
  secondary:
    "bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-80 focus-visible:outline-gray-900 dark:focus-visible:outline-white",
  ghost:
    "border border-subtle text-gray-700 dark:text-gray-200 hover:bg-surface-muted focus-visible:outline-subtle",
  finish:
    "border border-subtle bg-white text-gray-950 shadow-md shadow-black/10 hover:bg-surface-muted focus-visible:outline-gray-400 dark:border-transparent dark:bg-white dark:text-gray-950 dark:hover:opacity-90 dark:shadow-black/30",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className = "", children, ...rest },
    ref,
  ) {
    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  },
);
````

## File: src/components/ui/heading.tsx
````typescript
import type { HTMLAttributes, ReactNode } from "react";

type Level = "display" | "title" | "section" | "eyebrow" | "muted";

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  level: Level;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  children: ReactNode;
}

const styles: Record<Level, string> = {
  display: "text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight",
  title: "text-2xl font-bold tracking-tight",
  section: "text-lg font-semibold tracking-tight",
  eyebrow: "text-xs uppercase tracking-widest font-medium text-muted",
  muted: "text-base text-muted font-normal",
};

const defaultTags: Record<Level, HeadingProps["as"]> = {
  display: "h1",
  title: "h1",
  section: "h2",
  eyebrow: "p",
  muted: "p",
};

export function Heading({
  level,
  as,
  className = "",
  children,
  ...rest
}: HeadingProps) {
  const Tag = as ?? defaultTags[level] ?? "p";
  const classes = `${styles[level]} ${className}`.trim();
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  );
}
````

## File: src/components/ui/index.ts
````typescript
export { Button } from "./button";
export { Surface } from "./surface";
export { Heading } from "./heading";
export { Wordmark } from "./wordmark";
````

## File: src/components/ui/surface.tsx
````typescript
import type { HTMLAttributes, ReactNode } from "react";

type Tone = "default" | "muted" | "locked";

interface SurfaceProps extends HTMLAttributes<HTMLDivElement> {
  tone?: Tone;
  children: ReactNode;
}

const tones: Record<Tone, string> = {
  default: "bg-surface border border-subtle shadow-sm",
  muted: "bg-surface-muted",
  locked:
    "bg-surface-muted border border-dashed border-subtle text-gray-400 dark:text-gray-500",
};

export function Surface({
  tone = "default",
  className = "",
  children,
  ...rest
}: SurfaceProps) {
  const classes = `rounded-2xl ${tones[tone]} ${className}`.trim();
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}
````

## File: src/components/ui/wordmark.tsx
````typescript
type Size = "sm" | "md" | "lg";

interface WordmarkProps {
  size?: Size;
  className?: string;
}

const sizes: Record<Size, string> = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl",
};

export function Wordmark({ size = "sm", className = "" }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-1.5 font-display font-extrabold tracking-tight text-foreground ${sizes[size]} ${className}`.trim()}
    >
      <span>Randomfy.</span>
      <span
        className="mb-0.5 h-2 w-2 shrink-0 translate-y-px rounded-full bg-primary sm:h-2.5 sm:w-2.5"
        aria-hidden
      />
    </span>
  );
}
````

## File: src/features/auth/actions.ts
````typescript
"use server";

import { redirect } from "next/navigation";
import { clearTokens } from "./cookies";

export async function logoutAction(): Promise<void> {
  await clearTokens();
  redirect("/login");
}
````

## File: src/features/auth/build-login-url.ts
````typescript
import { randomUUID } from "crypto";

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const SCOPES = [
  "user-top-read",
  "playlist-modify-public",
  "user-read-recently-played",
].join(" ");

export function buildSpotifyAuthUrl(): { url: string; state: string } {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !redirectUri) {
    throw new Error("Missing Spotify OAuth environment variables");
  }

  const state = randomUUID();
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    scope: SCOPES,
    state,
  });

  return { url: `${SPOTIFY_AUTH_URL}?${params.toString()}`, state };
}
````

## File: src/features/auth/cookies.spec.ts
````typescript
/**
 * @jest-environment node
 */

import {
  ACCESS_TOKEN_KEY,
  EXPIRES_AT_KEY,
  REFRESH_TOKEN_KEY,
  clearTokens,
  getAccessToken,
  getExpiresAt,
  getRefreshToken,
  setExpiresAt,
  setTokens,
} from "./cookies";

const makeCookieStore = (initial: Record<string, string> = {}) => {
  const store = new Map<string, string>(Object.entries(initial));
  return {
    get: jest.fn((key: string) =>
      store.has(key) ? { value: store.get(key)! } : undefined,
    ),
    set: jest.fn(
      (key: string, value: string) => void store.set(key, value),
    ),
    delete: jest.fn((key: string) => void store.delete(key)),
  };
};

jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));

import { cookies } from "next/headers";

const mockCookies = cookies as jest.MockedFunction<typeof cookies>;

describe("cookies", () => {
  let cookieStore: ReturnType<typeof makeCookieStore>;

  beforeEach(() => {
    cookieStore = makeCookieStore();
    mockCookies.mockResolvedValue(cookieStore as never);
  });

  describe("getAccessToken", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getAccessToken()).toBeUndefined();
    });

    it("returns the access token value", async () => {
      cookieStore = makeCookieStore({ [ACCESS_TOKEN_KEY]: "tok123" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getAccessToken()).toBe("tok123");
    });
  });

  describe("getRefreshToken", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getRefreshToken()).toBeUndefined();
    });

    it("returns the refresh token value", async () => {
      cookieStore = makeCookieStore({ [REFRESH_TOKEN_KEY]: "ref456" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getRefreshToken()).toBe("ref456");
    });
  });

  describe("getExpiresAt", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getExpiresAt()).toBeUndefined();
    });

    it("returns expiresAt as a number", async () => {
      cookieStore = makeCookieStore({ [EXPIRES_AT_KEY]: "1700000000000" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getExpiresAt()).toBe(1700000000000);
    });
  });

  describe("setTokens", () => {
    it("sets access token, refresh token, and expiresAt cookies", async () => {
      const now = Date.now();
      jest.spyOn(Date, "now").mockReturnValue(now);

      await setTokens("access-tok", "refresh-tok", 3600);

      expect(cookieStore.set).toHaveBeenCalledWith(
        ACCESS_TOKEN_KEY,
        "access-tok",
        expect.objectContaining({ httpOnly: true, maxAge: 3600 }),
      );
      expect(cookieStore.set).toHaveBeenCalledWith(
        REFRESH_TOKEN_KEY,
        "refresh-tok",
        expect.objectContaining({ httpOnly: true }),
      );
      expect(cookieStore.set).toHaveBeenCalledWith(
        EXPIRES_AT_KEY,
        String(now + 3600 * 1000),
        expect.objectContaining({ httpOnly: true }),
      );

      jest.spyOn(Date, "now").mockRestore();
    });
  });

  describe("setExpiresAt", () => {
    it("sets the expiresAt cookie", async () => {
      await setExpiresAt(9999999999);

      expect(cookieStore.set).toHaveBeenCalledWith(
        EXPIRES_AT_KEY,
        "9999999999",
        expect.objectContaining({ httpOnly: true }),
      );
    });
  });

  describe("clearTokens", () => {
    it("deletes all auth cookies", async () => {
      await clearTokens();

      expect(cookieStore.delete).toHaveBeenCalledWith(ACCESS_TOKEN_KEY);
      expect(cookieStore.delete).toHaveBeenCalledWith(REFRESH_TOKEN_KEY);
      expect(cookieStore.delete).toHaveBeenCalledWith(EXPIRES_AT_KEY);
    });
  });
});
````

## File: src/features/auth/cookies.ts
````typescript
import { cookies } from "next/headers";

const ACCESS_TOKEN_KEY = "authorization";
const REFRESH_TOKEN_KEY = "refreshToken";
const EXPIRES_AT_KEY = "expiresAt";
const OAUTH_STATE_KEY = "oauthState";

const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function getAccessToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(ACCESS_TOKEN_KEY)?.value;
}

export async function getRefreshToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(REFRESH_TOKEN_KEY)?.value;
}

export async function getExpiresAt(): Promise<number | undefined> {
  const cookieStore = await cookies();
  const value = cookieStore.get(EXPIRES_AT_KEY)?.value;
  return value ? Number(value) : undefined;
}

export async function setTokens(
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
): Promise<void> {
  const cookieStore = await cookies();
  const secure = process.env.NODE_ENV === "production";
  const expiresAt = Date.now() + expiresIn * 1000;

  cookieStore.set(ACCESS_TOKEN_KEY, accessToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: expiresIn,
    path: "/",
  });

  cookieStore.set(REFRESH_TOKEN_KEY, refreshToken, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });

  cookieStore.set(EXPIRES_AT_KEY, String(expiresAt), {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });
}

export async function setExpiresAt(expiresAt: number): Promise<void> {
  const cookieStore = await cookies();
  const secure = process.env.NODE_ENV === "production";

  cookieStore.set(EXPIRES_AT_KEY, String(expiresAt), {
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });
}

export async function clearTokens(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ACCESS_TOKEN_KEY);
  cookieStore.delete(REFRESH_TOKEN_KEY);
  cookieStore.delete(EXPIRES_AT_KEY);
}

export async function getOAuthState(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(OAUTH_STATE_KEY)?.value;
}

export async function clearOAuthState(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(OAUTH_STATE_KEY);
}

export {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  EXPIRES_AT_KEY,
  OAUTH_STATE_KEY,
};
````

## File: src/features/auth/handle-callback.ts
````typescript
import { clearOAuthState, getOAuthState, setTokens } from "./cookies";
import type { SpotifyTokenResponse } from "./types";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

export type HandleCallbackResult =
  | { success: true }
  | { success: false; redirectTo: string };

export async function handleOAuthCallback(
  code: string,
  state: string | null,
): Promise<HandleCallbackResult> {
  const storedState = await getOAuthState();
  await clearOAuthState();

  if (!state || !storedState || state !== storedState) {
    return { success: false, redirectTo: "/login" };
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;

  if (!clientId || !clientSecret || !redirectUri) {
    return { success: false, redirectTo: "/login" };
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  let tokenData: SpotifyTokenResponse;

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectUri,
      }),
    });

    if (!response.ok) {
      return { success: false, redirectTo: "/login" };
    }

    tokenData = await response.json();
  } catch {
    return { success: false, redirectTo: "/login" };
  }

  if (!tokenData.refresh_token) {
    return { success: false, redirectTo: "/login" };
  }

  await setTokens(
    tokenData.access_token,
    tokenData.refresh_token,
    tokenData.expires_in,
  );

  return { success: true };
}
````

## File: src/features/auth/index.ts
````typescript
export { logoutAction } from "./actions";
export { buildSpotifyAuthUrl } from "./build-login-url";
export { getAccessToken } from "./cookies";
export { handleOAuthCallback } from "./handle-callback";
````

## File: src/features/auth/token.spec.ts
````typescript
/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../test/msw/server";
import { refreshAccessToken } from "./token";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

beforeEach(() => {
  process.env.SPOTIFY_CLIENT_ID = "test-client-id";
  process.env.SPOTIFY_CLIENT_SECRET = "test-client-secret";
});

afterEach(() => {
  delete process.env.SPOTIFY_CLIENT_ID;
  delete process.env.SPOTIFY_CLIENT_SECRET;
});

describe("refreshAccessToken", () => {
  it("returns new accessToken and expiresIn on success", async () => {
    const result = await refreshAccessToken("valid-refresh-token");

    expect(result).toEqual({
      accessToken: "mock-refreshed-access-token",
      expiresIn: 3600,
    });
  });

  it("returns null when Spotify responds with an error status", async () => {
    const result = await refreshAccessToken("invalid-refresh-token");

    expect(result).toBeNull();
  });

  it("returns null when SPOTIFY_CLIENT_ID is missing", async () => {
    delete process.env.SPOTIFY_CLIENT_ID;

    const result = await refreshAccessToken("any-token");

    expect(result).toBeNull();
  });

  it("returns null when SPOTIFY_CLIENT_SECRET is missing", async () => {
    delete process.env.SPOTIFY_CLIENT_SECRET;

    const result = await refreshAccessToken("any-token");

    expect(result).toBeNull();
  });

  it("returns null when fetch throws a network error", async () => {
    server.use(
      http.post(SPOTIFY_TOKEN_URL, () => {
        throw new Error("Network error");
      }),
    );

    const result = await refreshAccessToken("valid-refresh-token");

    expect(result).toBeNull();
  });
});
````

## File: src/features/auth/token.ts
````typescript
import type { SpotifyTokenResponse } from "./types";

const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

export async function refreshAccessToken(
  refreshToken: string,
): Promise<{ accessToken: string; expiresIn: number } | null> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return null;
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64",
  );

  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data: SpotifyTokenResponse = await response.json();

    return {
      accessToken: data.access_token,
      expiresIn: data.expires_in,
    };
  } catch {
    return null;
  }
}
````

## File: src/features/auth/types.ts
````typescript
export interface SpotifyTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

export interface SpotifyTokenResponse {
  access_token: string;
  refresh_token?: string;
  expires_in: number;
  token_type: string;
}
````

## File: src/features/discover/components/artist-card.skeleton.tsx
````typescript
import {
  discoverCardRadiusClass,
  discoverCardShellClipClass,
} from "./discover-card-surface";

const skeletonPosterBase = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-[radial-gradient(ellipse_115%_92%_at_50%_6%,#7f1d1d_0%,#450a0a_36%,#141212_100%)]`;

const skeletonPosterWarm = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-[radial-gradient(ellipse_72%_52%_at_50%_40%,rgba(248,113,113,0.14)_0%,transparent_62%)]`;

const skeletonVignette = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-linear-to-b from-black/30 via-transparent to-black/90`;

const skeletonFrameClass = `isolate w-full ${discoverCardRadiusClass} shadow-[0_20px_56px_-14px_rgb(0_0_0/0.5),0_8px_24px_-8px_rgb(0_0_0/0.35)] ring-1 ring-black/20 animate-pulse`;

const skeletonShellClass = `relative aspect-3/4 min-h-0 w-full max-h-[min(54dvh,calc(100dvh-21rem))] overflow-hidden ${discoverCardRadiusClass} ${discoverCardShellClipClass} sm:max-h-[min(58dvh,calc(100dvh-20rem))]`;

export function ArtistCardSkeleton() {
  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center gap-2 overflow-hidden">
      <div className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center overflow-hidden">
        <div className="relative max-h-full min-h-0 w-full min-w-0">
          <div className={skeletonFrameClass}>
            <div className={skeletonShellClass}>
              <div className={skeletonPosterBase} aria-hidden />
              <div className={skeletonPosterWarm} aria-hidden />
              <div className={skeletonVignette} aria-hidden />
              <div
                className={`pointer-events-none absolute inset-0 ${discoverCardRadiusClass} shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]`}
                aria-hidden
              />

              <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-black/45 ring-1 ring-white/10" />

              <div
                className={`absolute inset-0 flex flex-col ${discoverCardRadiusClass}`}
              >
                <div className="flex flex-1 flex-col items-center justify-center px-5 pt-10 sm:px-6 sm:pt-14">
                  <div className="h-9 w-[85%] max-w-[260px] rounded-lg bg-rose-100/15" />
                  <div className="mt-3 h-9 w-[65%] max-w-[200px] rounded-lg bg-rose-100/12" />
                </div>

                <div className="flex flex-col gap-1.5 px-5 pb-5 pt-0 sm:gap-2 sm:px-6 sm:pb-6 sm:pt-1">
                  <div className="h-3 w-20 rounded bg-stone-400/25" />
                  <div className="h-9 w-[75%] max-w-[220px] rounded-lg bg-white/12" />
                  <div className="h-5 w-[55%] max-w-[160px] rounded bg-rose-50/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-center gap-5 pb-0.5">
        <div className="h-12 w-12 shrink-0 rounded-full border border-subtle bg-surface" />
        <div className="h-16 w-16 shrink-0 rounded-full bg-linear-to-br from-[#6ee7b7]/45 to-[#34d399]/35 shadow-[0_0_44px_-8px_rgba(110,231,183,0.45),0_14px_28px_-10px_rgba(0,0,0,0.35)]" />
      </div>
    </div>
  );
}
````

## File: src/features/discover/components/artist-card.tsx
````typescript
import Image from "next/image";
import { HeartIcon, XIcon } from "@/components/icons";
import { dislikeArtistAction, likeArtistAction } from "../actions";
import type { Artist, DiscoverSearchParams, Track } from "../types";
import {
  discoverCardRadiusClass,
  discoverCardShellClipClass,
} from "./discover-card-surface";
import { AudioPlayer } from "./audio-player";

const posterBaseClass = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-[radial-gradient(ellipse_115%_92%_at_50%_6%,#7f1d1d_0%,#450a0a_36%,#141212_100%)]`;

const posterWarmCenterClass = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-[radial-gradient(ellipse_72%_52%_at_50%_40%,rgba(248,113,113,0.14)_0%,transparent_62%)]`;

const posterVignetteClass = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} bg-linear-to-b from-black/30 via-transparent to-black/90`;

const posterEdgeClass = `pointer-events-none absolute inset-0 ${discoverCardRadiusClass} shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]`;

const cardFrameClass = `isolate w-full ${discoverCardRadiusClass} shadow-[0_20px_56px_-14px_rgb(0_0_0/0.5),0_8px_24px_-8px_rgb(0_0_0/0.35)] ring-1 ring-black/20 animate-discover-card`;

const cardShellClass = `relative aspect-3/4 min-h-0 w-full max-h-[min(54dvh,calc(100dvh-21rem))] overflow-hidden ${discoverCardRadiusClass} ${discoverCardShellClipClass} sm:max-h-[min(58dvh,calc(100dvh-20rem))]`;

const heroTitleClass =
  "line-clamp-3 text-balance text-center font-display text-3xl font-bold leading-[1.12] tracking-tight text-rose-50 sm:text-4xl sm:leading-[1.1] md:text-5xl";

const heroGlowClass =
  "[text-shadow:0_0_52px_rgba(254,205,211,0.42),0_0_100px_rgba(254,205,211,0.14),0_4px_32px_rgb(0_0_0/0.78)]";

const eyebrowClass =
  "font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-stone-400/85";

const artistClass =
  "font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_2px_16px_rgb(0_0_0/0.5)] hover:underline sm:text-3xl md:text-4xl";

const trackSecondaryClass =
  "truncate font-display text-base font-normal leading-snug text-stone-100 sm:text-lg";

interface ArtistCardProps {
  artist: Artist;
  track: Track;
  state: DiscoverSearchParams;
}

export function ArtistCard({ artist, track, state }: ArtistCardProps) {
  const likeWithArgs = likeArtistAction.bind(
    null,
    artist.id,
    track.id,
    track.albumImageUrl,
    state,
  );
  const dislikeWithArgs = dislikeArtistAction.bind(null, artist.id, state);

  const genreEyebrow =
    artist.genres.length > 0 ? artist.genres[0].toUpperCase() : null;

  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col items-center gap-2 overflow-hidden">
      <div className="flex min-h-0 w-full min-w-0 flex-1 items-center justify-center overflow-hidden">
        <div className="relative max-h-full min-h-0 w-full min-w-0">
          <div className={cardFrameClass}>
            <div className={cardShellClass}>
              <div className={posterBaseClass} aria-hidden />

              {track.albumImageUrl ? (
                <div
                  className={`absolute inset-0 overflow-hidden ${discoverCardRadiusClass}`}
                  aria-hidden
                >
                  <Image
                    src={track.albumImageUrl}
                    alt=""
                    fill
                    className="scale-110 object-cover opacity-[0.22] blur-md"
                    sizes="(max-width: 448px) 100vw, 448px"
                    priority
                  />
                </div>
              ) : null}

              <div className={posterWarmCenterClass} aria-hidden />
              <div className={posterVignetteClass} aria-hidden />
              <div className={posterEdgeClass} aria-hidden />

              <div
                className={`absolute inset-0 z-10 flex flex-col ${discoverCardRadiusClass}`}
              >
                <div className="flex flex-1 flex-col items-center justify-center px-5 pb-4 pt-10 sm:px-6 sm:pb-5 sm:pt-14">
                  <p className={`${heroTitleClass} ${heroGlowClass}`}>
                    {track.name}
                  </p>
                </div>

                <div className="flex min-w-0 flex-col gap-1.5 px-5 pb-5 pt-0 text-left sm:gap-2 sm:px-6 sm:pb-6 sm:pt-1">
                  {genreEyebrow ? (
                    <span className={eyebrowClass}>{genreEyebrow}</span>
                  ) : null}
                  <a
                    href={artist.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={artistClass}
                  >
                    {artist.name}
                  </a>
                  <span className={trackSecondaryClass}>{track.name}</span>
                </div>
              </div>

              <div className="absolute right-4 top-4 z-20">
                <AudioPlayer
                  previewUrl={track.previewUrl ?? null}
                  className="h-10 w-10 border-white/12 bg-black/55 shadow-none backdrop-blur-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-5 pb-0.5">
        <form action={dislikeWithArgs}>
          <button
            type="submit"
            aria-label="Pass"
            className="flex h-12 w-12 shrink-0 appearance-none items-center justify-center overflow-hidden rounded-full border border-border bg-card text-muted-foreground transition-all hover:scale-105 hover:bg-secondary active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400"
          >
            <XIcon size={20} />
          </button>
        </form>

        <form action={likeWithArgs}>
          <button
            type="submit"
            aria-label="Like"
            className="flex h-16 w-16 shrink-0 appearance-none items-center justify-center overflow-hidden rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-all hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200"
          >
            <HeartIcon size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}
````

## File: src/features/discover/components/audio-player.tsx
````typescript
"use client";

import { useRef, useState } from "react";

import { PauseIcon, PlayIcon } from "@/components/icons";

let currentAudio: HTMLAudioElement | null = null;

const controlButtonClass =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur-md shadow-md transition-colors hover:enabled:bg-black/55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-50";

interface AudioPlayerProps {
  previewUrl: string | null;
  className?: string;
}

export function AudioPlayer({ previewUrl, className = "" }: AudioPlayerProps) {
  const controlClass = `${controlButtonClass} ${className}`.trim();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  if (!previewUrl) {
    return (
      <button
        type="button"
        disabled
        aria-label="Preview not available"
        className={controlClass}
      >
        <PlayIcon size={18} />
      </button>
    );
  }

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }
      currentAudio = audio;
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }

  function handleEnded() {
    setPlaying(false);
    currentAudio = null;
  }

  return (
    <>
      <audio ref={audioRef} src={previewUrl} onEnded={handleEnded} />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause preview" : "Play preview"}
        className={controlClass}
      >
        {playing ? <PauseIcon size={18} /> : <PlayIcon size={18} />}
      </button>
    </>
  );
}
````

## File: src/features/discover/components/discover-card-surface.ts
````typescript
/** Tailwind radius for discover artist card layers (keep in sync with clip-path). */
export const discoverCardRadiusClass = "rounded-[2.5rem]";

/**
 * Curved clip for stacked poster layers (avoids square-corner bleed with
 * overflow-hidden + border-radius under compositing).
 */
export const discoverCardShellClipClass =
  "[clip-path:inset(0_round_2.5rem)]";
````

## File: src/features/discover/components/discover-content.tsx
````typescript
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getAccessToken } from "@/features/auth";
import { getArtistTrack } from "@/lib/spotify/queries/get-artist-track";
import { getRelatedArtists } from "@/lib/spotify/queries/get-related-artists";
import { getDiscoverSeed } from "../cookies";
import { getTopArtists } from "../queries/get-top-artists";
import { parseDiscoverParams, pickSeed } from "../session";
import type { DiscoverSearchParams } from "../types";
import { ArtistCard } from "./artist-card";

const MAX_LIKED = 20;

interface DiscoverContentProps {
  searchParams: DiscoverSearchParams;
}

export async function DiscoverContent({ searchParams }: DiscoverContentProps) {
  const market = (await headers()).get("x-origin-id") ?? "US";
  const { liked, seen, tracks } = parseDiscoverParams(searchParams);

  if (liked.length >= MAX_LIKED) {
    redirect(
      `/result?liked=${searchParams.liked ?? ""}&albums=${searchParams.albums ?? ""}`,
    );
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    redirect("/login");
  }

  const seedId = await getDiscoverSeed();

  if (!seedId) {
    const topArtists = await getTopArtists(accessToken);
    const seed = pickSeed(topArtists, seen);

    if (!seed) {
      return (
        <p className="text-gray-500">
          No more artists to discover. Try again later.
        </p>
      );
    }

    const initParams = new URLSearchParams({ seed: seed.id });
    if (searchParams.liked) initParams.set("liked", searchParams.liked);
    if (searchParams.seen) initParams.set("seen", searchParams.seen);
    if (searchParams.tracks) initParams.set("tracks", searchParams.tracks);
    if (searchParams.albums) initParams.set("albums", searchParams.albums);

    redirect(`/api/discover/init?${initParams.toString()}`);
  }

  let candidates = await getRelatedArtists(seedId, accessToken);

  if (candidates.length === 0) {
    candidates = await getTopArtists(accessToken);
  }

  const next = pickSeed(candidates, seen);

  if (!next) {
    return (
      <p className="text-gray-500">
        No more artists to discover. Try again later.
      </p>
    );
  }

  const track = await getArtistTrack(next.id, tracks, accessToken, market);

  if (!track) {
    return (
      <p className="text-gray-500">
        No track available for this artist. Try again later.
      </p>
    );
  }

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden pb-2">
      <ArtistCard
        key={`${next.id}-${track.id}`}
        artist={next}
        track={track}
        state={searchParams}
      />
    </div>
  );
}
````

## File: src/features/discover/components/progress-counter.tsx
````typescript
import { Button, Heading } from "@/components/ui";
import { endSessionAction } from "../actions";

const MAX_LIKED = 20;
const MIN_TO_END = 5;

interface ProgressCounterProps {
  likedParam: string;
  albumsParam: string;
  likedCount: number;
}

export function ProgressCounter({
  likedParam,
  albumsParam,
  likedCount,
}: ProgressCounterProps) {
  const count = likedCount;
  const displayCount = Math.min(count, MAX_LIKED);

  const canEnd = count >= MIN_TO_END;
  const festivalUnlocked = count >= MAX_LIKED;
  const endWithArgs = endSessionAction.bind(null, likedParam, albumsParam);
  const progress = Math.min((displayCount / MAX_LIKED) * 100, 100);
  const remainingToUnlock = Math.max(0, MIN_TO_END - count);

  const badge = festivalUnlocked
    ? "Festival unlocked"
    : canEnd
      ? "Playlist unlocked"
      : null;

  return (
    <div className="flex w-full flex-col gap-4">
      <Heading level="eyebrow" as="p" className="text-left">
        Your picks
      </Heading>

      <div className="flex items-start justify-between gap-3">
        <p className="font-display text-4xl font-semibold leading-none tracking-tight text-foreground">
          {displayCount}
          <span className="text-2xl font-normal text-muted">
            {" "}
            / {MAX_LIKED}
          </span>
        </p>
        {badge ? (
          <span className="shrink-0 pt-1 text-right text-xs font-semibold leading-snug text-primary">
            {badge}
          </span>
        ) : null}
      </div>

      <div
        className="h-2 w-full overflow-hidden rounded-full bg-black/10 dark:bg-white/10"
        role="progressbar"
        aria-valuenow={displayCount}
        aria-valuemin={0}
        aria-valuemax={MAX_LIKED}
      >
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!canEnd ? (
        <p className="text-left text-xs text-muted">
          {remainingToUnlock} more to unlock playlist
        </p>
      ) : null}

      {canEnd ? (
        <form action={endWithArgs} className="w-full">
          <Button type="submit" variant="finish" size="md" className="w-full">
            Finish with {displayCount} picks →
          </Button>
        </form>
      ) : null}
    </div>
  );
}
````

## File: src/features/discover/queries/get-top-artists.spec.ts
````typescript
/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockArtist } from "../../../../test/msw/handlers/discover";
import { getTopArtists } from "./get-top-artists";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

jest.mock("@/features/auth/cookies", () => ({
  getAccessToken: jest.fn().mockResolvedValue("mock-access-token"),
}));

describe("getTopArtists", () => {
  it("returns mapped top artists", async () => {
    const result = await getTopArtists();

    expect(result).toHaveLength(3);
    expect(result[0]).toMatchObject({
      id: "top-artist-1",
      name: "Top Artist 1",
      imageUrl: "https://i.scdn.co/image/test.jpg",
      spotifyUrl: "https://open.spotify.com/artist/artist-1",
      popularity: 80,
      genres: ["pop"],
    });
  });

  it("handles artist with no images gracefully", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/me/top/artists`, () =>
        HttpResponse.json({
          items: [mockArtist({ id: "no-image", images: [] })],
        }),
      ),
    );

    const result = await getTopArtists();
    expect(result[0]?.imageUrl).toBe("");
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/me/top/artists`, () =>
        HttpResponse.json({ error: "Unauthorized" }, { status: 401 }),
      ),
    );

    await expect(getTopArtists()).rejects.toThrow("Spotify API error");
  });
});
````

## File: src/features/discover/queries/get-top-artists.ts
````typescript
import { spotifyFetch } from "@/lib/spotify/client";
import type { Artist } from "@/lib/types/spotify";

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string; width: number; height: number }[];
  external_urls: { spotify: string };
  popularity: number;
  genres: string[];
}

interface TopArtistsResponse {
  items: SpotifyArtist[];
}

function mapArtist(raw: SpotifyArtist): Artist {
  return {
    id: raw.id,
    name: raw.name,
    imageUrl: raw.images[0]?.url ?? "",
    spotifyUrl: raw.external_urls.spotify,
    popularity: raw.popularity,
    genres: raw.genres,
  };
}

export async function getTopArtists(accessToken: string): Promise<Artist[]> {
  const data = await spotifyFetch<TopArtistsResponse>(
    accessToken,
    "/me/top/artists?limit=50",
  );
  return data.items.map(mapArtist);
}
````

## File: src/features/discover/actions.ts
````typescript
"use server";

import { redirect } from "next/navigation";
import { clearDiscoverSeed, setDiscoverSeed } from "./cookies";
import {
  buildDiscoverUrl,
  parseAlbumImageUrls,
  parseIds,
  parseLikedPairs,
} from "./session";
import type { DiscoverSearchParams } from "./types";

export async function likeArtistAction(
  artistId: string,
  trackId: string,
  albumImageUrl: string,
  state: DiscoverSearchParams,
): Promise<never> {
  const liked = parseLikedPairs(state.liked);
  const seen = parseIds(state.seen);
  const tracks = parseIds(state.tracks);
  const albums = parseAlbumImageUrls(state.albums);

  const newLiked = [...liked, { artistId, trackId }];
  const newSeen = seen.includes(artistId) ? seen : [...seen, artistId];
  const newAlbums = [...albums, albumImageUrl];

  await setDiscoverSeed(artistId);

  redirect(
    buildDiscoverUrl({ liked: newLiked, seen: newSeen, tracks, albums: newAlbums }),
  );
}

export async function dislikeArtistAction(
  artistId: string,
  state: DiscoverSearchParams,
): Promise<never> {
  const liked = parseLikedPairs(state.liked);
  const seen = parseIds(state.seen);
  const tracks = parseIds(state.tracks);
  const albums = parseAlbumImageUrls(state.albums);

  const newSeen = seen.includes(artistId) ? seen : [...seen, artistId];

  redirect(buildDiscoverUrl({ liked, seen: newSeen, tracks, albums }));
}

export async function endSessionAction(
  likedParam: string,
  albumsParam: string,
): Promise<never> {
  await clearDiscoverSeed();
  redirect(`/result?liked=${likedParam}&albums=${albumsParam}`);
}
````

## File: src/features/discover/cookies.spec.ts
````typescript
/**
 * @jest-environment node
 */

import {
  DISCOVER_SEED_KEY,
  clearDiscoverSeed,
  getDiscoverSeed,
  setDiscoverSeed,
} from "./cookies";

const makeCookieStore = (initial: Record<string, string> = {}) => {
  const store = new Map<string, string>(Object.entries(initial));
  return {
    get: jest.fn((key: string) =>
      store.has(key) ? { value: store.get(key)! } : undefined,
    ),
    set: jest.fn((key: string, value: string) => void store.set(key, value)),
    delete: jest.fn((key: string) => void store.delete(key)),
  };
};

jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}));

import { cookies } from "next/headers";

const mockCookies = cookies as jest.MockedFunction<typeof cookies>;

describe("discover cookies", () => {
  let cookieStore: ReturnType<typeof makeCookieStore>;

  beforeEach(() => {
    cookieStore = makeCookieStore();
    mockCookies.mockResolvedValue(cookieStore as never);
  });

  describe("getDiscoverSeed", () => {
    it("returns undefined when cookie is absent", async () => {
      expect(await getDiscoverSeed()).toBeUndefined();
    });

    it("returns the seed value when set", async () => {
      cookieStore = makeCookieStore({ [DISCOVER_SEED_KEY]: "artist-42" });
      mockCookies.mockResolvedValue(cookieStore as never);
      expect(await getDiscoverSeed()).toBe("artist-42");
    });
  });

  describe("setDiscoverSeed", () => {
    it("sets the cookie with the given artist ID", async () => {
      await setDiscoverSeed("artist-99");
      expect(cookieStore.set).toHaveBeenCalledWith(
        DISCOVER_SEED_KEY,
        "artist-99",
        expect.objectContaining({ httpOnly: true, path: "/" }),
      );
    });
  });

  describe("clearDiscoverSeed", () => {
    it("deletes the discover-seed cookie", async () => {
      await clearDiscoverSeed();
      expect(cookieStore.delete).toHaveBeenCalledWith(DISCOVER_SEED_KEY);
    });
  });
});
````

## File: src/features/discover/cookies.ts
````typescript
import { cookies } from "next/headers";

const DISCOVER_SEED_KEY = "discover-seed";

export async function getDiscoverSeed(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get(DISCOVER_SEED_KEY)?.value;
}

export async function setDiscoverSeed(artistId: string): Promise<void> {
  const cookieStore = await cookies();
  const secure = process.env.NODE_ENV === "production";

  cookieStore.set(DISCOVER_SEED_KEY, artistId, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
  });
}

export async function clearDiscoverSeed(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(DISCOVER_SEED_KEY);
}

export { DISCOVER_SEED_KEY };
````

## File: src/features/discover/index.ts
````typescript
export { likeArtistAction, dislikeArtistAction, endSessionAction } from "./actions";
export { ArtistCard } from "./components/artist-card";
export { ArtistCardSkeleton } from "./components/artist-card.skeleton";
export { DiscoverContent } from "./components/discover-content";
export { ProgressCounter } from "./components/progress-counter";
export { getTopArtists } from "./queries/get-top-artists";
export { parseDiscoverParams, pickSeed, buildDiscoverUrl } from "./session";
export type { DiscoverSearchParams } from "./types";
````

## File: src/features/discover/session.spec.ts
````typescript
/**
 * @jest-environment node
 */

import {
  buildDiscoverUrl,
  parseIds,
  parseLikedPairs,
  pickSeed,
  serializeIds,
  serializeLikedPairs,
} from "./session";
import type { Artist } from "./types";

const makeArtist = (id: string): Artist => ({
  id,
  name: `Artist ${id}`,
  imageUrl: "",
  spotifyUrl: "",
  popularity: 50,
  genres: [],
});

describe("parseIds", () => {
  it("returns empty array for undefined", () => {
    expect(parseIds(undefined)).toEqual([]);
  });

  it("returns empty array for empty string", () => {
    expect(parseIds("")).toEqual([]);
  });

  it("splits comma-separated IDs", () => {
    expect(parseIds("a,b,c")).toEqual(["a", "b", "c"]);
  });

  it("trims whitespace around IDs", () => {
    expect(parseIds("a, b , c")).toEqual(["a", "b", "c"]);
  });

  it("filters empty segments", () => {
    expect(parseIds("a,,b")).toEqual(["a", "b"]);
  });
});

describe("serializeIds", () => {
  it("joins IDs with comma", () => {
    expect(serializeIds(["a", "b", "c"])).toBe("a,b,c");
  });

  it("returns empty string for empty array", () => {
    expect(serializeIds([])).toBe("");
  });
});

describe("pickSeed", () => {
  it("returns null when all artists are seen", () => {
    const artists = [makeArtist("a"), makeArtist("b")];
    expect(pickSeed(artists, ["a", "b"])).toBeNull();
  });

  it("returns null when artists array is empty", () => {
    expect(pickSeed([], [])).toBeNull();
  });

  it("excludes seen artists from selection", () => {
    const artists = [makeArtist("a"), makeArtist("b"), makeArtist("c")];
    const result = pickSeed(artists, ["a", "b"]);
    expect(result?.id).toBe("c");
  });

  it("returns an artist from the candidates", () => {
    const artists = [makeArtist("x"), makeArtist("y")];
    const result = pickSeed(artists, []);
    expect(["x", "y"]).toContain(result?.id);
  });
});

describe("parseLikedPairs", () => {
  it("returns empty array for undefined", () => {
    expect(parseLikedPairs(undefined)).toEqual([]);
  });

  it("parses a single artistId:trackId entry", () => {
    expect(parseLikedPairs("artistId:trackId")).toEqual([
      { artistId: "artistId", trackId: "trackId" },
    ]);
  });

  it("treats entry without colon as legacy artist-only id", () => {
    expect(parseLikedPairs("artist-only")).toEqual([
      { artistId: "artist-only", trackId: "" },
    ]);
  });

  it("parses multiple comma-separated entries", () => {
    expect(parseLikedPairs("a1:t1,a2:t2")).toEqual([
      { artistId: "a1", trackId: "t1" },
      { artistId: "a2", trackId: "t2" },
    ]);
  });
});

describe("serializeLikedPairs", () => {
  it("serializes pairs correctly with colon", () => {
    expect(serializeLikedPairs([{ artistId: "a", trackId: "t1" }])).toBe("a:t1");
  });

  it("returns empty string for empty array", () => {
    expect(serializeLikedPairs([])).toBe("");
  });

  it("serializes multiple pairs separated by comma", () => {
    expect(
      serializeLikedPairs([
        { artistId: "a1", trackId: "t1" },
        { artistId: "a2", trackId: "t2" },
      ]),
    ).toBe("a1:t1,a2:t2");
  });
});

describe("buildDiscoverUrl", () => {
  it("returns /discover when all arrays are empty", () => {
    expect(buildDiscoverUrl({ liked: [], seen: [], tracks: [] })).toBe("/discover");
  });

  it("includes liked param", () => {
    const url = buildDiscoverUrl({
      liked: [{ artistId: "a", trackId: "t1" }, { artistId: "b", trackId: "t2" }],
      seen: [],
      tracks: [],
    });
    expect(url).toContain("liked=");
    expect(url).toContain("a%3At1");
  });

  it("includes seen param", () => {
    const url = buildDiscoverUrl({ liked: [], seen: ["x"], tracks: [] });
    expect(url).toBe("/discover?seen=x");
  });

  it("includes tracks param", () => {
    const url = buildDiscoverUrl({ liked: [], seen: [], tracks: ["t1"] });
    expect(url).toBe("/discover?tracks=t1");
  });

  it("includes all params together", () => {
    const url = buildDiscoverUrl({
      liked: [{ artistId: "a", trackId: "t1" }],
      seen: ["b"],
      tracks: ["c"],
    });
    expect(url).toContain("liked=");
    expect(url).toContain("seen=b");
    expect(url).toContain("tracks=c");
  });
});
````

## File: src/features/discover/session.ts
````typescript
import type { Artist, LikedPair } from "@/lib/types/spotify";
import type { DiscoverSearchParams } from "./types";

export {
  parseIds,
  serializeIds,
  parseLikedPairs,
  serializeLikedPairs,
  parseAlbumImageUrls,
} from "@/lib/session";

import { parseLikedPairs, parseIds, parseAlbumImageUrls, serializeLikedPairs, serializeIds } from "@/lib/session";

export function pickSeed(artists: Artist[], seen: string[]): Artist | null {
  const seenSet = new Set(seen);
  const candidates = artists.filter((a) => !seenSet.has(a.id));
  if (candidates.length === 0) return null;
  const index = Math.floor(Math.random() * candidates.length);
  return candidates[index] ?? null;
}

export function buildDiscoverUrl(state: {
  liked: LikedPair[];
  seen: string[];
  tracks: string[];
  albums?: string[];
}): string {
  const params = new URLSearchParams();

  if (state.liked.length > 0) {
    params.set("liked", serializeLikedPairs(state.liked));
  }
  if (state.seen.length > 0) {
    params.set("seen", serializeIds(state.seen));
  }
  if (state.tracks.length > 0) {
    params.set("tracks", serializeIds(state.tracks));
  }
  if (state.albums && state.albums.length > 0) {
    params.set("albums", state.albums.join("|"));
  }

  const query = params.toString();
  return query ? `/discover?${query}` : "/discover";
}

export function parseDiscoverParams(searchParams: DiscoverSearchParams): {
  liked: LikedPair[];
  seen: string[];
  tracks: string[];
  albums: string[];
} {
  return {
    liked: parseLikedPairs(searchParams.liked),
    seen: parseIds(searchParams.seen),
    tracks: parseIds(searchParams.tracks),
    albums: parseAlbumImageUrls(searchParams.albums),
  };
}
````

## File: src/features/discover/types.ts
````typescript
import type { Artist } from "@/lib/types/spotify";

export type { Artist, Track, LikedPair, ResultSearchParams } from "@/lib/types/spotify";

export interface SessionState {
  liked: Artist[];
  seen: Set<string>;
  seed: Artist | null;
}

export interface DiscoverSearchParams {
  liked?: string;
  seen?: string;
  tracks?: string;
  albums?: string;
}
````

## File: src/features/playlist/components/playlist-embed.skeleton.tsx
````typescript
export function PlaylistEmbedSkeleton() {
  return (
    <div className="animate-pulse rounded-xl bg-surface-muted h-[380px] w-full" />
  );
}
````

## File: src/features/playlist/components/playlist-embed.tsx
````typescript
import type { Playlist } from "../types";

interface PlaylistEmbedProps {
  playlist: Playlist;
}

export function PlaylistEmbed({ playlist }: PlaylistEmbedProps) {
  return (
    <iframe
      src={playlist.embedUrl}
      width="100%"
      height="380"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className="rounded-xl"
    />
  );
}
````

## File: src/features/playlist/mutations/create-playlist.spec.ts
````typescript
/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { createPlaylist } from "./create-playlist";

const SPOTIFY_BASE = "https://api.spotify.com/v1";
const ACCESS_TOKEN = "mock-access-token";

describe("createPlaylist", () => {
  it("calls POST /users/{userId}/playlists with Randomfy name, description and public: true", async () => {
    let capturedBody: Record<string, unknown> = {};

    server.use(
      http.post(`${SPOTIFY_BASE}/users/:userId/playlists`, async ({ request }) => {
        capturedBody = (await request.json()) as Record<string, unknown>;
        return HttpResponse.json({
          id: "playlist-1",
          name: "Randomfy",
          external_urls: { spotify: "https://open.spotify.com/playlist/playlist-1" },
        });
      }),
    );

    await createPlaylist("user-123", ["track-1"], ACCESS_TOKEN);

    expect(capturedBody).toMatchObject({
      name: "Randomfy",
      public: true,
    });
    expect(capturedBody.description).toMatch(/Randomfy/);
    expect(capturedBody.description).toMatch(/https?:\/\//);
  });

  it("calls POST /playlists/{id}/tracks with URIs in spotify:track:{id} format", async () => {
    let capturedBody: Record<string, unknown> = {};

    server.use(
      http.post(`${SPOTIFY_BASE}/playlists/:id/tracks`, async ({ request }) => {
        capturedBody = (await request.json()) as Record<string, unknown>;
        return HttpResponse.json({ snapshot_id: "snapshot-1" });
      }),
    );

    await createPlaylist("user-123", ["track-1", "track-2"], ACCESS_TOKEN);

    expect(capturedBody).toMatchObject({
      uris: ["spotify:track:track-1", "spotify:track:track-2"],
    });
  });

  it("returns a Playlist with embedUrl using theme=0", async () => {
    const result = await createPlaylist("user-123", ["track-1"], ACCESS_TOKEN);

    expect(result).toMatchObject({
      id: "playlist-1",
      name: "Randomfy",
      spotifyUrl: "https://open.spotify.com/playlist/playlist-1",
      embedUrl: "https://open.spotify.com/embed/playlist/playlist-1?theme=0",
    });
  });

  it("throws when playlist creation POST fails", async () => {
    server.use(
      http.post(`${SPOTIFY_BASE}/users/:userId/playlists`, () =>
        HttpResponse.json({ error: "Forbidden" }, { status: 403 }),
      ),
    );

    await expect(
      createPlaylist("user-123", ["track-1"], ACCESS_TOKEN),
    ).rejects.toThrow("Spotify API error");
  });

  it("throws when adding tracks POST fails", async () => {
    server.use(
      http.post(`${SPOTIFY_BASE}/playlists/:id/tracks`, () =>
        HttpResponse.json({ error: "Internal Server Error" }, { status: 500 }),
      ),
    );

    await expect(
      createPlaylist("user-123", ["track-1"], ACCESS_TOKEN),
    ).rejects.toThrow("Spotify API error");
  });
});
````

## File: src/features/playlist/mutations/create-playlist.ts
````typescript
import { spotifyFetch } from "@/lib/spotify/client";
import type { Playlist } from "../types";

interface SpotifyPlaylist {
  id: string;
  name: string;
  external_urls: { spotify: string };
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://randomfy.app";

export async function createPlaylist(
  userId: string,
  trackIds: string[],
  accessToken: string,
): Promise<Playlist> {
  const playlist = await spotifyFetch<SpotifyPlaylist>(
    accessToken,
    `/users/${userId}/playlists`,
    {
      method: "POST",
      body: JSON.stringify({
        name: "Randomfy",
        description: `Created with Randomfy — ${APP_URL}`,
        public: true,
      }),
    },
  );

  const uris = trackIds.map((id) => `spotify:track:${id}`);

  await spotifyFetch(
    accessToken,
    `/playlists/${playlist.id}/tracks`,
    {
      method: "POST",
      body: JSON.stringify({ uris }),
    },
  );

  return {
    id: playlist.id,
    name: playlist.name,
    spotifyUrl: playlist.external_urls.spotify,
    embedUrl: `https://open.spotify.com/embed/playlist/${playlist.id}?theme=0`,
  };
}
````

## File: src/features/playlist/queries/get-user-profile.ts
````typescript
import { spotifyFetch } from "@/lib/spotify/client";

interface SpotifyUserProfile {
  id: string;
}

export async function getUserProfile(accessToken: string): Promise<{ id: string }> {
  const data = await spotifyFetch<SpotifyUserProfile>(accessToken, "/me");
  return { id: data.id };
}
````

## File: src/features/playlist/actions.ts
````typescript
"use server";

import { getAccessToken } from "@/features/auth";
import { getUserProfile } from "./queries/get-user-profile";
import { createPlaylist } from "./mutations/create-playlist";
import type { Playlist } from "./types";

export async function createPlaylistAction(
  trackIds: string[],
): Promise<Playlist | { error: string }> {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return { error: "Not authenticated" };
    }

    const user = await getUserProfile(accessToken);
    return await createPlaylist(user.id, trackIds, accessToken);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return { error: message };
  }
}
````

## File: src/features/playlist/index.ts
````typescript
export { createPlaylistAction } from "./actions";
export { PlaylistEmbed } from "./components/playlist-embed";
export type { Playlist } from "./types";
````

## File: src/features/playlist/types.ts
````typescript
export interface Playlist {
  id: string;
  name: string;
  spotifyUrl: string;
  embedUrl: string;
}
````

## File: src/features/result/components/collage-grid.tsx
````typescript
"use client";

import { useRef, useState } from "react";
import type { CollageItem } from "@/lib/types/spotify";

interface CollageGridProps {
  artists: CollageItem[];
}

const sectionLabelClass =
  "text-xs font-medium uppercase tracking-[0.2em] text-muted";

const downloadLinkClass =
  "text-xs font-medium uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spotify";

export function CollageGrid({ artists }: CollageGridProps) {
  const ref = useRef<HTMLDivElement>(null);

  async function handleDownload() {
    if (!ref.current) return;
    const { default: html2canvas } = await import("html2canvas");
    const canvas = await html2canvas(ref.current, { useCORS: true });
    const link = document.createElement("a");
    link.download = "my-random-fy-collage.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex w-full items-baseline justify-between gap-4">
        <p className={sectionLabelClass}>Your collage</p>
        <button
          type="button"
          onClick={handleDownload}
          className={downloadLinkClass}
          data-html2canvas-ignore
        >
          Download ↓
        </button>
      </div>

      <div
        className="rounded-3xl border border-subtle bg-surface p-2 shadow-sm sm:p-2.5"
        ref={ref}
      >
        <div className="grid w-full grid-cols-5 gap-1.5 sm:gap-2">
          {artists.map((item) => (
            <CollageTile key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollageTile({ item }: { item: CollageItem }) {
  const [failed, setFailed] = useState(!item.imageUrl);
  const initial = item.artistName.charAt(0).toUpperCase();

  if (failed) {
    return (
      <div
        className="flex aspect-square w-full items-center justify-center rounded-xl bg-surface-muted text-lg font-semibold text-muted ring-1 ring-inset ring-subtle"
        aria-label={item.artistName}
      >
        {initial}
      </div>
    );
  }

  return (
    <div className="aspect-square w-full overflow-hidden rounded-xl bg-surface-muted ring-1 ring-inset ring-subtle">
      <img
        src={item.imageUrl}
        alt={item.artistName}
        className="aspect-square h-full w-full object-cover"
        crossOrigin="anonymous"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
````

## File: src/features/result/components/create-playlist-button.tsx
````typescript
"use client";

import { useTransition, useState } from "react";
import { toast } from "sonner";
import { SpotifyIcon } from "@/components/icons";
import { Button, Heading, Surface } from "@/components/ui";
import { createPlaylistAction, PlaylistEmbed } from "@/features/playlist";
import type { Playlist } from "@/features/playlist";

interface CreatePlaylistButtonProps {
  trackIds: string[];
}

export function CreatePlaylistButton({ trackIds }: CreatePlaylistButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [playlist, setPlaylist] = useState<Playlist | null>(null);

  function handleClick() {
    startTransition(async () => {
      const result = await createPlaylistAction(trackIds);
      if ("error" in result) {
        toast.error(result.error);
      } else {
        setPlaylist(result);
        toast.success("Playlist created!");
      }
    });
  }

  if (playlist) {
    return (
      <div className="flex w-full min-w-full basis-full flex-col gap-4">
        <Surface className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex min-w-0 flex-col gap-0.5">
            <Heading level="section" as="h2">
              Playlist ready
            </Heading>
            <p className="truncate text-sm text-muted">
              Saved to your Spotify account.
            </p>
          </div>
          <a
            href={playlist.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-medium transition-opacity hover:opacity-70"
          >
            Open in Spotify ↗
          </a>
        </Surface>
        <PlaylistEmbed playlist={playlist} />
      </div>
    );
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isPending}
      variant="spotify"
      size="lg"
      className="w-full shadow-glow sm:w-auto"
    >
      <SpotifyIcon width={22} height={22} className="shrink-0" />
      {isPending ? "Creating playlist…" : "Create Spotify playlist"}
    </Button>
  );
}
````

## File: src/features/result/components/festival-poster.tsx
````typescript
"use client";

import { useRef } from "react";
import { Wordmark } from "@/components/ui";
import type { Artist } from "@/lib/types/spotify";

function getArtistSizeClass(index: number): string {
  if (index === 0) return "text-4xl font-extrabold leading-tight sm:text-5xl";
  if (index <= 2) return "text-2xl font-bold leading-snug sm:text-3xl";
  if (index <= 5) return "text-lg font-semibold leading-snug sm:text-xl";
  return "text-xs font-medium leading-snug sm:text-sm";
}

/** Closing act: slightly larger than the wall tier for visual separation. */
const closingNameClass =
  "text-sm font-semibold leading-snug text-[#f5f5f5] sm:text-base";

interface LineupPartition {
  headline: Artist | null;
  row2: Artist[];
  row3: Artist[];
  wall: Artist[];
  closing: Artist | null;
}

function partitionLineup(artists: Artist[]): LineupPartition {
  if (artists.length === 0) {
    return { headline: null, row2: [], row3: [], wall: [], closing: null };
  }

  const headline = artists[0] ?? null;
  const row2 = artists.slice(1, Math.min(3, artists.length));
  const row3 = artists.slice(3, Math.min(6, artists.length));

  if (artists.length < 7) {
    const afterRow3 = 1 + row2.length + row3.length;
    const remainder = artists.slice(afterRow3);
    return { headline, row2, row3, wall: remainder, closing: null };
  }

  const tail = artists.slice(6);
  if (tail.length <= 1) {
    return { headline, row2, row3, wall: [], closing: tail[0] ?? null };
  }

  return {
    headline,
    row2,
    row3,
    wall: tail.slice(0, -1),
    closing: tail[tail.length - 1]!,
  };
}

const sectionLabelClass =
  "text-xs font-medium uppercase tracking-[0.2em] text-[#a3a3a3]";

const downloadLinkClass =
  "text-xs font-medium uppercase tracking-[0.18em] text-[#a3a3a3] transition-colors hover:text-[#f5f5f5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40";

interface FestivalPosterProps {
  artists: Artist[];
}

export function FestivalPoster({ artists }: FestivalPosterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sorted = [...artists].sort((a, b) => b.popularity - a.popularity);
  const { headline, row2, row3, wall, closing } = partitionLineup(sorted);

  async function handleDownload() {
    if (!ref.current) return;
    const { default: html2canvas } = await import("html2canvas");
    const canvas = await html2canvas(ref.current, {
      useCORS: true,
      backgroundColor: "#0a100d",
    });
    const link = document.createElement("a");
    link.download = "my-random-fy-festival.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  const row2Justify =
    row2.length >= 2 ? "justify-between" : "justify-center";
  const row3Justify =
    row3.length >= 3 ? "justify-between" : row3.length === 2 ? "justify-between" : "justify-center";

  return (
    <section className="flex w-full flex-col gap-4">
      <div className="flex w-full items-baseline justify-between gap-4">
        <p className={sectionLabelClass}>Your festival lineup</p>
        <button
          type="button"
          onClick={handleDownload}
          className={downloadLinkClass}
          data-html2canvas-ignore
        >
          Download ↓
        </button>
      </div>

      <div className="flex justify-center">
        <div
          ref={ref}
          className="relative flex w-full max-w-md flex-col gap-6 overflow-hidden rounded-3xl px-8 py-10 text-center text-[#f5f5f5] sm:px-10 sm:py-12"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#132a1f_0%,#0a0f0c_42%,#050807_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_-10%,rgba(34,197,94,0.18)_0%,transparent_55%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]"
            aria-hidden
          />

          <div className="relative flex flex-col gap-2">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.42em] text-[#a3a3a3]">
              Randomfest
            </p>
            <p className="font-display text-5xl font-bold leading-none tracking-tight text-[#fafafa] sm:text-6xl md:text-7xl">
              {new Date().getFullYear()}
            </p>
          </div>

          <div className="relative flex flex-col gap-5 font-display tracking-tight">
            {headline ? (
              <p
                className={`text-balance text-[#f5f5f5] ${getArtistSizeClass(0)}`}
              >
                {headline.name}
              </p>
            ) : null}

            {row2.length > 0 ? (
              <div
                className={`flex w-full flex-row items-baseline gap-3 ${row2Justify}`}
              >
                {row2.map((artist, i) => {
                  const globalIndex = 1 + i;
                  const alignClass =
                    row2.length >= 2
                      ? i === 0
                        ? "text-left"
                        : "text-right"
                      : "text-center";
                  return (
                    <p
                      key={artist.id}
                      className={`min-w-0 max-w-[48%] text-balance text-[#f5f5f5] ${alignClass} ${getArtistSizeClass(globalIndex)}`}
                    >
                      {artist.name}
                    </p>
                  );
                })}
              </div>
            ) : null}

            {row3.length > 0 ? (
              <div
                className={`flex w-full flex-row items-baseline gap-2 sm:gap-3 ${row3Justify}`}
              >
                {row3.map((artist, i) => {
                  const globalIndex = 3 + i;
                  let alignClass = "text-center";
                  if (row3.length === 3) {
                    alignClass =
                      i === 0 ? "text-left" : i === 1 ? "text-center" : "text-right";
                  } else if (row3.length === 2) {
                    alignClass = i === 0 ? "text-left" : "text-right";
                  }
                  return (
                    <p
                      key={artist.id}
                      className={`min-w-0 flex-1 text-balance text-[#f5f5f5] ${alignClass} ${getArtistSizeClass(globalIndex)}`}
                    >
                      {artist.name}
                    </p>
                  );
                })}
              </div>
            ) : null}

            {wall.length > 0 ? (
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-1.5 px-0.5 font-display">
                {wall.map((artist) => (
                  <span
                    key={artist.id}
                    className={`text-balance text-[#f5f5f5] ${getArtistSizeClass(6)}`}
                  >
                    {artist.name}
                  </span>
                ))}
              </div>
            ) : null}

            {closing ? (
              <p className={`font-display tracking-tight ${closingNameClass}`}>
                {closing.name}
              </p>
            ) : null}
          </div>

          <div className="relative pt-2 opacity-80">
            <Wordmark size="sm" className="text-[#f5f5f5]" />
          </div>
        </div>
      </div>
    </section>
  );
}
````

## File: src/features/result/components/result-content.tsx
````typescript
import Link from "next/link";
import { redirect } from "next/navigation";
import { Heading, Surface } from "@/components/ui";
import { getAccessToken } from "@/features/auth";
import { parseLikedPairs, parseAlbumImageUrls } from "@/lib/session";
import type { ResultSearchParams } from "@/lib/types/spotify";
import { getArtistsByIds } from "../queries/get-artists-by-ids";
import { CollageGrid } from "./collage-grid";
import { CreatePlaylistButton } from "./create-playlist-button";
import { FestivalPoster } from "./festival-poster";

interface ResultContentProps {
  searchParams: ResultSearchParams;
}

function buildDiscoverResumeHref(liked?: string, albums?: string): string {
  const params = new URLSearchParams();
  if (liked) params.set("liked", liked);
  if (albums) params.set("albums", albums);
  const query = params.toString();
  return query ? `/discover?${query}` : "/discover";
}

const linkMutedClass =
  "text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spotify";

const secondaryOutlineClass =
  "inline-flex items-center justify-center rounded-full border border-subtle bg-transparent px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spotify";

export async function ResultContent({ searchParams }: ResultContentProps) {
  const { liked: likedParam, albums: albumsParam } = searchParams;
  const pairs = parseLikedPairs(likedParam);

  if (pairs.length < 5) {
    redirect("/discover");
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    redirect("/login");
  }

  const artistIds = pairs.map((p) => p.artistId);
  const trackIds = pairs.map((p) => p.trackId).filter(Boolean);
  const albumImageUrls = parseAlbumImageUrls(albumsParam);

  const artists = await getArtistsByIds(artistIds, accessToken);

  const collageItems = artists.map((a, i) => ({
    id: a.id,
    imageUrl: albumImageUrls[i] ?? a.imageUrl,
    artistName: a.name,
  }));

  const festivalUnlocked = pairs.length === 20;
  const discoverResumeHref = buildDiscoverResumeHref(likedParam, albumsParam);

  return (
    <div className="flex w-full flex-col items-center gap-14 sm:gap-16">
      <section className="flex w-full max-w-2xl flex-col items-center gap-6 text-center">
        <Heading level="eyebrow" className="tracking-[0.22em]">
          You liked
        </Heading>

        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl">
          <span className="text-foreground">Your </span>
          <span className="text-spotify italic">{pairs.length}</span>
          <span className="text-foreground"> picks</span>
        </h1>

        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted sm:text-base">
          A side B made from the artists that caught your ear. Listen on
          Spotify, share the collage, print the poster.
        </p>

        <div className="flex w-full max-w-xl flex-col items-center gap-4 pt-2">
          <div className="flex w-full flex-col flex-wrap items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
            <CreatePlaylistButton trackIds={trackIds} />
            {festivalUnlocked ? (
              <Link href="/discover" className={secondaryOutlineClass}>
                Start new session
              </Link>
            ) : (
              <Link href={discoverResumeHref} className={secondaryOutlineClass}>
                Keep discovering
              </Link>
            )}
          </div>
          <Link href="/discover" className={linkMutedClass}>
            Reset
          </Link>
        </div>
      </section>

      <CollageGrid artists={collageItems} />

      {festivalUnlocked ? (
        <FestivalPoster artists={artists} />
      ) : (
        <Surface
          tone="locked"
          className="flex w-full max-w-md flex-col items-center gap-2 px-6 py-8 text-center"
        >
          <Heading level="eyebrow">Festival poster</Heading>
          <p className="text-sm text-muted">
            Come back with 20 picks to unlock your festival poster.
          </p>
        </Surface>
      )}
    </div>
  );
}
````

## File: src/features/result/queries/get-artists-by-ids.spec.ts
````typescript
/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockSpotifyArtist } from "../../../../test/msw/handlers/result";
import { getArtistsByIds } from "./get-artists-by-ids";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

jest.mock("@/features/auth/cookies", () => ({
  getAccessToken: jest.fn().mockResolvedValue("mock-access-token"),
}));

describe("getArtistsByIds", () => {
  it("returns artists mapped correctly", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({
          artists: [
            mockSpotifyArtist({ id: "a1", name: "Artist 1", popularity: 90, genres: ["rock"] }),
          ],
        }),
      ),
    );

    const result = await getArtistsByIds(["a1"]);

    expect(result).toHaveLength(1);
    expect(result[0]).toMatchObject({
      id: "a1",
      name: "Artist 1",
      imageUrl: "https://i.scdn.co/image/test.jpg",
      popularity: 90,
      genres: ["rock"],
    });
  });

  it("sorts by popularity descending", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({
          artists: [
            mockSpotifyArtist({ id: "low", popularity: 20 }),
            mockSpotifyArtist({ id: "high", popularity: 95 }),
            mockSpotifyArtist({ id: "mid", popularity: 60 }),
          ],
        }),
      ),
    );

    const result = await getArtistsByIds(["low", "high", "mid"]);

    expect(result[0]?.id).toBe("high");
    expect(result[1]?.id).toBe("mid");
    expect(result[2]?.id).toBe("low");
  });

  it("filters null entries from response", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({
          artists: [
            mockSpotifyArtist({ id: "valid" }),
            null,
          ],
        }),
      ),
    );

    const result = await getArtistsByIds(["valid", "invalid-id"]);

    expect(result).toHaveLength(1);
    expect(result[0]?.id).toBe("valid");
  });

  it("returns empty array for empty ids without calling the API", async () => {
    const fetchSpy = jest.spyOn(global, "fetch");

    const result = await getArtistsByIds([]);

    expect(result).toEqual([]);
    expect(fetchSpy).not.toHaveBeenCalled();

    fetchSpy.mockRestore();
  });

  it("limits to 50 IDs", async () => {
    let capturedUrl = "";
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, ({ request }) => {
        capturedUrl = request.url;
        return HttpResponse.json({ artists: [] });
      }),
    );

    const ids = Array.from({ length: 60 }, (_, i) => `id-${i}`);
    await getArtistsByIds(ids);

    const url = new URL(capturedUrl);
    const idsParam = url.searchParams.get("ids")?.split(",") ?? [];
    expect(idsParam).toHaveLength(50);
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists`, () =>
        HttpResponse.json({ error: "Not Found" }, { status: 404 }),
      ),
    );

    await expect(getArtistsByIds(["some-id"])).rejects.toThrow("Spotify API error");
  });
});
````

## File: src/features/result/queries/get-artists-by-ids.ts
````typescript
import { spotifyFetch } from "@/lib/spotify/client";
import type { Artist } from "@/lib/types/spotify";

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string; width: number; height: number }[];
  external_urls: { spotify: string };
  popularity: number;
  genres: string[];
}

interface ArtistsBatchResponse {
  artists: SpotifyArtist[];
}

function mapArtist(raw: SpotifyArtist): Artist {
  return {
    id: raw.id,
    name: raw.name,
    imageUrl: raw.images[0]?.url ?? "",
    spotifyUrl: raw.external_urls.spotify,
    popularity: raw.popularity,
    genres: raw.genres,
  };
}

export async function getArtistsByIds(ids: string[], accessToken: string): Promise<Artist[]> {
  if (ids.length === 0) return [];

  const data = await spotifyFetch<ArtistsBatchResponse>(
    accessToken,
    `/artists?ids=${ids.slice(0, 50).join(",")}`,
  );

  return data.artists
    .filter(Boolean)
    .map(mapArtist)
    .sort((a, b) => b.popularity - a.popularity);
}
````

## File: src/features/result/index.ts
````typescript
export { ResultContent } from "./components/result-content";
export { CollageGrid } from "./components/collage-grid";
export { CreatePlaylistButton } from "./components/create-playlist-button";
export { FestivalPoster } from "./components/festival-poster";
export { getArtistsByIds } from "./queries/get-artists-by-ids";
````

## File: src/lib/i18n/locales/en/messages.js
````javascript
/*eslint-disable*/module.exports={messages:JSON.parse("{\"+h7luY\":[\"When you sign in, a recommendation is shown based on your Spotify listening history.\"],\"5GK8E8\":[\"by\"],\"9WY8GU\":[\"About\"],\"AX4B3Q\":[\"No more artists to discover. Try again later.\"],\"BuN4OF\":[\"We couldn't find any related artists. Please try searching for a different artist.\"],\"C0Q4Ti\":[\"Your festival lineup\"],\"EV8+zm\":[\"Create Spotify playlist\"],\"GtB/Yz\":[\"No track available for this artist. Try again later.\"],\"I7f9Jz\":[\"Disclaimer: Randomfy is not affiliated with Spotify. This site was built with Next.js and the Spotify API.\"],\"JughO4\":[\"Search for an artist...\"],\"KXC6oH\":[\"Hello, music lover!\"],\"SCYG24\":[\"Follow me on\"],\"UMPyC7\":[\"Open in Spotify\"],\"WcFivi\":[\"Playlist created!\"],\"Xvq8Hg\":[\"Log in with Spotify\"],\"Y8OWtF\":[\"Search\"],\"a9vNWE\":[\"Yeah!\"],\"cWM0mV\":[\"Download collage\"],\"dJUEED\":[\"Like or pass on each artist. Once you have 5 or more, create a playlist and download your collage or festival poster.\"],\"dVz1E1\":[\"Log out\"],\"f4IG7f\":[\"Why are you still reading this? Go listen to some amazing new artists!\"],\"iMiLEP\":[\"About\"],\"j/oyEh\":[\"Created with\"],\"jNUM5K\":[\"Creating playlist…\"],\"kMbpwg\":[\"How it works\"],\"mvKWNl\":[\"Your picks\"],\"pL77wz\":[\"Developer\"],\"qPbJLu\":[\"Search\"],\"s2cC2s\":[\"Download poster\"],\"sSATnK\":[\"Finish\"],\"uMUKDQ\":[\"Are you ready to discover new artists on Spotify and create a playlist with them?\"],\"yOm8vm\":[\"Search for an artist by name and we'll create a playlist for you\"],\"zAFT50\":[\"Randomfy takes your most listened to Spotify artists, selects one of them, and shows you similar artists so you can discover new artists based on your preferences.\"]}")};
````

## File: src/lib/i18n/locales/en/messages.po
````
msgid ""
msgstr ""
"POT-Creation-Date: 2026-04-05\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=utf-8\n"
"Content-Transfer-Encoding: 8bit\n"
"X-Generator: @lingui/cli\n"
"Language: en\n"
"Project-Id-Version: \n"
"Report-Msgid-Bugs-To: \n"
"PO-Revision-Date: \n"
"Last-Translator: \n"
"Language-Team: \n"
"Plural-Forms: \n"

#~ msgid "about.developer"
#~ msgstr "Developer"

#~ msgid "about.disclaimer"
#~ msgstr "Disclaimer: Randomfy is not affiliated with Spotify. This site was built with Next.js and the Spotify API."

#~ msgid "about.followMe"
#~ msgstr "Follow me on"

#~ msgid "about.howItWorks.p1"
#~ msgstr "When you sign in, a recommendation is shown based on your Spotify listening history."

#~ msgid "about.howItWorks.p2"
#~ msgstr "Like or pass on each artist. Once you have 5 or more, create a playlist and download your collage or festival poster."

#~ msgid "about.howItWorks.title"
#~ msgstr "How it works"

#~ msgid "about.ready"
#~ msgstr "Why are you still reading this? Go listen to some amazing new artists!"

#~ msgid "about.subtitle"
#~ msgstr "Randomfy takes your most listened to Spotify artists, selects one of them, and shows you similar artists so you can discover new artists based on your preferences."

#~ msgid "about.title"
#~ msgstr "About"

#~ msgid "collage.download"
#~ msgstr "Download collage"

#~ msgid "discover.finish"
#~ msgstr "Finish"

#~ msgid "discover.noMore"
#~ msgstr "No more artists to discover. Try again later."

#~ msgid "discover.noTrack"
#~ msgstr "No track available for this artist. Try again later."

#~ msgid "festival.download"
#~ msgstr "Download poster"

#~ msgid "footer.by"
#~ msgstr "by"

#~ msgid "footer.createdWith"
#~ msgstr "Created with"

#~ msgid "login.button"
#~ msgstr "Log in with Spotify"

#~ msgid "login.description"
#~ msgstr "Are you ready to discover new artists on Spotify and create a playlist with them?"

#~ msgid "login.subtitle"
#~ msgstr "Hello, music lover!"

#~ msgid "login.title"
#~ msgstr "Yeah!"

#~ msgid "nav.about"
#~ msgstr "About"

#~ msgid "nav.logout"
#~ msgstr "Log out"

#~ msgid "nav.search"
#~ msgstr "Search"

#~ msgid "playlist.create"
#~ msgstr "Create Spotify playlist"

#~ msgid "playlist.creating"
#~ msgstr "Creating playlist…"

#~ msgid "playlist.openInSpotify"
#~ msgstr "Open in Spotify"

#~ msgid "playlist.success"
#~ msgstr "Playlist created!"

#~ msgid "result.festivalTitle"
#~ msgstr "Your festival lineup"

#~ msgid "result.title"
#~ msgstr "Your picks"

#~ msgid "search.button"
#~ msgstr "Search"

#~ msgid "search.empty"
#~ msgstr "We couldn't find any related artists. Please try searching for a different artist."

#~ msgid "search.placeholder"
#~ msgstr "Search for an artist..."

#~ msgid "search.title"
#~ msgstr "Search for an artist by name and we'll create a playlist for you"
````

## File: src/lib/i18n/locales/es/messages.js
````javascript
/*eslint-disable*/module.exports={messages:JSON.parse("{\"+h7luY\":[\"Al iniciar sesión, se muestra una recomendación basada en tu historial de escucha en Spotify.\"],\"5GK8E8\":[\"por\"],\"9WY8GU\":[\"Acerca de\"],\"AX4B3Q\":[\"No hay más artistas por descubrir. Inténtalo de nuevo más tarde.\"],\"BuN4OF\":[\"No encontramos artistas relacionados. Intenta buscar un artista diferente.\"],\"C0Q4Ti\":[\"Tu lineup de festival\"],\"EV8+zm\":[\"Crear playlist en Spotify\"],\"GtB/Yz\":[\"No hay pista disponible para este artista. Inténtalo de nuevo más tarde.\"],\"I7f9Jz\":[\"Aviso: Randomfy no está afiliado con Spotify. Este sitio fue construido con Next.js y la API de Spotify.\"],\"JughO4\":[\"Buscar un artista...\"],\"KXC6oH\":[\"¡Hola, amante de la música!\"],\"SCYG24\":[\"Sígueme en\"],\"UMPyC7\":[\"Abrir en Spotify\"],\"WcFivi\":[\"¡Playlist creada!\"],\"Xvq8Hg\":[\"Iniciar sesión con Spotify\"],\"Y8OWtF\":[\"Buscar\"],\"a9vNWE\":[\"¡Sí!\"],\"cWM0mV\":[\"Descargar collage\"],\"dJUEED\":[\"Me gusta o ignora cada artista. Una vez que tengas 5 o más, crea una playlist y descarga tu collage o póster de festival.\"],\"dVz1E1\":[\"Cerrar sesión\"],\"f4IG7f\":[\"¿Por qué sigues leyendo esto? ¡Ve a escuchar nuevos artistas increíbles!\"],\"iMiLEP\":[\"Acerca de\"],\"j/oyEh\":[\"Creado con\"],\"jNUM5K\":[\"Creando playlist…\"],\"kMbpwg\":[\"Cómo funciona\"],\"mvKWNl\":[\"Tus elecciones\"],\"pL77wz\":[\"Desarrollador\"],\"qPbJLu\":[\"Buscar\"],\"s2cC2s\":[\"Descargar póster\"],\"sSATnK\":[\"Finalizar\"],\"uMUKDQ\":[\"¿Estás listo para descubrir nuevos artistas en Spotify y crear una playlist con ellos?\"],\"yOm8vm\":[\"Busca un artista por nombre y crearemos una playlist para ti\"],\"zAFT50\":[\"Randomfy toma tus artistas más escuchados en Spotify, selecciona uno de ellos y te muestra artistas similares para que descubras nuevos artistas según tus preferencias.\"]}")};
````

## File: src/lib/i18n/locales/es/messages.po
````
msgid ""
msgstr ""
"POT-Creation-Date: 2026-04-05\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=utf-8\n"
"Content-Transfer-Encoding: 8bit\n"
"X-Generator: @lingui/cli\n"
"Language: es\n"
"Project-Id-Version: \n"
"Report-Msgid-Bugs-To: \n"
"PO-Revision-Date: \n"
"Last-Translator: \n"
"Language-Team: \n"
"Plural-Forms: \n"

#~ msgid "about.developer"
#~ msgstr "Desarrollador"

#~ msgid "about.disclaimer"
#~ msgstr "Aviso: Randomfy no está afiliado con Spotify. Este sitio fue construido con Next.js y la API de Spotify."

#~ msgid "about.followMe"
#~ msgstr "Sígueme en"

#~ msgid "about.howItWorks.p1"
#~ msgstr "Al iniciar sesión, se muestra una recomendación basada en tu historial de escucha en Spotify."

#~ msgid "about.howItWorks.p2"
#~ msgstr "Me gusta o ignora cada artista. Una vez que tengas 5 o más, crea una playlist y descarga tu collage o póster de festival."

#~ msgid "about.howItWorks.title"
#~ msgstr "Cómo funciona"

#~ msgid "about.ready"
#~ msgstr "¿Por qué sigues leyendo esto? ¡Ve a escuchar nuevos artistas increíbles!"

#~ msgid "about.subtitle"
#~ msgstr "Randomfy toma tus artistas más escuchados en Spotify, selecciona uno de ellos y te muestra artistas similares para que descubras nuevos artistas según tus preferencias."

#~ msgid "about.title"
#~ msgstr "Acerca de"

#~ msgid "collage.download"
#~ msgstr "Descargar collage"

#~ msgid "discover.finish"
#~ msgstr "Finalizar"

#~ msgid "discover.noMore"
#~ msgstr "No hay más artistas por descubrir. Inténtalo de nuevo más tarde."

#~ msgid "discover.noTrack"
#~ msgstr "No hay pista disponible para este artista. Inténtalo de nuevo más tarde."

#~ msgid "festival.download"
#~ msgstr "Descargar póster"

#~ msgid "footer.by"
#~ msgstr "por"

#~ msgid "footer.createdWith"
#~ msgstr "Creado con"

#~ msgid "login.button"
#~ msgstr "Iniciar sesión con Spotify"

#~ msgid "login.description"
#~ msgstr "¿Estás listo para descubrir nuevos artistas en Spotify y crear una playlist con ellos?"

#~ msgid "login.subtitle"
#~ msgstr "¡Hola, amante de la música!"

#~ msgid "login.title"
#~ msgstr "¡Sí!"

#~ msgid "nav.about"
#~ msgstr "Acerca de"

#~ msgid "nav.logout"
#~ msgstr "Cerrar sesión"

#~ msgid "nav.search"
#~ msgstr "Buscar"

#~ msgid "playlist.create"
#~ msgstr "Crear playlist en Spotify"

#~ msgid "playlist.creating"
#~ msgstr "Creando playlist…"

#~ msgid "playlist.openInSpotify"
#~ msgstr "Abrir en Spotify"

#~ msgid "playlist.success"
#~ msgstr "¡Playlist creada!"

#~ msgid "result.festivalTitle"
#~ msgstr "Tu lineup de festival"

#~ msgid "result.title"
#~ msgstr "Tus elecciones"

#~ msgid "search.button"
#~ msgstr "Buscar"

#~ msgid "search.empty"
#~ msgstr "No encontramos artistas relacionados. Intenta buscar un artista diferente."

#~ msgid "search.placeholder"
#~ msgstr "Buscar un artista..."

#~ msgid "search.title"
#~ msgstr "Busca un artista por nombre y crearemos una playlist para ti"
````

## File: src/lib/i18n/locales/pt/messages.js
````javascript
/*eslint-disable*/module.exports={messages:JSON.parse("{\"+h7luY\":[\"Ao entrar, uma recomendação é exibida com base no seu histórico de escuta no Spotify.\"],\"5GK8E8\":[\"por\"],\"9WY8GU\":[\"Sobre\"],\"AX4B3Q\":[\"Não há mais artistas para descobrir. Tente novamente mais tarde.\"],\"BuN4OF\":[\"Não encontramos nenhum artista relacionado. Tente buscar por um artista diferente.\"],\"C0Q4Ti\":[\"Seu lineup de festival\"],\"EV8+zm\":[\"Criar playlist no Spotify\"],\"GtB/Yz\":[\"Nenhuma faixa disponível para este artista. Tente novamente mais tarde.\"],\"I7f9Jz\":[\"Aviso: O Randomfy não é afiliado ao Spotify. Este site foi construído com Next.js e a API do Spotify.\"],\"JughO4\":[\"Buscar um artista...\"],\"KXC6oH\":[\"Olá, amante de música!\"],\"SCYG24\":[\"Me siga no\"],\"UMPyC7\":[\"Abrir no Spotify\"],\"WcFivi\":[\"Playlist criada!\"],\"Xvq8Hg\":[\"Entrar com o Spotify\"],\"Y8OWtF\":[\"Buscar\"],\"a9vNWE\":[\"Sim!\"],\"cWM0mV\":[\"Baixar colagem\"],\"dJUEED\":[\"Curta ou ignore cada artista. Quando tiver 5 ou mais, crie uma playlist e baixe sua colagem ou pôster de festival.\"],\"dVz1E1\":[\"Sair\"],\"f4IG7f\":[\"Por que você ainda está lendo isso? Vá ouvir novos artistas incríveis!\"],\"iMiLEP\":[\"Sobre\"],\"j/oyEh\":[\"Criado com\"],\"jNUM5K\":[\"Criando playlist…\"],\"kMbpwg\":[\"Como funciona\"],\"mvKWNl\":[\"Suas escolhas\"],\"pL77wz\":[\"Desenvolvedor\"],\"qPbJLu\":[\"Buscar\"],\"s2cC2s\":[\"Baixar pôster\"],\"sSATnK\":[\"Concluir\"],\"uMUKDQ\":[\"Você está pronto para descobrir novos artistas no Spotify e criar uma playlist com eles?\"],\"yOm8vm\":[\"Busque um artista pelo nome e criaremos uma playlist para você\"],\"zAFT50\":[\"O Randomfy pega seus artistas mais ouvidos no Spotify, seleciona um deles e mostra artistas similares para que você descubra novos artistas com base nas suas preferências.\"]}")};
````

## File: src/lib/i18n/locales/pt/messages.po
````
msgid ""
msgstr ""
"POT-Creation-Date: 2026-04-05\n"
"MIME-Version: 1.0\n"
"Content-Type: text/plain; charset=utf-8\n"
"Content-Transfer-Encoding: 8bit\n"
"X-Generator: @lingui/cli\n"
"Language: pt\n"
"Project-Id-Version: \n"
"Report-Msgid-Bugs-To: \n"
"PO-Revision-Date: \n"
"Last-Translator: \n"
"Language-Team: \n"
"Plural-Forms: \n"

#~ msgid "about.developer"
#~ msgstr "Desenvolvedor"

#~ msgid "about.disclaimer"
#~ msgstr "Aviso: O Randomfy não é afiliado ao Spotify. Este site foi construído com Next.js e a API do Spotify."

#~ msgid "about.followMe"
#~ msgstr "Me siga no"

#~ msgid "about.howItWorks.p1"
#~ msgstr "Ao entrar, uma recomendação é exibida com base no seu histórico de escuta no Spotify."

#~ msgid "about.howItWorks.p2"
#~ msgstr "Curta ou ignore cada artista. Quando tiver 5 ou mais, crie uma playlist e baixe sua colagem ou pôster de festival."

#~ msgid "about.howItWorks.title"
#~ msgstr "Como funciona"

#~ msgid "about.ready"
#~ msgstr "Por que você ainda está lendo isso? Vá ouvir novos artistas incríveis!"

#~ msgid "about.subtitle"
#~ msgstr "O Randomfy pega seus artistas mais ouvidos no Spotify, seleciona um deles e mostra artistas similares para que você descubra novos artistas com base nas suas preferências."

#~ msgid "about.title"
#~ msgstr "Sobre"

#~ msgid "collage.download"
#~ msgstr "Baixar colagem"

#~ msgid "discover.finish"
#~ msgstr "Concluir"

#~ msgid "discover.noMore"
#~ msgstr "Não há mais artistas para descobrir. Tente novamente mais tarde."

#~ msgid "discover.noTrack"
#~ msgstr "Nenhuma faixa disponível para este artista. Tente novamente mais tarde."

#~ msgid "festival.download"
#~ msgstr "Baixar pôster"

#~ msgid "footer.by"
#~ msgstr "por"

#~ msgid "footer.createdWith"
#~ msgstr "Criado com"

#~ msgid "login.button"
#~ msgstr "Entrar com o Spotify"

#~ msgid "login.description"
#~ msgstr "Você está pronto para descobrir novos artistas no Spotify e criar uma playlist com eles?"

#~ msgid "login.subtitle"
#~ msgstr "Olá, amante de música!"

#~ msgid "login.title"
#~ msgstr "Sim!"

#~ msgid "nav.about"
#~ msgstr "Sobre"

#~ msgid "nav.logout"
#~ msgstr "Sair"

#~ msgid "nav.search"
#~ msgstr "Buscar"

#~ msgid "playlist.create"
#~ msgstr "Criar playlist no Spotify"

#~ msgid "playlist.creating"
#~ msgstr "Criando playlist…"

#~ msgid "playlist.openInSpotify"
#~ msgstr "Abrir no Spotify"

#~ msgid "playlist.success"
#~ msgstr "Playlist criada!"

#~ msgid "result.festivalTitle"
#~ msgstr "Seu lineup de festival"

#~ msgid "result.title"
#~ msgstr "Suas escolhas"

#~ msgid "search.button"
#~ msgstr "Buscar"

#~ msgid "search.empty"
#~ msgstr "Não encontramos nenhum artista relacionado. Tente buscar por um artista diferente."

#~ msgid "search.placeholder"
#~ msgstr "Buscar um artista..."

#~ msgid "search.title"
#~ msgstr "Busque um artista pelo nome e criaremos uma playlist para você"
````

## File: src/lib/i18n/index.ts
````typescript
import { i18n } from "@lingui/core";

export type Locale = "en" | "pt" | "es";

export const defaultLocale: Locale = "en";

export async function loadCatalog(locale: Locale) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export { i18n };
````

## File: src/lib/spotify/queries/get-artist-track.spec.ts
````typescript
/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockTrack } from "../../../../test/msw/handlers/discover";
import { getArtistTrack } from "./get-artist-track";

const SPOTIFY_BASE = "https://api.spotify.com/v1";
const ACCESS_TOKEN = "mock-access-token";

describe("getArtistTrack", () => {
  it("returns the first track not in seenTrackIds", async () => {
    const result = await getArtistTrack("any-artist", [], ACCESS_TOKEN);

    expect(result).toMatchObject({
      id: "track-of-any-artist-1",
      name: "Top Track 1",
      previewUrl: "https://p.scdn.co/mp3-preview/test",
    });
  });

  it("skips tracks that are in seenTrackIds", async () => {
    const result = await getArtistTrack(
      "any-artist",
      ["track-of-any-artist-1"],
      ACCESS_TOKEN,
    );

    expect(result?.id).toBe("track-of-any-artist-2");
  });

  it("returns null when all tracks have been seen", async () => {
    const result = await getArtistTrack(
      "any-artist",
      ["track-of-any-artist-1", "track-of-any-artist-2"],
      ACCESS_TOKEN,
    );

    expect(result).toBeNull();
  });

  it("handles null preview_url", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/top-tracks`, () =>
        HttpResponse.json({
          tracks: [mockTrack({ id: "t-null", preview_url: null })],
        }),
      ),
    );

    const result = await getArtistTrack("any", [], ACCESS_TOKEN);
    expect(result?.previewUrl).toBeNull();
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/top-tracks`, () =>
        HttpResponse.json({ error: "Not Found" }, { status: 404 }),
      ),
    );

    await expect(getArtistTrack("bad", [], ACCESS_TOKEN)).rejects.toThrow(
      "Spotify API error",
    );
  });
});
````

## File: src/lib/spotify/queries/get-artist-track.ts
````typescript
import { spotifyFetch } from "@/lib/spotify/client";
import type { Track } from "@/lib/types/spotify";

interface SpotifyTrack {
  id: string;
  name: string;
  preview_url: string | null;
  external_urls: { spotify: string };
  album: { images: { url: string }[] };
}

interface TopTracksResponse {
  tracks: SpotifyTrack[];
}

function mapTrack(raw: SpotifyTrack): Track {
  return {
    id: raw.id,
    name: raw.name,
    previewUrl: raw.preview_url,
    spotifyUrl: raw.external_urls.spotify,
    albumImageUrl: raw.album.images[0]?.url ?? "",
  };
}

export async function getArtistTrack(
  artistId: string,
  seenTrackIds: string[],
  accessToken: string,
  market = "US",
): Promise<Track | null> {
  const data = await spotifyFetch<TopTracksResponse>(
    accessToken,
    `/artists/${artistId}/top-tracks?market=${market}`,
  );

  const seenSet = new Set(seenTrackIds);
  const track = data.tracks.find((t) => !seenSet.has(t.id));

  return track ? mapTrack(track) : null;
}
````

## File: src/lib/spotify/queries/get-related-artists.spec.ts
````typescript
/**
 * @jest-environment node
 */

import { http, HttpResponse } from "msw";
import { server } from "../../../../test/msw/server";
import { mockArtist } from "../../../../test/msw/handlers/discover";
import { getRelatedArtists } from "./get-related-artists";

const SPOTIFY_BASE = "https://api.spotify.com/v1";
const ACCESS_TOKEN = "mock-access-token";

describe("getRelatedArtists", () => {
  it("returns related artists for a given seed", async () => {
    const result = await getRelatedArtists("seed-artist", ACCESS_TOKEN);

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      id: "related-of-seed-artist-1",
      name: "Related Artist 1",
    });
  });

  it("handles related artist with no images gracefully", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/related-artists`, () =>
        HttpResponse.json({
          artists: [mockArtist({ id: "no-img", images: [] })],
        }),
      ),
    );

    const result = await getRelatedArtists("any", ACCESS_TOKEN);
    expect(result[0]?.imageUrl).toBe("");
  });

  it("throws when Spotify returns an error", async () => {
    server.use(
      http.get(`${SPOTIFY_BASE}/artists/:id/related-artists`, () =>
        HttpResponse.json({ error: "Not Found" }, { status: 404 }),
      ),
    );

    await expect(getRelatedArtists("bad-id", ACCESS_TOKEN)).rejects.toThrow(
      "Spotify API error",
    );
  });
});
````

## File: src/lib/spotify/queries/get-related-artists.ts
````typescript
import { spotifyFetch } from "@/lib/spotify/client";
import type { Artist } from "@/lib/types/spotify";

interface SpotifyArtist {
  id: string;
  name: string;
  images: { url: string; width: number; height: number }[];
  external_urls: { spotify: string };
  popularity: number;
  genres: string[];
}

interface RelatedArtistsResponse {
  artists: SpotifyArtist[];
}

function mapArtist(raw: SpotifyArtist): Artist {
  return {
    id: raw.id,
    name: raw.name,
    imageUrl: raw.images[0]?.url ?? "",
    spotifyUrl: raw.external_urls.spotify,
    popularity: raw.popularity,
    genres: raw.genres,
  };
}

export async function getRelatedArtists(
  seedArtistId: string,
  accessToken: string,
): Promise<Artist[]> {
  const data = await spotifyFetch<RelatedArtistsResponse>(
    accessToken,
    `/artists/${seedArtistId}/related-artists`,
  );
  return data.artists.map(mapArtist);
}
````

## File: src/lib/spotify/client.ts
````typescript
const SPOTIFY_BASE_URL = "https://api.spotify.com/v1";

interface SpotifyFetchOptions extends Omit<RequestInit, "headers"> {
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
}

/**
 * Authenticated fetch wrapper for the Spotify API.
 * All Spotify calls must go through this client — never call the API directly from client components (RNF 0017).
 * The caller is responsible for obtaining and injecting the access token.
 */
export async function spotifyFetch<T>(
  accessToken: string,
  path: string,
  options: SpotifyFetchOptions = {},
): Promise<T> {
  const { headers = {}, ...rest } = options;

  const response = await fetch(`${SPOTIFY_BASE_URL}${path}`, {
    ...rest,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}
````

## File: src/lib/types/spotify.ts
````typescript
export interface Artist {
  id: string;
  name: string;
  imageUrl: string;
  spotifyUrl: string;
  popularity: number;
  genres: string[];
}

export interface Track {
  id: string;
  name: string;
  previewUrl: string | null;
  spotifyUrl: string;
  albumImageUrl: string;
}

export interface LikedPair {
  artistId: string;
  trackId: string;
}

export interface ResultSearchParams {
  liked?: string;
  albums?: string;
}

export interface CollageItem {
  id: string;
  imageUrl: string;
  artistName: string;
}
````

## File: src/lib/session.ts
````typescript
import type { LikedPair } from "./types/spotify";

export function parseIds(param?: string): string[] {
  if (!param) return [];
  return param
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

export function serializeIds(ids: string[]): string {
  return ids.join(",");
}

/** Parse `liked` param into structured pairs. Entries without `:` are treated as legacy artist-only IDs. */
export function parseLikedPairs(param?: string): LikedPair[] {
  if (!param) return [];
  return param
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => {
      const colonIndex = entry.indexOf(":");
      if (colonIndex === -1) return { artistId: entry, trackId: "" };
      return {
        artistId: entry.slice(0, colonIndex),
        trackId: entry.slice(colonIndex + 1),
      };
    });
}

export function serializeLikedPairs(pairs: LikedPair[]): string {
  return pairs.map((p) => `${p.artistId}:${p.trackId}`).join(",");
}

export function parseAlbumImageUrls(param?: string): string[] {
  if (!param) return [];
  return param.split("|").filter(Boolean);
}
````

## File: src/middleware.ts
````typescript
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { refreshAccessToken } from "@/features/auth/token";
import {
  ACCESS_TOKEN_KEY,
  EXPIRES_AT_KEY,
  REFRESH_TOKEN_KEY,
} from "@/features/auth/cookies";

const ONE_MINUTE_MS = 60 * 1000;
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { cookies } = request;

  const accessToken = cookies.get(ACCESS_TOKEN_KEY)?.value;
  const expiresAtRaw = cookies.get(EXPIRES_AT_KEY)?.value;
  const refreshToken = cookies.get(REFRESH_TOKEN_KEY)?.value;

  if (!accessToken || !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const expiresAt = expiresAtRaw ? Number(expiresAtRaw) : 0;
  const isExpiringSoon = expiresAt < Date.now() + ONE_MINUTE_MS;

  if (!isExpiringSoon) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(new URL("/discover", request.url));
    }
    return NextResponse.next();
  }

  const refreshed = await refreshAccessToken(refreshToken);

  if (!refreshed) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    const secure = process.env.NODE_ENV === "production";
    const cookieOptions = {
      httpOnly: true,
      secure,
      path: "/",
    } as const;
    response.cookies.delete({ ...cookieOptions, name: ACCESS_TOKEN_KEY });
    response.cookies.delete({ ...cookieOptions, name: REFRESH_TOKEN_KEY });
    response.cookies.delete({ ...cookieOptions, name: EXPIRES_AT_KEY });
    return response;
  }

  const newExpiresAt = Date.now() + refreshed.expiresIn * 1000;
  const secure = process.env.NODE_ENV === "production";

  const isRoot = request.nextUrl.pathname === "/";
  const response = isRoot
    ? NextResponse.redirect(new URL("/discover", request.url))
    : NextResponse.next();
  response.cookies.set({
    name: ACCESS_TOKEN_KEY,
    value: refreshed.accessToken,
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: refreshed.expiresIn,
    path: "/",
  });
  response.cookies.set({
    name: EXPIRES_AT_KEY,
    value: String(newExpiresAt),
    httpOnly: true,
    secure,
    sameSite: "lax",
    maxAge: THIRTY_DAYS,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: ["/", "/discover/:path*", "/result/:path*"],
};
````

## File: test/msw/handlers/auth.ts
````typescript
import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post("https://accounts.spotify.com/api/token", async ({ request }) => {
    const body = await request.text();
    const params = new URLSearchParams(body);
    const grantType = params.get("grant_type");

    if (grantType === "authorization_code") {
      return HttpResponse.json({
        access_token: "mock-access-token",
        refresh_token: "mock-refresh-token",
        expires_in: 3600,
        token_type: "Bearer",
      });
    }

    if (grantType === "refresh_token") {
      const refreshToken = params.get("refresh_token");

      if (refreshToken === "invalid-refresh-token") {
        return HttpResponse.json({ error: "invalid_grant" }, { status: 400 });
      }

      return HttpResponse.json({
        access_token: "mock-refreshed-access-token",
        expires_in: 3600,
        token_type: "Bearer",
      });
    }

    return HttpResponse.json({ error: "unsupported_grant_type" }, { status: 400 });
  }),
];
````

## File: test/msw/handlers/discover.ts
````typescript
import { http, HttpResponse } from "msw";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export const mockArtist = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "artist-1",
  name: "Test Artist",
  images: [{ url: "https://i.scdn.co/image/test.jpg", width: 640, height: 640 }],
  external_urls: { spotify: "https://open.spotify.com/artist/artist-1" },
  popularity: 80,
  genres: ["pop"],
  ...overrides,
});

export const mockTrack = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "track-1",
  name: "Test Track",
  preview_url: "https://p.scdn.co/mp3-preview/test",
  external_urls: { spotify: "https://open.spotify.com/track/track-1" },
  album: {
    images: [{ url: "https://i.scdn.co/image/album-test.jpg", width: 640, height: 640 }],
  },
  ...overrides,
});

export const discoverHandlers = [
  http.get(`${SPOTIFY_BASE}/me/top/artists`, () => {
    return HttpResponse.json({
      items: [
        mockArtist({ id: "top-artist-1", name: "Top Artist 1" }),
        mockArtist({ id: "top-artist-2", name: "Top Artist 2" }),
        mockArtist({ id: "top-artist-3", name: "Top Artist 3" }),
      ],
    });
  }),

  http.get(`${SPOTIFY_BASE}/artists/:id/related-artists`, ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      artists: [
        mockArtist({ id: `related-of-${id}-1`, name: "Related Artist 1" }),
        mockArtist({ id: `related-of-${id}-2`, name: "Related Artist 2" }),
      ],
    });
  }),

  http.get(`${SPOTIFY_BASE}/artists/:id/top-tracks`, ({ params }) => {
    const { id } = params;
    return HttpResponse.json({
      tracks: [
        mockTrack({ id: `track-of-${id}-1`, name: "Top Track 1" }),
        mockTrack({ id: `track-of-${id}-2`, name: "Top Track 2" }),
      ],
    });
  }),
];
````

## File: test/msw/handlers/index.ts
````typescript
import type { RequestHandler } from "msw";
import { authHandlers } from "./auth";
import { discoverHandlers } from "./discover";
import { resultHandlers } from "./result";
export const handlers: RequestHandler[] = [...authHandlers, ...discoverHandlers, ...resultHandlers];
````

## File: test/msw/handlers/result.ts
````typescript
import { http, HttpResponse } from "msw";

const SPOTIFY_BASE = "https://api.spotify.com/v1";

export const mockUserProfile = () => ({ id: "user-123" });

export const mockSpotifyArtist = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "artist-1",
  name: "Test Artist",
  images: [{ url: "https://i.scdn.co/image/test.jpg", width: 640, height: 640 }],
  external_urls: { spotify: "https://open.spotify.com/artist/artist-1" },
  popularity: 80,
  genres: ["pop"],
  ...overrides,
});

export const mockSpotifyPlaylist = (overrides: Partial<Record<string, unknown>> = {}) => ({
  id: "playlist-1",
  name: "Randomfy",
  external_urls: { spotify: "https://open.spotify.com/playlist/playlist-1" },
  ...overrides,
});

export const resultHandlers = [
  http.get(`${SPOTIFY_BASE}/me`, () => {
    return HttpResponse.json(mockUserProfile());
  }),

  http.get(`${SPOTIFY_BASE}/artists`, () => {
    return HttpResponse.json({
      artists: [
        mockSpotifyArtist({ id: "artist-1", name: "Artist 1", popularity: 80 }),
        mockSpotifyArtist({ id: "artist-2", name: "Artist 2", popularity: 60 }),
      ],
    });
  }),

  http.post(`${SPOTIFY_BASE}/users/:userId/playlists`, () => {
    return HttpResponse.json(mockSpotifyPlaylist());
  }),

  http.post(`${SPOTIFY_BASE}/playlists/:id/tracks`, () => {
    return HttpResponse.json({ snapshot_id: "snapshot-1" });
  }),
];
````

## File: test/msw/server.ts
````typescript
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);
````

## File: test/utils/render.tsx
````typescript
import { render } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";

function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function customRender(ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) {
  return render(ui, { wrapper: Providers, ...options });
}

export * from "@testing-library/react";
export { customRender as render };
````

## File: .gitignore
````
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
````

## File: .nvmrc
````
v20
````

## File: .prettierignore
````
.next
node_modules
public
````

## File: .prettierrc
````
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "plugins": []
}
````

## File: .releaserc.json
````json
{
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "CHANGELOG.md"
      }
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        "assets": ["CHANGELOG.md", "package.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
  ]
}
````

## File: AGENTS.md
````markdown
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
````

## File: CLAUDE.md
````markdown
@AGENTS.md
````

## File: commitlint.config.ts
````typescript
import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
};

export default config;
````

## File: eslint.config.mjs
````javascript
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginImport from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const FEATURES = ["auth", "discover", "playlist", "result"];

const crossFeatureZones = FEATURES.map((feature) => {
  const otherFeatures = FEATURES.filter((f) => f !== feature);
  return {
    target: `./src/features/${feature}`,
    from: otherFeatures.map((f) => `./src/features/${f}`),
    except: otherFeatures.map((f) => `./src/features/${f}/index.ts`),
    message:
      "features/ can only import from other features via their public barrel (index.ts) (ADR-002)",
  };
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      import: pluginImport,
    },
    rules: {
      // Enforce layer dependency rules from ADR-002
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // features/ cannot import from other features (ADR-002)
            ...crossFeatureZones,
            // features/ cannot import from app/
            {
              target: "./src/features",
              from: "./src/app",
              message: "features/ cannot import from app/ (ADR-002)",
            },
            // components/ cannot import from features/ or app/
            {
              target: "./src/components",
              from: "./src/features",
              message: "components/ cannot import from features/ (ADR-002)",
            },
            {
              target: "./src/components",
              from: "./src/app",
              message: "components/ cannot import from app/ (ADR-002)",
            },
            // lib/ cannot import from features/, components/, or app/
            {
              target: "./src/lib",
              from: "./src/features",
              message: "lib/ cannot import from features/ (ADR-002)",
            },
            {
              target: "./src/lib",
              from: "./src/components",
              message: "lib/ cannot import from components/ (ADR-002)",
            },
            {
              target: "./src/lib",
              from: "./src/app",
              message: "lib/ cannot import from app/ (ADR-002)",
            },
          ],
        },
      ],
    },
  },
];

export default eslintConfig;
````

## File: jest.config.ts
````typescript
import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/types.ts",
    "!src/app/**/page.tsx",
    "!src/app/**/layout.tsx",
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};

export default createJestConfig(config);
````

## File: jest.setup.ts
````typescript
import "@testing-library/jest-dom";
import { server } from "./test/msw/server";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
````

## File: lingui.config.ts
````typescript
import { defineConfig } from "@lingui/conf";

export default defineConfig({
  locales: ["en", "pt", "es"],
  sourceLocale: "en",
  catalogs: [
    {
      path: "<rootDir>/src/lib/i18n/locales/{locale}/messages",
      include: ["src/**"],
    },
  ],
  format: "po",
});
````

## File: next.config.ts
````typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  transpilePackages: ["until-async"],
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "mosaic.scdn.co",
      },
    ],
  },
};

export default nextConfig;
````

## File: package.json
````json
{
  "name": "randomfy",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "prepare": "is-ci || husky",
    "release": "semantic-release",
    "release:dry": "semantic-release --dry-run",
    "i18n:extract": "lingui extract",
    "i18n:compile": "lingui compile"
  },
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,css,mjs}": [
      "prettier --write"
    ]
  },
  "dependencies": {
    "@lingui/core": "^5.9.4",
    "@lingui/macro": "^5.9.4",
    "@lingui/react": "^5.9.4",
    "html2canvas": "^1.4.1",
    "next": "16.2.2",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "sonner": "^2.0.7"
  },
  "devDependencies": {
    "@commitlint/cli": "^20.5.0",
    "@commitlint/config-conventional": "^20.5.0",
    "@eslint/eslintrc": "^3.3.5",
    "@lingui/cli": "^5.9.4",
    "@semantic-release/changelog": "^6.0.3",
    "@semantic-release/git": "^10.0.1",
    "@swc/core": "^1.15.24",
    "@swc/jest": "^0.2.39",
    "@tailwindcss/postcss": "^4",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.2",
    "@testing-library/user-event": "^14.6.1",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9.39.4",
    "eslint-config-next": "^16.2.2",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-import": "^2.32.0",
    "husky": "^9.1.7",
    "is-ci": "^4.1.0",
    "jest": "^30.3.0",
    "jest-environment-jsdom": "^30.3.0",
    "lint-staged": "^16.4.0",
    "msw": "^2.12.14",
    "prettier": "^3.8.1",
    "semantic-release": "^25.0.3",
    "tailwindcss": "^4",
    "ts-node": "^10.9.2",
    "typescript": "^5"
  }
}
````

## File: postcss.config.mjs
````javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
````

## File: README.md
````markdown
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
````

## File: tsconfig.json
````json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
````
