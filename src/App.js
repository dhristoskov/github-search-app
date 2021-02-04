import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import GitHubContextProvider from './context/GithubContext';

import './App.scss'

function App() {
  return (
    <Fragment>
      <GitHubContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={Dashboard}/>
            <Redirect to='/'/>
          </Switch>
        </Router> 
      </GitHubContextProvider> 
    </Fragment> 
  );
}

export default App;
