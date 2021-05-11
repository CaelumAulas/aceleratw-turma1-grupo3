import React from 'react';
import { screen } from '@testing-library/react'
import ActionBar from '..';
import renderWithRouter from '../../../utils/test-utils';

describe('<ActionBar />', () => {
  it('should render All Buttons', () => {
    const route = '/veiculos';
    renderWithRouter(<ActionBar />, { route })

    const addBtnElement = screen.getByTestId('add-button');
    const deleteBtnElement = screen.getByTestId('delete-button');
    const parent = addBtnElement.parentNode;

    expect(addBtnElement).not.toBe(null);
    expect(deleteBtnElement).not.toBe(null);
    expect(parent.children.length).toBe(2);
  })

  it('should render only Add Button', () => {
    const route = '/usuarios';
    renderWithRouter(<ActionBar />, { route })

    const addBtnElement = screen.getByTestId('add-button');
    const parent = addBtnElement.parentNode;

    expect(addBtnElement).not.toBe(null);
    expect(parent.children.length).toBe(1);
  });
});