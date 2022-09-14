import React from 'react';
import style from './Message_Item.module.css';

const Message_Item = (props) => {

    return (
        <div className={style.message}>{props.text}</div>
    )
}

export default Message_Item;