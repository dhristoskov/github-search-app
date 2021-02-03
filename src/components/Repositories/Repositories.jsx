import React from 'react';

import './Repositories.scss'

const Repositories = (props) => {

    console.log(props.repos);

    return (
        <div>
            {
                props.repos.map(repo => {
                    const { name, language, html_url, forks_url} = repo
                    return (
                        <div key={repo.id}>
                            <p>{name}</p>
                            <p>{language}</p>
                            <p>{html_url}</p>
                            <p>{forks_url}</p>
                        </div>
                    )  
                })
            }
        </div>
    )
}

export default Repositories