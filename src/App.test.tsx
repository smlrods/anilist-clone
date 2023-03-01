import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// ARRANGE -> ACT -> ASSERT

describe('app', () => {
  it('render navbar', () => {
    render(<App />);

    expect(screen.getByRole('link', {name: /search/i})).toBeInTheDocument;
    expect(screen.getByRole('link', {name: /social/i})).toBeInTheDocument;
    expect(screen.getByRole('link', {name: /forum/i})).toBeInTheDocument;
  });

  it('landing', () => {
    render(<App />);

    expect(screen.getByRole('button', {name: /join now/i})).toBeInTheDocument;
  });

  it('render filters', () => {
    render(<App />);

    expect(screen.getByRole('heading', {name: /^search/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^genres/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^year/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^season/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^format/i, level: 2}));
  });

  it('render landingsection', () => {
    render(<App />);

    expect(screen.getByRole('heading', {name: /^trending now/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^popular this season/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^upcoming next season/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^all time popular/i, level: 2}));
    expect(screen.getByRole('heading', {name: /^top 100 anime/i, level: 2}));
  });

});
