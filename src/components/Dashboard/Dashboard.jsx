import React, { useContext, useEffect } from 'react'

import { GitHubContext } from '../../context/GithubContext'

const Dashboard = () => {

    const data = useContext(GitHubContext);

    useEffect(() => {
        console.log(data)
    }, [data])

    return(
        <div>Hallo React !!!</div>
    )
}

export default Dashboard