import React from 'react';
import style from './Dialogs.module.css';
import Dialog_Item from './Dialog_Item/Dialog_Item';
import Message_Item from './Message_Item/Message_Item';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogData = [
        {name: "Sasha", id: 1},
        {name: "Andrey", id: 2},
        {name: "Vika", id: 3},
        {name: "Victor", id: 4},
        {name: "Oleg", id: 5},
        {name: "Vlad", id: 6}
    ]
    let messageData = [
        {message: "Hello, how are you?", id: 1},
        {message: "Yo", id: 2},
        {message: "I am react developer!", id: 3},
        {message: "This is nice message!", id: 4}
    ]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <Dialog_Item name={dialogData[0].name} id={dialogData[0].id}/>
                <Dialog_Item name={dialogData[1].name} id={dialogData[1].id}/>
                <Dialog_Item name={dialogData[2].name} id={dialogData[2].id}/>
                <Dialog_Item name={dialogData[3].name} id={dialogData[3].id}/>
                <Dialog_Item name={dialogData[4].name} id={dialogData[4].id}/>
                <Dialog_Item name={dialogData[5].name} id={dialogData[5].id}/>
            </div>
            <div className={style.messages}>
                <Message_Item message={messageData[0].message} />
                <Message_Item message={messageData[1].message} />
                <Message_Item message={messageData[2].message} />
                <Message_Item message={messageData[3].message} />
            </div>
        </div>
    )
}

export default Dialogs;