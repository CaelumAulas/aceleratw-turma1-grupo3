import { useContext } from "react";
import HttpContext from "../contexts/HttpContext";

export default function useVehicleService() {

  const httpClient = useContext(HttpContext);
  const vehicleRepository = VehicleRepository(httpClient);
  const vehicleService = VehicleService(vehicleRepository);

  return vehicleService;
};
