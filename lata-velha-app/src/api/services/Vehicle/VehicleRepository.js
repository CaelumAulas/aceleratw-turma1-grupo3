import useToken from '../../../hooks/useToken';
import { VEHICLES_PATH } from '../../../routes/constants';
import { config as apiConfig } from '../../config';

const VehicleRepository = (httpClient) => {
  // VEHICLES_PATH already has /
  const URL = `${apiConfig.API_URL}:${apiConfig.PORT}${VEHICLES_PATH}`;
  const { token } = useToken();
  const findAll = async () => {
    return await httpClient.get(URL);
  }

  const save = async (vehicleForm) => {
    return await httpClient.post(URL, vehicleForm, {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  const remove = async (vehicleId) => {
    return await httpClient.remove(`${URL}/${vehicleId}`);
  }

  return {
    findAll,
    save,
    remove
  }
}

export default VehicleRepository;