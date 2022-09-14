import React from 'react';
import style from './Dialogs.module.css';
import Dialog_Item from './Dialog_Item/Dialog_Item';
import Message_Item from './Message_Item/Message_Item';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <Dialog_Item name="Sasha" id="1"/>
                <Dialog_Item name="Andrey" id="2"/>
                <Dialog_Item name="Vika" id="3"/>
                <Dialog_Item name="Victor" id="4"/>
                <Dialog_Item name="Oleg" id="5"/>
                <Dialog_Item name="Vlad" id="6"/>
            </div>
            <div className={style.messages}>
                <Message_Item text="Hello, how are you?"/>
                <Message_Item text="Yo"/>
                <Message_Item text="I am react developer!"/>
                <Message_Item text="This is nice message!"/>
            </div>
        </div>
    )
}

export default Dialogs;