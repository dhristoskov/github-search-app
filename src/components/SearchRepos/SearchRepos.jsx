import React, { useState } from 'react';

import { MdSearch } from 'react-icons/md';

const SerachRepo = ({repos}) => {

    const [ filtered, setFiltered ] = useState('');
    // const [ newRepos, setNewRepost ] = useState([])

    const onHandleChange = (e) => {
        e.preventDefault();
        setFiltered(e.target.value)
    };

    // useEffect(() => {
    //     if( filtered.length > 0 ){
    //         const newEntry = repos.filter(repo => repo.name.includes(filtered));
    //         setNewRepost(newEntry);
    //         console.log(newRepos)
    //     }
    // }, [repos, filtered, newRepos])

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