import { render, screen } from '@testing-library/react'
import About from 'pages/about'

describe('<About />', () => {
  it('should be render a About page', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        name: /randomfy/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/subtitle/i)).toBeInTheDocument()
    expect(screen.getByText(/disclaimer/i)).toBeInTheDocument()
    expect(screen.getByText(/ready/i)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /howitworks\.title/i
      })
    ).toBeInTheDocument()
    expect(screen.getByText(/howitworks\.p1/i)).toBeInTheDocument()
    expect(screen.getByText(/howitworks\.p2/i)).toBeInTheDocument()
  })
})
