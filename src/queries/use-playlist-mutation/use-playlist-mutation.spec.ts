import { renderHook, waitFor } from '@testing-library/react'
import {
  wrapperReactQuery,
  forceRequestError,
  mockPlaylist,
  mockRecommendations
} from 'mock'

import { usePlaylistMutation } from './use-playlist-mutation'

describe('usePlaylistMutation', () => {
  it('when playlist mutate is loading return undefined data', async () => {
    const { result } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockRecommendations)
    await waitFor(() => {
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when playlist mutate is success return a data', async () => {
    const { result } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(mockRecommendations)
    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
      expect(result.current.data?.data).toEqual(mockPlaylist)
    })
  })

  it('when playlist mutate is error return a data error', async () => {
    forceRequestError({ method: 'post' })
    const { result } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })

    result.current.mutate(mockRecommendations)
    await waitFor(() => {
      expect(result.current.isError).toBe(true)
      expect(result.current.error?.response?.data).toEqual({
        error: 'Invalid data'
      })
    })
  })
})
