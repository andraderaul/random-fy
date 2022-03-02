import { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { useMutation } from 'react-query'

import { createPlaylist } from 'services'
import { Playlist, Recommendation } from 'types'

export const usePlaylistMutation = () => {
  return useMutation<
    AxiosResponse<Playlist>,
    AxiosError,
    Array<Recommendation>
  >((data) => createPlaylist(data), {
    onSuccess: () => {
      toast.success('Playlist create with success!')
    },
    onError: () => {
      toast.error('Something wrong with the Playlist! ')
    }
  })
}
