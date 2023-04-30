import Image from 'next/image'
import { PrimaryButton, PrimaryText } from 'components'
import { Recommendation } from 'types'
import { MAX_RANDOM_FY_ITEMS } from '../../constants'
import { useComponentToImage } from 'hook'

type PictureProps = {
  artists: Array<Recommendation>
}

export const ImageCollage = ({ artists }: PictureProps) => {
  const { downloadImage } = useComponentToImage({
    elementName: 'grid',
    fileName: 'randomfy.png'
  })

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
            priority
          />
        ))}
      </div>
      <div className="flex justify-center p-10">
        <PrimaryButton
          id="download"
          onClick={downloadImage}
          ariaLabel="download button"
        >
          Download Image
        </PrimaryButton>
      </div>
    </div>
  ) : null
}
