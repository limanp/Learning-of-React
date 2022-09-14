import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  let postData = [
    {message: "Hi, how are you?", likesCount: 15},
    {message: "My first post.", likesCount: 20}
  ]
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
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default Posts;
