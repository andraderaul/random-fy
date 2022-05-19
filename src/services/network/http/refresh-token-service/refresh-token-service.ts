import { RefreshToken } from 'types'
import { http } from '../http'

export const refreshTokenService = async (
  accessToken: string,
  refreshToken: string
) => {
  return await http<RefreshToken>({
    method: 'POST',
    url: '/refresh-token',
    data: {
      accessToken,
      refreshToken
    }
  })
}
