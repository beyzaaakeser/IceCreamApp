import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from '../components/basket/Modal';
import { useSelector } from 'react-redux';
import CartInfo from '../components/basket/CartInfo';
import CartItem from '../components/basket/CartItem';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../components/basket/CartItem', () =>
  jest.fn(() => <div data-testid="cart-item"></div>)
);
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

  it('Renders the message when basket is empty ', () => {});

  it('Renders cart items when cart is not empty', () => {});

  it('Closes when the X button is clicked', () => {});
});
