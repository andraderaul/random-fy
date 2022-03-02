import { renderHook } from '@testing-library/react-hooks'
import {
  wrapperReactQuery,
  forceRequestError,
  artistsMock,
  playlistMock
} from 'mock'

import { usePlaylistMutation } from './use-playlist-mutation'

describe('usePlaylistMutation', () => {
  it('when playlist mutate is loading return undefined data', async () => {
    const { result, waitFor } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(artistsMock)
    await waitFor(() => {
      result.current.isLoading
      expect(result.current.data).toBe(undefined)
    })
  })

  it('when playlist mutate is success return a data', async () => {
    const { result, waitFor } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })
    result.current.mutate(artistsMock)
    await waitFor(() => result.current.isSuccess)
    expect(result.current.data?.data).toEqual(playlistMock)
  })

  it('when playlist mutate is error return a data error', async () => {
    forceRequestError({ method: 'post' })
    const { result, waitFor } = renderHook(() => usePlaylistMutation(), {
      wrapper: wrapperReactQuery
    })

    result.current.mutate(artistsMock)
    await waitFor(() => result.current.isError)
    expect(result.current.error?.response?.data).toEqual({
      error: 'Invalid data'
    })
  })
})
