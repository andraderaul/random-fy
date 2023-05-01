import type { GetServerSidePropsContext, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getRandomArtist, setCustomHeader } from 'services'
import { Cookies } from 'utils'
import { HomeTemplate, Login } from 'templates'

type HomeProps = {
  auth: string
  artistId: string
}

const Home: NextPage<HomeProps> = ({ auth, artistId }) => {
  if (!auth) {
    return <Login />
  }

  return <HomeTemplate artistId={artistId} />
}

export async function getServerSideProps(
  context: GetServerSidePropsContext & { locale: string }
) {
  const locales = await serverSideTranslations(context.locale, [
    'login',
    'common',
    'footer'
  ])
  console.log({ locales })
  try {
    const cookies = Cookies.getAll({ ctx: context })
    const auth = cookies['authorization'] ?? null

    setCustomHeader({
      key: 'authorization',
      value: cookies['authorization'] ?? ''
    })

    const initialArtistResponse = await getRandomArtist()
    const artistId = initialArtistResponse.data.id ?? null

    return {
      props: {
        artistId,
        auth,
        ...locales
      }
    }
  } catch (error: any) {
    if (error?.response?.status === 401) {
      Cookies.destroy({
        name: 'authorization',
        options: {
          ctx: context
        }
      })
    }

    console.error('Unauthorized')

    return {
      props: {
        auth: null,
        artistId: null,
        ...locales
      }
    }
  }
}

export default Home
