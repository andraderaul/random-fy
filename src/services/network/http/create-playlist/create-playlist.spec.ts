import { createPlaylist } from './create-playlist'

import { mockRecommendations, mockPlaylist } from 'mock'

describe('create playlist', () => {
  it('should be able to create a playlist', async () => {
    const response = await createPlaylist(mockRecommendations)

    expect(response.request.method).toBe('POST')
    expect(response.config.url).toBe('/playlist')
    expect(response.status).toBe(201)
    expect(response.config.data).toBe(JSON.stringify(mockRecommendations))
    expect(response.data).toEqual(mockPlaylist)
  })
})
