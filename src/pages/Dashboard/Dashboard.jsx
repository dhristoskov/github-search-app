import React, { Fragment, useContext } from 'react';

import { GitHubContext } from '../../context/GithubContext';
import UserUpperSection from '../../components/UserUpperSection/UserUpperSection';
import UserLowerSectio from '../../components/UserLowerSection/UserLowerSection';
import Layout from '../../components/shared-components/Layout/Layout';
import UserFollowers from '../../components/UserLowerSection/UserFollowers/UserFollowers';
import Loader from '../../components/shared-components/Loader/Loader';
import Header from '../../components/shared-components/Header/Header';

const Dashboard = () => {

    const { user, followers, repos, loading, searchUser, setLogedIn } = useContext(GitHubContext);

    return(
        <Fragment>
            <Header searchUser={searchUser}
                    setLogedIn={setLogedIn}/>
            <Layout>    
            { 
                    loading 
                    ? <Loader /> 
                    : <Fragment>
                            <UserUpperSection user={user} />
                            <UserLowerSectio user={user} 
                                            repos={repos}
                            />
                            <UserFollowers followers={followers}/>
                    </Fragment>
                }
            </Layout>
        </Fragment>
     
        
    )
}

export default Dashboard