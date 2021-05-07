import { defineMessages } from 'react-intl';

const prefix = 'components.User';

export default defineMessages({
  name: {
    id: `${prefix}.name`,
    defaultMessage: 'Nome',
  },
  email: {
    id: `${prefix}.email`,
    defaultMessage: 'Email',
  },
  textEmail: {
    id: `${prefix}.textEmail`,
    defaultMessage: 'Informe seu e-mail',
  },
  password: {
    id: `${prefix}.password`,
    defaultMessage: 'Senha',
  },
  textPassword: {
    id: `${prefix}.textPassword`,
    defaultMessage: 'Informe seu senha',
  },
  confirmPassword: {
    id: `${prefix}.confirmPassword`,
    defaultMessage: 'Confirmar Senha',
  },
  textConfirmPassword: {
    id: `${prefix}.textConfirmPassword`,
    defaultMessage: 'Informe a senha digitada anteriormente',
  },
  buttonLogin: {
    id: `${prefix}.buttonLogin`,
    defaultMessage: 'Entrar',
  },
  buttonCad: {
    id: `${prefix}.buttonCad`,
    defaultMessage: 'Cadastrar',
  },
  oldPassword: {
    id: `${prefix}.oldPassword`,
    defaultMessage: 'Senha anterior',
  },
  newPassword: {
    id: `${prefix}.newPassword`,
    defaultMessage: 'Nova senha',
  },
  textNewPasswordOne: {
    id: `${prefix}.textNewPasswordOne`,
    defaultMessage: 'Confirmar nova senha',
  },
  textNewPasswordTwo: {
    id: `${prefix}.textNewPasswordTwo`,
    defaultMessage: 'Informe a senha digitada anteriormente',
  },
});