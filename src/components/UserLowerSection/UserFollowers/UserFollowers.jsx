import React from 'react'
import { FiLink } from "react-icons/fi";

import './UserFollowers.scss'

const UserFollowers = (props) => {

    return (
        <div className='user-followers'>
            {
                props.followers.map(follower => {
                    const { id, avatar_url, html_url, login} = follower
                    return(
                        <div className='user-followers-item' key={id}>
                            <img className='user-followers-item__image' src={avatar_url} alt={login} />
                            <div className='user-followers-item__content'>
                                <h5>{ login }</h5>
                                <a className='user-followers-item__content-link'
                                 href={ html_url }><FiLink className='icon' />{ html_url }</a>
                            </div>  
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserFollowers