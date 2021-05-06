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

const UpdatePassword = () => {
  const [oldPassord, setOldPassword] = useState('');
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
            oldPassord, password, passwordConfirmation,
          },
        );
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="oldPassword">
          <FormattedMessage {...messages.oldPassword} />  
        </InputLabel>
        <Input
          id="oldPassword"
          type="password"
          value={oldPassord}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">
          <FormattedMessage {...messages.newPassword} />  
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
          <FormattedMessage {...messages.textNewPasswordOne} />  
        </InputLabel>
        <Input
          id="password-confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          aria-describedby="password-confirmation-text"
        />
        <FormHelperText id="password-confirmation-text">
          <FormattedMessage {...messages.textNewPasswordTwo} />  
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default UpdatePassword;
