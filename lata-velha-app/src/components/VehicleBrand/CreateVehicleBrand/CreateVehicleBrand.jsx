import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  useTheme,
} from '@material-ui/core';
import style from './style';
import messages from '../messages';

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
        <InputLabel htmlFor="brand">
          <FormattedMessage {...messages.brand} />
        </InputLabel>
        <Input
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          aria-describedby="brand-text"
        />
        <FormHelperText id="brand-text">
          <FormattedMessage {...messages.textBrand} />
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

export default VehicleBrand;
