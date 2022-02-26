import { useQuery } from 'react-query'
import { getRecomendations } from 'services'

export function useRecommendation(id: string) {
  return useQuery(['recomendations', id], () => getRecomendations(id))
}
