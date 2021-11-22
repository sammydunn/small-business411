import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import NavBar from './components/NavBar'
import Dashboard from "./containers/Dashboard"
import Login from "./containers/Login"
import Listings from "./containers/Listings"
import cookie from 'cookie'


export default function Router() {

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
    }

    const ProtectedRoute = ({component: Component, ...rest}) => {
        return (
          <Route
          {...rest}
          render={(props) => checkAuth()
              ? <Component {...props} />
              : <Redirect to="/login" />}
          />
        )
      }

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"> 
                    <NavBar />
                    <Dashboard />
                </Route>
                <Route path="/login"> 
                    <NavBar />
                    <Login/>
                </Route>
                <Route path="/listings"> 
                    <NavBar />
                    <Listings />
                </Route>
            </Switch>
        </BrowserRouter>

    )
}