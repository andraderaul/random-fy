import Image from 'next/image'
import html2canvasExternal from 'html2canvas'
import { SubTitle, Title } from 'components'
import { Recommendation } from 'types'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'

type HTMLToImageProps = {
  artists: Array<Recommendation>
  html2canvas?: typeof html2canvasExternal
}

export const HTMLToImage = ({
  artists,
  html2canvas = html2canvasExternal
}: HTMLToImageProps) => {
  const printIMG = () => {
    const domElement = document.getElementById('grid')

    if (!domElement) return

    html2canvas(domElement, {
      onclone: (document) => {
        const button = document.getElementById('download')
        const subtitle = document.getElementById('subtitle')
        if (button && subtitle) {
          button.style.visibility = 'hidden'
          subtitle.style.visibility = 'hidden'
        }
      }
    }).then((canvas) => {
      const image = canvas.toDataURL('png')
      const a = document.createElement('a')
      a.setAttribute('download', 'randomfy.png')
      a.setAttribute('href', image)
      a.click()
    })
  }

  return artists.length >= MAX_RANDOM_FY_ITEMS ? (
    <div id="grid" className="max-w-5xl my-0 mx-auto">
      <div className="p-4">
        <Title>Randomfy</Title>
      </div>
      <div className="p-4" id="subtitle">
        <SubTitle>You can download your randomfy!</SubTitle>
      </div>
      <div className="grid grid-cols-4">
        {artists.map((artist, index) => (
          <Image
            key={`${index} - ${artist.id}`}
            alt={artist.name}
            src={artist.images[0].url}
            width="300"
            height="300"
          />
        ))}
      </div>
      <div className="flex justify-center p-10">
        <button
          id="download"
          className="flex justify-evenly items-center w-56 p-3 rounded-full font-semibold 
              text-center text-gray-100 dark:text-gray-800 bg-gray-900 dark:bg-gray-200"
          aria-label="download button"
          onClick={printIMG}
        >
          Download Image
        </button>
      </div>
    </div>
  ) : null
}
