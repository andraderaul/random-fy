import { RefreshToken } from 'types'
import { http } from '../http'

export const refreshTokenService = (
  accessToken: string,
  refreshToken: string
) => {
  return http<RefreshToken>({
    method: 'POST',
    url: '/refresh-token',
    data: {
      accessToken,
      refreshToken
    }
  })
}
