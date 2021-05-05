import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  useTheme,
} from '@material-ui/core';
import style from './style';

const VehicleBrand = () => {
  const [brand, setBrand] = useState('');
  const theme = useTheme();
  const classes = style(theme);

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ brand });
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="brand">Marca</InputLabel>
        <Input
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          aria-describedby="brand-text"
        />
        <FormHelperText id="brand-text">
          Informe a marca do veículo
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

export default VehicleBrand;
