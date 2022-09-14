import React from 'react';
import style from './Dialog_Item.module.css';
import { NavLink } from 'react-router-dom';

const Dialog_Item = (props) => {

    return (
        <div className={style.dialog}>
                    <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> 
                </div>
    )
}

export default Dialog_Item;