import { render, screen } from '@testing-library/react';
import { mockItem } from '../constants';
import CartItem from '../components/basket/CartItem';
import AmountPicker from '../components/card/AmountPicker';

jest.mock('../components/card/AmountPicker');

it('The cart item component renders correctly according to the incoming prop', () => {
  render(<CartItem item={mockItem} />);
  screen.getByText(mockItem.name);
  screen.getByText(mockItem.selectedType);
  screen.getByText(mockItem.quantity * mockItem.price + '₺');
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', mockItem.image);
});
