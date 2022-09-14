import React from 'react';
import style from './Profile.module.css';
import Posts from './MyPosts/MyPosts';
import Profile_Info from './Profile_Info/Profile_Info'; 

const Profile = () => {
    return <div className={style.Content}>
    <Profile_Info />
    <Posts />
  </div>
}

export default Profile;