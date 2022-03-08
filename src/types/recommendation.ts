type Images = Array<{
  height: number
  url: string
  width: number
}>

type Track = {
  id: string
  uri: string
  name: string
  previewUrl: string
  images: Images
  hrefSpotify: string
}

export type Recommendation = {
  id: string
  images: Images
  type: string
  name: string
  track: Track
}
