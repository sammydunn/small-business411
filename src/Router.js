import { Switch, Route, Redirect } from "react-router-dom"
import Dashboard from "./containers/Dashboard"
import Login from "./containers/Login"
import Listings from "./containers/Listings"
import cookie from 'cookie'


export default function Router() {

    const checkAuth = () => {
        const cookies = cookie.parse(document.cookie)
        return cookies["loggedIn"] ? true : false
    }
  
    const ProtectedRoute = ({
        component: Component, ...rest
    }) => {
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
     
            <Switch>        
                <Route exact path="/" component={Listings}/>
                <Route path="/login" component={Login}/>
                <Route path="/listings" component={Listings}/>
                <ProtectedRoute path="/dashboard" component={Dashboard}/>
            </Switch>
       
       
    )
}