import React from 'react';
import { screen } from '@testing-library/react'
import CardUser from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardUser />', () => {
  it('should render CardUser', () => {
    const user = { id: 1231312, name: 'Jucelino', email: 'jucelino@email.com' }
    renderWithRouter(<CardUser user={user} />)

    const cardElement = screen.getByTestId(user.id);
    const nameElement = screen.getByText(user.name);
    const emailElement = screen.getByText(user.email);

    expect(cardElement).not.toBe(null);
    expect(nameElement).not.toBe(null);
    expect(emailElement).not.toBe(null);
  })

  it('should render all buttons', () => {
    const user = { id: 1231312, name: 'Jucelino', email: 'jucelino@email.com' }
    renderWithRouter(<CardUser user={user} />)

    const containerButtonsElement = screen.getByTestId('card-user_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })
});