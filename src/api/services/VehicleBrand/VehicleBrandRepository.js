import useToken from '../../../hooks/useToken';
import { BRANDS_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const VehicleBrandRepository = (httpClient) => {
  // BRANDS_PATH already has /
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${BRANDS_PATH}`;
  const { token } = useToken();

  const findAll = async () => {
    return await httpClient.get(URL, null, {
      'Authorization': `Bearer ${token}`
    });
  }

  const save = async (vehicleBrandForm) => {
    return await httpClient.post(URL, vehicleBrandForm, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  const remove = async (vehicleBrandId) => {
    return await httpClient.remove(`${URL}/${vehicleBrandId}`);
  }

  return {
    findAll,
    save,
    remove
  }
}

export default VehicleBrandRepository;