import { Image } from 'types'

export type Track = {
  id: string
  uri: string
  name: string
  previewUrl: string
  images: Array<Image>
  hrefSpotify: string
}
