import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Recommendation } from 'types'
import { HTMLToImage } from './html-to-image'

//TODO: MOVE THIS TO A MOCK DIRECTORY
const artistsMock = [
  {
    id: '7zejo99XCAwPzycPCCaoM8',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b27355fd23d477d647c595c8ce5a',
        width: 640
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e0255fd23d477d647c595c8ce5a',
        width: 300
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d0000485155fd23d477d647c595c8ce5a',
        width: 64
      }
    ],
    type: 'artist',
    name: 'Michael Nyman Band',
    track: {
      name: 'Fish Beach',
      previewUrl:
        'https://p.scdn.co/mp3-preview/4fb1c7db76d70da33d74db84f6863b1d4dc582ab?cid=c400423b160b43dcbb941e61d7d4cd60'
    }
  },
  {
    id: '0s1ec6aPpRZ4DCj15w1EFg',
    images: [
      {
        height: 1000,
        url: 'https://i.scdn.co/image/549e391d35cccd6f7eb602102dd1378d8afeb06a',
        width: 1000
      },
      {
        height: 640,
        url: 'https://i.scdn.co/image/7390a60d0952bc2bf22ba4cb7c4f20f8bf6cb597',
        width: 640
      },
      {
        height: 200,
        url: 'https://i.scdn.co/image/8b2da52578b6a565da52ae34db2aea368f1fdce0',
        width: 200
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/3d19a0ded34b4ff9b4cac7ab77a15f26c2b0d7e6',
        width: 64
      }
    ],
    type: 'artist',
    name: 'Dario Marianelli',
    track: {
      name: 'Someone Loves Us',
      previewUrl:
        'https://p.scdn.co/mp3-preview/9be2d96c8237bbc39b1778e66f917a27363a9e22?cid=c400423b160b43dcbb941e61d7d4cd60'
    }
  },
  {
    id: '3gGbSXSwHWmrUBIG9IUAau',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb2c64d38027090d363ea36044',
        width: 640
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab676161000051742c64d38027090d363ea36044',
        width: 320
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f1782c64d38027090d363ea36044',
        width: 160
      }
    ],
    type: 'artist',
    name: 'Zbigniew Preisner',
    track: {
      name: 'Les marionnettes',
      previewUrl:
        'https://p.scdn.co/mp3-preview/5ef82ca0e722ef6e51359140ba4d5a319eb35383?cid=c400423b160b43dcbb941e61d7d4cd60'
    }
  },
  {
    id: '3gGbSXSwHWmrUBIG9IUAau2',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab6761610000e5eb2c64d38027090d363ea36044',
        width: 640
      },
      {
        height: 320,
        url: 'https://i.scdn.co/image/ab676161000051742c64d38027090d363ea36044',
        width: 320
      },
      {
        height: 160,
        url: 'https://i.scdn.co/image/ab6761610000f1782c64d38027090d363ea36044',
        width: 160
      }
    ],
    type: 'artist',
    name: 'Zbigniew Preisner',
    track: {
      name: 'Les marionnettes',
      previewUrl:
        'https://p.scdn.co/mp3-preview/5ef82ca0e722ef6e51359140ba4d5a319eb35383?cid=c400423b160b43dcbb941e61d7d4cd60'
    }
  }
] as Array<Recommendation>

describe('<HTMLToImage />', () => {
  it('should be render a HTMLToImage component', () => {
    render(
      <HTMLToImage
        artists={[
          ...artistsMock,
          ...artistsMock,
          ...artistsMock,
          ...artistsMock,
          ...artistsMock
        ]}
      />
    )

    expect(
      screen.getByText(/you can download your randomfy!/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /download button/i
      })
    ).toBeInTheDocument()
  })

  it('should be return null when artists lenght less than nine', () => {
    const { container } = render(<HTMLToImage artists={[]} />)

    expect(container.firstChild).toBeNull()
  })

  it('should be able to download the generated image', () => {
    const html2canvasMock = jest
      .fn()
      .mockResolvedValue({ toDataURL: jest.fn() })
    render(
      <HTMLToImage
        artists={[
          ...artistsMock,
          ...artistsMock,
          ...artistsMock,
          ...artistsMock,
          ...artistsMock
        ]}
        html2canvas={html2canvasMock}
      />
    )

    const downloadButton = screen.getByRole('button', {
      name: /download button/i
    })

    act(() => {
      userEvent.click(downloadButton)
    })

    expect(html2canvasMock).toHaveBeenCalled()
  })
})
