import { Artist } from '../../../../types'
import { http } from '../http'

export const getRandomArtist = () => {
  return http<Artist>({
    method: 'GET',
    url: '/random-top-artist'
  })
}
