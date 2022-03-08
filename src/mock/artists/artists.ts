import { Artist, Recommendation } from 'types'

const imagesMock = [
  {
    height: 640,
    url: 'https://i.scdn.co/image/ab67616d0000b27355fd23d477d647c595c8ce5a',
    width: 640
  },
  {
    height: 300,
    url: 'https://i.scdn.co/image/ab67616d00001e0255fd23d477d647c595c8ce5a',
    width: 300
  },
  {
    height: 64,
    url: 'https://i.scdn.co/image/ab67616d0000485155fd23d477d647c595c8ce5a',
    width: 64
  }
]

const artistForRecommendationMock: Recommendation = {
  id: '7zejo99XCAwPzycPCCaoM8',
  images: imagesMock,
  type: 'artist',
  name: 'Michael Nyman Band',
  track: {
    id: '7zejo99XCAwPzycPCCaoM7',
    uri: 'uri',
    images: imagesMock,
    name: 'Fish Beach',
    previewUrl:
      'https://p.scdn.co/mp3-preview/4fb1c7db76d70da33d74db84f6863b1d4dc582ab?cid=c400423b160b43dcbb941e61d7d4cd60',
    hrefSpotify: 'href spotify'
  }
}

export const artistsMock = Array.from({ length: 20 }, (_, k) => ({
  ...artistForRecommendationMock,
  id: `${artistForRecommendationMock.id}-${k}`
}))

export const artistMock: Artist = {
  external_urls: {
    spotify: 'url spotify'
  },
  followers: {
    href: 'href followers',
    total: 123
  },
  genres: ['one', 'two'],
  href: 'href artist',
  id: '321',
  images: imagesMock,
  name: 'Artist name',
  popularity: 1234,
  type: 'artist',
  uri: 'url artist'
}
