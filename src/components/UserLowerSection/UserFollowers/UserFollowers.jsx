import React from 'react'

import './UserFollowers.scss'

const UserFollowers = (props) => {
   
    console.log(props.followers)
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
                                <a href={ html_url }>{ html_url }</a>
                            </div>  
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserFollowers