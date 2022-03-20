import { Title } from 'components'
import Image from 'next/image'
import { Recommendation } from 'types'

type FestivalProps = {
  artists: Array<Recommendation>
}
export const Festival = ({ artists }: FestivalProps) => {
  const artistsName = artists.map((artist) => artist.name)

  console.log(artistsName)
  return (
    <div
      className="min-h-96 p-10 flex flex-col
      justify-center items-center uppercase
      bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-700
      text-gray-800 dark:text-gray-200 relative
      overflow-hidden
      "
    >
      <div className="z-10 mb-32">
        <div className="text-7xl p-10 mb-32 font-extrabold text-red-500">
          <span>randomfest 2022</span>
        </div>

        <div className="text-9xl p-2 text-center">
          {artistsName.slice(0, 1).map((artist) => (
            <span className="p-2" key={artist}>
              {artist}
            </span>
          ))}
        </div>
        <div className="text-7xl flex flex-wrap justify-center">
          {artistsName.slice(1, 3).map((artist) => (
            <span className="p-2" key={artist}>
              {artist}
            </span>
          ))}
        </div>
        <div className="text-4xl flex flex-wrap justify-center">
          {artistsName.slice(3, 6).map((artist) => (
            <span className="p-2" key={artist}>
              {artist}
            </span>
          ))}
        </div>
        <div className="text-xl flex flex-wrap justify-center">
          {artistsName.slice(6).map((artist) => (
            <span className="p-2" key={artist}>
              {artist}
            </span>
          ))}
        </div>
      </div>

      <img className="absolute bottom-0 opacity-80" src="/img/bg.jpg" />

      {/* <div
        className="
        min-h-96
        opacity-10
        absolute inset-0
        bg-[url('/img/bg.jpg')]
        z-10"
      /> */}
    </div>
  )
}
//https://dribbble.com/shots/6129776-Poster-close-up
