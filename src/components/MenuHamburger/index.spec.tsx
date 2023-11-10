import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MenuHamburger } from '.'

describe('<MenuHamburger>', () => {
  it('should render menu hamburger icon', () => {
    const { getByTestId } = render(<MenuHamburger />)

    const menu = getByTestId('menu-hamburger')

    expect(menu).toBeInTheDocument()
  })

  it('should open menu on button click', () => {
    const { getByRole, getByTestId } = render(
      <MemoryRouter>
        <MenuHamburger />
      </MemoryRouter>
    );

    const button = getByTestId('menu-hamburger');
    fireEvent.click(button);

    const modal = getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  it('should render menu items', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <MenuHamburger />
      </MemoryRouter>
    );

    const button = getByTestId('menu-hamburger');

    fireEvent.click(button);

    expect(getByText('Vendas')).toBeInTheDocument();
    expect(getByText('Comissões')).toBeInTheDocument();
  });
})
