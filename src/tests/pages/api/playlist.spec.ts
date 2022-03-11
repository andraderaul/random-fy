import { NextApiRequest, NextApiResponse } from 'next'

import { mockRecommendations, mockPlaylist } from 'mock'
import handler from 'pages/api/playlist'

jest.mock('services', () => ({
  spotifyApi: {
    setAccessToken: jest.fn(),
    createPlaylist: jest
      .fn()
      .mockResolvedValueOnce({
        body: mockPlaylist
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
    body: mockRecommendations
  } as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to create a playlist', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith({ ...mockPlaylist, snapshot: {} })
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(401)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 401 })
  })
})
