import React from 'react'

import './UserInfo.scss'

const UserInfo = ( props ) => {

    const { followers, following, public_repos, public_gists} = props.user;

    return(
        <div className='user-section'>
            <p>Follower { followers }</p>
            <p>Following { following }</p>
            <p>Repositories { public_repos }</p>
            <p>Gists { public_gists }</p>
        </div>
    )
}

export default UserInfo