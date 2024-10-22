import { render, screen } from '@testing-library/react';
import SelectType from '../components/card/SelectType';
import userEvent from '@testing-library/user-event';

describe('Select Type Component', () => {
  const mockFn = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls handleClick with the correct parameter when button is clicked', async () => {
    const user = userEvent.setup();

    render(<SelectType selectedType={null} setSelectedType={mockFn} />);

    const cornetBtn = screen.getByRole('button', { name: 'Cone' });
    const cupBtn = screen.getByRole('button', { name: 'Cup' });

    await user.click(cornetBtn);

    expect(mockFn).toHaveBeenCalledWith('cornet');

    await user.click(cupBtn);

    expect(mockFn).toHaveBeenCalledWith('cup');
  });

  it('changes the button background color when Cornet is selected', () => {
    render(<SelectType selectedType="cornet" setSelectedType={mockFn} />); 

    const cornetBtn = screen.getByRole('button', { name: 'Cone' });
    const cupBtn = screen.getByRole('button', { name: 'Cup' });

    expect(cornetBtn).toHaveClass('bg-white text-black shadow-lg');

    expect(cupBtn).not.toHaveClass('bg-white text-black shadow-lg');
  });

});
