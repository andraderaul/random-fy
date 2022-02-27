import { useState } from 'react'
import {
  Content,
  Grid,
  ImageBox,
  ImageBoxSkeleton,
  Title,
  HTMLToImage
} from 'components'
import { useRecommendation } from 'queries'
import { Recommendation } from 'types'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'

type AuthenticatedProps = {
  artistId: string
}

export const Authenticated = ({ artistId }: AuthenticatedProps) => {
  const [likedArtists, setLikedArtists] = useState<Array<Recommendation>>([])
  const [id, setId] = useState(() => artistId)
  const { data, isError, isLoading } = useRecommendation(id)

  const handleLike = (artist: Recommendation) => {
    setId(artist.id)
    setLikedArtists((oldLikedArtists) => [...oldLikedArtists, artist])
  }

  if (isError) {
    return <div>Something wrong! :(</div>
  }

  return (
    <Content>
      {likedArtists.length < MAX_RANDOM_FY_ITEMS && (
        <>
          <div className="mt-8 p-4">
            <Title>Randomfy</Title>
          </div>
          <Grid>
            {isLoading && <ImageBoxSkeleton />}
            {data?.data.map((artist) => (
              <ImageBox
                key={artist.id}
                imgSrc={artist.images[1].url}
                audioSrc={artist.track.previewUrl}
                track={artist.track.name}
                artist={artist.name}
                onLike={() => handleLike(artist)}
              />
            ))}
          </Grid>
        </>
      )}

      <HTMLToImage artists={likedArtists} />
    </Content>
  )
}
