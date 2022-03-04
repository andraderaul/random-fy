import { NextApiRequest, NextApiResponse } from 'next'

import { artistsMock } from 'mock'
import handler from './playlist'

jest.mock('services', () => ({
  spotifyApi: {
    setAccessToken: jest.fn(),
    createPlaylist: jest
      .fn()
      .mockResolvedValueOnce({
        body: {
          id: '123456',
          name: 'randomfy',
          uri: 'uri playlist',
          description:
            'playlist generated by randomfy. Url: https://random-fy.vercel.app/',
          snapshot: {}
        }
      })
      .mockRejectedValueOnce({ statusCode: 401 }),
    addTracksToPlaylist: jest.fn().mockResolvedValue({
      body: {}
    })
  }
}))

describe('testing create playlist', () => {
  const jsonMock = jest.fn()
  const statusMock = jest.fn(() => ({
    json: jsonMock
  }))

  const req = {
    headers: {
      authorization: 'token'
    },
    body: artistsMock
  } as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })
  //
  it('should be able to create a playlist', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith({
      description:
        'playlist generated by randomfy. Url: https://random-fy.vercel.app/',
      id: '123456',
      name: 'randomfy',
      snapshot: {},
      uri: 'uri playlist'
    })
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(401)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 401 })
  })
})
