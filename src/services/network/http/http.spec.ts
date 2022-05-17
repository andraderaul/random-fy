import { setCustomHeader, http } from './http'
import { forceRequestError } from 'mock'
import { Cookies } from 'utils'
import { AxiosError } from 'axios'

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  Cookies: {
    getAll: jest.fn().mockReturnValue({
      authorization: 'token'
    })
  }
}))

describe('http testing', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it('should be able to set custom header', async () => {
    setCustomHeader({
      key: 'authorization',
      value: 'token'
    })

    const response = await http({
      method: 'GET',
      url: '/recommendations'
    })

    expect(response.config.headers?.authorization).toBe('token')
  })

  it('should be able to add authorization in the request', async () => {
    const response = await http({
      method: 'GET',
      url: '/recommendations'
    })

    expect(Cookies.getAll).toHaveBeenCalled()
    expect(response.config.headers?.authorization).toBe('token')
  })

  it('should be able to call custom response error interceptor', async () => {
    console.error = jest.fn()
    forceRequestError({
      method: 'get',
      status: 401
    })

    try {
      await http({
        method: 'GET',
        url: '/recommendations'
      })
    } catch (error) {
      expect(console.error).toHaveBeenCalledWith('authorization error')
      expect((error as AxiosError)?.request?.statusText).toBe('Unauthorized')
    }
  })
})
