import { fireEvent, render } from '@testing-library/react';
import { DeleteButton } from '.';

describe('<DeleteButton>', () => {
  it('should render a delete button', () => {
    const { getByTestId } = render(<DeleteButton onDelete={() => {}} title='' description='' />);

    const button = getByTestId('delete-button');

    expect(button).toBeInTheDocument();
  });

  it('should open modal on button click', () => {
    const { getByRole, getByTestId } = render(<DeleteButton onDelete={() => {}} title='' description='' />);

    const button = getByTestId('delete-button');
    fireEvent.click(button);

    const modal = getByRole('alertdialog');
    expect(modal).toBeInTheDocument();
  });

  it('should call onDelete when confirm button is clicked', async () => {
    const onDelete = jest.fn();

    const { getByRole, findByRole } = render(<DeleteButton onDelete={onDelete} title='' description='' />);

    const button = getByRole('button', { expanded: false })
    fireEvent.click(button);

    const yesButton = await findByRole('button', { name: /Sim/i });
    fireEvent.click(yesButton);

    expect(onDelete).toHaveBeenCalled();
  });

  it('should display the title and description correctly', async () => {
    const { findByText, getByTestId } = render(<DeleteButton onDelete={() => {}} title='Delete the item' description='Are you sure you want to delete the item?' />);

    const button = getByTestId('delete-button');
    fireEvent.click(button);

    const title = await findByText('Delete the item')
    const description = await findByText('Are you sure you want to delete the item?')

    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
});
