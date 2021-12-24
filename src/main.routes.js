import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import DashboardRoutes from "./modules/dashboard/dashboard.routes";
import TasksRoutes from "./modules/tasks/tasks.routes";
import UsersRoutes from "./modules/users/users.routes";

function MainRoutes() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/*react-router-dom v6^, Routes before Switch*/}
          <Route path="/dashboard" component={DashboardRoutes} />
          <Route path="/user" component={UsersRoutes} />
          <Route path="/" component={TasksRoutes} />
          {/*the "/" last*/}
          {/*react-router-dom v6^ element before component*/}
        </Switch>
      </div>
    </Router>
  );
}

export default MainRoutes;
