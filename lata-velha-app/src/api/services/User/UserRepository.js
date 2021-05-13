import { USERS_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const UserRepository = (httpClient) => {
  // USERS_PATH already has /
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${USERS_PATH}`;

  const findByEmail = (email) => {
  }

  const findAll = async () => {
    return await httpClient.get(URL);
  }

  const save = () => {

  }

  const remove = () => {

  }

  return {
    findByEmail,
    findAll,
    save,
    remove
  }
}

export default UserRepository;