import { render, screen } from '@testing-library/react'
import { GetServerSidePropsContext } from 'next'
import Logout, { getServerSideProps } from 'pages/logout'
import { Cookies } from 'utils'

jest.mock('utils', () => ({
  Cookies: {
    destroy: jest.fn()
  }
}))

describe('<Logout />', () => {
  it('should be render a Logout page', () => {
    render(<Logout />)

    expect(screen.getByText(/title/i)).toBeInTheDocument()
  })

  it('should be able to destroy cookies and redirect to login', async () => {
    const context = {
      locale: 'en',
      res: {
        writeHead: jest.fn().mockReturnValue({
          end: jest.fn()
        })
      }
    } as unknown as GetServerSidePropsContext & { locale: string }

    const props = await getServerSideProps(context)
    expect(Cookies.destroy).toHaveBeenCalledWith({
      name: 'authorization',
      options: {
        ctx: context
      }
    })

    expect(context.res.writeHead).toHaveBeenCalledWith(302, {
      Location: '/'
    })
    expect(props).toHaveProperty('props._nextI18Next')
  })
})
