# How it works

Currently the recommendation feature is working like this: It's selected an artist among the fifty most listened Spotify artists from the user and this artist is used to find new and simmilar artist for them, after that the randomfly generates a recommendation.

The songs are selected from the artist top listened songs on Spotify.

When a user access the app for the first time the randomfy asks for the Spotify credentials. After the user provides the credentials, the authentication is done.

With the user authenticated, the `randomfy` chooses randomly an artist to be the _seed_ of the recommendations, in other words, the randomly chose artist wont be the recommended artist, but the artists related to them.

When the user likes an artist, the `randomfy` makes a request to Spotify for related artists to them and chooses one to show.

At the end of the twenty recommendations It's possible to make a playlist with the liked artist songs.

# Architecture

The `randomfy` was made using serverless functions and is hosted in Vercel.

![random-fy-arch](./arch/random-fy-arch.png)

### Functions

- login: makes the authenticated url from the Spotify;

- callback: after the authenticated url is created the Spotify sends the authenticated tokens to the callback function;

- recommendations: return a song and artist recommendation to the authenticated user;

- random top artist: choose a top listened artist from the authenticated user;

- playlist: makes a playlist with the authenticated user liked artist songs;
