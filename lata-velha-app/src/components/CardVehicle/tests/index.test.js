import React from 'react';
import { screen } from '@testing-library/react'
import CardVehicle from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardVehicle />', () => {
    const vehicle = { 
      model: 'Uno', 
      brandName:'fiat',
      brandLogoUrl: '#',
      year: "2020", 
      price: 10000 
    } 

    const cardVehicleComponent = <CardVehicle 
      model={vehicle.model}
      brandName={vehicle.brandName}
      brandLogoUrl={vehicle.brandLogoUrl}
      year={vehicle.year} 
      price={vehicle.price}
      onEditClick={e => {}}
      onDeleteClick={e => {}}
    />

  it('should render CardVehicle', () => {
    renderWithRouter(cardVehicleComponent)

    const cardElement = screen.getByTestId("card-vehicle");
    const modelElement = screen.getByText(vehicle.model);
    const brandElement = screen.getByText(vehicle.brandName);
    const yearElement = screen.getByText(vehicle.year);
    const priceElement = screen.getByText("R$ 10.000,00");

    expect(cardElement).not.toBe(null);
    expect(modelElement).not.toBe(null);
    expect(brandElement).not.toBe(null);
    expect(yearElement).not.toBe(null);
    expect(priceElement).not.toBe(null);
  })


  it('should render all buttons', () => {
    renderWithRouter(cardVehicleComponent)

    const containerButtonsElement = screen.getByTestId('card-vehicle_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })
});