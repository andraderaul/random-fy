import { useState } from 'react'
import { Content } from 'components'

import { Recommendation } from 'types'

import { AudioContext } from 'contexts'
import { Match, Picture, Playlist } from 'features'

type AuthenticatedProps = {
  artistId: string
}

export const Authenticated = ({ artistId }: AuthenticatedProps) => {
  const [likedArtists, setLikedArtists] = useState<Array<Recommendation>>([])

  const [currentPlaying, setCurrentPlaying] = useState('')

  return (
    <AudioContext.Provider
      value={{ source: currentPlaying, setSource: setCurrentPlaying }}
    >
      <Content>
        <Match
          artistId={artistId}
          likedArtists={likedArtists}
          setLikedArtists={setLikedArtists}
        />
        <Picture artists={likedArtists} />
        <Playlist artists={likedArtists} />
      </Content>
    </AudioContext.Provider>
  )
}
