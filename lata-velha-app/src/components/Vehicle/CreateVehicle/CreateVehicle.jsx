import React, { useState, useContext } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  NativeSelect,
  useTheme,
} from '@material-ui/core';
import style from './style';
import useErrors from '../../../hooks/useErrors';
import FormValidations from '../../../contexts/formValidations';

const CreateVehicle = () => {
  const today = new Date();
  const currentYear = today.getFullYear();

  const brands = ['Fiat', 'BMW', 'Ferrari'];
  const [brand, setBrand] = useState('_');
  const [model, setModel] = useState('');
  const [year, setYear] = useState(currentYear);
  const [price, setPrice] = useState(0);

  const theme = useTheme();
  const classes = style(theme);

  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (formIsValid()) {
          handleSubmit({
            brand, model, year, price,
          });
        }
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="brand">Marca</InputLabel>
        <NativeSelect
          id="brand"
          name="brand"
          value={brand}
          onBlur={validateField}
          error={!errors.brand.valid}
          onChange={(e) => { setBrand(e.target.value); }}
          required
        >
          <option value="_" disabled>
            Escolha a marca
          </option>
          {brands.map((currentBrand) => (
            <option key={currentBrand.toLowerCase()} value={currentBrand.toLowerCase()}>
              {currentBrand}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="model">Modelo</InputLabel>
        <Input
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          aria-describedby="model-text"
          required
        />
        <FormHelperText id="model-text">
          Informe o modelo do veículo
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="year">Ano</InputLabel>
        <Input
          id="year"
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          aria-describedby="year-text"
          required
        />
        <FormHelperText id="year-text">Informe o ano do veículo</FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="price">Preço</InputLabel>
        <Input
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
        <FormHelperText id="price-text">
          {errors.price.text || 'Informe o preço do veículo'}
        </FormHelperText>
      </FormControl>

      <Button
        className={classes.formButton}
        variant="contained"
        color="default"
        type="button"
      >
        Cancelar
      </Button>
      <Button
        className={classes.formButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default CreateVehicle;
