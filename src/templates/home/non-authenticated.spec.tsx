import { render, screen } from '@testing-library/react'

import { NonAuthenticated } from './non-authenticated'

describe('<NonAuthenticated />', () => {
  it('should be render a NonAuthenticated template', () => {
    render(<NonAuthenticated />)

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
        name: /login button/i
      })
    ).toBeInTheDocument()
  })
})
