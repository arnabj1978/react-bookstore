import { render, screen } from '@testing-library/react';
import Main from './Main';

test('renders testing text', () => {
  render(<Main />);
  const testText = screen.getByText(/We have several books./i);
  expect(testText).toBeInTheDocument();
});
