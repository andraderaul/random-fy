# Como Funciona

Atualmente, as recomendações no `randomfy` funciona da seguinte maneira:

1. Ele seleciona um artista entre os cinquenta artistas mais ouvidos pelo usuário no Spotify.
2. Usando o artista selecionado, ele encontra novos artistas semelhantes para o usuário.
3. As recomendações são geradas com base nesses resultados.

As músicas para as recomendações são selecionadas a partir das músicas mais ouvidas do artista escolhido no Spotify.

Quando um usuário acessa o aplicativo pela primeira vez, o `randomfy` solicita que ele forneça suas credenciais do Spotify. Assim que as credenciais são fornecidas, o processo de autenticação é concluído.

Após a autenticação, o `randomfy` seleciona aleatoriamente um artista para ser a "semente" das recomendações. Isso significa que o artista escolhido aleatoriamente não será o artista recomendado, mas sim os artistas relacionados a ele.

Quando um usuário curte um artista, o `randomfy` faz uma solicitação ao Spotify para obter artistas relacionados e seleciona um para exibir como recomendação.

Após vinte recomendações, o usuário tem a opção de criar uma playlist com as músicas dos artistas curtidos.

## Arquitetura

O `randomfy` é construído usando funções serverless e está hospedado na Vercel.

![random-fy-arch](./arch/random-fy-arch.png)

### Funções

- `login`: Essa função cria a URL autenticada para o login no Spotify.
- `callback`: Após o processo de login, essa função recebe os tokens autenticados do Spotify.
- `recommendations`: Essa função retorna uma música e uma recomendação de artista para o usuário autenticado.
  random top artist: Essa função seleciona um artista mais ouvido da conta autenticada do usuário.
- `playlist`: Essa função cria uma playlist com as músicas dos artistas curtidos pelo usuário autenticado.
