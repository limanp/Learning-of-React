import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
  { name: "Sasha", id: 1 },
  { name: "Andrey", id: 2 },
  { name: "Vika", id: 3 },
  { name: "Victor", id: 4 },
  { name: "Oleg", id: 5 },
  { name: "Vlad", id: 6 },
];

let messageData = [
  { message: "Hello, how are you?", id: 1 },
  { message: "Yo", id: 2 },
  { message: "I am react developer!", id: 3 },
  { message: "This is nice message!", id: 4 },
];

let postData = [
  { message: "Hi, how are you?", likesCount: 15 },
  { message: "My first post.", likesCount: 20 },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogData={dialogData} messageData={messageData} postData={postData} />
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
