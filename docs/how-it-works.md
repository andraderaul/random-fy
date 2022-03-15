# How it works

Currently the recommendations working that way, It's selected an artist in between the fifty most listened Spotify artists from logged user and this artist is used to find new simmilar artist to him, after that the randomfly will generated a recommendation.

The songs are selected from top listened song from artist on Spotify.

When a user access the app for the first time will solicited the Spotify credentials. After the user to provide credentials, the authenticated flow is done.

With the user authenticated the `randomfy` choose randomly an artist to be the seed of the recommendations, in the other words, the artist chose from randomly way wont be the recommendated artist, but the artists relacionated to him.

When the user like an artist the `randomfy` makes a request to Spotify by related artists to him and choose one to shown.

To the end of the twenty recommendations It's possible to makes a playlist with the liked artists.

# Architecture

O randomfy foi feito usando serverless functions e hospedado na vercel.

The `randomfy` was made using serverless functions and hosted in the vercel.

![random-fy-arch](./arch/random-fy-arch.png)

### Functions

- login: makes the authenticated url of the Spotify;

- callback: after the authenticated url created the Spotify send the authenticated tokens to callback function;

- recommendations: return a song and artist recommendation to the authenticated user;

- random top artist: choose a top listened artist from the authenticated user;

- playlist: makes a playlist with the liked artists from the authenticated user;
