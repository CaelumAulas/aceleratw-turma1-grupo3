function validateName(name) {
  if (name.length !== 2) {
    return { valid: false, text: 'O nome deve ter no minimo 2 caracteres' };
  }

  return { valid: true, text: '' };
}

function validatePassword(password) {
  if (password.length < 6 || password.length > 72) {
    return { valid: false, text: 'Senha deve ter entre 6 e 72 digitos' };
  }

  return { valid: true, text: '' };
}

export { validateName, validatePassword };
