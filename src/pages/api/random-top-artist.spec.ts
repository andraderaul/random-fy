import { NextApiRequest, NextApiResponse } from 'next'

import { artistMock as mockArtist } from 'mock'
import handler from './random-top-artist'

jest.mock('services', () => ({
  spotifyApi: {
    setAccessToken: jest.fn(),
    getMyTopArtists: jest
      .fn()
      .mockResolvedValueOnce({
        body: {
          items: Array.from({ length: 50 }, () => mockArtist)
        }
      })
      .mockRejectedValueOnce({
        statusCode: 404
      })
  }
}))

jest.mock('utils', () => ({
  Rnd: {
    getRndNumber: jest.fn().mockReturnValue(0)
  }
}))

describe('testing random top artist', () => {
  const jsonMock = jest.fn()
  const statusMock = jest.fn(() => ({
    json: jsonMock
  }))

  const req = {
    headers: {
      authorization: 'token'
    }
  } as NextApiRequest

  const res = {
    status: statusMock
  } as unknown as NextApiResponse

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able return an artist', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(200)
    expect(jsonMock).toHaveBeenCalledWith(mockArtist)
  })

  it('should return an error', async () => {
    await handler(req, res)

    expect(statusMock).toHaveBeenCalledWith(404)
    expect(jsonMock).toHaveBeenCalledWith({ statusCode: 404 })
  })
})
