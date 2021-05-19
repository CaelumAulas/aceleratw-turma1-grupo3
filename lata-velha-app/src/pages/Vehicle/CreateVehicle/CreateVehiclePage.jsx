import { Button, FormControl, FormHelperText, Input, InputAdornment, InputLabel, Typography, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import FilterSelect from '../../../components/Select';
import style from './style';
import messages from '../messages';

const CreateVehiclePage = (props) => {
  const { 
    onFormSubmitHandler, 
    onSelectChangeHandler, 
    onYearChangeHandler,
    onPriceChangeHandler,
    onModelChangeHandler,
    errorsValidation, 
    validateField,
    brands,
    selectedBrandValue,
    modelValue,
    yearValue,
    priceValue,
  } = props
  const theme = useTheme();
  const classes = style(theme);

  return (
    <>
      <Typography variant="h4" component="h1"><FormattedMessage {...messages.createVehicleTitle} /></Typography>
      <form onSubmit={onFormSubmitHandler}>
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
            value={modelValue}
            onChange={onModelChangeHandler}
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
            value={yearValue}
            onChange={onYearChangeHandler}
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
            value={priceValue}
            onBlur={validateField}
            error={!errorsValidation.price.valid}
            onChange={onPriceChangeHandler}
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            aria-describedby="price-text"
            required
          />
          <FormHelperText id="price-text" aria-live="assertive">
            {
              errorsValidation.price.text ||
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
}

CreateVehiclePage.propTypes = {
  onFormSubmitHandler: PropTypes.func.isRequired,
  onSelectChangeHandler: PropTypes.func.isRequired,
  onYearChangeHandler: PropTypes.func.isRequired,
  onPriceChangeHandler: PropTypes.func.isRequired,
  onModelChangeHandler: PropTypes.func.isRequired,
  errorsValidation: PropTypes.object.isRequired,
  validateField: PropTypes.func.isRequired,
  brands: PropTypes.array.isRequired,
  selectedBrandValue: PropTypes.string.isRequired,
  modelValue: PropTypes.string.isRequired,
  yearValue: PropTypes.number.isRequired,
  priceValue: PropTypes.number.isRequired,
};

export default CreateVehiclePage;