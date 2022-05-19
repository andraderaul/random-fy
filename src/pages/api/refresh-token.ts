import type { NextApiRequest, NextApiResponse } from 'next'

import { setCustomHeader, spotifyApi } from 'services'
import { Cookies } from 'utils'
import { MAX_AGE_COOKIES } from '../../constants/values'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { refreshToken, accessToken } = req.body

    if (!refreshToken) {
      res.status(400).json({
        error: 'invalid_request',
        errorDescription: 'refresh token must be supplied'
      })
    }

    if (!accessToken) {
      res.status(400).json({
        error: 'invalid_request',
        errorDescription: 'access token must be supplied'
      })
    }

    spotifyApi.setAccessToken(accessToken)
    spotifyApi.setRefreshToken(refreshToken)

    const data = await spotifyApi.refreshAccessToken()
    const refreshedAccessToken = data.body['access_token']

    spotifyApi.setAccessToken(refreshedAccessToken)

    setCustomHeader({
      key: 'authorization',
      value: refreshedAccessToken
    })

    Cookies.set({
      name: 'authorization',
      value: refreshedAccessToken,
      options: {
        res: res,
        maxAge: MAX_AGE_COOKIES,
        path: '/'
      }
    })

    return res.status(200).json({
      accessToken: refreshedAccessToken
    })
  } catch (error: any) {
    res.status(error.statusCode).json({
      error: error.body.error,
      errorDescription: error.body.error_description
    })
  }
}
