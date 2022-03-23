import type { GetServerSidePropsContext, NextPage } from 'next'
import { getRandomArtist, setCustomHeader } from 'services'
import { Cookies } from 'utils'
import { Find as FindTemplate } from 'templates'

type FindProps = {
  auth: string
  artistId: string
}

const Find: NextPage<FindProps> = ({ artistId }) => {
  return <FindTemplate artistId={artistId} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const cookies = Cookies.getAll({ ctx: context })

    setCustomHeader({
      key: 'authorization',
      value: cookies['authorization'] ?? ''
    })

    const initialArtistResponse = await getRandomArtist()
    const artistId = initialArtistResponse.data.id ?? null

    return {
      props: {
        artistId
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
        artistId: null
      }
    }
  }
}

export default Find
