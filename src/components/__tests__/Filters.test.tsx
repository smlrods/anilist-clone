import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Filters from '../Filters';
import { act } from 'react-dom/test-utils';

const mockSetSearch = jest.fn();

describe('filters', () => {
  it('dropdown when click genres', () => {
    render(<Filters setSearch={mockSetSearch}/>)

    act(() => {
      userEvent.click(screen.getAllByRole('searchbox')[1]);
    });

    expect(screen.getAllByText(/^genres/i).length).toBe(2);
  });
});
