import { Recommendation } from 'types'

export const parseToRecommendation = (
  artist: SpotifyApi.ArtistObjectFull,
  track: SpotifyApi.TrackObjectFull
): Recommendation => ({
  id: artist.id,
  images: artist.images,
  type: artist.type,
  name: artist.name,
  popularity: artist.popularity,
  track: {
    id: track.id,
    uri: track.uri,
    name: track.name,
    previewUrl: track.preview_url,
    images: track.album.images,
    hrefSpotify: track.external_urls.spotify
  }
})
