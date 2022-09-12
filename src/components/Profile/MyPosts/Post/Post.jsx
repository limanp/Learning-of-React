import React from 'react';
import Classes from './Post.module.css';

const Post = () => {
    return (
      <div className={Classes.item}>
        <span>Like</span>
        <img src='https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-avatar-icon-png-image_889398.jpg' />
        post 1
      </div>
    )
}

export default Post;