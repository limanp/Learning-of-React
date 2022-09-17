import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let posts = props.postsData.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
    //alert(text);
  }

  return (
    <div className={style.posts_block}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Send</button>
        </div>
      </div>
      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;
