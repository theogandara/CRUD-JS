import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import ClientPage from "../pages/ClientPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/client" component={ClientPage} />
    </Switch>
  );
};

export default Router;
