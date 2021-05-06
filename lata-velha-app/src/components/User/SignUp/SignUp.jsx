import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import messages from '../messages';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(
          {
            name, email, password, passwordConfirmation,
          },
        );
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="name">
          <FormattedMessage {...messages.name} />
        </InputLabel>
        <Input
          id="name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">
          <FormattedMessage {...messages.email} />
        </InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">
          <FormattedMessage {...messages.password} />
        </InputLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password-confirmation">
          <FormattedMessage {...messages.confirmPassword} />
        </InputLabel>
        <Input
          id="password-confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          aria-describedby="password-confirmation-text"
        />
        <FormHelperText id="password-confirmation-text">
          <FormattedMessage {...messages.textConfirmPassword} />
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        <FormattedMessage {...messages.buttonCad} />
      </Button>
    </form>
  );
};

export default SignUp;
