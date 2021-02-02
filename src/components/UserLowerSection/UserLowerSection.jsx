import React from 'react';

import UserCard from './UserCard/UserCard';
import UserFollowers from './UserFollowers/UserFollowers';

const UserLowerSectio = ( props ) => {
    return (
        <div>
            <UserCard user={ props.user }/>
            <UserFollowers />
        </div>
    )

}

export default UserLowerSectio