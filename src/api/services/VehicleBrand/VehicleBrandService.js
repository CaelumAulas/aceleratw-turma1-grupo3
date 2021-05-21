import VehicleBrandView from "../../../models/VehicleBrand/VehicleBrandView";

const VehicleBrandService = (vehicleBrandRepository) => {

  const listAll = async () => {
    const vehicleBrandViewList = [];
    const vehicleBrandsJson = await vehicleBrandRepository.findAll();
    vehicleBrandsJson.forEach(brand => {
      vehicleBrandViewList.push(VehicleBrandView(brand.id, brand.name));
    });
    return vehicleBrandViewList;
  }


  const create = async (vehicleBrandForm) => {
    const apiResponse = await vehicleBrandRepository.save(vehicleBrandForm);
    return apiResponse;
  }

  const update = async (vehicleBrandForm) => {
  }

  const remove = async (vehicleBrandId) => {
    
  }

  return {
    listAll,
    create,
    update,
    remove,
  }
}

export default VehicleBrandService;