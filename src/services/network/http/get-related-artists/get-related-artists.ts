import { Recommendation } from 'types'
import { http } from '../http'

export const getRelatedArtists = (name: string) => {
  return http<Array<Recommendation>>({
    method: 'GET',
    url: '/search-artists',
    params: {
      name
    }
  })
}
