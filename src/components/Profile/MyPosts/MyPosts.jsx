import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  
  let posts = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  
  let newPostElement = React.createRef();

  let addPost = () => {
    //props.addPost();
    props.dispatch({type: 'ADD-POST'});
    //alert(text);
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    //props.updateNewPost(text);
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
    props.dispatch(action); 
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
