import React from 'react';
import Classes from './Profile.module.css';

const Profile = () => {
    return <div className={Classes.Content}>
    <div>
      <img src='https://static5.depositphotos.com/1037262/521/i/450/depositphotos_5215941-stock-photo-road-panorama.jpg' 
      aria-hidden alt='image'/>
    </div>
    <div>
      ava + description
    </div>
    <div>
      my post
      <div>
        new post
      </div>
      <div className={Classes.Posts}>
        <div className={Classes.Item}>
          post 1
        </div>
        <div className={Classes.Item}>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Profile;