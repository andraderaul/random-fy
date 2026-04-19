[![Quality](https://github.com/andraderaul/random-fy/actions/workflows/quality.yml/badge.svg)](https://github.com/andraderaul/random-fy/actions/workflows/quality.yml) [![Release](https://github.com/andraderaul/random-fy/actions/workflows/release.yml/badge.svg)](https://github.com/andraderaul/random-fy/actions/workflows/release.yml)

# randomfy

## About

`randomfy` takes your most listened Spotify artists, selects one of them, and shows you similar artists so you can discover new music based on what you already like.

**Disclaimer:** `randomfy` is not affiliated with Spotify. The app is built with [Next.js](https://nextjs.org/), [React](https://react.dev/), and the [Spotify Web API](https://developer.spotify.com/documentation/web-api).

The codebase uses feature-based modules under `src/features/`, Server Components and [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations) for the main flow, Spotify calls **only on the server**, and session state carried in URL search params (no client store for recommendations). Token refresh runs in [middleware](src/middleware.ts). See [ADR-002 — project structure](docs/adr/adr-0002-project-structure.md) for the full layering model.

## [How it works](./docs/legacy/how-it-works.md)

At a high level:

1. After you sign in with Spotify, the app shows one artist recommendation at a time (image, name, and a track preview).
2. You can **like** or **pass** on each artist, similar to a card stack.
3. Liking an artist uses them as the new seed for related artists; liked tracks feed a public playlist and visual outputs on the result screen.

**Session rules (current app):** you can open the result flow with **at least 5** liked artists and up to **20** per session. The **festival poster** unlocks at **20** likes. The legacy doc above still describes the idea in depth; where it conflicts with these numbers, this README wins.

For OAuth and **local** development (Spotify now requires `127.0.0.1` instead of `localhost` for redirect URIs), read [Local setup](docs/local-setup.md).

## Quickstart

Clone the repository:

```bash
git clone git@github.com:andraderaul/random-fy.git
cd random-fy
```

Use Node **20+** (see `.nvmrc`):

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Open the URL printed in the terminal (for Spotify cookies and OAuth, use **`http://127.0.0.1:3000`** — not `localhost`). Details: [docs/local-setup.md](docs/local-setup.md).

## Environments

You need a [Spotify Developer](https://developer.spotify.com/) app. Set these in `.env.local` (server-only — never expose the secret to the client):

| Variable                | Purpose                                      |
| ----------------------- | -------------------------------------------- |
| `SPOTIFY_CLIENT_ID`     | OAuth client ID                              |
| `SPOTIFY_CLIENT_SECRET` | OAuth client secret                          |
| `SPOTIFY_REDIRECT_URI`  | Must match the redirect URI in the dashboard |

Example for local dev:

```env
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
SPOTIFY_REDIRECT_URI=http://127.0.0.1:3000/api/callback
```

## Todo / roadmap

Tracked in [docs/requirements.md](docs/requirements.md) (functional and non-functional requirements). Examples of ongoing or planned work:

- [ ] Full i18n coverage for all user-visible strings (Lingui is in the stack; some requirements are still open)
- [ ] Broader test coverage and CI thresholds as defined in the requirements doc

## Demo

[`randomfy`](https://random-fy.vercel.app/)

## Screenshots

The live demo is the best preview right now. (Static screenshots are not checked into `public/` on this branch.)

## Stack

**App & UI**

- [Next.js](https://nextjs.org/docs) (App Router, Server Components)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lingui](https://lingui.dev/) (i18n)
- [Sonner](https://sonner.emilkowal.ski/) (toasts)
- [html2canvas](https://html2canvas.hertzen.com/) (downloadable collage / poster images)

**Quality & tests**

- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [MSW](https://mswjs.io/) (HTTP mocking in tests)

**Tooling**

- [ESLint](https://eslint.org/) · [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/) · [lint-staged](https://github.com/lint-staged/lint-staged)
- [Commitlint](https://commitlint.js.org/) · [semantic-release](https://semantic-release.gitbook.io/)

## Related projects

- [Festify](https://salty-beach-42139.herokuapp.com/)
- [Receiptify](https://receiptify.herokuapp.com/)

## References

- [Spotify Web API](https://developer.spotify.com/documentation/web-api)

## License

[MIT](./LICENSE)

## Author

- [@andraderaul](https://github.com/andraderaul)
