import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
      <div className={style.item}>
        <div >
          <div>
            <img src='https://png.pngtree.com/png-vector/20190329/ourlarge/pngtree-vector-avatar-icon-png-image_889398.jpg' />
          </div>
          <div className={style.message}>
            {props.message}
          </div>
        
        </div>
        
        <div>
          <span>Like - {props.likesCount} </span> 
        </div>
      </div>
    )
}

export default Post;