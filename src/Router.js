import { Provider as ReduxProvider } from "react-redux";
import { Switch, Route } from "react-router";

import Details from "./components/Details";
import List from "./components/List";
import Login from "./components/Login";
import Navbar from "./components/NavBar";

const Router = () => {
  return(
    <Switch>
      <Router exact path='/'>
        <Navbar />
        <Login />
      </Router>
      <Router exact path='/listings'>
        <Navbar />
        <List />
      </Router>
    </Switch>
  )
}

export default Router;