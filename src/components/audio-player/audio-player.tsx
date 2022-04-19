import { useContext, useEffect } from 'react'
import { useAudio as ReactUseAudio } from 'react-use'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'
import { AudioContext } from 'contexts'

type AudioPlayerProps = {
  src: string
  useAudio?: typeof ReactUseAudio
}

export const AudioPlayer = ({
  src,
  useAudio = ReactUseAudio
}: AudioPlayerProps) => {
  const [audio, state, controls] = useAudio({
    src: src,
    autoPlay: false
  })

  const { source, setSource } = useContext(AudioContext)

  const { volume, play, pause } = controls

  useEffect(() => {
    if (src !== source) {
      pause()
    }
  }, [source, src, pause])

  useEffect(() => {
    /**
     * @disclaimer
     * I don't know why when I add volume function to array deps
     * this component receive this error
     * "Maximum update depth exceeded. This can happen when a component calls setState inside"
     */
    volume(0.1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePlay = () => {
    play()
    setSource?.(src)
  }

  const commonStyle = `h-14 w-14 sm:h-10 sm:w-10 dark:fill-gray-100 fill-gray-600 
    cursor-pointer hover:scale-110 transition duration-200 ease-out hover:ease-in`

  return (
    <div className="flex justify-center p-2">
      {audio}
      {state.playing ? (
        <PauseIcon
          aria-label="pause-icon"
          className={commonStyle}
          onClick={pause}
        />
      ) : (
        <PlayIcon
          aria-label="play-icon"
          className={commonStyle}
          onClick={handlePlay}
        />
      )}
    </div>
  )
}
