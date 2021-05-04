import { useTheme } from '@material-ui/core';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import SignUp from './components/User/SignUp/SignUp';
import style from './style'

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const classes = style(theme);
  
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header 
        handleDrawerToggle={handleDrawerToggle} 
      />
      <Menu 
        handleDrawerToggle={handleDrawerToggle} 
        mobileOpen={mobileOpen}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <SignUp />
      </main>
    </div>
  );
}

export default App;
