import { AccountContext } from '../auth/AccountContext';
import PrivateRoutes from '../auth/PrivateRoutes';
import React,{ useContext } from 'react';

import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Tests from './Tests';
import TestsNormal from './TestsNormal';
import TestsNormal2 from './TestsNormal2';
import CompletedTests from "./CompletedTests";

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';
import CardGame from './CardGame';
import EasyCardGame from './EasyCardGame';
import ChangePassword from './ChangePassword';

  const Views = () => {

    const {user} = useContext(AccountContext)
    return (
        <Router>
          <Routes>
              <Route path="/" element={user.loggedIn === true ? (<Dashboard />) :(<Home />)}/>
              <Route path="/signup" element={user.loggedIn === true ? (<Dashboard />) :(<Signup />)}/>
              <Route path="/login" element={user.loggedIn === true ? (<Dashboard />) :(<Login />) }/>               
              <Route element={<PrivateRoutes/>}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/change" element={<ChangePassword />} />
                  <Route path="/completed" element={<CompletedTests />} />
                  <Route path="/tests" element={<Tests />} />
                  <Route path="/tests1" element={<TestsNormal />} />
                  <Route path="/tests2" element={<TestsNormal2 />} />
                  <Route path="/cards" element={<CardGame />} />
                  <Route path="/cards2" element={<EasyCardGame />} />
              </Route>
              <Route path="*" element={user.loggedIn === true ?  (<Dashboard />) :(<Home />)}/>
          </Routes>
        </Router>
    );

  }

  export default Views;