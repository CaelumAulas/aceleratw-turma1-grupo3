const AuthService = (authRepository) => {
  const create = async (authForm) => {
    const auth = await authRepository.save(authForm);

    return auth;
  }

  return {
    create,
  }
}

export default AuthService;