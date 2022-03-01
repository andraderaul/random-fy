import { Recommendation } from 'types'

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

const artistMock: Recommendation = {
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
      'https://p.scdn.co/mp3-preview/4fb1c7db76d70da33d74db84f6863b1d4dc582ab?cid=c400423b160b43dcbb941e61d7d4cd60'
  }
}

export const artistsMock = Array.from({ length: 20 }, (_, k) => ({
  ...artistMock,
  id: `${artistMock.id}-${k}`
}))
