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

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const validations = useContext(FormValidations);
  const [errors, validateField, formIsValid] = useErrors(validations);

  console.log(errors);
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <h1><FormattedMessage {...messages.signUpTitle} /></h1>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (formIsValid()) {
          handleSubmit(
            {
              name, email, password, passwordConfirmation,
            },
          );
        }
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="name">
          <FormattedMessage {...messages.name} />
        </InputLabel>
        <Input
          id="name"
          name="name"
          onBlur={validateField}
          error={!errors.name.valid}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="off"
          aria-describedby="name-text"
        />
        <FormHelperText id="name-text" aria-live="assertive">
          {errors.name.text}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">
          <FormattedMessage {...messages.email} />
        </InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="off"
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">
          <FormattedMessage {...messages.password} />
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
          aria-describedby="password-text"
        />
        <FormHelperText id="password-text" aria-live="assertive">
          {errors.password.text}
        </FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password-confirmation">
          <FormattedMessage {...messages.confirmPassword} />
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
          <FormattedMessage {...messages.textConfirmPassword} />  
          }
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        <FormattedMessage {...messages.buttonCad} />
      </Button>
    </form>
    </>
  );
};

export default SignUp;
