import type { GetServerSidePropsContext, NextPage } from 'next'
import { getRandomArtist, setCustomHeader } from 'services'
import { Cookies } from 'utils'
import { Home as HomeTemplate, Login } from 'templates'

type HomeProps = {
  auth: string
}

const Home: NextPage<HomeProps> = ({ auth }) => {
  if (!auth) {
    return <Login />
  }

  return <HomeTemplate />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = Cookies.getAll({ ctx: context })
  const auth = cookies['authorization'] ?? null

  setCustomHeader({
    key: 'authorization',
    value: cookies['authorization'] ?? ''
  })

  return {
    props: {
      auth
    }
  }
}

export default Home
