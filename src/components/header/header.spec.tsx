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

    const useIsFetchingMock = jest.fn().mockReturnValue(0)

    render(<Header cookies={CookiesMock} useIsFetching={useIsFetchingMock} />)

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

    const useIsFetchingMock = jest.fn().mockReturnValue(0)

    const { queryByText } = render(
      <Header cookies={CookiesMock} useIsFetching={useIsFetchingMock} />
    )

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

  it('should be render a is fetching icon', () => {
    const useIsFetchingMock = jest.fn().mockReturnValue(1)

    render(<Header useIsFetching={useIsFetchingMock} />)

    expect(screen.getByTestId('refeching')).toBeInTheDocument()
  })
})
