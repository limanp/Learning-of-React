import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state, addPost, updateNewPostText) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>
    </BrowserRouter>
  );
};
