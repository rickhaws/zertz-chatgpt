import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders board', () => {
  render(<App />);
  expect(screen.getByTestId('1')?.classList).toContain('visible');
  act(() => {userEvent.click(screen.getByTestId('1'))});
  expect(screen.getByTestId('1')?.classList).toContain('hidden');
  expect(screen.getByText('Player 1')).toBeInTheDocument();
  expect(screen.getByText('Player 2')).toBeInTheDocument();
});
