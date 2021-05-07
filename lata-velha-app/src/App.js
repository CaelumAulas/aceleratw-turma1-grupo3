import { useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import ActionBar from './components/ActionBar/ActionBar';
import ListDashboard from './components/Dashboard/ListDashboard/ListDashboard';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import UpdatePassword from './components/User/UpdatePassword/UpdatePassword';
import SignIn from './components/User/SignIn/SignIn';
import ListUser from './components/User/ListUser/ListUser';
import ListVehicle from './components/Vehicle/ListVehicle/ListVehicle';
import CreateVehicle from './components/Vehicle/CreateVehicle/CreateVehicle';
import style from './style';
import FormValidations from './contexts/formValidations';
import {
  validateName, validatePassword, validateSelect, validatePrice,
} from './models/form';
import ListVehicleBrand from './components/VehicleBrand/ListVehicleBrand/ListVehicleBrand'
import CreateVehicleBrand from './components/VehicleBrand/CreateVehicleBrand/CreateVehicleBrand'
import SignUp from './components/User/SignUp/SignUp'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = style(theme);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <IntlProvider locale="en" defaultLocale="en">
      <div className={classes.root}>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Menu handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <FormValidations.Provider value={{
            name: validateName,
            oldPassword: validatePassword,
            password: validatePassword,
            passwordConfirmation: validatePassword,
            brand: validateSelect,
            price: validatePrice,
          }}
          >
            <SignUp />
            {/* <SignIn />
            <CreateVehicle />
            <ListVehicle />
            <ListVehicleBrand />
            <CreateVehicleBrand />
            <ListDashboard />
            <ListUser />
            <UpdatePassword /> */}
          </FormValidations.Provider>

          {/* <ActionBar /> */}
        </main>
      </div>
    </IntlProvider>
  );
}

export default App;
