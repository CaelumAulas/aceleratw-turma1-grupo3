import React from 'react';
import ActionBar from '../../../components/ActionBar';
import CardVehicleBrand from '../../../components/CardVehicleBrand';
import PropTypes from 'prop-types';
import style from './style';

const ListVehicleBrandPage = ({ vehicleBrandsList, onEditHandler, onDeleteHandler }) => {
  const classes = style();
  return (
    <>
      <div className={classes.container}>
        {vehicleBrandsList.map(vehicleBrand =>
          <CardVehicleBrand
            key={vehicleBrand.id}
            name={vehicleBrand.name}
            onEditClick={() => onEditHandler(vehicleBrand)}
            onDeleteClick={() => onDeleteHandler(vehicleBrand.id)} />)}
      </div>
      <ActionBar />
    </>
  );
};

ListVehicleBrandPage.propTypes = {
  vehicleBrandsList: PropTypes.array.isRequired,
  onEditHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
}

export default ListVehicleBrandPage;
