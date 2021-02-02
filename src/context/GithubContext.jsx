import React, { createContext, useState } from 'react';

// import static data to test the app
import { userInfo } from '../staticData/userInfo';
import { reposInfo } from '../staticData/reposInfo';
import { followersInfo } from '../staticData/followersInfo';

// import axios from 'axios'

export const GitHubContext = createContext();

const GitHubContextProvider = ( props ) => {
    const [ user ] = useState(userInfo);
    const [ repos ] = useState(reposInfo);
    const [ followers ] = useState(followersInfo);

    return (
        <GitHubContext.Provider
        value={{ user, repos, followers }}
        >
            { props.children }
        </GitHubContext.Provider>
    )
}

export default GitHubContextProvider