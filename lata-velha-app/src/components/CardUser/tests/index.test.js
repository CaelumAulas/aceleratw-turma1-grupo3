import React from 'react';
import { screen } from '@testing-library/react'
import CardUser from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardUser />', () => {
  const user = { name: 'Jucelino', email: 'jucelino@email.com' }
  const cardUserElement = <CardUser 
    name={user.name} 
    email={user.email} 
    onEditClick={e => {}}
    onDeleteClick={e => {}}
  />

  it('should render CardUser', () => {
    renderWithRouter(cardUserElement)

    const cardElement = screen.getByTestId(user.email);
    const nameElement = screen.getByText(user.name);
    const emailElement = screen.getByText(user.email);

    expect(cardElement).not.toBe(null);
    expect(nameElement).not.toBe(null);
    expect(emailElement).not.toBe(null);
  })

  it('should render all buttons', () => {
    renderWithRouter(cardUserElement)

    const containerButtonsElement = screen.getByTestId('card-user_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })
});