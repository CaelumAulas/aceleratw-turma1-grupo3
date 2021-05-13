import React from 'react';
import FiltersBar from '../../../components/FiltersBar';
import CardVehicle from '../../../components/CardVehicle';
import ActionBar from '../../../components/ActionBar';
import PropTypes from 'prop-types';
import style from './style';

const ListVehiclePage = ({ vehiclesList, onEditHandler, onDeleteHandler }) => {
  const classes = style();
  // const brands = {
  //   fiat: { name: 'Fiat', url: 'https://www.carlogos.org/logo/Fiat-logo-2006-1920x1080.png' },
  //   bmw: { name: 'BMW', url: 'https://www.carlogos.org/car-logos/bmw-logo-2020-blue-white.png' },
  //   bugatti: { name: 'Buggati', url: 'https://www.carlogos.org/logo/Bugatti-logo-1024x768.png' },
  //   volks: { name: 'Volkswagen', url: 'https://www.carlogos.org/logo/Volkswagen-logo-2019-1500x1500.png' },
  // };

  return (
    <>
      <FiltersBar />
      <div className={classes.container}>
        {vehiclesList.map(vehicle =>
          <CardVehicle key={vehicle.id}
            model={vehicle.model}
            price={vehicle.price}
            year={vehicle.year}
            brandName={vehicle.brandName}
            brandLogoUrl="https://www.carlogos.org/logo/Fiat-logo-2006-1920x1080.png"
            onEditClick={() => onEditHandler(vehicle.id)}
            onDeleteClick={() => onDeleteHandler(vehicle.id)} />
        )
        }
      </div>
      <ActionBar />
    </>
  );
};


ListVehiclePage.propTypes = {
  vehiclesList: PropTypes.array.isRequired,
  onEditHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
}

export default ListVehiclePage;
