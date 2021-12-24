import React from "react";
import { Route, Switch } from "react-router-dom";

function UsersRoutes({ match: { url } }) {
  return (
    <Switch>
      <Route path={`${url}/`} component={() => <>Users sub</>} />
    </Switch>
  );
}

export default UsersRoutes;
