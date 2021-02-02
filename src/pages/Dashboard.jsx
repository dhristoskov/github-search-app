import React, { useContext } from 'react';

import { GitHubContext } from '../context/GithubContext';
import UserInfo from '../components/UserInfo/UserInfo';

const Dashboard = () => {

    const { user } = useContext(GitHubContext);

    return(
        <UserInfo user={user} />
    )
}

export default Dashboard