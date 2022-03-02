import { getRecomendations } from './get-recomendations'

import { artistMock, artistsMock } from 'mock'

describe('get recommendations', () => {
  it('should be able to get a recommendations', async () => {
    const response = await getRecomendations(artistMock.name)

    expect(response.request.method).toBe('GET')
    expect(response.config.url).toBe('/recommendations')
    expect(response.config.params?.name).toBe(artistMock.name)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(artistsMock)
  })
})
