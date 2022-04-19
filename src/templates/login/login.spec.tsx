import { render, screen } from '@testing-library/react'

import { Login } from './login'

describe('<Login />', () => {
  it('should be render a Login template', () => {
    render(<Login />)

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
      screen.getByRole('link', {
        name: /login button/i
      })
    ).toBeInTheDocument()
  })
})
