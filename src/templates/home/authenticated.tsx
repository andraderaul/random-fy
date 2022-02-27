import { Content, Grid, ImageBox, ImageBoxSkeleton, Title } from 'components'
import { useRecommendation } from 'queries'
import { useState } from 'react'

type AuthenticatedProps = {
  artistId: string
}

export const Authenticated = ({ artistId }: AuthenticatedProps) => {
  const [id, setId] = useState(() => artistId)
  const { data, isError, isLoading } = useRecommendation(id)

  if (isError) {
    return <div>ocorreu um erro</div>
  }

  return (
    <Content>
      <div className="mt-8 p-4">
        <Title>Randomfy</Title>
      </div>
      <Grid>
        {isLoading && <ImageBoxSkeleton />}
        {data?.data.map((item) => (
          <ImageBox
            key={item.id}
            imgSrc={item.images[1].url}
            audioSrc={item.track.previewUrl}
            track={item.track.name}
            artist={item.name}
            onLike={async () => {
              setId(item.id)
            }}
          />
        ))}
      </Grid>
    </Content>
  )
}
