import { render, screen, waitFor } from '@testing-library/react'
import { forceRequestError, renderWithClient } from 'mock'
import { GetServerSidePropsContext } from 'next'
import Index, { getServerSideProps } from 'pages/index'

jest.mock('utils', () => ({
  Cookies: {
    getAll: jest.fn().mockReturnValue({
      authorization: 'token'
    }),
    destroy: jest.fn()
  }
}))

describe('<Index />', () => {
  beforeAll(() => {
    jest.clearAllMocks()
  })

  it('when user is not logged should be render a landing index page', () => {
    render(<Index artistId="" auth="" />)

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

  describe('user is logged', () => {
    it('when the recommendations are loading should be display the skeleton loader', () => {
      renderWithClient(<Index artistId="123" auth="321" />)

      expect(screen.getByLabelText('image loading')).toBeInTheDocument()
    })

    it('when user is logged should be render a recommendation index page', async () => {
      const rendered = renderWithClient(<Index artistId="123" auth="321" />)

      await waitFor(() => rendered.getAllByLabelText('image box'))

      expect(rendered.getAllByLabelText('image box')).toBeTruthy()
    })

    it('when the recommendations are in error should be display the error component', async () => {
      forceRequestError({ method: 'get' })
      const rendered = renderWithClient(<Index artistId="123" auth="321" />)

      await waitFor(() => rendered.getByText('Something wrong! :('))

      expect(screen.getByText('Something wrong! :(')).toBeInTheDocument()
    })
  })

  describe('testing getServerSideProps', () => {
    const context = {
      res: {
        writeHead: jest.fn().mockReturnValue({
          end: jest.fn()
        })
      }
    } as unknown as GetServerSidePropsContext

    it('should be able to return valid artistId and auth props', async () => {
      const { props } = await getServerSideProps(context)
      expect(props?.auth).toBe('token')
      expect(props.artistId).toBeTruthy()
    })

    it('should be able to return invalid artistId and auth', async () => {
      console.error = jest.fn()
      forceRequestError({
        method: 'get',
        status: 401
      })

      const { props } = await getServerSideProps(context)

      expect(props?.auth).toBeNull()
      expect(props.artistId).toBeNull()
    })
  })
})
