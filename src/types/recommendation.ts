import { Image, Track } from 'types'

export type Recommendation = {
  id: string
  images: Array<Image> | SpotifyApi.ImageObject[]
  type: string
  name: string
  popularity: number
  track: Track
}
