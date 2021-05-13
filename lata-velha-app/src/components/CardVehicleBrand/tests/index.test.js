import React from 'react';
import { screen } from '@testing-library/react'
import CardVehicleBrand from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardVehicleBrand />', () => {
  const brand = { name: 'Fiat' }
  const cardVehicleBrandComponent = <CardVehicleBrand 
    name={brand.name} 
    onEditClick={e => {}}
    onDeleteClick={e => {}}
  />
  
  it('should render CardVehicleBrand', () => {
    renderWithRouter(cardVehicleBrandComponent)

    const cardElement = screen.getByTestId("card-vehicle-brand");
    const nameElement = screen.getByText(brand.name);

    expect(cardElement).not.toBe(null);
    expect(nameElement).not.toBe(null); 
  })

  it('should render all buttons', () => {
    renderWithRouter(cardVehicleBrandComponent)

    const containerButtonsElement = screen.getByTestId('card-vehicle-brand_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })
});