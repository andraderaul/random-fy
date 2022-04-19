import { useState } from 'react'
import dynamic from 'next/dynamic'

import type { HeaderProps } from 'components/header'
const DynamicHeader = dynamic<HeaderProps>(
  () => import('components/header').then((mod) => mod.Header),
  { ssr: false }
)

import { Content } from 'components'

import { Recommendation } from 'types'

import { AudioContext } from 'contexts'
import { Match, ImageCollage, Playlist, Festival } from 'features'

type HomeTemplateProps = {
  artistId: string
}

export const HomeTemplate = ({ artistId }: HomeTemplateProps) => {
  const [likedArtists, setLikedArtists] = useState<Array<Recommendation>>([])

  const [currentPlaying, setCurrentPlaying] = useState('')

  return (
    <AudioContext.Provider
      value={{ source: currentPlaying, setSource: setCurrentPlaying }}
    >
      <Content>
        <DynamicHeader />
        <Match
          artistId={artistId}
          likedArtists={likedArtists}
          setLikedArtists={setLikedArtists}
        />
        <Playlist artists={likedArtists} />
        <ImageCollage artists={likedArtists} />
        <Festival artists={likedArtists} />
      </Content>
    </AudioContext.Provider>
  )
}
