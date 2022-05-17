import { parseToRecommendation } from './parse'

describe('Testing parseToRecommendation', () => {
  const mockArtist = {
    id: '12345',
    images: [
      {
        url: 'url 1'
      }
    ],
    popularity: 99,
    type: 'artist',
    name: 'Tim Maia'
  } as SpotifyApi.ArtistObjectFull

  const mockTrack = {
    id: '54321',
    uri: 'uri track 1',
    name: 'Ela Partiu',
    preview_url: 'url 1',
    album: {
      images: [{ url: 'url 1' }]
    },
    external_urls: {
      spotify: 'spotify url'
    }
  } as SpotifyApi.TrackObjectFull

  it('should be able to return a Recommendation object', () => {
    const result = parseToRecommendation(mockArtist, mockTrack)

    expect(result).toEqual({
      id: mockArtist.id,
      images: mockArtist.images,
      type: mockArtist.type,
      name: mockArtist.name,
      popularity: mockArtist.popularity,
      track: {
        id: mockTrack.id,
        uri: mockTrack.uri,
        name: mockTrack.name,
        previewUrl: mockTrack.preview_url,
        images: mockTrack.album.images,
        hrefSpotify: mockTrack.external_urls.spotify
      }
    })
  })
})
