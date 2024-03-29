import { render, screen, waitFor, act } from '@testing-library/react'
import { forceRequestError, renderWithClient } from 'mock'
import { GetServerSidePropsContext } from 'next'
import Index, { getServerSideProps } from 'pages/index'

jest.mock('utils', () => ({
  ...jest.requireActual('utils'),
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

  it('when user is not logged should be render a login template', () => {
    render(<Index artistId="" auth="" />)

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

  describe('when the user is logged should render a home template', () => {
    it('when the recommendations are loading should be display the skeleton loader', async () => {
      renderWithClient(<Index artistId="123" auth="321" />)

      await act(async () => {
        expect(screen.getByLabelText('image loading')).toBeInTheDocument()
      })
    })

    it('when user is logged should be render a recommendation index page', async () => {
      const rendered = renderWithClient(<Index artistId="123" auth="321" />)

      await waitFor(() => rendered.getAllByLabelText('image box'))

      expect(rendered.getAllByLabelText('image box')).toBeTruthy()
    })

    it('when the recommendations are in error should be display the error component', async () => {
      forceRequestError({ method: 'get' })
      const rendered = renderWithClient(<Index artistId="123" auth="321" />)

      await waitFor(() => rendered.getByText('error.title'))

      expect(screen.getByText('error.title')).toBeInTheDocument()
    })
  })

  describe('testing getServerSideProps', () => {
    const context = {
      locale: 'en',
      res: {
        writeHead: jest.fn().mockReturnValue({
          end: jest.fn()
        })
      }
    } as unknown as GetServerSidePropsContext & { locale: string }

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
