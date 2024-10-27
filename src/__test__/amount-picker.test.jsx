import { render, screen } from '@testing-library/react';
import AmountPicker from '../components/card/AmountPicker';
import { useDispatch } from 'react-redux';

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

  it('quantity value is correct', () => {
    render(<AmountPicker item={item} />);
    screen.getByText("2");
  });
  it('Clicking the minus button triggers the correct action', () => {});
  it('Clicking the plus button triggers the correct action', () => {});
});
