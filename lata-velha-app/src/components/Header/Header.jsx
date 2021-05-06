import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';
import style from './style';
// import ActionBar from '../ActionBar/ActionBar';

const Header = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const classes = style(theme);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Lata Velha
        </Typography>
        {/* <IconButton aria-label="search" color="inherit">
          <SearchIcon />
        </IconButton> */}
      </Toolbar>

    </AppBar>
  );
};

export default Header;

Header.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
};
