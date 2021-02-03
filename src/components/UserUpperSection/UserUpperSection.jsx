import React from 'react';

import InfoItem from './InfoItem/InfoItem';
import { GrGithub, GrCode } from 'react-icons/gr';
import { FiUsers, FiUserPlus } from 'react-icons/fi';

import './UserUpperSection.scss'

const UserUpperSection = ( props ) => {

    const { followers, following, public_repos, public_gists} = props.user;

    // Info Items Array
    const infoItems = [
        {
            id: 'repos',
            icon: <GrGithub />,
            label: 'Repositories',
            value: public_repos
        },
        {
            id: 'followers',
            icon: <FiUsers />,
            label: 'Followers',
            value: followers
        },
        {
            id: 'following',
            icon: <FiUserPlus />,
            label: 'Following',
            value: following
        },
        {
            id: 'gists',
            icon: <GrCode />,
            label: 'Gists',
            value: public_gists
        },
    ];

    return(
        <div className='userinfo-section'>
            {infoItems.map(item => 
                <InfoItem key={item.id} {...item} />
            )}
        </div>
    )
}

export default UserUpperSection