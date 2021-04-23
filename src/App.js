import { AuthProvider } from "./Context";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtectedRoute";
import routes from "./routes.map";
const App = () => {
    console.log(routes)
  return (
    <AuthProvider>
      <Switch>
        {routes.map((route) => (
          <ProtectedRoute
            exact={route.exact}
            key={route.path}
            path={route.path}
            listRoles={route.listRoles}
            component={route.component}
            isPrivate={route.isPrivate}
          />
        ))}
      </Switch>{" "}
    </AuthProvider>
  );
};

export default App;
