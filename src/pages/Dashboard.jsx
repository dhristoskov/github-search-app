import React, { useContext } from 'react';

import { GitHubContext } from '../context/GithubContext';
import UserUpperSection from '../components/UserUpperSection/UserUpperSection';
import UserLowerSectio from '../components/UserLowerSection/UserLowerSection';
import SerachUser from '../components/SearchUser/SearchUser';

const Dashboard = () => {

    const { user, followers } = useContext(GitHubContext);

    return(
        <div>      
            <UserUpperSection user={user} />
            <SerachUser />
            <UserLowerSectio user={user} 
                    followers={followers}
            />
        </div>
        
    )
}

export default Dashboard