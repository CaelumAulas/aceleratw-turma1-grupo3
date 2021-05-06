import React, { useState } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';

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
        <InputLabel htmlFor="name">Nome</InputLabel>
        <Input
          id="name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">Email </InputLabel>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default SignUp;
