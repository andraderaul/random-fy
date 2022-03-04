import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Cookies } from 'utils'

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

    const access_token = data.body['access_token']
    const refresh_token = data.body['refresh_token']
    // const expires_in = data.body['expires_in']

    spotifyApi.setAccessToken(access_token)
    spotifyApi.setRefreshToken(refresh_token)

    Cookies.set({
      name: 'authorization',
      value: access_token,
      options: {
        res: res,
        maxAge: 30 * 24 * 60 * 60,
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
