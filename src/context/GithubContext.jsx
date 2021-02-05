import React, { createContext, useState } from 'react';

// import static data to test the app
import { userInfo } from '../staticData/userInfo';
import { reposInfo } from '../staticData/reposInfo';
import { followersInfo } from '../staticData/followersInfo';

import axios from 'axios';

const baseURL = 'http://api.github.com';

export const GitHubContext = createContext();

const GitHubContextProvider = ( props ) => {
    const [ user, setUser ] = useState(userInfo);
    const [ repos, setRepos ] = useState(reposInfo);
    const [ followers, setFollowers ] = useState(followersInfo);
    const [ loading, setLoading ] = useState(false);
    const [ logedIn, setLogedIn] = useState(false);

    const searchUser = async (newUser) =>{
        setLoading(true);
        const response = await axios.get(`${baseURL}/users/${newUser}`)
        .catch((err) => console.log(err));

        if(response) {
            const { login, followers_url } = response.data
            setUser(response.data);

            await axios.get(`${baseURL}/users/${login}/repos`)
            .then(res => setRepos(res.data))
            .catch((err) => console.log(err));

            await axios.get(`${followers_url}`)
            .then(res => setFollowers(res.data))
            .catch((err) => console.log(err));

            setLogedIn(true);
        }else {
            setLogedIn(false);
        }

        setLoading(false);
    };

    return (
        <GitHubContext.Provider
        value={{ 
            user, 
            repos, 
            followers, 
            searchUser, 
            loading, 
            logedIn, 
            setLogedIn 
        }}
        >
            { props.children }
        </GitHubContext.Provider>
    )
}

export default GitHubContextProvider