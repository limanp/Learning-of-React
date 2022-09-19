import React from 'react';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
