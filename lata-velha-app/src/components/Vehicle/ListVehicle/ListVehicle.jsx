import React from 'react';
import FiltersBar from '../FiltersBar/FiltersBar';
import CardVehicle from './CardVehicle';
import style from './style';

const ListVehicle = () => {
  const classes = style();

  const vehicles = [{
    id: Math.random(), model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'gol', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'saveiro', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'saveirogolfiatlux', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }, {
    id: Math.random(), model: 'uno', brand: 'fiat', year: 2021, price: 50.000,
  }];

  return (
    <>
      <FiltersBar />
      <div className={classes.container}>
        {vehicles.map((vehicle) => <CardVehicle key={vehicle.id} vehicle={vehicle} />)}
      </div>
    </>
  );
};

export default ListVehicle;
