import React from 'react';
// import { useHistory } from "react-router-dom";

import './InfoItem.scss'

const InfoItem = (props) => {

    // const history = useHistory()

    const onRepoMove = () => {
        console.log('pushed')
    }

    return (
        <div className='userinfo-item' onClick={ props.id === 'repos' ? onRepoMove : null }>
            <span className='userinfo-item-icon'>{ props.icon }</span>
            <div className='userinfo-item-content'>
                <span className='userinfo-item-content__label'>{ props.label }</span>
                <span className='userinfo-item-content__value'>{ props.value }</span>
            </div>
        </div>
    );
}

export default InfoItem
