import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GenericError } from './generic-error'

describe('<GenericError />', () => {
  it('should be render a GenericError component and click on tryAgain button', async () => {
    const mockTryAgain = jest.fn()

    render(<GenericError tryAgain={mockTryAgain} />)

    expect(screen.getByText(/error\.title/i)).toBeInTheDocument()

    const tryAgainButton = screen.getByRole('button', {
      name: /error\.subtitle/i
    })

    await userEvent.click(tryAgainButton)

    expect(mockTryAgain).toHaveBeenCalled()
  })
})
