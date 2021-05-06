import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
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
import messages from '../messages';

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
        <InputLabel htmlFor="brand">
          <FormattedMessage {...messages.brand} />  
        </InputLabel>
        <NativeSelect
          id="brand"
          value={brand}
          onChange={(e) => { setBrand(e.target.value); }}
        >
          <option value="_" disabled>
            <FormattedMessage {...messages.textBrand} />  
          </option>
          {brands.map((currentBrand) => (
            <option key={currentBrand.toLowerCase()} value={currentBrand.toLowerCase()}>
              {currentBrand}
            </option>
          ))}
        </NativeSelect>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="model">
          <FormattedMessage {...messages.model} />  
        </InputLabel>
        <Input
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          aria-describedby="model-text"
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
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
          aria-describedby="price-text"
        />
        <FormHelperText id="price-text">
          <FormattedMessage {...messages.textPrice} />  
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
  );
};

export default CreateVehicle;
