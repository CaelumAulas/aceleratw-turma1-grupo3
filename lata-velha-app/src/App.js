import { useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Menu from "./components/Menu";
import UpdatePassword from "./pages/User/UpdatePassword";
import SignIn from "./pages/User/SignIn";
import ListUser from "./pages/User/ListUser";
import ListVehicle from "./pages/Vehicle/ListVehicle";
import CreateVehicle from "./pages/Vehicle/CreateVehicle";
import style from "./style";
import FormValidations from "./contexts/formValidations";
import {
  validateName,
  validatePassword,
  validateSelect,
  validatePrice,
} from "./models/form";
import ListVehicleBrand from "./pages/VehicleBrand/ListVehicleBrand";
import CreateVehicleBrand from "./pages/VehicleBrand/CreateVehicleBrand";
import SignUp from "./pages/User/SignUp";
import HttpClient from "./utils/HttpClient";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = style(theme);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <FormValidations.Provider
      value={{
        name: validateName,
        oldPassword: validatePassword,
        password: validatePassword,
        passwordConfirmation: validatePassword,
        brand: validateSelect,
        price: validatePrice,
      }}
    >
      <IntlProvider locale="en" defaultLocale="en">
        <Router>
          <div className={classes.root}>
            <Header handleDrawerToggle={handleDrawerToggle} />
            <Menu
              handleDrawerToggle={handleDrawerToggle}
              mobileOpen={mobileOpen}
            />
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Switch>
                <Route path="/login">
                  <SignIn />
                </Route>
                <Route path="/veiculos" exact>
                  <ListVehicle />
                </Route>
                <Route path="/veiculos/adicionar">
                  <CreateVehicle />
                </Route>
                <Route path="/marcas" exact>
                  <ListVehicleBrand />
                </Route>
                <Route path="/marcas/adicionar">
                  <CreateVehicleBrand />
                </Route>
                <Route path="/usuarios" exact>
                  <ListUser />
                </Route>
                <Route path="/usuarios/adicionar">
                  <SignUp />
                </Route>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/sair">
                  <SignUp />
                </Route>
              </Switch>
              {/* <UpdatePassword /> */}
            </main>
          </div>
        </Router>
      </IntlProvider>
    </FormValidations.Provider>
  );
}

export default App;
