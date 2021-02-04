import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';

import { GitHubContext } from '../../context/GithubContext';

import './Login.scss';

const Login = () => {

    const history = useHistory()
    const { searchUser } = useContext(GitHubContext);
    const [ login, setLogin ] = useState('');

    const onHandleChange = (e) => {
        e.preventDefault();
        setLogin(e.target.value)
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();  
        if(login) {
            searchUser(login);
        }
        setLogin('');
        history.push('/dashboard');
    };

    return (
        <div className='auth-container'>
            <h3 className='auth-container-title'>Enter your GitHub Username</h3>
            <p className='auth-container-subline'>enter valid username</p>
            <form className='auth-container-form' onSubmit={onHandleSubmit}>
                <div className='auth-container-form__fied'>
                    <input type="text" name='name' placeholder='GitHub Username'
                    value={login} onChange={onHandleChange}/>        
                </div>
                <input type="submit" value='Log-in'/>             
            </form>
        </div>
    )

}

export default Login;