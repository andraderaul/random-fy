import { Recommendation, Playlist } from 'types'
import { http } from '../http'

export const createPlaylist = async (data: Array<Recommendation>) => {
  return await http<Playlist>({
    method: 'POST',
    url: '/playlist',
    data: data
  })
}
