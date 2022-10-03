import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  
  let posts = props.posts.map((p) => (
    <Post message={p.message} key={p.id} likesCount={p.likesCount} />
  ));
  
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
    //alert(text);
  }

  let onPostChange = () => {
    debugger;
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={style.posts_block}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea placeholder='Enter your post' onChange={onPostChange} ref={newPostElement} 
          value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ onAddPost }>Send</button>
        </div>
      </div>
      <div>{posts}</div>
    </div>
  );
};

export default MyPosts;
