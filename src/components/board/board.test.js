import React from 'react';
import { render, screen } from '@testing-library/react';
import { Board } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';

test('renders Board text', () => {
  render(<Provider store={configureStore()}><Board /></Provider>);
  const boardText = screen.getByText(/Board/i);
  expect(boardText).toBeInTheDocument();
});
