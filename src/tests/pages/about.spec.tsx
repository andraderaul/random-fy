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

    expect(
      screen.getByRole('heading', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /how it works/i
      })
    ).toBeInTheDocument()
  })
})
