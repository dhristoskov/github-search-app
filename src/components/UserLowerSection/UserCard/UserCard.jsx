import React from 'react'
import { MdLocationCity, MdBusiness } from 'react-icons/md'

import './UserCard.scss'

const UserCard = (props) => {
    
    const { avatar_url, name, html_url, company, bio, location, } = props.user
   
    return (
        <div className='user-card'>
            <header className='user-card-header'>
                <img className='user-card-header__image' src={avatar_url} alt={name}/>
                <div className='user-card-header__content'>
                    <p className='user-card-header__content-name'>{ name }</p>
                    <p className='user-card-header__content-location'><MdLocationCity />{ location }</p>
                </div>
                <a href={ html_url } className='user-card-header__url'>Follow</a>
            </header>
            <div className='user-card-content'>
                <p className='user-card-content__company'><MdBusiness />{ company }</p>
                <p className='user-card-content__bio'>{ bio }</p>      
            </div>     
        </div>
    )
}

export default UserCard