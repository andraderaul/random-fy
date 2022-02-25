import { Recommendation } from '../../../../types'
import { http } from '../http'

export const getRecomendations = async (name: string) => {
  return await http<Array<Recommendation>>({
    method: 'GET',
    url: '/recommendations',
    params: {
      name
    }
  })
}
