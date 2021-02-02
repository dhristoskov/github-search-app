import React, { Fragment } from 'react';

import Dashboard from './components/Dashboard/Dashboard';
import GitHubContextProvider from './context/GithubContext';

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
