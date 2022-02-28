import { useMutation } from 'react-query'
import { createPlaylist } from 'services'
import { Recommendation } from 'types'

export const usePlaylistMutation = () => {
  return useMutation((data: Array<Recommendation>) => createPlaylist(data), {
    onSuccess: () => {
      console.log('success')
    },
    onError: (error) => {
      console.log(error)
    }
  })
}
