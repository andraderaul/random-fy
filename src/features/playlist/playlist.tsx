import { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'

import { MAX_RANDOM_FY_ITEMS } from '../../constants'
import { Recommendation } from 'types'
import { PrimaryButton, PrimaryText, SubTitle } from 'components'
import { usePlaylistMutation } from 'queries'

type PlaylistProps = {
  artists: Array<Recommendation>
  usePlaylist?: typeof usePlaylistMutation
}

export const Playlist = ({
  artists,
  usePlaylist = usePlaylistMutation
}: PlaylistProps) => {
  const { mutate } = usePlaylist()

  return artists.length === MAX_RANDOM_FY_ITEMS ? (
    <Fragment>
      <div className="p-4 max-w-5xl my-0 mx-auto" id="subtitle">
        <SubTitle></SubTitle>
        <PrimaryText>You can make a randomfy playlist!</PrimaryText>
      </div>
      <div className="flex justify-center p-4 pb-12">
        <PrimaryButton
          ariaLabel="create playlist button"
          onClick={() => mutate(artists)}
        >
          Create Playlist
        </PrimaryButton>
      </div>
      <Toaster
        toastOptions={{
          error: {
            style: {
              background: 'red',
              color: 'white'
            }
          }
        }}
      />
    </Fragment>
  ) : null
}
