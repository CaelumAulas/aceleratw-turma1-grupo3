import React, { useState, useContext } from 'react';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@material-ui/core';
import useErrors from '../../../hooks/useErrors';
import FormValidations from '../../../contexts/formValidations';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
              name, email, password, passwordConfirmation,
            },
          );
        }
      }}
    >
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="name">Nome</InputLabel>
        <Input
          id="name"
          name="name"
          onBlur={validateField}
          error={!errors.name.valid}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="email">Email </InputLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="password">Senha</InputLabel>
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
        <InputLabel htmlFor="password-confirmation">Confirmar Senha</InputLabel>
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
          {errors.passwordConfirmation.text || 'Informe a senha digitada anteriormente'}
        </FormHelperText>
      </FormControl>

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
};

export default SignUp;
