import { render, screen } from '@testing-library/react'
import { Grid } from './grid'

describe('<Grid/>', () => {
  it('should be render a Grid component', () => {
    render(
      <Grid>
        <h1>hello grid testing</h1>
      </Grid>
    )

    expect(
      screen.getByRole('heading', {
        name: /hello grid testing/i
      })
    ).toBeInTheDocument()
  })
})
