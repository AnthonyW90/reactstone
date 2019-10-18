import React, {useGlobal} from 'reactn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import AdminPage from './pages/AdminPage';
import ManagerPage from './pages/ManagerPage';
import MaintenancePage from './pages/MaintenancePage';
import ResidentPage from './pages/ResidentPage';

function App() {
  const { 0: role} = useGlobal("role")

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {role === 'admin' ? <AdminPage></AdminPage> : 
            role === 'manager' ? <ManagerPage></ManagerPage> : 
            role === 'maintenance' ? <MaintenancePage></MaintenancePage> : 
            role === 'resident' ? <ResidentPage></ResidentPage> : 
            <LandingPage></LandingPage>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
