import { render, screen } from '@testing-library/react'
import Logout from 'pages/logout'

describe('<Logout />', () => {
  it('should be render a Logout page', () => {
    render(<Logout />)

    expect(screen.getByText(/logout\.\.\./i)).toBeInTheDocument()
  })
})
