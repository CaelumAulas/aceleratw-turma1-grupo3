import React from 'react';
import { screen } from '@testing-library/react'
import CardVehicleBrand from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardVehicleBrand />', () => {
  it('should render CardVehicleBrand', () => {
    const brand = { id: 1231312, name: 'Fiat' }
    renderWithRouter(<CardVehicleBrand brand={brand} />)

    const cardElement = screen.getByTestId(brand.id);
    const nameElement = screen.getByText(brand.name);

    expect(cardElement).not.toBe(null);
    expect(nameElement).not.toBe(null); 
  })

  it('should render all buttons', () => {
    const brand = { id: 1231312, name: 'Fiat' }
    renderWithRouter(<CardVehicleBrand brand={brand} />)

    const containerButtonsElement = screen.getByTestId('card-vehicle-brand_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })
});