import React from 'react'

const UserCard = (props) => {
    
    const { avatar_url, name, html_url, company, bio, location, } = props.user
   
    return (
        <div>
            <img src={avatar_url} alt={name}/>
            <p>{ name }</p>
            <p>{ html_url }</p>
            <p>{ company }</p>
            <p>{ bio }</p>
            <p>{ location }</p>
        </div>
    )
}

export default UserCard