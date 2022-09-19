import React from "react";
import state, { updateNewMessageText } from "../../redux/state";
import style from "./Dialogs.module.css";
import Dialog_Item from "./Dialog_Item/Dialog_Item";
import Message_Item from "./Message_Item/Message_Item";

const Dialogs = (props) => {
  let dialogs = props.dialogsPage.dialogs.map(d => <Dialog_Item name={d.name} id={d.id} />);
  let messages = props.dialogsPage.messages.map(m => <Message_Item message={m.message} />);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  }

  let onMessageChange = () => {
    debugger;
    let text = newMessageElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  }
  
  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogs}</div>
      <div className={style.messages}>
        {messages}
        </div>
      <div className={style.box3}>
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
      
    </div>
  );
};

export default Dialogs;
