import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, { addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe } from './redux/state.js';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
          addPost={addPost} updateNewPostText={updateNewPostText}
          addMessage={addMessage} updateNewMessageText={updateNewMessageText}
          />
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
