import React from "react";
import style from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Profile_Info from "./Profile_Info/Profile_Info";

const Profile = (props) => {
  debugger;
  return (
    <div className={style.Content}>
      <Profile_Info />
      <MyPosts posts={props.postsData.posts} 
      newPostText={props.postsData.newPostText}
      addPost={props.addPost}
      updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};

export default Profile;
