import type { NextApiRequest, NextApiResponse } from 'next'

import { spotifyApi } from 'services'

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

    const artistCollection = response.body.artists.slice(0, 3)
    const topTrackCollection: any[] = []
    for (const artist of artistCollection) {
      const topTrack = await spotifyApi.getArtistTopTracks(artist.id, 'BR')
      topTrackCollection.push(topTrack.body.tracks[0])
    }

    const result = artistCollection.map((artist, index) => ({
      id: artist.id,
      images: artist.images,
      type: artist.type,
      name: artist.name,
      track: {
        name: topTrackCollection[index].name,
        previewUrl: topTrackCollection[index].preview_url
      }
    }))

    res.status(200).json(result)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
