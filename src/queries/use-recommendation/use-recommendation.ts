import { AxiosError, AxiosResponse } from 'axios'
import { useQuery } from 'react-query'
import { getRecommendations } from 'services'
import { Recommendation } from 'types'

export const useRecommendation = (id: string, trackId = '') => {
  return useQuery<AxiosResponse<Array<Recommendation>>, AxiosError>(
    ['recommendations', id, trackId],
    () => getRecommendations(id),
    {
      refetchOnWindowFocus: false
    }
  )
}
