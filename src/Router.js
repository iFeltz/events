import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router';
import Home from './pages/HomePage';
import Event from './pages/EventPage';

const routes = [
  {
    path: "/",
    exact: true,
    component: withRouter(Home)
  },
  {
    path: "/event/:id",
    exact: false,
    component: withRouter(Event)
  }
];

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            render={props => (
              // pass the sub-routes down to keep nesting
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router;