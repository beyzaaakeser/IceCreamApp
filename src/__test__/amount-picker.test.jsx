import { render, screen } from '@testing-library/react';
import AmountPicker from '../components/card/AmountPicker';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { addToCart, deleteFromCart } from '../redux/cartSlice';
import { mockItem } from '../constants';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Amount Picker', () => {
  const item = mockItem;

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
