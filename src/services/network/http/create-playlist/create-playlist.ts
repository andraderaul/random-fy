import { Recommendation, Playlist } from 'types'
import { http } from '../http'

export const createPlaylist = (data: Array<Recommendation>) => {
  return http<Playlist>({
    method: 'POST',
    url: '/playlist',
    data: data
  })
}
