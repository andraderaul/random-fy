import { createPlaylist } from './create-playlist'

import { artistsMock, playlistMock } from 'mock'

describe('create playlist', () => {
  it('should be able to create a playlist', async () => {
    const response = await createPlaylist(artistsMock)

    expect(response.request.method).toBe('POST')
    expect(response.config.url).toBe('/playlist')
    expect(response.status).toBe(201)
    expect(response.request.data).toBe(JSON.stringify(artistsMock))
    expect(response.data).toEqual(playlistMock)
  })
})
