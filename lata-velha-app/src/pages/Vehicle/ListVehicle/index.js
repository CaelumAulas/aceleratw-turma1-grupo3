import React from 'react';
import FiltersBar from '../../../components/FiltersBar';
import CardVehicle from '../../../components/CardVehicle';
import style from './style';

const ListVehicle = () => {
  const classes = style();
  const brands = {
    fiat: { name: 'Fiat', url: 'https://www.carlogos.org/logo/Fiat-logo-2006-1920x1080.png' },
    bmw: { name: 'BMW', url: 'https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png' },
    bugatti: { name: 'Buggati', url: 'https://www.carlogos.org/logo/Bugatti-logo-1024x768.png' },
    volks: { name: 'Volkswagen', url: 'https://www.carlogos.org/logo/Volkswagen-logo-2019-1500x1500.png' },
  };
  const vehicles = [
    {
      id: Math.random(), model: 'uno', brand: brands.fiat, year: 2015, price: 15000,
    },
    {
      id: Math.random(), model: 'M3', brand: brands.bmw, year: 2019, price: 200000,
    },
    {
      id: Math.random(), model: 'Veron', brand: brands.bugatti, year: 2021, price: 1000000000,
    },
    {
      id: Math.random(), model: 'Golf', brand: brands.volks, year: 2010, price: 20000,
    },
  ];

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
