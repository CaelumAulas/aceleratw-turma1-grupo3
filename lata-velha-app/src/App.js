import { useTheme } from "@material-ui/core";
import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
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
              />
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                  {routes.map(({ path, Component }, key) => {
                    return <Route path={path} key={key} component={Component} exact></Route>
                  })}
                  {subroutes.map(({ path, Component }, key) => {
                    return <Route path={path} key={key} component={Component}></Route>
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
