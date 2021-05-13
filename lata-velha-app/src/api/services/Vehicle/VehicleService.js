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
    const newVehicle = await vehicleRepository.save(vehicleForm);
    return newVehicle;
  }

  const update = async (vehicleForm) => {
  }

  const remove = async (vehicleId) => {
    
  }

  return {
    listAll,
    create,
    update,
    remove,
  }
}

export default VehicleService;