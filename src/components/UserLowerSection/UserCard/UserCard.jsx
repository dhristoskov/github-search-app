import React from 'react';
import { MdLocationCity, MdBusiness, MdShortText } from 'react-icons/md';

import './UserCard.scss'

const UserCard = (props) => {

    const { avatar_url, name, html_url, company, bio, location, } = props.user
   
    return (
        <div className='user-card'>
            <header className='user-card-header'>
                <img className='user-card-header__image' src={avatar_url} alt={name}/>
                <div className='user-card-header__content'>
                    <span className='user-card-header__content-name'>{ name }</span>
                    <span className='user-card-header__content-location'>
                        <MdLocationCity className='icon'/>{ location }</span>
                </div>
                <a href={ html_url } target="_blank" rel="noopener noreferrer" className='user-card-header__url'>Follow</a>
            </header>
            <div className='user-card-content'>
                <span className='user-card-content__item'><MdBusiness className='icon' />
                { company || 'no available info' }</span>
                <span className='user-card-content__item'><MdShortText className='icon' />
                    { bio || 'no available info' }</span>      
            </div>     
        </div>
    )
}

export default UserCard