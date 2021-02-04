import React, { useContext } from 'react';

import { GitHubContext } from '../../context/GithubContext';
import UserUpperSection from '../../components/UserUpperSection/UserUpperSection';
import UserLowerSectio from '../../components/UserLowerSection/UserLowerSection';
import Layout from '../../components/shared-components/Layout/Layout';
import UserFollowers from '../../components/UserLowerSection/UserFollowers/UserFollowers';

const Dashboard = () => {

    const { user, followers, repos } = useContext(GitHubContext);

    return(
        <Layout>    
            <UserUpperSection user={user} />
            <UserLowerSectio user={user} 
                            repos={repos}
            />
            <UserFollowers followers={followers}/>
        </Layout>
        
    )
}

export default Dashboard