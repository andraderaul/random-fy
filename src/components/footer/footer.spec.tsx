import { render, screen } from '@testing-library/react'
import { Footer } from './footer'

describe('<Footer/>', () => {
  it('should be render a Footer component', () => {
    render(<Footer />)

    expect(screen.getByText(/initial/i)).toBeInTheDocument()
    expect(screen.getByText(/prep/i)).toBeInTheDocument()
    expect(screen.getByText(/♥️/i)).toBeInTheDocument()
    expect(
      screen.getByRole('link', {
        name: /name/i
      })
    ).toBeInTheDocument()
  })
})
