import Image from 'next/image'
import { Fragment } from 'react'

export const ImageBoxSkeleton = () => {
  return (
    <Fragment>
      <div
        data-testid="image-box-skeleton"
        className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg animate-pulse"
      >
        <div className="rounded bg-white dark:bg-neutral-900 p-4">
          <div className="pb-2 cursor-pointer">
            <Image
              alt="spotify logo"
              src="/img/Spotify_Logo_RGB_Green.png"
              width="100"
              height="30"
            />
          </div>

          <div
            aria-label="image loading"
            className="w-72 h-72 bg-gray-300 dark:bg-gray-600"
          />
          <div className="mt-4 w-20 h-4 bg-gray-800 dark:bg-gray-100 rounded" />
          <div className="mt-4 mb-2 w-6/12 h-4 bg-gray-500 dark:bg-gray-200 rounded" />

          <div className="pt-2 pb-3 flex justify-around items-center">
            <div
              className="rounded-full bg-gray-600 
              dark:bg-gray-100
              h-12 w-12
              sm:h-8 sm:w-8"
            />
            <div
              className="rounded-full bg-gray-600 
              dark:bg-gray-100
              h-12 w-12 
              sm:h-8 sm:w-8"
            />
            <div
              className="rounded-full bg-gray-600 
            dark:bg-gray-100
            h-12 w-12 
            sm:h-8 sm:w-8"
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
