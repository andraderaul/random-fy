import { Fragment } from 'react'

import { MAX_RANDOM_FY_ITEMS } from '../../constants'
import { Recommendation } from 'types'
import { PrimaryButton, PrimaryText } from 'components'
import { usePlaylistMutation } from 'queries'

type PlaylistProps = {
  artists: Array<Recommendation>
  usePlaylist?: typeof usePlaylistMutation
}

export const Playlist = ({
  artists,
  usePlaylist = usePlaylistMutation
}: PlaylistProps) => {
  const { mutate, isLoading, data } = usePlaylist()

  const playlistCreated = data?.data
  const text = playlistCreated?.id
    ? 'Randomfy playlist was created.'
    : 'You can make a randomfy playlist!'

  return artists.length === MAX_RANDOM_FY_ITEMS ? (
    <Fragment>
      <div className="p-4 max-w-5xl my-0 mx-auto">
        <PrimaryText>{text}</PrimaryText>
      </div>
      <div
        className={`flex justify-center p-4 pb-12 ${
          isLoading ? 'animate-pulse' : ''
        }`}
      >
        {playlistCreated?.id ? (
          <iframe
            className="max-w-5xl my-0 mx-auto rounded-xl border-0"
            src={`https://open.spotify.com/embed/playlist/${playlistCreated.id}?utm_source=generator&theme=0`}
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        ) : (
          <PrimaryButton
            ariaLabel="create playlist button"
            onClick={() => mutate(artists)}
          >
            Create Playlist
          </PrimaryButton>
        )}
      </div>
    </Fragment>
  ) : null
}
