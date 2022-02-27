import { render, screen } from '@testing-library/react'
import { Content } from './content'

describe('<Content/>', () => {
  it('should be render a Content component', () => {
    render(
      <Content>
        <h1>hello content testing</h1>
      </Content>
    )

    expect(
      screen.getByRole('heading', {
        name: /hello content testing/i
      })
    ).toBeInTheDocument()
  })
})
