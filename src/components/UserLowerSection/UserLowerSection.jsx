import React from 'react';

import './UserLowerSection.scss'

import UserCard from './UserCard/UserCard';
import Repositories from './Repositories/Repositories';

const UserLowerSectio = ( props ) => {
    return (
        <div className='user-lower'>
            <UserCard className='user-lower-card' user={ props.user }/>
            <Repositories  className='user-lower-repos' repos={props.repos}/>
        </div>
    )

}

export default UserLowerSectio