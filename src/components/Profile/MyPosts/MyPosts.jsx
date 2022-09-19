import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
const MyPosts = (props) => {
  
  let posts = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch(addPostActionCreator());
    //alert(text);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPost(text);
   
    props.dispatch(updateNewPostTextActionCreator(text)); 
  }

  return (
    <div className={style.posts_block}>
      <h3>my post</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} 
          value={props.newPostText}/>
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
