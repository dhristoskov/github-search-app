import React, { useEffect, useState } from 'react';

import { MdSearch } from 'react-icons/md';

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
        <div className='search-wrapper'>
            <form className='search-wrapper-form'>
                <MdSearch className='search-wrapper-form-icon' />
                <input className='search-wrapper-form__input' type="text" 
                                placeholder='Search for GitHub Repos' name='filtered'
                                value={filtered} onChange={onHandleChange}/>
            </form>
        </div>
    )
}

export default SerachRepo