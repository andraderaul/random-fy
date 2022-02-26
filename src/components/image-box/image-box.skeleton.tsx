export const ImageBoxSkeleton = () => {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex flex-col max-w-xs relative shadow-md hover:shadow-lg animate-pulse"
        >
          <div
            className="rounded bg-white p-5 hover:grayscale 
        transition duration-200 ease-out hover:ease-in"
          >
            <div className="pb-3 p-2 flex justify-center">
              <div className="rounded-full bg-gray-600 h-8 w-8" />
            </div>
            <div
              aria-label="image loading"
              className="rounded w-72 h-72 bg-gray-300"
            />

            <div className="mt-4 w-20 h-4 bg-gray-800 rounded" />
            <div className="mt-4 w-6/12 h-4 bg-gray-500 rounded" />
          </div>
        </div>
      ))}
    </>
  )
}
