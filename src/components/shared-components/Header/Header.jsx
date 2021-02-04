import React, { useContext } from 'react';

import { GoMarkGithub } from 'react-icons/go';
import SearchUser from '../../SearchUser/SearchUser';
import { GitHubContext } from '../../../context/GithubContext';

import './Header.scss';

const Header = () => {

    const { searchUser } = useContext(GitHubContext);

    return (
        <div className='main-header'>
            <GoMarkGithub className='main-header-icon'/>
            <SearchUser searchUser={searchUser}/>
        </div>
    )
}

export default Header