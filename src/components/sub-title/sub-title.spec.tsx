import { render, screen } from '@testing-library/react'
import { SubTitle } from './sub-title'

describe('<SubTitle />', () => {
  it('should be render a SubTitle component', () => {
    render(<SubTitle>hello subtitle testing </SubTitle>)

    expect(
      screen.getByRole('heading', {
        name: /hello subtitle testing/i
      })
    ).toBeInTheDocument()
  })
})
