import React, { useContext, useEffect, useState } from 'react';
import ListVehiclePage from './ListVehiclePage';
import HttpContext from '../../../contexts/HttpContext';
import VehicleRepository from '../../../api/services/Vehicle/VehicleRepository';
import VehicleService from '../../../api/services/Vehicle/VehicleService';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';
import { useHistory } from 'react-router';

const ListVehicle = () => {

  const httpClient = useContext(HttpContext);
  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);

  const brandRepository = VehicleBrandRepository(httpClient);
  const brandService = VehicleBrandService(brandRepository);

  const history = useHistory();

  // todo: remember to user observable pattern!!!
  const [vehiclesList, setVehiclesList] = useState([]);
  const [brandsFilterOptions, setBrandsFilterOptions ] = useState({
    list: [],
    // onChange: (e) => {
    //   console.log(brandsFilterOptions.list);
    //   const newState = {...brandsFilterOptions};
      
    //   console.log('onChange', newState);
    //   setBrandsFilterOptions(newState);
    // }, 
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

  const onEditHandler = (vehicle) => {
    
  }

  const onDeleteHandler = async (vehicleId) => {
    const apiResponse = await vehicleService.remove(vehicleId);
    if (apiResponse){ // update this response
      const updatedList = vehiclesList.filter(vehicle => vehicle.id != vehicleId);
      setVehiclesList(updatedList);
    }
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
