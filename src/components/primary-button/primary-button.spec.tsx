import { render, screen } from '@testing-library/react'
import { PrimaryButton } from './primary-button'

describe('<PrimaryButton/>', () => {
  it('should be render a PrimaryText component', () => {
    render(
      <PrimaryButton onClick={jest.fn()}>hello button testing</PrimaryButton>
    )

    expect(
      screen.getByRole('button', {
        name: /hello button testing/i
      })
    ).toBeInTheDocument()
  })
})
