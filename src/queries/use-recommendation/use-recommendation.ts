import { useQuery } from 'react-query'
import { getRecomendations } from 'services'

export const useRecommendation = (id: string, trackId = '') => {
  return useQuery(['recomendations', id, trackId], () => getRecomendations(id))
}
