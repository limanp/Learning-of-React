import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = (props) => {
  return (
    <div className={style.Content}>
      <Profile_Info />
      <MyPosts postsData={props.postsData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
