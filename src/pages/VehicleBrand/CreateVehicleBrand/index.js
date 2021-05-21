import React, { useContext, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
  useTheme,
} from '@material-ui/core';
import style from './style';
import messages from '../messages';
import useVehicleBrandService from '../../../hooks/useVehicleBrandService';
import { useHistory } from 'react-router';
import useErrors from '../../../hooks/useErrors';
import FormValidations from '../../../contexts/formValidations';

const VehicleBrand = ({ location }) => {
  const [brand, setBrand] = useState('');
  const theme = useTheme();
  const classes = style(theme);
  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);
  const initialFormState = {
    name: ''
  };
  const editForm = location.state?.form;

  const [form, setFormState] = useState(editForm ?? initialFormState);

  const brandService = useVehicleBrandService();
  const history = useHistory();

  const handleSubmit = async ({ brand }) => {
    // e.preventDefault();
    if (isEditing()) {
      editVehicleBrand(brand);
    } else {
      createVehicleBrand(brand);
    }  };

  const createVehicleBrand = async (brand) => {
    try {
      if (formIsValid()) {
        // const { name } = form;
        const apiResponse = await brandService.create(
          VehicleBrand(brand)
        );
        if (apiResponse.success) {
          resetFormStates();
          toast.success(messages.vehicleBrandCreated.defaultMessage);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  const editVehicleBrand = async (brand) => {
    try {
      if (formIsValid()) {
        // const { name } = form;
        const brand = VehicleBrand(brand);
        const { id } = editForm;
        const apiResponse = await brandService.update(id, brand);
        if (apiResponse) {
          resetFormStates();
          toast.success(messages.vehicleBrandUpdated.defaultMessage);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  }

  const isEditing = () => {
    return typeof editForm !== 'undefined';
  }

  const resetFormStates = () => {
    setFormState({ ...initialFormState });
  }

  const onCancelClick = () => {
    history.goBack();
  }

  return (
    <>
      <Typography variant="h4" component="h1">
      {!isEditing ? <FormattedMessage {...messages.createVehicleBrandTitle} /> : <FormattedMessage {...messages.editVehicleBrandTitle} />}
      </Typography>
      <form
      onSubmit={handleSubmit}
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
          required
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
        onClick={onCancelClick}
      >
        <FormattedMessage {...messages.buttonCancel} />
      </Button>
      <Button
        className={classes.formButton}
        variant="contained"
        color="primary"
        type="submit"
      >
        {!isEditing ? <FormattedMessage {...messages.buttonCad} /> : <FormattedMessage {...messages.buttonEdit} />}
      </Button>
    </form>
    </>
  );
};

VehicleBrand.propTypes = {
  location: PropTypes.object
};
export default VehicleBrand;
