import React from 'react';
import {
  Route,
  NavLink,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
import Dashboard from './view/dashboard'
import Register from './view/register'
import Buildings from './view/Buildings/buildingsData'
import Beds from './view/Beds/bedsData'
import UnitsDetails from './view/Units/UnitsDetails'


function App() {

  const getAsp = null
  return (
    <div>
      {getAsp === null ? (
        <Dashboard/>
      ): (
        <Router>
            <div>
              {/* <NavLink className="navs-css" exact activeClassName="active" to="/">Home</NavLink>
              <NavLink className="navs-css" exact activeClassName="active" to="/users">Registered Users</NavLink>
              <NavLink className="navs-css" exact activeClassName="active" to="/login">Login</NavLink>
              <NavLink className="navs-css" exact activeClassName="active" to="/createUser">Create User</NavLink> */}
  
              <Switch>
                  <Route exact path="/">
                    <Dashboard />
                  </Route>
                  {/* <Route path="/buildings" component={Buildings} />
                  <Route path="/units" component={UnitsDetails} />
                  <Route path="/beds" component={Beds} />
                  <Route path="/register" component={Register} /> */}
              </Switch>
            </div>
        </Router>
      )}
    </div>
  );
}

export default App;
