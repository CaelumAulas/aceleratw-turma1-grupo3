import { useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import ActionBar from './components/ActionBar/ActionBar';
// import ListDashboard from './components/Dashboard/ListDashboard/ListDashboard';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
// import SignUp from './components/User/SignUp/SignUp';
// import ListUser from './components/User/ListUser/ListUser';
import ListVehicle from './components/Vehicle/ListVehicle/ListVehicle';
// import ListVehicleBrand from './components/VehicleBrand/ListVehicleBrand/ListVehicleBrand';
import style from './style';

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
          {/* <SignUp /> */}
          {/* <SignIn /> */}
          <ListVehicle />
          {/* <ListVehicleBrand /> */}
          {/* <VehicleBrand /> */}
          {/* <ListDashboard /> */}
          {/* <ListUser /> */}
          <ActionBar />
        </main>
      </div>
    </IntlProvider>
  );
}

export default App;
