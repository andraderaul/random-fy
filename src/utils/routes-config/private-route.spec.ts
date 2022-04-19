import { Cookies } from '../cookies'
import { GetServerSidePropsContext } from 'next'
import { protectedRoutes } from './private-route'

describe('Testing private route', () => {
  const mockContext = {
    res: {
      writeHead: jest.fn(),
      end: jest.fn()
    }
  } as unknown as GetServerSidePropsContext

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return auth when the user is authenticated', async () => {
    const mockSession = {
      getAll: jest.fn().mockReturnValue({
        authorization: 'token'
      })
    } as unknown as typeof Cookies

    const auth = await protectedRoutes(mockContext, mockSession)
    expect(mockSession.getAll).toHaveBeenCalled()
    expect(auth).toBe('token')
  })

  it('should call redirect when the user is not authenticated', async () => {
    const mockSession = {
      getAll: jest.fn().mockReturnValue({})
    } as unknown as typeof Cookies

    const auth = await protectedRoutes(mockContext, mockSession)
    expect(mockContext.res.writeHead).toHaveBeenCalledTimes(1)
    expect(mockContext.res.end).toHaveBeenCalledTimes(1)
    expect(auth).toBeNull()
  })

  it('should handle when session is null', async () => {
    const mockSession = {
      getAll: jest.fn().mockReturnValue(null)
    } as unknown as typeof Cookies

    const auth = await protectedRoutes(mockContext, mockSession)

    expect(auth).toBeNull()
  })
})
