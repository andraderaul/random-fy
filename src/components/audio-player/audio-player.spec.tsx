import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AudioPlayer } from './audio-player'

const Component = () => <audio>audio</audio>

describe('<AudioPlayer />', () => {
  const playMock = jest.fn()
  const pauseMock = jest.fn()
  const volumeMock = jest.fn()

  const useAudioMock = jest.fn().mockReturnValue([
    <Component key={0} />,
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
    render(<AudioPlayer src="audio" useAudio={useAudioMock} />)

    expect(useAudioMock).toHaveBeenCalled()
    expect(volumeMock).toHaveBeenCalled()

    expect(screen.getByTestId('play-icon')).toBeInTheDocument()
  })

  it('should be able to click in the play button', async () => {
    render(<AudioPlayer src="audio" useAudio={useAudioMock} />)

    expect(useAudioMock).toHaveBeenCalled()

    const playButton = screen.getByTestId('play-icon')

    await userEvent.click(playButton)

    expect(playMock).toHaveBeenCalled()
  })

  it('should be able to click in the pause button', async () => {
    const useAudioMock = jest.fn().mockReturnValue([
      <Component key={0} />,
      { playing: true },
      {
        volume: volumeMock,
        pause: pauseMock,
        play: playMock
      }
    ])

    render(<AudioPlayer src="audio" useAudio={useAudioMock} />)

    expect(useAudioMock).toHaveBeenCalled()

    const pauseButton = screen.getByTestId('pause-icon')

    await userEvent.click(pauseButton)

    expect(pauseMock).toHaveBeenCalled()
  })
})
