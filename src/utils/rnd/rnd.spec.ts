import { Rnd } from './rnd'

describe('Testing Rnd', () => {
  it('should be able to return a number between min and max', () => {
    const min = 1
    const max = 10

    expect(
      Rnd.getRndNumber({
        min,
        max
      })
    ).toBeLessThan(max)

    expect(
      Rnd.getRndNumber({
        min,
        max
      })
    ).toBeGreaterThanOrEqual(min)
  })

  it('should be able to return a random string', () => {
    expect(Rnd.generateRandomString(16)).toHaveLength(16)
  })
})
