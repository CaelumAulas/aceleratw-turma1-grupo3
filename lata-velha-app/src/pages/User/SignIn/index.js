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

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          handleSubmit({ email, password });
        }
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">
          <FormattedMessage {...messages.email} />  
        </InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-text"
          required
        />
        <FormHelperText id="email-text">
          <FormattedMessage {...messages.textEmail} />  
        </FormHelperText>
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
          aria-describedby="password-text"
          required
        />
        <FormHelperText id="password-text">
          {
          errors.password.text || 
          <FormattedMessage {...messages.textPassword} />
          }
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        <FormattedMessage {...messages.buttonLogin} />  
      </Button>
    </form>
  );
};

export default SignIn;
