import React from 'react';
import Classes from './MyPosts.module.css';
import Post from './Post/Post';

const Posts = () => {
    return (
        <div>
      my post
      <div>
        <textarea></textarea>
        <button>Send</button>
        new post
      </div>
      <div >
        <Post message='Hi, how are you?' like='15'/>
        <Post message='My first post.' like='20'/>
      </div>
    </div>
    )
}

export default Posts;