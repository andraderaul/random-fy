import Image from 'next/image'
import { AudioPlayer } from '..'
import { HeartIcon, XIcon } from '@heroicons/react/outline'

type ImageBoxProps = {
  href: string
  artist: string
  track: string
  imgSrc: string
  audioSrc: string
  onLike: () => void
  onDislike: () => void
}

export const ImageBox = ({
  href,
  artist,
  track,
  imgSrc,
  audioSrc,
  onLike,
  onDislike
}: ImageBoxProps) => {
  return (
    <div className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg dark:shadow-neutral-700">
      <div
        className="rounded bg-white dark:bg-neutral-900 p-4 
        transition duration-200 ease-out hover:ease-in"
      >
        <div className="pb-2 cursor-pointer">
          <a
            aria-label="Open in Spotify"
            target="_blank"
            href={href}
            rel="noreferrer"
          >
            <Image
              alt="spotify logo"
              src="/img/Spotify_Logo_RGB_Green.png"
              width="100"
              height="30"
            />
          </a>
        </div>
        <Image
          className="rounded"
          alt={artist}
          src={imgSrc}
          width="300"
          height="300"
        />
        <div className="flex flex-col items-start p-2">
          <strong className="w-64 truncate dark:text-neutral-200">
            {track}
          </strong>
          <p className="w-64 truncate dark:text-neutral-200">{artist}</p>
        </div>

        <div className="flex justify-around items-center">
          <HeartIcon
            aria-label="heart-icon"
            className="h-20 w-20 sm:h-10 sm:w-10 stroke-gray-600 dark:stroke-gray-50 hover:stroke-spotifyGreen
           hover:fill-spotifyGreen hover:scale-110 cursor-pointer 
           transition duration-200 ease-out hover:ease-in"
            onClick={onLike}
            type="button"
          />

          <AudioPlayer src={audioSrc} />

          <XIcon
            aria-label="heart-icon"
            className="h-20 w-20 sm:h-10 sm:w-10 stroke-gray-600 dark:stroke-gray-50 hover:stroke-red-500
           hover:fill-red-500 hover:scale-110 cursor-pointer 
           transition duration-200 ease-out hover:ease-in"
            onClick={onDislike}
            type="button"
          />
        </div>
      </div>
    </div>
  )
}
