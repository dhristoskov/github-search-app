import React from 'react';

import './UserLowerSection.scss'

import UserCard from './UserCard/UserCard';
import UserFollowers from './UserFollowers/UserFollowers';

const UserLowerSectio = ( props ) => {
    return (
        <div className='user-lower'>
            <UserCard className='user-lower-card' user={ props.user }/>
            <UserFollowers className='user-lower-followers' followers={props.followers}/>
        </div>
    )

}

export default UserLowerSectio