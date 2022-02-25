import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.headers.authorization as string
    spotifyApi.setAccessToken(token)

    const me = await spotifyApi.getMe()
    res.status(200).json(me.body)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
