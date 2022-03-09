import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ImageBox } from './image-box'

describe('<ImageBox />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const onLikeMock = jest.fn()
  const onDislikeMock = jest.fn()

  it('should be render a ImageBox component', () => {
    render(
      <ImageBox
        href="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        onDislike={onDislikeMock}
        imgSrc="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        audioSrc="audio"
        onLike={onLikeMock}
        artist="artist test"
        track="track test"
      />
    )

    expect(
      screen.getByRole('img', {
        name: /artist test/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/artist test/i)).toBeInTheDocument()
    expect(screen.getByText(/track test/i)).toBeInTheDocument()

    expect(screen.getByLabelText('like')).toBeInTheDocument()
  })

  it('should be to click on like', () => {
    render(
      <ImageBox
        href="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        onDislike={onDislikeMock}
        imgSrc="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        audioSrc="audio"
        onLike={onLikeMock}
        artist="artist test"
        track="track test"
      />
    )

    const likeButton = screen.getByLabelText('like')
    act(() => {
      userEvent.click(likeButton)
    })
    expect(onLikeMock).toHaveBeenCalled()
  })

  it('should be to click on dislike', () => {
    render(
      <ImageBox
        href="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        onDislike={onDislikeMock}
        imgSrc="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        audioSrc="audio"
        onLike={onLikeMock}
        artist="artist test"
        track="track test"
      />
    )

    const dislikeButton = screen.getByLabelText('dislike')
    act(() => {
      userEvent.click(dislikeButton)
    })
    expect(onDislikeMock).toHaveBeenCalled()
  })
})
