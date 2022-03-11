import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { mockRecommendations } from 'mock'

import { Picture } from './picture'

describe('<Picture />', () => {
  it('should be render a Picture feature', () => {
    render(<Picture artists={mockRecommendations} />)

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
    const { container } = render(<Picture artists={[]} />)

    expect(container.firstChild).toBeNull()
  })

  it('should be able to download the generated picture', () => {
    const html2canvasMock = jest
      .fn()
      .mockResolvedValue({ toDataURL: jest.fn() })
    render(
      <Picture artists={mockRecommendations} html2canvas={html2canvasMock} />
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
