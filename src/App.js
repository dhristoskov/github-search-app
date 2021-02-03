import React, { Fragment } from 'react';

import Dashboard from './pages/Dashboard/Dashboard';
import GitHubContextProvider from './context/GithubContext';

import './App.scss'

function App() {
  return (
    <Fragment>
      <GitHubContextProvider>
        <Dashboard />
      </GitHubContextProvider> 
    </Fragment> 
  );
}

export default App;
