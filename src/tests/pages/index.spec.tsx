import { render, screen, waitFor } from '@testing-library/react'
import { forceRequestError, renderWithClient } from 'mock'
import Index from 'pages/index'

describe('<Index />', () => {
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
})
