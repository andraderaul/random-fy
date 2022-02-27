import { render, screen } from '@testing-library/react'
import { Title } from './title'

describe('<Title />', () => {
  it('should be render a Title component', () => {
    render(<Title>hello title testing </Title>)

    expect(
      screen.getByRole('heading', {
        name: /hello title testing/i
      })
    ).toBeInTheDocument()
  })
})
