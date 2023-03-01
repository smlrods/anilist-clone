import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Landing from '../Landing';
import PageContent from '../PageContent'; 
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

it('landing', () => {
  render(
    <MemoryRouter>
      <PageContent />
    </MemoryRouter>
  );

  act(() => {
    userEvent.click(screen.getByRole('button', {name: /^join now/i}));
  });

  expect(screen.queryByRole('button', {name: /^join now/i})).not.toBeInTheDocument();
});
