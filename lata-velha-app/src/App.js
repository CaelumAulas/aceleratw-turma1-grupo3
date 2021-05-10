import { useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import ActionBar from './components/ActionBar';
import ListDashboard from './pages/Dashboard';
import Header from './components/Header';
import Menu from './components/Menu';
import UpdatePassword from './pages/User/UpdatePassword';
import SignIn from './pages/User/SignIn';
import ListUser from './pages/User/ListUser';
import ListVehicle from './pages/Vehicle/ListVehicle';
import CreateVehicle from './pages/Vehicle/CreateVehicle';
import style from './style';
import FormValidations from './contexts/formValidations';
import {
  validateName, validatePassword, validateSelect, validatePrice,
} from './models/form';
import ListVehicleBrand from './pages/VehicleBrand/ListVehicleBrand'
import CreateVehicleBrand from './pages/VehicleBrand/CreateVehicleBrand'
import SignUp from './pages/User/SignUp'

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
            <SignIn />
            <CreateVehicle />
            <ListVehicle />
            <ListVehicleBrand />
            <CreateVehicleBrand />
            <ListDashboard />
            <ListUser />
            <UpdatePassword />
          </FormValidations.Provider>

          {/* <ActionBar /> */}
        </main>
      </div>
    </IntlProvider>
  );
}

export default App;
