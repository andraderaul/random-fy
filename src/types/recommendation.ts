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
    name: string
    previewUrl: string
  }
}
