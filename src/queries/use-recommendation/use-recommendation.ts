import { AxiosError, AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { getRecomendations } from 'services'
import { Recommendation } from 'types'

export const useRecommendation = (id: string, trackId = '') => {
  return useQuery<AxiosResponse<Array<Recommendation>>, AxiosError>(
    ['recomendations', id, trackId],
    () => getRecomendations(id),
    {
      refetchOnWindowFocus: false
    }
  )
}
