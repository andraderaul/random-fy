import { Recommendation } from 'types'
import { http } from '../http'

export const getRecommendations = (name: string) => {
  return http<Array<Recommendation>>({
    method: 'GET',
    url: '/recommendations',
    params: {
      name
    }
  })
}
