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
