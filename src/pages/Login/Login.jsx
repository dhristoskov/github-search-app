import React, { useState, useContext, useEffect, Fragment } from 'react'
import { useHistory } from 'react-router-dom';
import Loader from '../../components/shared-components/Loader/Loader';

import { GitHubContext } from '../../context/GithubContext';

import './Login.scss';

const Login = () => {

    const history = useHistory()
    const { searchUser, logedIn, loading } = useContext(GitHubContext);
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
    };

    useEffect(() => {
        logedIn && history.push('/dashboard');
    },[history, logedIn])

    return (
        <Fragment>
            {
                loading
                ? <Loader />
                : <div className='auth-container'>
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
            }
        </Fragment>
       
    )

}

export default Login;