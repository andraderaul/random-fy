import {
  Dispatch,
  Fragment,
  SetStateAction,
  useEffect,
  useState,
  useMemo
} from 'react'

import { useRecommendation as useRecommendationQuery } from 'queries'
import { Recommendation } from 'types'
import { Grid, ImageBox, ImageBoxSkeleton, PrimaryText } from 'components'

import { MAX_RANDOM_FY_ITEMS } from '../../constants'

type Liked = {
  id: string
  trackId: string
}

type MatchProps = {
  likedArtists: Array<Recommendation>
  artistId: string
  setLikedArtists: Dispatch<SetStateAction<Array<Recommendation>>>
  useRecommendation?: typeof useRecommendationQuery
}

export const Match = ({
  likedArtists,
  artistId,
  setLikedArtists,
  useRecommendation = useRecommendationQuery
}: MatchProps) => {
  const [liked, setLiked] = useState<Liked>(() => ({
    id: artistId,
    trackId: ''
  }))

  const { data, isError, isLoading, isRefetching, refetch } = useRecommendation(
    liked.id,
    liked.trackId
  )

  const newArtists = useMemo(() => data?.data ?? [], [data?.data])

  useEffect(() => {
    for (const newArtist of newArtists) {
      const alreadyLiked = likedArtists.some(
        (likedArtist) => likedArtist.track.id === newArtist.track.id
      )

      if (alreadyLiked) {
        refetch()
        break
      }
    }
  }, [likedArtists, newArtists, refetch])

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

  return likedArtists.length < MAX_RANDOM_FY_ITEMS ? (
    <Fragment>
      <div className="flex justify-center p-2">
        <PrimaryText>
          {likedArtists.length}/{MAX_RANDOM_FY_ITEMS}
        </PrimaryText>
      </div>
      <Grid>
        {isLoading || isRefetching ? (
          <ImageBoxSkeleton />
        ) : (
          newArtists.map((artist) => (
            <ImageBox
              key={artist.id}
              imgSrc={artist.track.images[1].url}
              audioSrc={artist.track.previewUrl}
              track={artist.track.name}
              artist={artist.name}
              onLike={() => handleLike(artist)}
              onDislike={() => refetch()}
              href={artist.track.hrefSpotify}
            />
          ))
        )}
      </Grid>
    </Fragment>
  ) : null
}
