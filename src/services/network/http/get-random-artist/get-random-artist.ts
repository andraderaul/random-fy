import { Artist } from '../../../../types'
import { http } from '../http'

export const getRandomArtist = async () => {
  return await http<Artist>({
    method: 'GET',
    url: '/random-top-artist'
  })
}
