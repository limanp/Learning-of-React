import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "./../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  debugger;
  let state = props.store.getState().dialogsPage;

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      updateNewMessageText={onMessageChange}
      dialogsPage={state}
      newMessageText={state.newMessageText}
    />
  );
};

export default DialogsContainer;
