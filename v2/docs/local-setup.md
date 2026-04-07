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

Acesse o app via `http://127.0.0.1:3000` no browser — **não** `http://localhost:3000`. O Spotify redireciona de volta para o IP registrado, então o browser precisa estar na mesma origem.
