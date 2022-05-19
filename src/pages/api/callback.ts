import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Cookies } from 'utils'
import { MAX_AGE_COOKIES } from '../../constants/values'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { error, code } = req.query

  if (error) {
    console.error('Callback Error:', error)
    res.send(`Callback Error: ${error}`)
    return
  }

  try {
    const data = await spotifyApi.authorizationCodeGrant(code as string)

    const accessToken = data.body['access_token']
    const refreshToken = data.body['refresh_token']

    spotifyApi.setAccessToken(accessToken)
    spotifyApi.setRefreshToken(refreshToken)

    Cookies.set({
      name: 'authorization',
      value: accessToken,
      options: {
        res: res,
        maxAge: MAX_AGE_COOKIES,
        path: '/'
      }
    })

    Cookies.set({
      name: 'refreshToken',
      value: refreshToken,
      options: {
        res: res,
        maxAge: MAX_AGE_COOKIES,
        path: '/'
      }
    })

    res
      .writeHead(302, {
        Location: `/`
      })
      .end()
  } catch (error) {
    console.error('Error getting Tokens:', error)
    res.send(`Error getting Tokens: ${error}`)
  }
}
