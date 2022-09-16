import React from "react";
import style from './Friends.module.css';
import Friend from './Friend/Friend';

const Friends = (props) => {
    let friends = props.friendsData.map(f => <Friend name={f.name} id={f.id} />);
    
    return (
        <div>
            <div className={style.item}>Friends</div>
            
            <div className={style.content}>
                {friends}
            </div>
        </div>
    )
}

export default Friends;