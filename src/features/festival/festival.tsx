import { Title } from 'components'
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
      bg-gradient-to-t from-amber-200 via-yellow-50 to-amber-200
      text-gray-800 relative"
    >
      <div className="text-7xl p-10 font-extrabold text-red-500">
        <span>randomfest 2022</span>
      </div>

      <div className="text-9xl p-2">
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

      <div
        className="
        min-h-96
        opacity-10
        absolute inset-0
        bg-[url('https://cdn.dribbble.com/users/1314444/screenshots/6129776/media/2365faf88f9faa6a211da550d8b04e89.png?compress=1&resize=800x600&vertical=top')]
        z-10"
      />
    </div>
  )
}
//https://dribbble.com/shots/6129776-Poster-close-up
