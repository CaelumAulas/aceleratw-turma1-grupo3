import { AUTH_PATH_SIGN_IN } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const AuthRepository = (httpClient) => {
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${AUTH_PATH_SIGN_IN}`;

  const save = async (authForm) => {
    return await httpClient.post(URL, authForm, {
      'Content-Type': 'application/json'
    });
  }
 
  return {
    save,
  }
}

export default AuthRepository;