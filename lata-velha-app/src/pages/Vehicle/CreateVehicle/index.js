import React, { useState, useContext, useEffect } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  useTheme,
} from '@material-ui/core';
import style from './style';
import useErrors from '../../../hooks/useErrors';
import FormValidations from '../../../contexts/formValidations';
import messages from '../messages';
import FilterSelect from '../../../components/Select';
import VehicleBrandRepository from '../../../api/services/VehicleBrand/VehicleBrandRepository';
import VehicleBrandService from '../../../api/services/VehicleBrand/VehicleBrandService';
import HttpContext from '../../../contexts/HttpContext';
import VehicleRepository from '../../../api/services/Vehicle/VehicleRepository';
import VehicleService from '../../../api/services/Vehicle/VehicleService';

const CreateVehicle = () => {
  const theme = useTheme();
  const classes = style(theme);
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
        // do a barrel roll
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

  const onSelectChangeHandler = (e) => {
    const optionSelected = e.target.value;
    setSelectedBrandValue(optionSelected);
  }

  return (
    <>
      <Typography variant="h4" component="h1"><FormattedMessage {...messages.createVehicleTitle} /></Typography>
      <form onSubmit={onFormSubmit}>
        <FilterSelect
          options={brands}
          defaultOption={messages.textBrand.defaultMessage}
          label="Marca"
          id="select-brand"
          onChangeHandler={onSelectChangeHandler}
          value={selectedBrandValue}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="model">
            <FormattedMessage {...messages.model} />
          </InputLabel>
          <Input
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            aria-describedby="model-text"
            required
          />
          <FormHelperText id="model-text">
            <FormattedMessage {...messages.textModel} />
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="year">
            <FormattedMessage {...messages.year} />
          </InputLabel>
          <Input
            id="year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            aria-describedby="year-text"
            required
          />
          <FormHelperText id="year-text">
            <FormattedMessage {...messages.textYear} />
          </FormHelperText>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel htmlFor="price">
            <FormattedMessage {...messages.price} />
          </InputLabel>
          <Input
            type="number"
            id="price"
            name="price"
            value={price}
            onBlur={validateField}
            error={!errors.price.valid}
            onChange={(e) => setPrice(e.target.value)}
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            aria-describedby="price-text"
            required
          />
          <FormHelperText id="price-text" aria-live="assertive">
            {
              errors.price.text ||
              <FormattedMessage {...messages.textPrice} />
            }
          </FormHelperText>
        </FormControl>

        <Button
          className={classes.formButton}
          variant="contained"
          color="default"
          type="button"
        >
          <FormattedMessage {...messages.buttonCancel} />
        </Button>
        <Button
          className={classes.formButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          <FormattedMessage {...messages.buttonCad} />
        </Button>
      </form>
    </>
  );
};

export default injectIntl(CreateVehicle);
