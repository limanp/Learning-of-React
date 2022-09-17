import reportWebVitals from './reportWebVitals';
import state, { addPost } from './redux/state.js';
import { rerenderEntireTree } from './render';

//addPost('Hello human)');

rerenderEntireTree(state, addPost);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
