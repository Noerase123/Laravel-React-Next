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

  return (
    <div>
      <Dashboard/>
    </div>
  );
}

export default App;
