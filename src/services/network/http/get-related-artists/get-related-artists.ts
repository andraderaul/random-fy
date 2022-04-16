import { Recommendation } from 'types'
import { http } from '../http'

export const getRelatedArtists = async (name: string) => {
  return await http<Array<Recommendation>>({
    method: 'GET',
    url: '/search-artists',
    params: {
      name
    }
  })
}
