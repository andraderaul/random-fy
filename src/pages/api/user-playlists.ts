import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.headers.authorization as string
    spotifyApi.setAccessToken(token)

    const data = await spotifyApi.getUserPlaylists(req.query?.userId as string)
    res.status(200).json(data.body)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
