import { Image } from './image'

export type Artist = {
  external_urls: {
    spotify: string
  }
  followers: {
    href: string
    total: number
  }
  genres: Array<string>
  href: string
  id: string
  images: Array<Image>
  name: string
  popularity: number
  type: string
  uri: string
}
