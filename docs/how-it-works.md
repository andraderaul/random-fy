# How it Works

Currently, the recommendation feature in `randomfy` works as follows:

1. It selects an artist among the user's top fifty most listened artists on Spotify.
2. Using the selected artist, it finds new and similar artists for the user.
3. The recommendations are generated based on these findings.

The songs for the recommendations are selected from the top listened songs of the chosen artist on Spotify.

When a user accesses the app for the first time, `randomfy` prompts them to provide their Spotify credentials. Once the credentials are provided, the authentication process is completed.

Once authenticated, `randomfy` randomly selects an artist to serve as the "seed" for the recommendations. This means that the randomly chosen artist will not be the recommended artist, but rather the artists related to them.

When a user likes an artist, `randomfy` makes a request to Spotify for related artists and selects one to display as a recommendation.

After twenty recommendations, the user has the option to create a playlist with the songs from the liked artists.

## Architecture

`randomfy` is built using serverless functions and is hosted on Vercel.

![random-fy-arch](./arch/random-fy-arch.png)

### Functions

- `login`: This function creates the authenticated URL for Spotify login.
- `callback`: After the login process, this function receives the authenticated tokens from Spotify.
- `recommendations`: This function returns a song and artist recommendation for the authenticated user.
  random top artist: This function selects a top listened artist from the user's authenticated account.
- `playlist`: This function creates a playlist with the liked artist's songs for the authenticated user.
