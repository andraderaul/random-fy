import { screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithClient } from 'mock'
import { GetServerSidePropsContext } from 'next'
import Search, { getServerSideProps } from 'pages/search'

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
  protectedRoutes: jest.fn().mockResolvedValue('token')
}))

describe('<Search />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to render a search page', async () => {
    renderWithClient(<Search auth="123" />)

    await act(async () => {
      expect(
        screen.getByRole('textbox', {
          name: /search/i
        })
      ).toBeInTheDocument()
    })

    await act(async () => {
      expect(
        screen.getByRole('button', {
          name: /search/i
        })
      ).toBeInTheDocument()
    })
  })

  it('should be able to search by artist', async () => {
    const rendered = renderWithClient(<Search auth="123" />)

    const inputSearch = screen.getByRole('textbox', {
      name: /search/i
    })

    const searchButton = screen.getByRole('button', {
      name: /search/i
    })

    const text = 'bring me the horizon'
    await userEvent.type(inputSearch, text)

    await userEvent.click(searchButton)

    rendered.getByRole('button', {
      name: /create playlist button/i
    })

    expect(
      screen.getByRole('button', {
        name: /create playlist button/i
      })
    ).toBeInTheDocument()
  })

  describe('testing getServerSideProps', () => {
    it('should return auth props when user is authenticated', async () => {
      const props = await getServerSideProps(
        {} as unknown as GetServerSidePropsContext
      )
      expect(props).toEqual({ props: { auth: 'token' } })
    })
  })
})
