import { render, screen } from '@testing-library/react';
import AmountPicker from '../components/card/AmountPicker';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { addToCart, deleteFromCart } from '../redux/cartSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Amount Picker', () => {
  const item = {
    name: 'Raspberry Dream',
    price: 23.5,
    image: '/ice-3.png',
    id: '610b',
    selectedType: 'cornet',
    quantity: 2,
  };

  const dispatchMock = jest.fn();
  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    dispatchMock.mockClear();
  });

  it('quantity value is correct', () => {
    render(<AmountPicker item={item} />);
    screen.getByText('2');
  });
  it('- Clicking the minus button triggers the correct action', async () => {
    const user = userEvent.setup();
    render(<AmountPicker item={item} />);
    const btn = screen.getByRole('button', { name: '-' });
    await user.click(btn);
    expect(dispatchMock).toHaveBeenCalledWith(deleteFromCart(item));
  });
  it('Clicking the plus button triggers the correct action', async () => {
    const user = userEvent.setup();
    render(<AmountPicker item={item} />);
    const btn = screen.getByRole('button', { name: '+' });
    await user.click(btn);
    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({ item, selectedType: item.selectedType })
    );
  });
});
