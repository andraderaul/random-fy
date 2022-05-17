import { asyncMap } from './async-map'

describe('Testing parseToRecommendation', () => {
  const array = [1, 2, 3, 4]

  const fn = async (x: number) => Promise.resolve(x * 2)

  it('should be able map a async array', async () => {
    const result = await asyncMap(array, fn)

    expect(result).toEqual([2, 4, 6, 8])
  })
})
