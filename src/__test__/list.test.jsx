import { render, screen } from '@testing-library/react';
import List from '../components/list';
import api from '../api';

jest.mock('../api');

describe('List component test', () => {
  it('When fetching data, a loader is displayed on the screen', () => {
    api.get.mockResolvedValueOnce({ data: [] });

    render(<List />);

    screen.getByTestId('loader');

  });

  it("If an error response is received from the API, an error message is displayed on the screen", () => {});

  it("If a successful response is received from the API, cards are displayed on the screen", () => {});
});