import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRecommendations } from 'mock'
import { useComponentToImage } from 'hook'
import { ImageCollage } from './image-collage'

jest.mock('hook', () => ({
  useComponentToImage: jest.fn().mockReturnValue({
    downloadImage: jest.fn()
  })
}))

describe('<ImageCollage />', () => {
  it('should be render a ImageCollage feature', () => {
    render(<ImageCollage artists={mockRecommendations} />)

    expect(
      screen.getByText(/you can download your randomfy!/i)
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /download button/i
      })
    ).toBeInTheDocument()
  })

  it('should be return null when artists length less than the constant MAX_RANDOM_FY_ITEMS', () => {
    const { container } = render(<ImageCollage artists={[]} />)

    expect(container.firstChild).toBeNull()
  })

  it('should be able to download the generated Image', async () => {
    render(<ImageCollage artists={mockRecommendations} />)

    expect(useComponentToImage).toHaveBeenCalledWith({
      elementName: 'grid',
      fileName: 'randomfy.png'
    })

    const { downloadImage } = useComponentToImage({
      elementName: 'grid',
      fileName: 'randomfy.png'
    })

    const downloadButton = screen.getByRole('button', {
      name: /download button/i
    })

    await userEvent.click(downloadButton)

    expect(downloadImage).toHaveBeenCalled()
  })
})
