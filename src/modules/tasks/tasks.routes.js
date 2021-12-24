import React from "react";
import { Route, Switch } from "react-router-dom";

function TasksRoutes({ match: { url } }) {
  return (
    <Switch>
      <Route path={`${url}/`} component={() => <>Tasks sub</>} />
    </Switch>
  );
}

export default TasksRoutes;
