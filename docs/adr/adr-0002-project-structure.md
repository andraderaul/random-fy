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
