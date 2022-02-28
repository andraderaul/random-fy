import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ImageBox } from './image-box'

describe('<ImageBox />', () => {
  const heartIconPath = 'div > div:nth-child(2) > svg > path'
  const onLikeMock = jest.fn()

  it('should be render a ImageBox component', () => {
    const { container } = render(
      <ImageBox
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

    const heartButton = container.querySelector(heartIconPath)
    expect(heartButton).toBeInTheDocument()
  })

  it('should be to click on like', () => {
    const { container } = render(
      <ImageBox
        imgSrc="https://i.scdn.co/image/0a1865649e26dc7d377e4d16447a6e785f0b781d"
        audioSrc="audio"
        onLike={onLikeMock}
        artist="artist test"
        track="track test"
      />
    )

    const heartButton = container.querySelector(heartIconPath)
    act(() => {
      if (heartButton) userEvent.click(heartButton)
    })
    expect(onLikeMock).toHaveBeenCalled()
  })
})
