import { useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Vehicle from './components/Vehicle/Vehicle';
import style from './style';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = style(theme);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Menu handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        <Vehicle />
        {/* <VehicleBrand /> */}
      </main>
    </div>
  );
}

export default App;
