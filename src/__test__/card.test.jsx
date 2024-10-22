import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Card from '../components/card';
import { addToCart } from '../redux/cartSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

const useDispatchMock = require('react-redux').useDispatch;

describe('Card Component', () => {
  let dispatchMock;
  const mockItem = {
    name: 'Raspberry Dream',
    image: '/ice-3.png',
    price: 23.5,
    id: 'aa2d',
  };

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatchMock.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Render item details correctly', () => {
    render(<Card item={mockItem} />);

    screen.getByRole('heading', { name: 'Raspberry Dream' });
    screen.getByText('₺23.5 / scoop');
    expect(screen.getByRole('img')).toHaveAttribute('src', '/ice-3.png');
  });


});
