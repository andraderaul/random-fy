import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Rnd } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.headers.authorization as string

    spotifyApi.setAccessToken(token)

    const myTopArtists = await spotifyApi.getMyTopArtists({
      limit: 50
    })

    const index = Rnd.getRndNumber({
      min: 0,
      max: 50
    })

    res.status(200).json(myTopArtists.body.items[index])
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
