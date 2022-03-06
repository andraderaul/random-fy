import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { XIcon } from '@heroicons/react/outline'

import { useRecommendation as useRecommendationQuery } from 'queries'
import { Recommendation } from 'types'
import { Grid, ImageBox, ImageBoxSkeleton } from 'components'

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

  const handleLike = (artist: Recommendation) => {
    setLiked({
      id: artist.id,
      trackId: artist.track.id
    })

    setLikedArtists((oldLikedArtists) => [...oldLikedArtists, artist])
  }

  const newArtists = data?.data ?? []

  if (isError) {
    return <div>Something wrong! :(</div>
  }

  return likedArtists.length < MAX_RANDOM_FY_ITEMS ? (
    <Fragment>
      <div className="flex justify-center" aria-label="refetch-items">
        <XIcon
          aria-label="x-icon"
          className="h-20 w-20 sm:h-10 sm:w-10 stroke-gray-700 dark:stroke-gray-50 hover:stroke-red-500
           hover:fill-red-500 hover:scale-110 cursor-pointer 
           transition duration-200 ease-out hover:ease-in"
          onClick={() => refetch()}
          type="button"
        />
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
            />
          ))
        )}
      </Grid>
    </Fragment>
  ) : null
}
