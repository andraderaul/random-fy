import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('<Header />', () => {
  it('should be render a Header component', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', {
        name: /randomfy/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /home/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /about/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('link', {
        name: /log out/i
      })
    ).toBeInTheDocument()
  })
})
