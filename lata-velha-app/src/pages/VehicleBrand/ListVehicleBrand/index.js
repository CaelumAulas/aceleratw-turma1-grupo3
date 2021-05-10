import React from 'react';
import ActionBar from '../../../components/ActionBar';
import CardVehicleBrand from '../../../components/CardVehicleBrand';
import style from './style';

const ListVehicleBrand = () => {
  const classes = style();

  const brands = [{
    id: Math.random(), name: 'fiat',
  }, {
    id: Math.random(), name: 'hello',
  }, {
    id: Math.random(), name: 'hey',
  }, {
    id: Math.random(), name: 'great name',
  }, {
    id: Math.random(), name: 'awesome brand',
  }, {
    id: Math.random(), name: 'hello brand',
  }, {
    id: Math.random(), name: 'brand again',
  }, {
    id: Math.random(), name: 'another one',
  }];

  return (
    <>
    <div className={classes.container}>
      {brands.map((brand) => <CardVehicleBrand key={brand.id} brand={brand} />)}
    </div>
    <ActionBar />
    </>
  );
};

export default ListVehicleBrand;
