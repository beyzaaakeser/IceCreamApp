import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../components/basket/Modal';
import { useSelector } from 'react-redux';
import CartInfo from '../components/basket/CartInfo';
import CartItem from '../components/basket/CartItem';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../components/basket/CartItem', () => () => (
  <div data-testid="cart-item" />
));

jest.mock('../components/basket/CartInfo');

describe('Modal Component', () => {

  const closeMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Renders or does not render modal based on isOpen prop', () => {
    useSelector.mockReturnValue({ cart: [] });

    const { rerender } = render(<Modal isOpen={false} close={closeMock} />);

    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();

    rerender(<Modal isOpen={true} close={closeMock} />);

    screen.getByTestId('modal');
  });

  it('Renders the message when basket is empty ', () => {
    useSelector.mockReturnValue({ cart: [] });

    const { rerender } = render(<Modal isOpen close={closeMock} />);

    screen.getByText('Your cart is currently empty');

    const cartItems = [{ id: 1, name: 'Product 1' }];
    useSelector.mockReturnValue({ cart: cartItems });

    rerender(<Modal isOpen={true} close={closeMock} />);

    expect(screen.queryByText(/empty/)).not.toBeInTheDocument();
  });

  it('Renders cart items when cart is not empty', () => {
    const cartItems = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];

    useSelector.mockReturnValue({ cart: cartItems });

    const { rerender } = render(<Modal isOpen={true} close={closeMock} />);

    const items = screen.getAllByTestId('cart-item');

    expect(items.length).toBe(2);

    useSelector.mockReturnValue({ cart: [] });

    rerender(<Modal isOpen={true} close={closeMock} />);

    expect(screen.queryByTestId('cart-item')).not.toBeInTheDocument();
  });

  it('Closes when the X button is clicked', async () => {
    const user = userEvent.setup();

    useSelector.mockReturnValue({ cart: [] });

    render(<Modal isOpen close={closeMock} />);

    const btn = screen.getByTestId("close");

    await user.click(btn);

    expect(closeMock).toHaveBeenCalled(); 
  });
});
