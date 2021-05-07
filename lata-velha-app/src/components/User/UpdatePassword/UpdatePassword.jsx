import React, { useState, useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import useErrors from '../../../hooks/useErrors';
import FormValidations from '../../../contexts/formValidations';
import messages from '../messages';

const UpdatePassword = () => {
  const [oldPassord, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

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
          handleSubmit(
            {
              oldPassord, password, passwordConfirmation,
            },
          );
        }
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="oldPassword">
          <FormattedMessage {...messages.oldPassword} />  
        </InputLabel>
        <Input
          id="old-password"
          name="oldPassword"
          type="password"
          onBlur={validateField}
          error={!errors.oldPassword.valid}
          value={oldPassord}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">
          <FormattedMessage {...messages.newPassword} />  
        </InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          onBlur={validateField}
          error={!errors.password.valid}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password-confirmation">
          <FormattedMessage {...messages.textNewPasswordOne} />  
        </InputLabel>
        <Input
          id="password-confirmation"
          name="passwordConfirmation"
          type="password"
          onBlur={validateField}
          error={!errors.passwordConfirmation.valid}
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          aria-describedby="password-confirmation-text"
          required
        />
        <FormHelperText id="password-confirmation-text">
          {
          errors.passwordConfirmation.text || 
          <FormattedMessage {...messages.textNewPasswordTwo} />  
          }
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default UpdatePassword;
