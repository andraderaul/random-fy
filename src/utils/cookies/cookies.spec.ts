import { NextPageContext } from 'next'
import { Cookies } from './cookies'
import nookies, { setCookie, destroyCookie } from 'nookies'

jest.mock('nookies', () => ({
  get: jest.fn().mockReturnValue({ token: 'fake-token' }),
  set: jest.fn(),
  parseCookies: jest.fn().mockReturnValue({ token: 'fake-token' }),
  setCookie: jest.fn(),
  destroyCookie: jest.fn(),
  destroy: jest.fn()
}))

describe('Cookies', () => {
  it('should be able to return all cookies when context is undefined', () => {
    const cookies = Cookies.getAll()
    expect(cookies).toEqual({ token: 'fake-token' })
  })

  it('should be able to return all cookies when context is not undefined', () => {
    const cookies = Cookies.getAll({ ctx: {} as NextPageContext })
    expect(cookies).toEqual({ token: 'fake-token' })
  })

  it('should be able to set cookies when context is undefined', () => {
    Cookies.set({
      name: 'token',
      value: 'fake-token'
    })
    expect(setCookie).toHaveBeenCalledWith(
      { res: undefined },
      'token',
      'fake-token',
      {
        secure: false
      }
    )
  })

  it('should be able to set cookies when context is not undefined', () => {
    Cookies.set({
      name: 'token',
      value: 'fake-token',
      options: {
        ctx: {} as NextPageContext
      }
    })

    expect(nookies.set).toHaveBeenCalledWith({}, 'token', 'fake-token', {
      secure: false
    })
  })

  it('should be able to destroy cookies when context is undefined', () => {
    Cookies.destroy({ name: 'token' })

    expect(destroyCookie).toHaveBeenCalledWith({ res: undefined }, 'token', {})
  })

  it('should be able to destroy cookies when context is not undefined', () => {
    Cookies.destroy({
      name: 'token',
      options: {
        ctx: {} as NextPageContext
      }
    })

    expect(destroyCookie).toHaveBeenCalledWith({ res: undefined }, 'token', {})
  })
})
