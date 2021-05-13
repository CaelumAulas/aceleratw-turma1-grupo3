import {
  CssBaseline, 
  Divider, 
  Drawer, 
  Hidden, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import style from './style';

const Menu = ({ handleDrawerToggle, window, mobileOpen }) => {
  const theme = useTheme();
  const classes = style(theme);

  const CustomLink = props => <NavLink activeClassName={classes.navLinkActive} exact {...props} />;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routes.map(({name, path, Icon}) => (
          <ListItem className={classes.navLink} key={path} component={CustomLink} to={path}>
            <ListItemIcon color="disabled" className={classes.navLinkActiveIcon}>{Icon}</ListItemIcon>
            <ListItemText primary={name} /> 
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
};

Menu.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  window: PropTypes.func,
  mobileOpen: PropTypes.bool.isRequired,
};

Menu.defaultProps = {
  window: undefined,
};

export default Menu;
