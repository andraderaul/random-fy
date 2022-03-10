import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe('<Footer/>', () => {
  it('should be render a Footer component', () => {
    render(<Footer />)

    expect(screen.getByText(/created with by/i)).toBeInTheDocument()
    expect(screen.getByText(/♥️/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /raul andrade/i
      })
    ).toBeInTheDocument()
  })
})
