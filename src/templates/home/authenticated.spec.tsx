import { waitFor } from '@testing-library/react'
import { renderWithClient } from 'mock'

import { Authenticated } from './authenticated'

describe('<Authenticated/>', () => {
  it('should be render a NonAuthenticated template', async () => {
    const rendered = renderWithClient(<Authenticated artistId="123" />)

    await waitFor(() => rendered.getAllByLabelText('image box'))

    expect(rendered.getAllByLabelText('image box')).toBeTruthy()
  })
})
