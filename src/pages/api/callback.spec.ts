import { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Cookies } from 'utils'
import handler from './callback'

jest.mock('services', () => ({
  setCustomHeader: jest.fn(),
  spotifyApi: {
    authorizationCodeGrant: jest
      .fn()
      .mockResolvedValueOnce({
        body: {
          access_token: 'access_token',
          refresh_token: 'refresh_token',
          expires_in: 'expires_in'
        }
      })
      .mockRejectedValueOnce('data error'),
    refreshAccessToken: jest.fn(),
    setAccessToken: jest.fn(),
    setRefreshToken: jest.fn()
  }
}))

jest.mock('utils', () => ({
  Cookies: {
    set: jest.fn()
  }
}))

describe('testing callback', () => {
  console.error = jest.fn()
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const writeHeadMock = jest.fn().mockReturnValue({
    end: jest.fn()
  })
  const sendMock = jest.fn()

  const req = {
    query: {
      code: '1234',
      error: ''
    }
  } as unknown as NextApiRequest
  const res = {
    writeHead: writeHeadMock,
    send: sendMock
  } as unknown as NextApiResponse

  it('should be able to redirect to home after login', async () => {
    await handler(req, res)

    expect(spotifyApi.authorizationCodeGrant).toHaveBeenCalledWith('1234')
    expect(Cookies.set).toHaveBeenCalled()
    expect(spotifyApi.setAccessToken).toHaveBeenCalledWith('access_token')
    expect(spotifyApi.setRefreshToken).toHaveBeenCalledWith('refresh_token')

    expect(writeHeadMock).toHaveBeenCalledWith(302, {
      Location: `/`
    })
  })

  it('should be able to handle req with error', async () => {
    const errorReq = {
      query: {
        code: '',
        error: 'error'
      }
    } as unknown as NextApiRequest

    await handler(errorReq, res)

    expect(sendMock).toHaveBeenCalledWith('Callback Error: error')
  })

  it('should be able to handle login error', async () => {
    await handler(req, res)

    expect(sendMock).toHaveBeenCalledWith('Error getting Tokens: data error')
  })
})
