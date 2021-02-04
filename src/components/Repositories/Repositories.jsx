import React, { Fragment, useState } from 'react';

import { GoRepoForked } from 'react-icons/go';
import SearchRepos from '../SearchRepos/SearchRepos';

import './Repositories.scss'

const Repositories = (props) => {

    const [ reposToShow, setReposToShow ] = useState(props.repos)

    const onTargetClick = (target) => {
        window.open(target);
    }

    return (
        <Fragment>
            <SearchRepos repos={props.repos}
            setReposToShow={setReposToShow}/>
            <div className='repository'>    
                {
                    reposToShow.map(repo => {
                        const { name, language, html_url } = repo
                        return (
                            <div className='repository-wrapper' key={repo.id} onClick={() => onTargetClick(html_url)}>
                                <div className='repository-wrapper-content'>
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