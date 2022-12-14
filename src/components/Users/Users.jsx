import React from 'react';
import style from "./Users.module.css";
import userPhoto from "../../assets/images/userImage.png";
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import {usersAPI} from '../../api/api.js';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      if (i > 56) 
        break;
      pages.push(i);
    }
    return (
        <div>
        <div className={style.pages}>
          {pages.map(p => {
            return <span className={ props.currentPage === p && style.selectedPage }
            onClick={(e) => { debugger; props.onPageChanged(p) }}>{p}</span>
          })}
        </div>  
        {props.users.map(u => 
        <div className={style.user} key={u.id}>
          <div>
              <div className={style.avatar}>
                  <NavLink to={'/profile/' + u.id}>
                    <img  src={u.photos.small != null ? u.photos.small : userPhoto}/>
                  </NavLink>
                </div>
              <div>
                  {u.followed
                  ? <button onClick={() => { 
                    usersAPI.unfollowRequest(u.id).then(data => data.resultCode === 0 && props.ungollow(u.id))
                  }}>follow</button> 
                  : <button onClick={() => { 
                    usersAPI.followRequest(u.id).then(data => data.resultCode === 0 && props.follow(u.id)) 
                    }}>unfollow</button>} 
              </div>
          </div>
          <div className={style.description}>
              <div>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
              </div>
              <div>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
              </div>
          </div>
              
          </div> )}
      </div>
    )
}

export default Users;