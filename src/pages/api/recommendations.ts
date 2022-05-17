import { MAX_ARTISTS_TO_SHOW_PER_TURN } from '../../constants'
import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { parseToRecommendation, Rnd, asyncMap } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const token = req.headers.authorization as string
    spotifyApi.setAccessToken(token)

    const response = await spotifyApi.getArtistRelatedArtists(
      req.query?.name as string
    )

    const artists = response.body.artists

    /* fallback when there aren't recommendations */
    if (artists.length === 0 || artists === undefined) {
      const topArtists = await spotifyApi.getMyTopArtists({
        limit: 50
      })
      req.query.name = topArtists.body.items[0].id

      return handler(req, res)
    }

    const sliceEnd = Rnd.getRndNumber({
      min: MAX_ARTISTS_TO_SHOW_PER_TURN,
      max: artists.length
    })
    const sliceStart = sliceEnd - MAX_ARTISTS_TO_SHOW_PER_TURN

    const artistCollection = response.body.artists.slice(sliceStart, sliceEnd)

    const result = await asyncMap(artistCollection, async (artist) => {
      const topTracks = await spotifyApi.getArtistTopTracks(artist.id, 'BR')

      const topTrackSelected = Rnd.getRndNumber({
        min: 0,
        max: topTracks.body.tracks.length
      })

      const topTrack = topTracks.body.tracks[topTrackSelected]

      return parseToRecommendation(artist, topTrack)
    })

    res.status(200).json(result)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
