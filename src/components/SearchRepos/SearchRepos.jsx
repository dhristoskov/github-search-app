import React, { useEffect, useState } from 'react';

import { MdSearch } from 'react-icons/md';

import './SearchRepos.scss'

const SerachRepo = ({repos, setReposToShow}) => {

    const [ filtered, setFiltered ] = useState('');

    const onHandleChange = (e) => {
        e.preventDefault();
        setFiltered(e.target.value);
    };

    useEffect(() => {
        const repoCopy = repos.slice()
        const results = repoCopy.filter(repo =>
            repo.name.toLowerCase().includes(filtered.toLowerCase())
          );
          setReposToShow(results);
    }, [filtered, repos, setReposToShow])

    return (
        <div className='search-repo-wrapper'>
            <form className='search-repo-wrapper__form'>
                <MdSearch className='search-repo-wrapper__form-icon' />
                <input className='search-repo-wrapper__form-input' type="text" 
                                placeholder='Find Repository' name='filtered'
                                value={filtered} onChange={onHandleChange}/>
            </form>
        </div>
    )
}

export default SerachRepo