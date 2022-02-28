export type Recommendation = {
  id: string
  images: Array<{
    height: number
    url: string
    width: number
  }>
  type: string
  name: string
  track: {
    id: string
    uri: string
    name: string
    previewUrl: string
  }
}
