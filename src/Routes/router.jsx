import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard"
import Register from "../pages/Register"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/register" component={Register} />
    </Switch>
  );
};

export default Router;
