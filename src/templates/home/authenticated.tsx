import { Content, Grid, ImageBox } from 'components'
import { Title } from 'components/title/title'
import { useState } from 'react'
import { getRecomendations } from 'services'
import { Recommendation } from 'types'

type AuthenticatedProps = {
  initialData: Array<Recommendation>
}

export const Authenticated = ({ initialData }: AuthenticatedProps) => {
  const [data, setData] = useState(() => initialData)

  return (
    <Content>
      <Title>Randomfy</Title>
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
    </Content>
  )
}
