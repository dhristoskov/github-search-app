import React from 'react';

import { GoMarkGithub } from 'react-icons/go';
import SearchUser from '../../SearchUser/SearchUser';

import './Header.scss';

const Header = (props) => {

    return (
        <div className='main-header'>
            <GoMarkGithub className='main-header-icon'/>
            <SearchUser searchUser={props.searchUser}/>
        </div>
    )
}

export default Header