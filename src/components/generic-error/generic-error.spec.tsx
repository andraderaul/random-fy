import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { GenericError } from './generic-error'

describe('<GenericError />', () => {
  it('should be render a GenericError component and click on tryAgain button', () => {
    const mockTryAgain = jest.fn()

    render(<GenericError tryAgain={mockTryAgain} />)

    expect(screen.getByText(/something wrong! :\(/i)).toBeInTheDocument()

    const tryAgainButton = screen.getByRole('button', {
      name: /try again/i
    })

    act(() => {
      userEvent.click(tryAgainButton)
    })

    expect(mockTryAgain).toHaveBeenCalled()
  })
})
