import { getRelatedArtists } from './get-related-artists'

import { mockArtist, mockRelated } from 'mock'

describe('get related artists', () => {
  it('should be able to get a recommendations', async () => {
    const response = await getRelatedArtists(mockArtist.name)

    expect(response.request.method).toBe('GET')
    expect(response.config.url).toBe('/search-artists')
    expect(response.config.params?.name).toBe(mockArtist.name)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockRelated)
  })
})
