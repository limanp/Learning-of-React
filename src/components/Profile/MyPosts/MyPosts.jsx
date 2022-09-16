import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
  
  let posts = props.postData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div>{posts}</div>
    </div>
  );
};

export default Posts;
