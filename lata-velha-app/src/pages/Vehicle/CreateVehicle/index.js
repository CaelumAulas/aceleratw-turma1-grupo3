import React, { useContext, useEffect, useState } from 'react';
import { injectIntl } from 'react-intl';
import VehicleRepository from '../../../api/services/Vehicle/VehicleRepository';
import VehicleService from '../../../api/services/Vehicle/VehicleService';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';
import FormValidations from '../../../contexts/formValidations';
import HttpContext from '../../../contexts/HttpContext';
import useErrors from '../../../hooks/useErrors';
import CreateVehiclePage from './CreateVehiclePage';


const CreateVehicle = () => {
  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);
  
  // default value for year input
  const today = new Date();
  const currentYear = today.getFullYear();

  const httpClient = useContext(HttpContext);
  const brandRepository = VehicleBrandRepository(httpClient);
  const brandService = VehicleBrandService(brandRepository);

  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);

  // todo: review this default option value
  const [brands, setBrand] = useState([{ id: 0, name: '_' }]);
  const [selectedBrandValue, setSelectedBrandValue] = useState("_");

  const [model, setModel] = useState('');
  const [year, setYear] = useState(currentYear);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    brandService.listAll().then(list => {
      setBrand(list);
    })
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (formIsValid()) {
      const brand = { id: selectedBrandValue };
      const apiResponse = await vehicleService.create({
        brand, model, year, price,
      });
      if (apiResponse.success) {
        alert(apiResponse.message);
        // clean the form
        resetStates();
      }
    }
  };

  const resetStates = () => {
    setSelectedBrandValue('_');
    setModel('');
    setYear(currentYear);
    setPrice(0);
  }

  const onSelectChange = (e) => {
    const optionSelected = e.target.value;
    setSelectedBrandValue(optionSelected);
  }
  // unify states
  const onYearChange = e => {
    const yearValue = Number(e.target.value);
    setYear(yearValue);
  }

  const onPriceChange = e => {
    const priceValue = Number(e.target.value);
    setPrice(priceValue);
  }

  const onModelChange = e => {
    const modelValue = e.target.value;
    setModel(modelValue);
  }

  return (
    <CreateVehiclePage 
      onFormSubmitHandler={onFormSubmit} 
      onSelectChangeHandler={onSelectChange}
      onYearChangeHandler={onYearChange}
      onPriceChangeHandler={onPriceChange}
      onModelChangeHandler={onModelChange}
      errorsValidation={errors}
      validateField={validateField}
      brands={brands}
      selectedBrandValue={selectedBrandValue}
      modelValue={model}
      yearValue={year}
      priceValue={price}
      />
  );
};

export default injectIntl(CreateVehicle);
