import { getRandomArtist } from './get-random-artist'

import { mockArtist } from 'mock'

describe('get random artist', () => {
  it('should be able to get a random artist', async () => {
    const response = await getRandomArtist()

    expect(response.request.method).toBe('GET')
    expect(response.config.url).toBe('/random-top-artist')
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockArtist)
  })
})
