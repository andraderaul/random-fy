import { AxiosError, AxiosResponse } from 'axios'
import toast from 'react-hot-toast'
import { useTranslation } from 'next-i18next'
import { useMutation } from 'react-query'

import { createPlaylist } from 'services'
import { Playlist, Recommendation } from 'types'

export const usePlaylistMutation = () => {
  const { t } = useTranslation('common')

  return useMutation<
    AxiosResponse<Playlist>,
    AxiosError,
    Array<Recommendation>
  >((data) => createPlaylist(data), {
    onSuccess: () => {
      toast.success(t('toast.success'))
    },
    onError: () => {
      toast.error(t('toast.error'))
    }
  })
}
