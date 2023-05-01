import { renderHook, waitFor } from '@testing-library/react'
import { wrapperReactQuery, forceRequestError, mockRecommendations } from 'mock'

import { useRecommendation } from './use-recommendation'

describe('useRecommendation', () => {
  it('when use recommendation query is loading return undefined data', async () => {
    const { result } = renderHook(
      () => useRecommendation('artistId', 'trackId'),
      {
        wrapper: wrapperReactQuery
      }
    )

    await waitFor(() => {
      expect(result.current.isLoading).toBe(true)
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when use recommendation query is success return a data', async () => {
    const { result } = renderHook(
      () => useRecommendation('artistId', 'trackId'),
      {
        wrapper: wrapperReactQuery
      }
    )

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data?.data).toEqual(mockRecommendations)
    })
  })

  it('when use recommendation query is error return a data error', async () => {
    forceRequestError({ method: 'get' })

    const { result } = renderHook(
      () => useRecommendation('artistIdError', 'trackIdError'),
      {
        wrapper: wrapperReactQuery
      }
    )

    await waitFor(() => {
      expect(result.current.isError).toBe(true)
      expect(result.current.error?.response?.data).toEqual({
        error: 'Invalid data'
      })
    })
  })
})
