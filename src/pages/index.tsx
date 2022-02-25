import type { GetServerSidePropsContext, NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { ImageBox, Grid } from 'components'
import { getRecomendations } from 'services'
import { getRandomArtist, setCustomHeader } from 'services'
import { Recommendation } from 'types'
import { Cookies } from 'utils'

type HomeProps = {
  initialData: Array<Recommendation>
  auth: string
}

const Home: NextPage<HomeProps> = ({ initialData, auth }) => {
  const [data, setData] = useState(() => initialData)

  return (
    <div className="max-w-6xl my-0 mx-auto min-h-screen bg-neutral-50">
      <div className="p-4">
        <h1 className="text-3xl text-center text-gray-800">Randomfy</h1>
        {!auth && <Link href="/api/login">login</Link>}
      </div>
      <Grid>
        {data.map((item) => (
          <ImageBox
            key={item.id}
            imgSrc={item.images[1].url}
            audioSrc={item.track.previewUrl}
            track={item.track.name}
            artist={item.name}
            onLike={async () => {
              const response = await getRecomendations(item.id)
              setData(response.data)
            }}
          />
        ))}
      </Grid>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const cookies = Cookies.getAll({ ctx: context })
  const auth = cookies['authorization'] ?? null

  if (auth) {
    setCustomHeader({
      key: 'authorization',
      value: cookies['authorization']
    })

    const initialArtistResponse = await getRandomArtist()
    const response = await getRecomendations(initialArtistResponse.data.id)

    return {
      props: {
        initialData: response.data,
        auth
      }
    }
  }

  return {
    props: {
      initialData: auth
    }
  }
}

export default Home
