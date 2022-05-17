import { getLocale } from './get-locale'

describe('Testing getLocale', () => {
  it('should be able to get US locale from browser', async () => {
    Object.defineProperty(global.navigator, 'language', {
      value: 'en-US',
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('US')
  })

  it('should be able to get default locale from browser', async () => {
    Object.defineProperty(global.navigator, 'language', {
      value: undefined,
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('BR')
  })

  it("should be able to get default locale from browser when there aren't separator", () => {
    Object.defineProperty(global.navigator, 'language', {
      value: 'es',
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('BR')
  })

  it('should be able to get default locale from browser when there are separator but nothing after', () => {
    Object.defineProperty(global.navigator, 'language', {
      value: 'es-',
      configurable: true
    })

    const result = getLocale()

    expect(result).toBe('BR')
  })
})
