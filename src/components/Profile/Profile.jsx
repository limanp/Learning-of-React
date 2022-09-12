import React from 'react';
import Classes from './Profile.module.css';
import Posts from './MyPosts/MyPosts';

const Profile = () => {
    return <div className={Classes.Content}>
    <div>
      <img src='https://static5.depositphotos.com/1037262/521/i/450/depositphotos_5215941-stock-photo-road-panorama.jpg' 
      aria-hidden alt='image'/>
    </div>
    <div>
      ava + description
    </div>
    <Posts />
  </div>
}

export default Profile;