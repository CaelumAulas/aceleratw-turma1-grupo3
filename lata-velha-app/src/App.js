import { useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import style from "./style";
import FormValidations from "./contexts/formValidations";
import {
  validateName,
  validatePassword,
  validateSelect,
  validatePrice,
} from "./models/form";
import HttpClient from "./utils/HttpClient";
import { routes, subroutes } from './routes';
import HttpContext from './contexts/HttpContext';
import SignIn from "./pages/User/SignIn";
import useToken from './hooks/useToken';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const { token, setToken } = useToken();

  const httpClient = HttpClient();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const classes = style(theme);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <HttpContext.Provider value={httpClient}>
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
                token={token}
              />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                  {routes.map(({ path, Component, isPrivate }, key) => {
                    return <PrivateRoute path={path} component={(props) => <Component setToken={setToken} {...props} />} key={key} token={token} isPrivate={isPrivate} exact /> 
                  })}
                  {subroutes.map(({ path, Component, isPrivate }, key) => {
                    return <PrivateRoute path={path} component={Component} key={key} token={token} isPrivate={isPrivate} exact /> 
                  })}
                </Switch>
              </main>
            </div>
          </Router>
        </IntlProvider>
      </FormValidations.Provider>
    </HttpContext.Provider>
  );
}

export default App;
