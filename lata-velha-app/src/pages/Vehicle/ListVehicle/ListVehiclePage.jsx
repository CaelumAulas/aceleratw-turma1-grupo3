import React from 'react';
import FiltersBar from '../../../components/FiltersBar';
import CardVehicle from '../../../components/CardVehicle';
import ActionBar from '../../../components/ActionBar';
import PropTypes from 'prop-types';
import style from './style';
import { useTheme } from '@material-ui/core';

const ListVehiclePage = (props) => {
  const { 
    vehiclesList, 
    onEditHandler, 
    onDeleteHandler, 
    brandsFilterOptions,
    modelsFilterOptions,
    priceRangesFilterOptions,
  } = props;
  
  const theme = useTheme();
  const classes = style(theme);
  return (
    <>
      <FiltersBar modelsList={modelsFilterOptions} brandsFilterOptions={brandsFilterOptions} priceRangesList={priceRangesFilterOptions} />
      <div className={classes.listContainer}>
        <div className={classes.list}>
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
      </div>
      <ActionBar />
    </>
  );
};


ListVehiclePage.propTypes = {
  vehiclesList: PropTypes.array.isRequired,
  brandsFilterOptions: PropTypes.shape({
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  }).isRequired,
  modelsFilterOptions: PropTypes.array.isRequired,
  priceRangesFilterOptions: PropTypes.array.isRequired,
  onEditHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
}

export default ListVehiclePage;
