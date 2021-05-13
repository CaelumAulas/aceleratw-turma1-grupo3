import React, { useContext, useEffect, useState } from 'react';
import ListVehiclePage from './ListVehiclePage';
import HttpContext from '../../../contexts/HttpContext';
import VehicleRepository from '../../../api/services/Vehicle/VehicleRepository';
import VehicleService from '../../../api/services/Vehicle/VehicleService';

const ListVehicle = () => {

  const httpClient = useContext(HttpContext);
  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);
  
  // todo: remember to user observable pattern!!!
  const [vehiclesList, setVehiclesList] = useState([]);
  useEffect(() => {
    vehicleService.listAll().then(list => {
      setVehiclesList(list);
    });
  }, []);

  const onEditHandler = (vehicleId) => {
    console.log('ListVehicle -> onEditHandler' , vehicleId);
  } 

  const onDeleteHandler = (vehicleId) => {
    console.log('ListVehicle -> onDeleteHandler' , vehicleId);
  } 

  return (
    <ListVehiclePage vehiclesList={vehiclesList} onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} />
  );
};

export default ListVehicle;
