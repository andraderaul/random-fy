import { render, screen } from '@testing-library/react'
import { PrimaryText } from './primary-text'

describe('<PrimaryText/>', () => {
  it('should be render a PrimaryText component', () => {
    render(<PrimaryText>hello text testing</PrimaryText>)

    expect(screen.getByText(/hello text testing/i)).toBeInTheDocument()
  })
})
