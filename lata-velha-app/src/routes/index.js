import React from 'react';
import Dashboard from "../pages/Dashboard";
import ListUser from "../pages/User/ListUser";
import SignIn from "../pages/User/SignIn";
import SignUp from "../pages/User/SignUp";
import UpdatePassword from "../pages/User/UpdatePassword";
import CreateVehicle from "../pages/Vehicle/CreateVehicle";
import ListVehicle from "../pages/Vehicle/ListVehicle";
import CreateVehicleBrand from "../pages/VehicleBrand/CreateVehicleBrand";
import ListVehicleBrand from "../pages/VehicleBrand/ListVehicleBrand";
import { ADD_USERS_PATH, ADD_VEHICLES_PATH, BRANDS_PATH, DASHBOARD_PATH, SIGNIN_PATH, SIGNOUT_PATH, USERS_PATH, VEHICLES_PATH, UPDATE_PASSWORD_PATH, ADD_BRANDS_PATH } from "./constants";
import {
  VpnKey as VpnKeyIcon,
  DirectionsCar as DirectionsCarIcon,
  LocalOffer as LocalOfferIcon,
  People as PeopleIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';

// The order matters for our maps function on rendering time
const routes = [
  { path: SIGNIN_PATH, name: "Entrar", Component: SignIn, Icon: <VpnKeyIcon /> },
  { path: USERS_PATH, name: "Usuarios", Component: ListUser, Icon: <PeopleIcon /> },
  { path: VEHICLES_PATH, name: "Veículos", Component: ListVehicle, Icon: <DirectionsCarIcon /> },
  { path: BRANDS_PATH, name: "Marcas", Component: ListVehicleBrand, Icon: <LocalOfferIcon /> },
  { path: DASHBOARD_PATH, name: "Dashboard", Component: Dashboard, Icon: <DashboardIcon /> },
  { path: SIGNOUT_PATH, name: "Sair", Component: SignUp, Icon: <ExitToAppIcon /> },
  // { path: ADD_USERS_PATH, name: "Adicionar Usuarios", Component: SignUp , Icon: },
  // { path: ADD_VEHICLES_PATH, name: "Adicionar Veículos", Component: CreateVehicle , Icon: },
  // { path: ADD_BRANDS_PATH, name: "Adicionar Marcas", Component: CreateVehicleBrand , Icon: },
  // { path: UPDATE_PASSWORD_PATH, name: "Atualizar Senha", Component: UpdatePassword , Icon: },
]

export default routes;