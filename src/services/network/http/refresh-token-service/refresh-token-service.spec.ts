import { refreshTokenService } from './refresh-token-service'

import { mockRefreshToken } from 'mock'

describe('get refresh token service', () => {
  it('should be able to refresh token', async () => {
    const response = await refreshTokenService('accessToken', 'refreshToken')

    expect(response.request.method).toBe('POST')
    expect(response.config.url).toBe('/refresh-token')
    expect(response.request.data).toBe(
      JSON.stringify({
        accessToken: 'accessToken',
        refreshToken: 'refreshToken'
      })
    )
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockRefreshToken)
  })
})
