import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'
import { Rnd, parseToRecommendation, asyncMap } from 'utils'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const token = req.headers.authorization as string
    spotifyApi.setAccessToken(token)

    const searchResponse = await spotifyApi.searchArtists(
      req.query?.name as string,
      {
        limit: 1
      }
    )

    const searchedArtist = searchResponse.body.artists?.items[0]

    const relatedArtistsResponse = await spotifyApi.getArtistRelatedArtists(
      searchedArtist?.id || ''
    )

    const relatedArtists = relatedArtistsResponse.body.artists
    const result = await asyncMap(relatedArtists, async (artist) => {
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
