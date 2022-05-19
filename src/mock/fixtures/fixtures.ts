import {
  artistBuilder,
  artistsBuilder,
  playlistBuilder,
  recommendationsBuilder,
  tracksBuilder,
  refreshTokenBuilder
} from 'mock'

export const mockPlaylist = playlistBuilder()
export const mockArtist = artistBuilder()
export const mockArtists = artistsBuilder()
export const mockRecommendations = recommendationsBuilder()
export const mockTracks = tracksBuilder()
export const mockRelated = recommendationsBuilder()
export const mockRefreshToken = refreshTokenBuilder()
