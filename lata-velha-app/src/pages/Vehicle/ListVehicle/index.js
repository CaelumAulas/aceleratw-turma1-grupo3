import React, { useContext, useEffect, useState } from 'react';
import ListVehiclePage from './ListVehiclePage';
import HttpContext from '../../../contexts/HttpContext';
import VehicleRepository from '../../../api/services/Vehicle/VehicleRepository';
import VehicleService from '../../../api/services/Vehicle/VehicleService';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';

const ListVehicle = () => {

  const httpClient = useContext(HttpContext);
  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);

  const brandRepository = VehicleBrandRepository(httpClient);
  const brandService = VehicleBrandService(brandRepository);

  // todo: remember to user observable pattern!!!
  const [vehiclesList, setVehiclesList] = useState([]);
  const [brandsFilterOptions, setBrandsFilterOptions ] = useState({
    list: [],
    onChange: (e) => {
      console.log(brandsFilterOptions.list);
      const newState = {...brandsFilterOptions};
      
      console.log('onChange', newState);
      setBrandsFilterOptions(newState);
    }, 
    value: '_',
  });

  // write on change function
  useEffect(() => {
    vehicleService.listAll().then(list => {
      setVehiclesList(list);
    });

    brandService.listAll().then(list => {
      const newState = {...brandsFilterOptions};
      newState['list'] = list;
      setBrandsFilterOptions(newState);
      console.log('useEffect', brandsFilterOptions);
    });

  }, []);

  const onEditHandler = (vehicleId) => {
    console.log('ListVehicle -> onEditHandler', vehicleId);
  }

  const onDeleteHandler = (vehicleId) => {
    console.log('ListVehicle -> onDeleteHandler', vehicleId);
  }

  return (
    <ListVehiclePage
      vehiclesList={vehiclesList}
      onEditHandler={onEditHandler}
      onDeleteHandler={onDeleteHandler}
      brandsFilterOptions={brandsFilterOptions}
      modelsFilterOptions={[]}
      priceRangesFilterOptions={[]}
    />
  );
};

export default ListVehicle;
