import React from "react";
import { Route, Switch } from "react-router-dom";

function DashboardRoutes({ match: { url } }) {
  return (
    <Switch>
      <Route path={`${url}/`} component={() => <>Dashboard sub</>} />
    </Switch>
  );
}

export default DashboardRoutes;
