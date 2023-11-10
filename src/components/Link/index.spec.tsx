import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Link } from '.'

describe('<Link>', () => {
  it('should render the link', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Link to='/test'>Test Link</Link>
      </MemoryRouter>
    )

    const link = getByText('Test Link', { selector: "a" })

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })
})

describe('<Link asButton />', () => {
  it('should render the button', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Link asButton>Test Button</Link>
      </MemoryRouter>
    )

    const button = getByText('Test Button', { selector: "button" })

    expect(button).toBeInTheDocument()
  })
})
