import { render, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AudioPlayer } from './audio-player'

const Component = () => <audio>audio</audio>

describe('<AudioPlayer />', () => {
  const iconPath = 'div > div > svg > path'

  const playMock = jest.fn()
  const pauseMock = jest.fn()
  const volumeMock = jest.fn()

  const useAudioMock = jest.fn().mockReturnValue([
    Component,
    { playing: false },
    {
      volume: volumeMock,
      pause: pauseMock,
      play: playMock
    }
  ])

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be render a AudioPlayer component', () => {
    const { container } = render(
      <AudioPlayer src="audio" useAudio={useAudioMock} />
    )

    expect(useAudioMock).toHaveBeenCalled()
    expect(volumeMock).toHaveBeenCalled()

    expect(container.querySelector(iconPath)).toBeInTheDocument()
  })

  it('should be able to click in the play button', () => {
    const { container } = render(
      <AudioPlayer src="audio" useAudio={useAudioMock} />
    )

    expect(useAudioMock).toHaveBeenCalled()

    const playButton = container.querySelector(iconPath)

    act(() => {
      if (playButton) userEvent.click(playButton)
    })

    expect(playMock).toHaveBeenCalled()
  })

  it('should be able to click in the pause button', () => {
    const useAudioMock = jest.fn().mockReturnValue([
      jest.fn(),
      { playing: true },
      {
        volume: volumeMock,
        pause: pauseMock,
        play: playMock
      }
    ])

    const { container } = render(
      <AudioPlayer src="audio" useAudio={useAudioMock} />
    )

    expect(useAudioMock).toHaveBeenCalled()

    const playButton = container.querySelector(iconPath)

    act(() => {
      if (playButton) userEvent.click(playButton)
    })

    expect(pauseMock).toHaveBeenCalled()
  })
})
