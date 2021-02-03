import React, { useState } from 'react';

const SerachUser = (props) => {

    const [ user, setUser ] = useState('');

    const onFormSubmit = (e) => {
        e.preventDefault();
        props.searchUser(user);
        setUser('')
    }

    const onHandleChange = (e) => {
        e.preventDefault();
        setUser(e.target.value)
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" placeholder='Enter GitHub User' name='user'
                 value={user} onChange={onHandleChange}/>
                <input type='submit' value='Search' />
            </form>
        </div>
    )
}

export default SerachUser