import { renderHook, waitFor } from '@testing-library/react'
import {
  wrapperReactQuery,
  forceRequestError,
  mockRelated,
  mockArtist
} from 'mock'

import { useRelatedArtistsMutation } from './use-related-artists'

describe('useRelatedArtistsMutation', () => {
  it('when related artists mutate is loading return undefined data', async () => {
    const { result } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockArtist.name)
    await waitFor(() => {
      // expect(result.current.isLoading).toBe(true)
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when related artists mutate is success return a data', async () => {
    const { result } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockArtist.name)
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data?.data).toEqual(mockRelated)
    })
  })

  it('when related artists mutate is error return a data error', async () => {
    forceRequestError({ method: 'get' })
    const { result } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })

    result.current.mutate(mockArtist.name)
    await waitFor(() => {
      expect(result.current.isError).toBe(true)
      expect(result.current.error?.response?.data).toEqual({
        error: 'Invalid data'
      })
    })
  })
})
