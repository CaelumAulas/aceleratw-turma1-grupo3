import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ email, password });
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">Email </InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-text"
        />
        <FormHelperText id="email-text">Informe seu e-mail</FormHelperText>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">Senha</InputLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-describedby="password-text"
        />
        <FormHelperText id="password-text">Informe sua senha</FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Entrar
      </Button>
    </form>
  );
};

export default SignIn;
