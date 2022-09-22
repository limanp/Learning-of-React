import React from "react";
import Dialogs from "./Dialogs";
import {
  updateNewMessageTextActionCreator,
  addMessageActionCreator,
} from "./../../redux/dialogs-reducer";
import { connect } from "react-redux";
import store from "../../redux/redux-store";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessageActionCreator()),
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text))
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
