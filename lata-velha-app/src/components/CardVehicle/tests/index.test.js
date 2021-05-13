import React from 'react';
import { screen } from '@testing-library/react'
import CardVehicle from '../index';
import renderWithRouter from '../../../utils/test-utils';

describe('<CardVehicle />', () => {
  it('should render CardVehicle', () => {
    const vehicle = { 
      id: 1231312, 
      model: 'Uno', 
      brand: {
        name:'fiat',
        url: '#'
      }, 
      year: 2020, 
      price: 10000 
    }

    renderWithRouter(<CardVehicle vehicle={vehicle} />)

    const cardElement = screen.getByTestId(vehicle.id);
    const modelElement = screen.getByText(vehicle.model);
    const brandElement = screen.getByText(vehicle.brand.name);
    const yearElement = screen.getByText(vehicle.year);
    const priceElement = screen.getByText("R$ 10.000,00");

    expect(cardElement).not.toBe(null);
    expect(modelElement).not.toBe(null);
    expect(brandElement).not.toBe(null);
    expect(yearElement).not.toBe(null);
    expect(priceElement).not.toBe(null);
  })


  it('should render all buttons', () => {
    const vehicle = { 
      id: 1231312, 
      model: 'Uno', 
      brand: {
        name:'fiat',
        url: '#'
      }, 
      year: 2020, 
      price: 10000 
    }

    renderWithRouter(<CardVehicle vehicle={vehicle} />)

    const containerButtonsElement = screen.getByTestId('card-vehicle_buttons');

    expect(containerButtonsElement).not.toBe(null);
    expect(containerButtonsElement.childNodes.length).toBe(2);
  })
});