import React from "react";
import style from "./Users.module.css";
const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg",
        followed: true,
        fullName: "Dmitry K.",
        status: "I am looking for a Job right now...",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 2,
        photoUrl:
          "https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg",
        followed: false,
        fullName: "Sergey S.",
        status: "I like football!!!",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 3,
        photoUrl:
          "https://i.pinimg.com/736x/de/a0/f3/dea0f3b7f480b1151c08db4a402a43b9.jpg",
        followed: true,
        fullName: "Svetlana D.",
        status: "I am so pretty",
        location: { city: "Minsk", country: "Belarus" },
      },
    ]);
  }
  
  return (
    <div> {props.users.map(u => 
    <div className={style.user} key={u.id}>
        <div>
            <div className={style.avatar}><img  src={u.photoUrl}/></div>
            <div>
                {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }}>follow</button> 
                : <button onClick={() => { props.follow(u.id) }}>unfollow</button>} 
            </div>
        </div>
        <div className={style.description}>
            <div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </div>
            <div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
            </div>
        </div>
            
        </div> )}
    </div>
  );
};

export default Users;
