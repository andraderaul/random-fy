import type { GetServerSidePropsContext, NextPage } from 'next'
import { getRecomendations } from 'services'
import { getRandomArtist, setCustomHeader } from 'services'
import { Recommendation } from 'types'
import { Cookies } from 'utils'
import { NonAuthenticated } from 'templates'
import { Authenticated } from 'templates/home/authenticated'

type HomeProps = {
  initialData: Array<Recommendation>
  auth: string
}

const Home: NextPage<HomeProps> = ({ initialData, auth }) => {
  if (!auth) {
    console.log('non')
    return <NonAuthenticated />
  }

  return <Authenticated initialData={initialData} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = Cookies.getAll({ ctx: context })
  const auth = cookies['authorization'] ?? null

  if (auth) {
    setCustomHeader({
      key: 'authorization',
      value: cookies['authorization']
    })

    try {
      const initialArtistResponse = await getRandomArtist()
      const response = await getRecomendations(initialArtistResponse.data.id)

      return {
        props: {
          initialData: response.data,
          auth
        }
      }
    } catch (error) {
      console.log(error)
      /** TODO: refresh token */
      return {
        props: {
          initialData: [],
          auth: null
        }
      }
    }
  }

  return {
    props: {
      initialData: [],
      auth: null
    }
  }
}

export default Home
