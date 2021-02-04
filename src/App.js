import React, { Fragment } from 'react';

import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/shared-components/Header/Header';
import GitHubContextProvider from './context/GithubContext';

import './App.scss'

function App() {
  return (
    <Fragment>
      <GitHubContextProvider>
        <Header />
        <Dashboard />
      </GitHubContextProvider> 
    </Fragment> 
  );
}

export default App;
