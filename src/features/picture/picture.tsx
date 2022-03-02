import Image from 'next/image'
import html2canvasExternal from 'html2canvas'
import { PrimaryButton, PrimaryText } from 'components'
import { Recommendation } from 'types'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'

type PictureProps = {
  artists: Array<Recommendation>
  html2canvas?: typeof html2canvasExternal
}

export const Picture = ({
  artists,
  html2canvas = html2canvasExternal
}: PictureProps) => {
  const printIMG = () => {
    const domElement = document.getElementById('grid')

    if (!domElement) return

    html2canvas(domElement, {
      onclone: (document) => {
        const button = document.getElementById('download')
        const subtitle = document.getElementById('subtitle')
        console.log(subtitle)
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
        <PrimaryText id="subtitle">You can download your randomfy!</PrimaryText>
      </div>
      <div className="grid grid-cols-4 relative">
        {artists.map((artist, index) => (
          <Image
            key={`${index} - ${artist.id}`}
            alt={artist.name}
            src={artist.track.images[0].url}
            width="300"
            height="300"
          />
        ))}
        <div className="absolute top-1 right-1">
          <p
            className="font-mono text-xl text-gray-800 text-center	
            font-semibold"
          >
            random-fy.vercel.app
          </p>
        </div>
        <div className="absolute bottom-3 left-1">
          <p
            className="font-mono text-xl text-gray-800 text-center	
            font-semibold"
          >
            random-fy.vercel.app
          </p>
        </div>
      </div>
      <div className="flex justify-center p-10">
        <PrimaryButton
          id="download"
          onClick={printIMG}
          ariaLabel="download button"
        >
          Download Image
        </PrimaryButton>
      </div>
    </div>
  ) : null
}
