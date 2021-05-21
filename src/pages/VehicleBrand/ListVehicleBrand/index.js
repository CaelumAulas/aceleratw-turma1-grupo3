import React, { useContext, useEffect, useState } from 'react';
import ListVehicleBrandPage from './ListVehicleBrandPage';
import HttpContext from '../../../contexts/HttpContext';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';

const ListVehicleBrand = () => {
  const httpClient = useContext(HttpContext);
  const vehicleBrandRepository = VehicleBrandRepository(httpClient);
  const vehicleBrandService = VehicleBrandService(vehicleBrandRepository);

  // todo: remember to user observable pattern!!!
  const [vehicleBrandsList, setVehichleBrandsList] = useState([]);
  useEffect(() => {
    vehicleBrandService.listAll().then(list => {
      setVehichleBrandsList(list);
    });
  }, []);

  const onEditHandler = (userId) => {
    console.log("ListUserPage-> onEditHandler", userId);
  }

  const onDeleteHandler = (userId) => {
    userService.remove(userId);
  }

  return (
    <ListVehicleBrandPage vehicleBrandsList={vehicleBrandsList} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler}/>
  );
};

export default ListVehicleBrand;
