import { useState } from 'react'
import {
  Content,
  Grid,
  ImageBox,
  ImageBoxSkeleton,
  Title,
  HTMLToImage,
  SubTitle
} from 'components'
import { usePlaylistMutation, useRecommendation } from 'queries'
import { Recommendation } from 'types'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'

type AuthenticatedProps = {
  artistId: string
}

type Liked = {
  id: string
  trackId: string
}

export const Authenticated = ({ artistId }: AuthenticatedProps) => {
  const [likedArtists, setLikedArtists] = useState<Array<Recommendation>>([])

  const [liked, setLiked] = useState<Liked>(() => ({
    id: artistId,
    trackId: ''
  }))

  const { data, isError, isLoading, isRefetching } = useRecommendation(
    liked.id,
    liked.trackId
  )
  const mutation = usePlaylistMutation()

  const handleLike = (artist: Recommendation) => {
    setLiked({
      id: artist.id,
      trackId: artist.track.id
    })
    setLikedArtists((oldLikedArtists) => [...oldLikedArtists, artist])
  }

  if (isError) {
    return <div>Something wrong! :(</div>
  }

  return (
    <Content>
      {likedArtists.length < MAX_RANDOM_FY_ITEMS && (
        <>
          <div
            className={`mt-8 p-4 flex items-center ${
              isRefetching ? 'animate-pulse' : ''
            }`}
          >
            <Title>Randomfy</Title>
            {isRefetching && <span className="ml-4">refetching...</span>}
          </div>
          <Grid>
            {isLoading && <ImageBoxSkeleton />}
            {data?.data.map((artist) => (
              <ImageBox
                key={artist.id}
                imgSrc={artist.track.images[1].url}
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

      {likedArtists.length === MAX_RANDOM_FY_ITEMS && (
        <>
          <div className="p-4" id="subtitle">
            <SubTitle>You can make a randomfy playlist!</SubTitle>
          </div>
          <div className="flex justify-center p-4">
            <button
              className="flex justify-evenly items-center w-56 p-3 rounded-full font-semibold 
          text-center text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-200"
              aria-label="create playlist button"
              onClick={() => mutation.mutate(likedArtists)}
            >
              Create Playlist
            </button>
          </div>
        </>
      )}
    </Content>
  )
}
