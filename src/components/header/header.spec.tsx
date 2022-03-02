import { render, screen } from '@testing-library/react'
import { Header } from './header'

describe('<Header />', () => {
  it('should be render a authenticated Header component', () => {
    const getAllMock = jest.fn().mockReturnValue({
      authorization: 'token'
    })

    const CookiesMock = {
      getAll: getAllMock,
      destroy: jest.fn(),
      set: jest.fn()
    }

    render(<Header cookies={CookiesMock} />)

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

  it('should be render a not authenticated Header component', () => {
    const getAllMock = jest.fn().mockReturnValue({
      authorization: ''
    })

    const CookiesMock = {
      getAll: getAllMock,
      destroy: jest.fn(),
      set: jest.fn()
    }

    const { queryByText } = render(<Header cookies={CookiesMock} />)

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

    expect(queryByText(/log out/i)).not.toBeInTheDocument()
  })
})
