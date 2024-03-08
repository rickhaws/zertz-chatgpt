import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders circles', () => {
  render(<App />);
  expect(screen.getByTestId('1')?.classList).toContain('visible');
  userEvent.click(screen.getByTestId('1'));
  expect(screen.getByTestId('1')?.classList).toContain('hidden');
});
