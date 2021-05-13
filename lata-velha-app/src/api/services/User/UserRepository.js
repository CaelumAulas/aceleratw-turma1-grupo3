import { USERS_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const UserRepository = (httpClient) => {
  // USERS_PATH already has /
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${USERS_PATH}`;

  const findByEmail = async (email) => {
    return await httpClient.get(URL, { email: email });
  }

  const findById = async (userId) => {
    return await httpClient.get(`${URL}/${userId}`);
  }

  const findAll = async () => {
    return await httpClient.get(URL);
  }

  const save = async (userForm) => {
    return await httpClient.post(URL, userForm, {
      'Content-Type': 'application/json'
    });
  }

  const remove = async (userId) => {
    return await httpClient.remove(`${URL}/${userId}`);
  }

  return {
    findByEmail,
    findById,
    findAll,
    save,
    remove
  }
}

export default UserRepository;