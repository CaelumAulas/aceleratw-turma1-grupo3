import React, { useContext, useEffect, useState } from 'react';
import ListVehiclePage from './ListVehiclePage';
import HttpContext from '../../../contexts/HttpContext';
import VehicleRepository from '../../../api/services/Vehicle/VehicleRepository';
import VehicleService from '../../../api/services/Vehicle/VehicleService';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';
import { useHistory } from 'react-router';
import { EDIT_VEHICLES_PATH } from '../../../routes/constants';
import { toast } from 'react-toastify';
import messages from '../messages';
import removeDuplicates from '../../../utils/removeDuplicates';

const ListVehicle = () => {

  const httpClient = useContext(HttpContext);
  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);

  const brandRepository = VehicleBrandRepository(httpClient);
  const brandService = VehicleBrandService(brandRepository);

  const history = useHistory();

  // todo: remember to user observable pattern!!!
  const [vehiclesList, setVehiclesList] = useState([]);
  const [brandsFilterOptions, setBrandsFilterOptions] = useState({
    list: [],
    onChange: (e) => {
      const newState = { ...brandsFilterOptions, value: e.target.value };

      setBrandsFilterOptions(newState);
    }, 
    value: '_',
  });
  const [modelsFilterOptions, setModelsFilterOptions] = useState({
    list: [],
    onChange: (e) => {
      const newState = { ...modelsFilterOptions, value: e.target.value };

      setModelsFilterOptions(newState);
    }, 
    value: '_',
  });

  useEffect(() => {
    const getFilters = () => {
      vehicleService.listAll().then(list => {
        let i = 0;
        const newState = { ...modelsFilterOptions };
        const models = list.map((vehicle) => {
          return { id: i + 1, name: vehicle.model }
        })

        const modelsWithoutDuplicates = removeDuplicates(models);

        newState['list'] = modelsWithoutDuplicates

        setModelsFilterOptions(newState);
      });

      brandService.listAll().then(list => {
        const newState = { ...brandsFilterOptions };
        newState['list'] = list;
        
        setBrandsFilterOptions(newState);
      });
    }

    getFilters();
  }, [brandsFilterOptions.list.length, modelsFilterOptions.list.length]);

  // write on change function
  useEffect(() => {
    const getVehicles = () => {
      let params = ''

      if(brandsFilterOptions.value && brandsFilterOptions.value !== '_') {
        params = `?brand=${brandsFilterOptions.value}`
      }

      if(modelsFilterOptions.value && modelsFilterOptions.value !== '_') {
        params = `?model=${modelsFilterOptions.value}`
      }

      vehicleService.listAll(params).then(list => {
        setVehiclesList(list);
      });
    }

    getVehicles();
  }, [brandsFilterOptions.value, modelsFilterOptions.value]);

  const onEditHandler = (vehicle) => {
    history.push(EDIT_VEHICLES_PATH.replace(':id', vehicle.id), { form: vehicle });
  }

  const onDeleteHandler = async (vehicleId) => {
    try {
      const apiResponse = await vehicleService.remove(vehicleId);
      if (apiResponse) { // update this response
        // use toast library later
        const updatedList = await vehicleService.listAll();
        setVehiclesList(updatedList);
        toast.success(messages.vehicleDeleted.defaultMessage);
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <ListVehiclePage
      vehiclesList={vehiclesList}
      onEditHandler={onEditHandler}
      onDeleteHandler={onDeleteHandler}
      brandsFilterOptions={brandsFilterOptions}
      modelsFilterOptions={modelsFilterOptions}
      priceRangesFilterOptions={[]}
    />
  );
};

export default ListVehicle;