import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Match } from './match'

import { mockRecommendations } from 'mock'
import { MAX_ARTISTS_TO_SHOW_PER_TURN } from '../../constants'

describe('<Match />', () => {
  const artistIdMock = '12MAX_ARTISTS_TO_SHOW_PER_TURN'
  const setLikedArtistsMock = jest.fn()
  const refetchMock = jest.fn()

  const returnValue = {
    data: {
      data: []
    },
    isError: false,
    isLoading: false,
    isRefetching: false,
    refetch: refetchMock
  }

  const mockData = mockRecommendations.slice(0, MAX_ARTISTS_TO_SHOW_PER_TURN)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be render a Match feature', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockData }
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getAllByText(mockData[0].track.name)).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
    expect(screen.getAllByText(mockData[0].name)).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
  })

  it('should be render a error component ', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      isError: true
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getByText(/something wrong! :\(/i)).toBeInTheDocument()
  })

  it('should be render a loading component ', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      isLoading: true
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getAllByTestId('image-box-skeleton')).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
  })

  it('should be return null when artists length more than the constant MAX_RANDOM_FY_ITEMS', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockRecommendations }
    })

    const { container } = render(
      <Match
        likedArtists={mockRecommendations}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(container.firstChild).toBeNull()
  })

  it('should be able to refetch recommendations', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockRecommendations.slice(0, MAX_ARTISTS_TO_SHOW_PER_TURN) }
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    const refreshButton = screen.getByLabelText('dislike')
    expect(refreshButton).toBeInTheDocument()

    act(() => {
      if (refreshButton.firstChild)
        userEvent.click(refreshButton.firstChild as Element)
    })

    expect(refetchMock).toHaveBeenCalled()
  })

  it('should be render a refetching component ', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      isRefetching: true
    })

    render(
      <Match
        likedArtists={[]}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(screen.getAllByTestId('image-box-skeleton')).toHaveLength(
      MAX_ARTISTS_TO_SHOW_PER_TURN
    )
  })

  it('should be able to rerefetch recommendations, when a song already liked', () => {
    const usePlaylistMutationMock = jest.fn().mockReturnValue({
      ...returnValue,
      data: { data: mockRecommendations.slice(0, MAX_ARTISTS_TO_SHOW_PER_TURN) }
    })

    render(
      <Match
        likedArtists={mockRecommendations.slice(
          0,
          MAX_ARTISTS_TO_SHOW_PER_TURN
        )}
        artistId={artistIdMock}
        setLikedArtists={setLikedArtistsMock}
        useRecommendation={usePlaylistMutationMock}
      />
    )

    expect(refetchMock).toHaveBeenCalledTimes(1)
  })
})
