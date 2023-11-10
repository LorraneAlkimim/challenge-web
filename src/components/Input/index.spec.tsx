import { render } from '@testing-library/react'
import { Input } from '.'

describe('<Input>', () => {
  it('should render an input element', () => {
    const { getByTestId } = render(<Input id="test" />)

    const input = getByTestId('input-default')

    expect(input).toBeInTheDocument()
  })

  it('should render label', () => {
    const { getByText } = render(<Input id="test" label='label test' />)

    expect(getByText('label test')).toBeInTheDocument()
  })
})

describe('<Input asSelect />', () => {
  it('should render an select element', () => {
    const { getByTestId } = render(<Input id="test" asSelect options={[]} />)

    const input = getByTestId('input-select')

    expect(input).toBeInTheDocument()
  })

  it('should render label', () => {
    const { getByText } = render(<Input id="test" label='label test' asSelect options={[]} />)

    expect(getByText('label test')).toBeInTheDocument()
  })

  it('should render options', () => {
    const { getByText } = render(
      <Input
        id="test"
        asSelect
        options={[
          'Item 01',
          'Item 02',
          'Item 03',
        ]}
      />
    )

    expect(getByText('Item 01')).toBeInTheDocument()
    expect(getByText('Item 02')).toBeInTheDocument()
    expect(getByText('Item 03')).toBeInTheDocument()
  })

  it('should render option placeholder', () => {
    const { getByText } = render(
      <Input
        id="test"
        asSelect
        options={[]}
        placeholder='test placeholder'
      />
    )

    expect(getByText('test placeholder'))
  })
})
