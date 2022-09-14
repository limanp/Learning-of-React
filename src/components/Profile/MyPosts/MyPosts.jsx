import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  return (
    <div className={style.posts_block}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Send</button>
        </div>
      </div>
      <div>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="My first post." likesCount="20" />
      </div>
    </div>
  );
};

export default Posts;
