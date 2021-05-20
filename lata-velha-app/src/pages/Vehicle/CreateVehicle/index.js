import React, { useContext, useEffect, useState } from 'react';
import VehicleRepository from '../../../api/services/Vehicle/VehicleRepository';
import VehicleService from '../../../api/services/Vehicle/VehicleService';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';
import FormValidations from '../../../contexts/formValidations';
import HttpContext from '../../../contexts/HttpContext';
import useErrors from '../../../hooks/useErrors';
import CreateVehiclePage from './CreateVehiclePage';
import { toast } from 'react-toastify';
import messages from '../messages';
import Vehicle from '../../../models/Vehicle/VehicleForm';


const CreateVehicle = () => {
  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);
  const initialFormState = {
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    brand: '_'
  };
  const [form, setFormState] = useState(initialFormState);
  const [brandOptions, setBrandOptions] = useState([{ id: 0, name: '_' }]);

  // Services setup
  const httpClient = useContext(HttpContext);

  const brandRepository = VehicleBrandRepository(httpClient);
  const brandService = VehicleBrandService(brandRepository);

  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);

  useEffect(() => {
    brandService.listAll().then(list => {
      setBrandOptions(list);
    })
  }, []);

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (formIsValid()) {
        const { model, brand, year, price } = form;
        const apiResponse = await vehicleService.create(
          Vehicle(model, brand, year, price)
        );
        if (apiResponse.success) {
          resetStates();
          toast.success(messages.vehicleCreated.defaultMessage);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const resetStates = () => {
    setFormState({ ...initialFormState });
  }

  const onFormChange = (e) => {
    const { name, value } = e.target;
    const newFormState = { ...form };
    newFormState[name] = value;
    setFormState(newFormState);
  }

  return (
    <CreateVehiclePage
      onFormSubmitHandler={onFormSubmit}
      onFormChangeHandler={onFormChange}
      errorsValidation={errors}
      validateField={validateField}
      brandOptions={brandOptions}
      formValues={form}
    />
  );
};

export default CreateVehicle;
