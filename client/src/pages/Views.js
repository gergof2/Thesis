import { AccountContext } from '../auth/AccountContext';
import PrivateRoutes from '../auth/PrivateRoutes';
import React,{ useContext } from 'react';

import Login from './Login';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
    const {user} = useContext(AccountContext)
    return (
        <Router>
          <Routes>
              <Route path="/login" element={user.loggedIn === true ? (<Dashboard />) :(<Login />) }/>               
              <Route element={<PrivateRoutes/>}>
              </Route>
          </Routes>
        </Router>
    );

  }

  export default Views;