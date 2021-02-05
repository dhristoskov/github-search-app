import React from 'react';
import { useHistory } from 'react-router-dom';

import { GoMarkGithub } from 'react-icons/go';
import SearchUser from '../../SearchUser/SearchUser';

import './Header.scss';

const Header = (props) => {

    const history = useHistory();

    const onMoveBackHandler = () => {
        props.setLogedIn(false);
        history.replace('/');
    }

    return (
        <div className='main-header'>
            <p className='main-header-back' onClick={onMoveBackHandler}>
                <GoMarkGithub className='main-header-back__icon'/>
                <span>Back to Start</span>
            </p>
            <SearchUser searchUser={props.searchUser}/>
        </div>
    )
}

export default Header