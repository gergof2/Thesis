import { AccountContext } from '../auth/AccountContext';
import PrivateRoutes from '../auth/PrivateRoutes';
import React,{ useContext } from 'react';

import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
  const Views = () => {

    const {user} = useContext(AccountContext)
    return (
        <Router>
          <Routes>
              <Route path="/" element={user.loggedIn === true ? (<Dashboard />) :(<Home />)}/>
              <Route path="/login" element={user.loggedIn === true ? (<Dashboard />) :(<Login />) }/>               
              <Route element={<PrivateRoutes/>}>
                  <Route path="/dashboard" element={<Dashboard />} />
              </Route>
              <Route path="*" element={user.loggedIn === true ?  (<Dashboard />) :(<Home />)}/>
          </Routes>
        </Router>
    );

  }

  export default Views;