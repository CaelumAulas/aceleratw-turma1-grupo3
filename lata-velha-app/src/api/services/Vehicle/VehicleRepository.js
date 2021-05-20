import useToken from '../../../hooks/useToken';
import { VEHICLES_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const VehicleRepository = (httpClient) => {
  // VEHICLES_PATH already has /
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${VEHICLES_PATH}`;
  const { token } = useToken();
  
  const authHeader = {
    'Authorization': `Bearer ${token}`
  };
  const findAll = async () => {
    return await httpClient.get(URL, null, authHeader);
  }

  const save = async (vehicleForm) => {
    return await httpClient.post(URL, vehicleForm, {
      ...authHeader,
      'Content-Type': 'application/json',
    });
  }

  const remove = async (vehicleId) => {
    return await httpClient.remove(`${URL}/${vehicleId}`, authHeader);
  }

  return {
    findAll,
    save,
    remove
  }
}

export default VehicleRepository;