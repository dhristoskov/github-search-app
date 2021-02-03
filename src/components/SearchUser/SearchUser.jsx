import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import './SearchUser.scss';

const SerachUser = (props) => {

    const [ user, setUser ] = useState('');
    const { searchUser } = props

    const onFormSubmit = (e) => {
        e.preventDefault();
        searchUser(user);
        setUser('')
    }

    const onHandleChange = (e) => {
        e.preventDefault();
        setUser(e.target.value)
    };

    return (
        <div className='search-wrapper'>
            <form className='search-wrapper-form' onSubmit={onFormSubmit}>
                <MdSearch className='search-wrapper-form-icon' />
                <input className='search-wrapper-form__input' type="text" 
                                placeholder='Enter GitHub User' name='user'
                                value={user} onChange={onHandleChange}/>
                <input className='search-wrapper-form__btn' type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SerachUser