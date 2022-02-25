import Image from 'next/image'
import { AudioPlayer } from '..'
import { HeartIcon } from '@heroicons/react/outline'

type ImageBoxProps = {
  artist: string
  track: string
  imgSrc: string
  audioSrc: string
  onLike: () => void
}

export const ImageBox = ({
  artist,
  track,
  imgSrc,
  audioSrc,
  onLike
}: ImageBoxProps) => {
  return (
    <div className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg">
      <div
        className="rounded bg-white p-4 hover:grayscale 
        transition duration-200 ease-out hover:ease-in"
      >
        <AudioPlayer src={audioSrc} />
        <Image
          className="rounded"
          alt={artist}
          src={imgSrc}
          width="300"
          height="300"
        />
        <div className="flex flex-col items-start p-2">
          <strong className="w-64 truncate">{track}</strong>
          <p className="w-64 truncate">{artist}</p>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4">
        <HeartIcon
          className="h-10 w-10 stroke-gray-50 hover:stroke-red-500
           hover:fill-red-500 hover:scale-110 cursor-pointer 
           transition duration-200 ease-out hover:ease-in"
          onClick={onLike}
          type="button"
        />
      </div>
    </div>
  )
}
