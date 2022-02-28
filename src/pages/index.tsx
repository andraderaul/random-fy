import type { GetServerSidePropsContext, NextPage } from 'next'
import { getRandomArtist, setCustomHeader } from 'services'
import { Cookies } from 'utils'
import { NonAuthenticated } from 'templates'
import { Authenticated } from 'templates/home/authenticated'

type HomeProps = {
  auth: string
  artistId: string
}

const Home: NextPage<HomeProps> = ({ auth, artistId }) => {
  if (!auth) {
    return <NonAuthenticated />
  }

  return <Authenticated artistId={artistId} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const cookies = Cookies.getAll({ ctx: context })
    const auth = cookies['authorization'] ?? null

    setCustomHeader({
      key: 'authorization',
      value: cookies['authorization']
    })

    const initialArtistResponse = await getRandomArtist()
    const artistId = initialArtistResponse.data.id ?? null

    return {
      props: {
        artistId,
        auth
      }
    }
  } catch (error) {
    console.log(error)
    /** TODO: refresh token */
    return {
      props: {
        auth: null,
        artistId: null
      }
    }
  }
}

export default Home
