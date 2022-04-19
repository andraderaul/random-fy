import Image from 'next/image'
import { AudioPlayer } from '..'
import { HeartIcon, XIcon } from '@heroicons/react/outline'

const getCommonStyle = (
  color: 'spotifyGreen' | 'red-500'
) => `h-14 w-14 sm:h-10 sm:w-10 stroke-gray-600 dark:stroke-gray-50 
hover:stroke-${color} hover:fill-${color} 
hover:scale-110 cursor-pointer transition duration-200 ease-out hover:ease-in`

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
    <div
      aria-label="image box"
      className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg dark:shadow-neutral-700"
    >
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
          alt={`Image of the artist: ${artist}`}
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
          <XIcon
            aria-label="dislike"
            className={getCommonStyle('red-500')}
            onClick={onDislike}
          />
          <AudioPlayer src={audioSrc} />
          <HeartIcon
            aria-label="like"
            className={getCommonStyle('spotifyGreen')}
            onClick={onLike}
          />
        </div>
      </div>
    </div>
  )
}
