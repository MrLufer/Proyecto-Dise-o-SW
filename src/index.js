import {
  BackendError,
  Lockscreen,
  NotFound,
  OrdenesCompra,
  PasswordReset,
  Pedidos,
  Productos,
  Proveedores,
  Signin,
  Signup,
} from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppProvider from "./components/AppProvider/AppProvider";
import Dashboard from "./containers/Dashboard";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import AuthenticationService from "./auth/AuthenticationService";
render(
  <AppProvider>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path="/signin"
          render={(props) => <Signin {...props} location={props.location} />}
        />
        {AuthenticationService.isUserAuthenticated() == false && (
          <Route
            exact
            path="/"
            render={(props) => <Signin {...props} location={props.location} />}
          />
        )}
        <ProtectedRoute exact path="/" component={Pedidos} />
        <ProtectedRoute exact path="/pedidos" component={Pedidos} />
        <ProtectedRoute exact path="/productos" component={Productos} />
        <ProtectedRoute
          exact
          path="/ordenes-compra"
          component={OrdenesCompra}
        />
        <ProtectedRoute exact path="/proveedores" component={Proveedores} />
        {/* <Route exact path="/500" component={BackendError} />
        <Route exact path="/Lockscreen" component={Lockscreen} />
        <Route exact path="/forgot" component={PasswordReset} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/signup" component={Signup} /> */}
      </Switch>
    </BrowserRouter>
  </AppProvider>,
  document.getElementById("root")
);

registerServiceWorker();
