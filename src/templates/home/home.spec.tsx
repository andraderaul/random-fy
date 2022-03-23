import { waitFor } from '@testing-library/react'
import { renderWithClient } from 'mock'

import { Home } from './home'

describe('<Home />', () => {
  it('should be render a Home template', async () => {
    const rendered = renderWithClient(<Home />)

    await waitFor(() => rendered.getAllByLabelText('image box'))

    expect(rendered.getAllByLabelText('image box')).toBeTruthy()
  })
})
