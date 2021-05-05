import React, { useState } from 'react';
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

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
          brand, model, year, price,
        });
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="brand">Marca</InputLabel>
        <NativeSelect
          id="brand"
          value={brand}
          onChange={(e) => { setBrand(e.target.value); }}
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
        />
        <FormHelperText id="year-text">Informe o ano do veículo</FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="price">Preço</InputLabel>
        <Input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          aria-describedby="price-text"
        />
        <FormHelperText id="price-text">
          Informe o preço do veículo
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
