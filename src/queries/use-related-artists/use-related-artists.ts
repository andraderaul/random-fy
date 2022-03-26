import { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'
import { getRelatedArtists } from 'services'
import { Recommendation } from 'types'

export const useRelatedArtistsMutation = () => {
  return useMutation<AxiosResponse<Array<Recommendation>>, AxiosError, string>(
    (data) => getRelatedArtists(data),
    {
      onSuccess: () => {
        toast.success('We find related artists!')
      },
      onError: () => {
        toast.error('Something wrong with the search! ')
      }
    }
  )
}
