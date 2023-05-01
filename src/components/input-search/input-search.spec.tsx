import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InputSearch } from './input-search'

describe('<InputSearch />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockOnChange = jest.fn()

  it('should be able to render Input search component', () => {
    render(<InputSearch value="" onChange={mockOnChange} />)

    expect(
      screen.getByRole('textbox', {
        name: /search/i
      })
    ).toBeInTheDocument()
  })

  it('should be able to call onChange function when input is typed', async () => {
    render(<InputSearch value="" onChange={mockOnChange} />)
    const text = 'this is a text'
    const input = screen.getByRole('textbox', {
      name: /search/i
    })

    await userEvent.type(input, text)

    expect(mockOnChange).toHaveBeenCalledTimes(text.length)
  })
})
