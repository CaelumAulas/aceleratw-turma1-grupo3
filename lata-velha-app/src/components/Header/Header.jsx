import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import style from "./style.js"

const Header = ({handleDrawerToggle}) => {
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
        </Toolbar>
      </AppBar>
    )
}

export default Header