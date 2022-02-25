import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Cookies } from 'utils'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { error, code } = req.query

  if (error) {
    console.error('Callback Error:', error)
    res.send(`Callback Error: ${error}`)
    return
  }

  spotifyApi
    .authorizationCodeGrant(code as string)
    .then((data) => {
      const access_token = data.body['access_token']
      const refresh_token = data.body['refresh_token']
      const expires_in = data.body['expires_in']

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

      setInterval(async () => {
        const data = await spotifyApi.refreshAccessToken()
        const access_token = data.body['access_token']

        console.log('The access token has been refreshed!')
        console.log('access_token:', access_token)
        spotifyApi.setAccessToken(access_token)

        Cookies.set({
          name: 'authorization',
          value: access_token,
          options: {
            res: res,
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
          }
        })
      }, (expires_in / 2) * 1000)
    })
    .catch((error) => {
      console.error('Error getting Tokens:', error)
      res.send(`Error getting Tokens: ${error}`)
    })
}
