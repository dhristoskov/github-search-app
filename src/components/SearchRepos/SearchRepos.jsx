import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const SerachRepo = () => {

    const [ repos, setRepos ] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        setRepos(repos);
        console.log(repos)
        setRepos('')
    }

    const onHandleChange = (e) => {
        e.preventDefault();
        setRepos(e.target.value)
    };

    return (
        <div className='search-wrapper'>
            <form className='search-wrapper-form' onSubmit={onFormSubmit}>
                <MdSearch className='search-wrapper-form-icon' />
                <input className='search-wrapper-form__input' type="text" 
                                placeholder='Search for GitHub Repos' name='repos'
                                value={repos} onChange={onHandleChange}/>
                <input className='search-wrapper-form__btn' type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SerachRepo