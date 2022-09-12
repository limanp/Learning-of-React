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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
    )
}

export default Posts;