import { render, screen,waitFor } from '@testing-library/react';
import List from '../components/list';
import api from '../api';

jest.mock('../api');

describe('List component test', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('When fetching data, a loader is displayed on the screen', async () => {
    api.get.mockResolvedValueOnce({ data: [] });

    render(<List />);

    screen.getByTestId('loader');
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });
  });

  it('If an error response is received from the API, an error message is displayed on the screen', async () => {

    const errMsg = 'Request timeout';

    api.get.mockRejectedValueOnce(new Error(errMsg));

    render(<List />);

    await waitFor(() => screen.getByText(errMsg));
  });

  it('If a successful response is received from the API, cards are displayed on the screen', () => {});
});
