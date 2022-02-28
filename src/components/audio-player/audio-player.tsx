import { useEffect } from 'react'
import { useAudio as ReactUseAudio } from 'react-use'
import { PlayIcon, PauseIcon } from '@heroicons/react/solid'

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

  const { volume } = controls

  useEffect(() => {
    volume(0.1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex justify-center p-2">
      {audio}
      {state.playing ? (
        <PauseIcon
          aria-label="pause-icon"
          className="h-20 w-20 sm:h-10 sm:w-10 dark:fill-gray-100 fill-gray-600 cursor-pointer
          hover:scale-110
          transition duration-200 ease-out hover:ease-in"
          type="button"
          onClick={controls.pause}
        />
      ) : (
        <PlayIcon
          aria-label="play-icon"
          className="h-20 w-20 sm:h-10 sm:w-10 dark:fill-gray-100 fill-gray-600 cursor-pointer
          hover:scale-110
          transition duration-200 ease-out hover:ease-in"
          type="button"
          onClick={controls.play}
        />
      )}
    </div>
  )
}
