import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>random-fy</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="rgb(250 250 250)" />
        <meta
          name="description"
          content="This is a project that will show artists and musics based in the recommendation from Spotify"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
