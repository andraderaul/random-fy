import { Content, Grid, ImageBox, Title } from 'components'
import { useState } from 'react'
import { getRecomendations } from 'services'
import { Recommendation } from 'types'

type AuthenticatedProps = {
  initialData: Array<Recommendation>
}

export const Authenticated = ({ initialData }: AuthenticatedProps) => {
  const [data, setData] = useState(() => initialData)

  return (
    <>
      <Content>
        <div className="p-4">
          <Title>Randomfy</Title>
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
      </Content>
    </>
  )
}
