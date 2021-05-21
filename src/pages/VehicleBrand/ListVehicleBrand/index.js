import React, { useContext, useEffect, useState } from 'react';
import ListVehicleBrandPage from './ListVehicleBrandPage';
import HttpContext from '../../../contexts/HttpContext';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';
import { EDIT_BRAND_PATH } from '../../../routes/constants';

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

  const onEditHandler = (brand) => {
    history.push(EDIT_BRAND_PATH.replace(':id', brand.id), { form: brand });
  }

  const onDeleteHandler = (userId) => {
    console.log("ListUserPage-> onDeleteHandler", userId);
    userService.remove(userId);
  }

  return (
    <ListVehicleBrandPage vehicleBrandsList={vehicleBrandsList} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler}/>
  );
};

export default ListVehicleBrand;
