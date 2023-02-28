import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// ARRANGE -> ACT -> ASSERT

describe('app', () => {
  it('render navbar', () => {
    render(<App />);

    expect(screen.getByRole('link', {name: /search/i})).toBeInTheDocument;
    expect(screen.getByRole('link', {name: 'Social'})).toBeInTheDocument;
    expect(screen.getByRole('link', {name: 'Forum'})).toBeInTheDocument;
  });
});
