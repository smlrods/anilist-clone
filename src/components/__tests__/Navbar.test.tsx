import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';
import PageContent from '../PageContent';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../Landing', () => () => {
  return (
    <div data-testid='landing-test'>
      <h2>Landing</h2>
    </div>
  )
});

jest.mock('../Search', () => () => {
  return (
    <div data-testid='search-test'>
      <h2>Search</h2>
    </div>
  )
});

beforeEach(cleanup);
afterEach(cleanup);

describe('navbar', () => {
  it('search hover', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    act(() => {
      userEvent.hover(screen.getByRole('link', {name: /^search/i}));
    });

    expect(screen.getByRole('link', {name: /^anime/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /^manga/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /^staff/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /^characters/i})).toBeInTheDocument();
  });

});

describe('navbar changes page content when clicking', () => {
  it('show home', () => {
    render(
      <MemoryRouter>
        <Navbar />
        <PageContent />
      </MemoryRouter>
    );

    expect(screen.queryByRole('heading', {level: 2, name: /^search/i})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^landing/i})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^social/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^forum/i})).not.toBeInTheDocument();
  });

  it('show search', () => {
    render(
      <MemoryRouter>
        <Navbar />
        <PageContent />
      </MemoryRouter>
    );
    act(() => {
      userEvent.click(screen.getByRole('link', {name: /^search/i}))
    });

    expect(screen.queryByRole('heading', {level: 2, name: /^landing/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^search/i})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^social/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^forum/i})).not.toBeInTheDocument();
  });

  it('show social', () => {
    render(
      <MemoryRouter>
        <Navbar />
        <PageContent />
      </MemoryRouter>
    );
    act(() => {
      userEvent.click(screen.getByRole('link', {name: /^social/i}))
    });

    expect(screen.queryByRole('heading', {level: 2, name: /^landing/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^search/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^social/i})).toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^forum/i})).not.toBeInTheDocument();
  });

  it('show forum', () => {
    render(
      <MemoryRouter>
        <Navbar />
        <PageContent />
      </MemoryRouter>
    );

    act(() => {
      userEvent.click(screen.getByRole('link', {name: /^forum/i}))
    });

    expect(screen.queryByRole('heading', {level: 2, name: /^landing/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^search/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^social/i})).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', {level: 2, name: /^forum/i})).toBeInTheDocument();
  });
});
