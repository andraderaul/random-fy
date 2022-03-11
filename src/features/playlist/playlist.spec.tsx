import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { mockRecommendations } from 'mock'
import { Playlist } from './playlist'

describe('<Playlist />', () => {
  const mutateMock = jest.fn()
  const usePlaylistMutationMock = jest.fn().mockReturnValue({
    mutate: mutateMock
  })

  it('should be render a Playlist feature', () => {
    render(
      <Playlist
        artists={mockRecommendations}
        usePlaylist={usePlaylistMutationMock}
      />
    )

    expect(
      screen.getByText(/you can make a randomfy playlist!/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /create playlist button/i
      })
    ).toBeInTheDocument()
  })

  it('should be return null when artists length less than the constant MAX_RANDOM_FY_ITEMS', () => {
    const { container } = render(
      <Playlist artists={[]} usePlaylist={usePlaylistMutationMock} />
    )

    expect(container.firstChild).toBeNull()
  })

  it('should be able to create a playlist', () => {
    render(
      <Playlist
        artists={mockRecommendations}
        usePlaylist={usePlaylistMutationMock}
      />
    )

    const createPlaylistButton = screen.getByRole('button', {
      name: /create playlist button/i
    })

    act(() => {
      userEvent.click(createPlaylistButton)
    })

    expect(mutateMock).toHaveBeenCalled()
  })
})
