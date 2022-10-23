import React from "react";
import style from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profile_Info from "./Profile_Info/Profile_Info";


const Profile = (props) => {
  return (
    <div className={style.Content}>
      <Profile_Info profile={props.profile}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
};

export default Profile;
