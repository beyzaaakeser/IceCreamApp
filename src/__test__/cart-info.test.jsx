import { render, screen } from '@testing-library/react';
import { mockItem } from '../constants';
import CartInfo from '../components/basket/CartInfo';
import { useDispatch } from 'react-redux';
import { createOrder } from '../redux/cartSlice';
import userEvent from '@testing-library/user-event';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Cart Info', () => {
  dispatchMock = jest.fn();
  const closeMock = jest.fn();

  const cart = [
    { id: 1, price: 50, quantity: 2 },
    { id: 2, price: 30, quantity: 1 },
  ];

  const emptyCart = [];

  beforeEach(() => {
    useDispatch.mockReturnValue(dispatchMock);
    dispatchMock.mockClear();
  });

  it('subtotal,shipping,total renders correctly', () => {
    render(<CartInfo cart={cart} close={closeMock} />);
    const subTotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
    const shipping = 20;
    const total = subTotal + shipping;

    screen.getByText(subTotal + '₺');
    screen.getByText(shipping + '₺');
    screen.getByText(total + '₺');
  });

  it('Confirm Order button is inactive when cart is empty', () => {
    render(<CartInfo cart={emptyCart} close={closeMock} />);
    const confirmButton = screen.getByRole('button');
    expect(confirmButton).toBeDisabled();
  });

  it('Confirm Order button is active when cart has item', () => {
    render(<CartInfo cart={cart} close={closeMock} />);
    const confirmButton = screen.getByRole('button');
    expect(confirmButton).toBeEnabled();
  });

  it('Triggers correct action when Confirm Order button is clicked', async () => {
    const user = userEvent.setup()
    render(<CartInfo cart={cart} close={closeMock} />);
    const confirmButton = screen.getByRole('button');
    await user.click(confirmButton);
    expect(closeMock).toHaveBeenCalled();
    expect(dispatchMock).toHaveBeenCalledWith(createOrder());

  });
});
