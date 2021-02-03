import React, { Fragment } from 'react';

import { GoRepoForked } from 'react-icons/go';
import SearchRepos from '../SearchRepos/SearchRepos';

import './Repositories.scss'

const Repositories = (props) => {

    const onTargetClick = (target) => {
        window.open(target);
    }

    return (
        <Fragment>
            <SearchRepos repos={props.repos}/>
            <div className='repository'>    
                {
                    props.repos.map(repo => {
                        const { name, language, html_url } = repo
                        return (
                            <div className='repository-wrapper' key={repo.id}>
                                <div className='repository-wrapper-content' onClick={() => onTargetClick(html_url)}>
                                    <p className='repository-wrapper-content__name'>{name}</p>
                                    <p className='repository-wrapper-content__language'>{language}</p>
                                </div>
                                <a className='repository-wrapper-link' href={html_url} target='_blank' rel='noopener noreferrer'><GoRepoForked /></a>
                            </div>
                            )  
                        })
                }
            </div>
        </Fragment>
       
    )
}

export default Repositories