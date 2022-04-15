import type { GetServerSidePropsContext, NextPage } from 'next'
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
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
        auth
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

    console.error(error)

    return {
      props: {
        auth: null,
        artistId: null
      }
    }
  }
}

export default Home
