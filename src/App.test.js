import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/It has been used to develop the project/i);
  expect(linkElement).toBeInTheDocument();
});
