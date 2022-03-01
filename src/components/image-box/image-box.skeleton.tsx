import { Fragment } from 'react'

export const ImageBoxSkeleton = () => {
  return (
    <Fragment>
      {[1, 2, 3].map((item) => (
        <div
          data-testid="image-box-skeleton"
          key={item}
          className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg animate-pulse"
        >
          <div
            className="rounded bg-white dark:bg-neutral-900 p-5 hover:grayscale 
        transition duration-200 ease-out hover:ease-in"
          >
            <div className="pb-3 p-2 flex justify-center">
              <div className="rounded-full bg-gray-600 dark:bg-gray-100 h-8 w-8" />
            </div>
            <div
              aria-label="image loading"
              className="rounded w-72 h-72 bg-gray-300 dark:bg-gray-600"
            />

            <div className="mt-4 w-20 h-4 bg-gray-800 dark:bg-gray-100 rounded" />
            <div className="mt-4 w-6/12 h-4 bg-gray-500 dark:bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </Fragment>
  )
}
