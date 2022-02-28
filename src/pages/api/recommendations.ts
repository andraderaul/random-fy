import { MAX_ARTISTS_TO_SHOW_PER_TURN } from '../../constants'
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

    const response = await spotifyApi.getArtistRelatedArtists(
      req.query?.name as string
    )

    const artists = response.body.artists
    const sliceEnd = Rnd.getRndNumber({
      min: MAX_ARTISTS_TO_SHOW_PER_TURN,
      max: artists.length
    })
    const sliceStart = sliceEnd - MAX_ARTISTS_TO_SHOW_PER_TURN

    const artistCollection = response.body.artists.slice(sliceStart, sliceEnd)

    const topTrackCollection: any[] = []
    for (const artist of artistCollection) {
      const topTrack = await spotifyApi.getArtistTopTracks(artist.id, 'BR')
      const topTrackSelected = Rnd.getRndNumber({
        min: 0,
        max: topTrack.body.tracks.length
      })

      topTrackCollection.push(topTrack.body.tracks[topTrackSelected])
    }

    const result = artistCollection.map((artist, index) => ({
      id: artist.id,
      images: artist.images,
      type: artist.type,
      name: artist.name,
      track: {
        id: topTrackCollection[index].id,
        uri: topTrackCollection[index].uri,
        name: topTrackCollection[index].name,
        previewUrl: topTrackCollection[index].preview_url
      }
    }))

    res.status(200).json(result)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
