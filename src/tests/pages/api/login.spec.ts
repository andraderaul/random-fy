import { NextApiRequest, NextApiResponse } from 'next'

import { scopes } from '../../../constants'
import { spotifyApi } from 'services'
import handler from 'pages/api/login'

jest.mock('services', () => ({
  spotifyApi: {
    createAuthorizeURL: jest.fn().mockReturnValue('authenticatedURL')
  }
}))

jest.mock('utils', () => ({
  Rnd: {
    generateRandomString: jest.fn().mockReturnValue('abc123')
  }
}))

describe('testing login', () => {
  const redirectMock = jest.fn()

  const req = {} as NextApiRequest
  const res = {
    redirect: redirectMock
  } as unknown as NextApiResponse

  it('should be able to redirect to spotify authenticate', () => {
    handler(req, res)

    expect(redirectMock).toHaveBeenCalledTimes(1)
    expect(redirectMock).toHaveBeenCalledWith('authenticatedURL')
    expect(spotifyApi.createAuthorizeURL).toHaveBeenCalledWith(scopes, 'abc123')
  })
})
