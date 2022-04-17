import { screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithClient } from 'mock'
import Search, { getServerSideProps } from 'pages/search'

describe('<Search />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to render a search page', () => {
    renderWithClient(<Search auth="123" />)

    expect(
      screen.getByRole('textbox', {
        name: /search/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', {
        name: /search/i
      })
    ).toBeInTheDocument()
  })

  it('should be able to search by artist', async () => {
    renderWithClient(<Search auth="123" />)

    const inputSearch = screen.getByRole('textbox', {
      name: /search/i
    })

    const searchButton = screen.getByRole('button', {
      name: /search/i
    })

    await act(async () => {
      const text = 'bring me the horizon'
      userEvent.type(inputSearch, text)
    })

    await act(async () => {
      userEvent.click(searchButton)
    })

    expect(
      screen.getByRole('button', {
        name: /create playlist button/i
      })
    ).toBeInTheDocument()
  })
})
