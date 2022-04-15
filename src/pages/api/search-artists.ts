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

    const searchResponse = await spotifyApi.searchArtists(
      req.query?.name as string,
      {
        limit: 1
      }
    )

    const searchedArtist = searchResponse.body.artists?.items[0]
    console.log({ searchedArtist })

    const relatedArtistsResponse = await spotifyApi.getArtistRelatedArtists(
      searchedArtist?.id || ''
    )

    const relatedArtists = relatedArtistsResponse.body.artists

    console.log({ relatedArtists })

    const topTrackCollection: any[] = []
    for (const artist of relatedArtists) {
      const topTrack = await spotifyApi.getArtistTopTracks(artist.id, 'BR')
      const topTrackSelected = Rnd.getRndNumber({
        min: 0,
        max: topTrack.body.tracks.length
      })

      topTrackCollection.push(topTrack.body.tracks[topTrackSelected])
    }

    const result = relatedArtists.map((artist, index) => ({
      id: artist.id,
      images: artist.images,
      type: artist.type,
      name: artist.name,
      popularity: artist.popularity,
      track: {
        id: topTrackCollection[index].id,
        uri: topTrackCollection[index].uri,
        name: topTrackCollection[index].name,
        previewUrl: topTrackCollection[index].preview_url,
        images: topTrackCollection[index].album.images,
        hrefSpotify: topTrackCollection[index].external_urls.spotify
      }
    }))

    res.status(200).json(result)
  } catch (error: any) {
    res.status(error?.statusCode || 400).json(error)
  }
}
