import { renderHook } from '@testing-library/react-hooks'
import {
  wrapperReactQuery,
  forceRequestError,
  mockRelated,
  mockArtist
} from 'mock'

import { useRelatedArtistsMutation } from './use-related-artists'

describe('useRelatedArtistsMutation', () => {
  it('when related artists mutate is loading return undefined data', async () => {
    const { result, waitFor } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockArtist.name)
    await waitFor(() => {
      result.current.isLoading
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when related artists mutate is success return a data', async () => {
    const { result, waitFor } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockArtist.name)
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data?.data).toEqual(mockRelated)
  })

  it('when related artists mutate is error return a data error', async () => {
    forceRequestError({ method: 'get' })
    const { result, waitFor } = renderHook(() => useRelatedArtistsMutation(), {
      wrapper: wrapperReactQuery
    })

    result.current.mutate(mockArtist.name)
    await waitFor(() => result.current.isError)
    expect(result.current.error?.response?.data).toEqual({
      error: 'Invalid data'
    })
  })
})
