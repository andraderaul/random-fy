/**
 * @see http://michaelthelin.se/spotify-web-api-node/
 * @see https://github.com/thelinmichael/spotify-web-api-node
 */

import SpotifyWebApi from 'spotify-web-api-node'

const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const redirectUri = process.env.CALLBACK_URL

export const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri
})
