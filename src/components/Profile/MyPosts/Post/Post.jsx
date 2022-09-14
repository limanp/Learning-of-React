import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
      <div className={style.item}>
        <img src='https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-avatar-icon-png-image_889398.jpg' />
        {props.message}
        <div>
          <span>Like</span> {props.likesCount}
        </div>
      </div>
    )
}

export default Post;