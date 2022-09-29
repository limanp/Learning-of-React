import * as axios from "axios";
import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/userImage.png";

class Users extends React.Component {

  constructor(props) {
    super(props);
    alert('New');
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      debugger;
      this.props.setUsers(response.data.items);
    });
  }

  render() {
    return (
      <div> 
        {this.props.users.map(u => 
        <div className={style.user} key={u.id}>
          <div>
              <div className={style.avatar}><img  src={u.photos.small != null ? u.photos.small : userPhoto}/></div>
              <div>
                  {u.followed
                  ? <button onClick={() => { this.props.unfollow(u.id) }}>follow</button> 
                  : <button onClick={() => { this.props.follow(u.id) }}>unfollow</button>} 
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
    );
  }
}

export default Users;
