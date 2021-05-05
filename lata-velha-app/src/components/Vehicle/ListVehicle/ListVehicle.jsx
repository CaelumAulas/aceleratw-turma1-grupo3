import { useTheme } from '@material-ui/core';
import React from 'react';
import CardVehicle from './CardVehicle';
import style from './style';

const ListVehicle = () => {
  const theme = useTheme();
  const classes = style(theme);

  const vehicles = [{
    id: 1, model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'gol', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'saveiro', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'saveirogolfiatlux', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: 1, model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }];

  return (
    <div className={classes.container}>
      {vehicles.map((vehicle, index) => <CardVehicle key={index} vehicle={vehicle} />)}
    </div>
  );
};

export default ListVehicle;
