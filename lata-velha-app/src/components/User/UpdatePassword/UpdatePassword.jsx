import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';

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
        <InputLabel htmlFor="email">Senha anterior </InputLabel>
        <Input
          id="oldPassword"
          type="password"
          value={oldPassord}
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">Senha</InputLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password-confirmation">Confirmar Senha</InputLabel>
        <Input
          id="password-confirmation"
          type="password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          aria-describedby="password-confirmation-text"
        />
        <FormHelperText id="password-confirmation-text">
          Informe a senha digitada anteriormente
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default UpdatePassword;
