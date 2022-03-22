import { PrimaryButton, PrimaryText } from 'components'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'
import { useComponentToImage } from 'hook'
import { Recommendation } from 'types'

type FestivalProps = {
  artists: Array<Recommendation>
}

const YEAR = new Date(Date.now()).getFullYear()

const getArtistsName = (artists: Array<Recommendation>) => [
  ...new Set(
    artists
      .sort((a, b) => b.popularity - a.popularity)
      .map((artist) => artist.name)
  )
]

export const Festival = ({ artists }: FestivalProps) => {
  const { downloadImage } = useComponentToImage({
    elementName: 'festival',
    fileName: 'randomfy-festival.png',
    button: 'festival-download',
    subtitle: 'festival-subtitle'
  })

  const artistsName = getArtistsName(artists)

  return artists.length >= MAX_RANDOM_FY_ITEMS ? (
    <div id="festival" className="max-w-5xl my-0 mx-auto">
      <div className="p-4">
        <PrimaryText id="festival-subtitle">
          You can download your festival!
        </PrimaryText>
      </div>
      <div
        className="min-h-96 p-10 flex flex-col
        justify-center items-center uppercase
        bg-gradient-to-t from-amber-200 via-yellow-50 to-amber-200
        text-gray-800 relative
        overflow-hidden
      "
      >
        <div className="z-10 mb-32 text-center">
          <div
            className="text-7xl flex flex-col 
          p-10 mb-32 font-extrabold text-red-500 font-mono"
          >
            <span>randomfest</span>
            <span>{YEAR}</span>
          </div>

          <div className="text-8xl p-4">
            {artistsName.slice(0, 1).map((artist) => (
              <span className="p-2" key={artist}>
                {artist}
              </span>
            ))}
          </div>
          <div className="text-6xl flex flex-wrap justify-evenly items-center pb-4">
            {artistsName.slice(1, 3).map((artist) => (
              <span className="max-w-md" key={artist}>
                {artist}
              </span>
            ))}
          </div>
          <div className="text-5xl flex flex-wrap justify-around items-center pb-4">
            {artistsName.slice(3, 6).map((artist) => (
              <span className="max-w-xs" key={artist}>
                {artist}
              </span>
            ))}
          </div>
          <div className="text-2xl flex flex-wrap justify-around">
            {artistsName.slice(6).map((artist) => (
              <span className="" key={artist}>
                {artist}
              </span>
            ))}
          </div>
        </div>

        <img
          className="hidden md:block absolute bottom-0 opacity-50 blur-sm"
          src="/img/bg.jpg"
        />
        <span>Randomfy</span>
      </div>
      <div className="flex justify-center p-10">
        <PrimaryButton
          id="festival-download"
          onClick={downloadImage}
          ariaLabel="download button"
        >
          Download Festival
        </PrimaryButton>
      </div>
    </div>
  ) : null
}
