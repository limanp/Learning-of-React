import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = (props) => {
  debugger;
  return (
    <div className={style.Content}>
      <Profile_Info />
      <MyPosts posts={props.profilePage.posts} 
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
