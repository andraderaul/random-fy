[![Quality](https://github.com/andraderaul/random-fy/actions/workflows/quality.yml/badge.svg)](https://github.com/andraderaul/random-fy/actions/workflows/quality.yml) [![Release](https://github.com/andraderaul/random-fy/actions/workflows/release.yml/badge.svg)](https://github.com/andraderaul/random-fy/actions/workflows/release.yml)

# randomfy

## About

Randomfy takes your most listened Spotify artists, selects one of them and shows you similar artists, so you can meet new artists based on the previous selected one.

Disclaimer: Randomfy is not affiliated with Spotify. The site was build with Nextjs, React and the Spotify API.

## How it works

This project has some amazing features, and can be described as follow:

1. When the user signs in the application, a recommendation is shown;
2. The user likes or dislikes the recommendation, just like on Tinder.

After that Randomfy makes available:

- A playlist with the liked artists that the user can listen and share with their friends;
- An image with the image of the songs available for download;
- An festival image with the artists available for download.

## Quickstart

You can start cloning the repository:

```bash

git clone git@github.com:andraderaul/random-fy.git
```

Then install all dependencies:

```bash

yarn install
```

Finally, start the application:

```bash

yarn dev
```

## Environments

Important: you must have a [spotify developer](https://developer.spotify.com/) account with an app created. Then add the `SPOTIFY_CLIENT_ID` and `SPOTIFY_CLIENT_SECRET` from your app created to `.env`.

## Todo

- [ ] Performance
- [ ] Cookies

## Demo

[randomfy](https://random-fy.vercel.app/)

## Screenshots

- Light Mode

![randomfy screen light mode](./public/screenshots/2.png)

- Dark Mode

![randomfy screen dark mode](./public/screenshots/1.png)

## Stack

**Front-end:**

- [NextJs](https://nextjs.org/docs)
- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [TailwindCSS](https://tailwindcss.com/docs/)
- [React-Query](https://react-query.tanstack.com/)
- [Axios](https://github.com/axios/axios)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [MSW JS](https://mswjs.io/)

**Back-end:**

- [NextJs](https://nextjs.org/docs)
- [Jest](https://jestjs.io/)

## Related projects

- [Festify](https://salty-beach-42139.herokuapp.com/)
- [Receiptify](https://receiptify.herokuapp.com/)

## References

- [Spotify Web Api](https://developer.spotify.com/documentation/web-api/reference)

## License

[MIT](./LICENSE)

## Author

- [@andraderaul](https://github.com/andraderaul)
