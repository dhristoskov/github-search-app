import React, { Fragment } from 'react';

import Dashboard from './pages/Dashboard';
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
