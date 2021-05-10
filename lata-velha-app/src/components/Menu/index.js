import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import {
  CssBaseline, Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core';
import {
  VpnKey as VpnKeyIcon,
  DirectionsCar as DirectionsCarIcon,
  LocalOffer as LocalOfferIcon,
  People as PeopleIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
} from '@material-ui/icons';
import style from './style';

const Menu = ({ handleDrawerToggle, window, mobileOpen }) => {
  const theme = useTheme();
  const classes = style(theme);

  const listMenu = [
    { label: 'Login', icon: <VpnKeyIcon />, path:'login'},
    { label: 'Veículos', icon: <DirectionsCarIcon />, path:'veiculos' },
    { label: 'Marcas', icon: <LocalOfferIcon />, path:'marcas' },
    { label: 'Usuários', icon: <PeopleIcon />, path:'usuarios' },
    { label: 'Dashboard', icon: <DashboardIcon />, path:'dashboard' },
    { label: 'Sair', icon: <ExitToAppIcon />, path:'sair' },
  ];
  const CustomLink = props => <Link to={to} {...props} />;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {listMenu.map((item) => (
          <ListItem className={classes.navLink} key={item.label} component={Link} to={`/${item.path}`}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} /> 
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
