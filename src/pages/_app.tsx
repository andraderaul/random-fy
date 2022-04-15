import 'styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import { useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>randomfy</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fafafa" />
        <meta
          name="description"
          content="Randomfy takes your most listened Spotify artists, selects one of them and shows you similar artists, so you can meet new artists based on the previous selected one."
        />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.deHydratedState}>
          <NextNProgress
            color="#171717"
            startPosition={0.3}
            stopDelayMs={200}
            height={3}
          />
          <Component {...pageProps} />
          <Toaster
            toastOptions={{
              error: {
                style: {
                  background: 'red',
                  color: 'white'
                }
              }
            }}
          />
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
