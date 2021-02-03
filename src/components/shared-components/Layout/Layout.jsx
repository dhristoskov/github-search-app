import React from 'react';

import './Layout.scss';

const Layout = ({ children }) => {

    return (
        <div className='page-layout'>
            { children }
        </div>
    )

}

export default Layout