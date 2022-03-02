import { NextApiRequest, NextApiResponse } from 'next'

import { artistMock as mockArtist } from 'mock'
import handler from './recommendations'

jest.mock('services', () => {
  return {
    spotifyApi: {
      setAccessToken: jest.fn(),
      getMyTopArtists: jest.fn().mockResolvedValueOnce({
        body: {
          items: Array.from({ length: 50 }, () => mockArtist)
        }
      }),
      getArtistRelatedArtists: jest
        .fn()
        .mockRejectedValueOnce({ statusCode: 401 })
        .mockResolvedValueOnce({
          body: {
            artists: []
          }
        })
        .mockResolvedValue({
          body: {
            artists: [
              {
                id: '54321',
                images: [],
                type: 'artist',
                name: 'a day to remember'
              },
              {
                id: '09876',
                images: [],
                type: 'artist',
                name: 'asking alexandria'
              },
              { id: '54321', images: [], type: 'artist', name: 'paramore' },
              {
                id: '54311',
                images: [],
                type: 'artist',
                name: 'olivia rodrigo'
              }
            ]
          }
        }),
      getArtistTopTracks: jest.fn().mockResolvedValue({
        body: {
          tracks: [
            {
              id: 'abc1234',
              uri: 'uri track 1',
              name: 'track 1',
              preview_url: 'url 1',
              album: {
                images: []
              }
            },
            {
              id: 'cba1234',
              uri: 'uri track 2',
              name: 'track 2',
              preview_url: 'url 2',
              album: {
                images: []
              }
            },
            {
              id: 'qwe3213',
              uri: 'uri track 3',
              name: 'track 3',
              preview_url: 'url 3',
              album: {
                images: []
              }
            },
            {
              id: 'qwe67612',
              uri: 'uri track 4',
              name: 'track 4',
              preview_url: 'url 4',
              album: {
                images: []
              }
            }
          ]
        }
      })
    }
  }
})

jest.mock('utils', () => {
  return {
    Rnd: {
      getRndNumber: jest.fn().mockReturnValue(3)
    }
  }
})

describe('testing create playlist', () => {
  const jsonMock = jest.fn()
  const statusMock = jest.fn(() => ({
    json: jsonMock
  }))

  const req = {
    headers: {
      authorization: 'token'
    },
    query: {
      name: 'bring me the horizon'
    }
  } as unknown as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(401)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 401 })
  })

  it("should be return a fallback artists when there aren't recommendations", async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith([
      {
        id: '54321',
        images: [],
        name: 'a day to remember',
        track: {
          id: 'qwe67612',
          images: [],
          name: 'track 4',
          previewUrl: 'url 4',
          uri: 'uri track 4'
        },
        type: 'artist'
      },
      {
        id: '09876',
        images: [],
        name: 'asking alexandria',
        track: {
          id: 'qwe67612',
          images: [],
          name: 'track 4',
          previewUrl: 'url 4',
          uri: 'uri track 4'
        },
        type: 'artist'
      },
      {
        id: '54321',
        images: [],
        name: 'paramore',
        track: {
          id: 'qwe67612',
          images: [],
          name: 'track 4',
          previewUrl: 'url 4',
          uri: 'uri track 4'
        },
        type: 'artist'
      }
    ])
  })

  it('should be able to return a recommendation', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith([
      {
        id: '54321',
        images: [],
        name: 'a day to remember',
        track: {
          id: 'qwe67612',
          images: [],
          name: 'track 4',
          previewUrl: 'url 4',
          uri: 'uri track 4'
        },
        type: 'artist'
      },
      {
        id: '09876',
        images: [],
        name: 'asking alexandria',
        track: {
          id: 'qwe67612',
          images: [],
          name: 'track 4',
          previewUrl: 'url 4',
          uri: 'uri track 4'
        },
        type: 'artist'
      },
      {
        id: '54321',
        images: [],
        name: 'paramore',
        track: {
          id: 'qwe67612',
          images: [],
          name: 'track 4',
          previewUrl: 'url 4',
          uri: 'uri track 4'
        },
        type: 'artist'
      }
    ])
  })
})
