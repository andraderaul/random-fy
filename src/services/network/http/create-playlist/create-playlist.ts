import { Recommendation } from '../../../../types'
import { http } from '../http'

export const createPlaylist = async (data: Array<Recommendation>) => {
  return await http({
    method: 'POST',
    url: '/playlist',
    data: data
  })
}
