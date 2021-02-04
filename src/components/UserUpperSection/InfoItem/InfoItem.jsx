import React from 'react';

import './InfoItem.scss'

const InfoItem = (props) => {

    return (
        <div className='userinfo-item'>
            <span className='userinfo-item-icon'><i>{ props.icon }</i></span>
            <div className='userinfo-item-content'>
                <span className='userinfo-item-content__label'>{ props.label }</span>
                <span className='userinfo-item-content__value'>{ props.value }</span>
            </div>
        </div>
    );
}

export default InfoItem
