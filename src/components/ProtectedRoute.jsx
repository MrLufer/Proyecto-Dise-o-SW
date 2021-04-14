import React from "react";
import { Route, Redirect } from "react-router-dom";

import Dashboard from "../containers/Dashboard";
import { Signin } from "../pages";
export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (true) {
          return <Component {...rest} {...props} />
        } else {
          return <Redirect to={{
            pathname:"/",
            state:{
                from: props.location
            }
        }}/>;
        }
      }}
    ></Route>
  );
};
