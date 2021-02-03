import React, { useContext } from 'react';

import { GitHubContext } from '../../context/GithubContext';
import UserUpperSection from '../../components/UserUpperSection/UserUpperSection';
import UserLowerSectio from '../../components/UserLowerSection/UserLowerSection';
import SerachUser from '../../components/SearchUser/SearchUser';
import Layout from '../../components/shared-components/Layout/Layout';
import Repositories from '../../components/Repositories/Repositories';

const Dashboard = () => {

    const { user, followers, searchUser, repos } = useContext(GitHubContext);

    return(
        <Layout>   
            <SerachUser searchUser={searchUser} />   
            <UserUpperSection user={user} />
            <UserLowerSectio user={user} 
                    followers={followers}
            />
            <Repositories repos={repos}/>
        </Layout>
        
    )
}

export default Dashboard