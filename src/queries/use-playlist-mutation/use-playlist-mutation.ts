import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

import { createPlaylist } from 'services'
import { Recommendation } from 'types'

export const usePlaylistMutation = () => {
  return useMutation((data: Array<Recommendation>) => createPlaylist(data), {
    onSuccess: () => {
      toast.success('Playlist create with success!')
    },
    onError: () => {
      toast.error('Something wrong with the Playlist! ')
    }
  })
}
