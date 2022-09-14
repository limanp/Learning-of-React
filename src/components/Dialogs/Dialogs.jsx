import React from 'react';
import style from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItem}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Sasha</NavLink> 
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Vika</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Victor</NavLink> 
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello, how are you?</div>
                <div className={style.message}>Yo</div>
                <div className={style.message}>I am react developer!</div>
            </div>
        </div>
    )
}

export default Dialogs;