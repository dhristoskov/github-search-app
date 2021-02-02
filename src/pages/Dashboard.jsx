import React, { useContext } from 'react';

import { GitHubContext } from '../context/GithubContext';
import UserUpperSection from '../components/UserUpperSection/UserUpperSection';
import UserLowerSectio from '../components/UserLowerSection/UserLowerSection';

const Dashboard = () => {

    const { user } = useContext(GitHubContext);

    return(
        <div>
            <UserUpperSection user={user} />
            <UserLowerSectio user={user}/>
        </div>
        
    )
}

export default Dashboard