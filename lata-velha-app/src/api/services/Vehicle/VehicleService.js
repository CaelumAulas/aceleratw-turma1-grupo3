import VehicleView from "../../../models/Vehicle/VehicleView";

const VehicleService = (vehicleRepository) => {

  const listAll = async () => {
    const vehicleViewList = [];
    const vehiclesJson = await vehicleRepository.findAll();
    vehiclesJson.forEach(vehicle => {
      vehicleViewList.push(
        VehicleView(vehicle.id, vehicle.model, vehicle.brandName, vehicle.year, vehicle.price)
      );
    });
    return vehicleViewList;
  }


  const create = async (vehicleForm) => {
    const apiResponse = await vehicleRepository.save(vehicleForm);
    return apiResponse;
  }

  const update = async (vehicleForm) => {
  }

  const remove = async (vehicleId) => {
    const apiResponse = await vehicleRepository.remove(vehicleId);
    return apiResponse;
  }

  return {
    listAll,
    create,
    update,
    remove,
  }
}

export default VehicleService;