import React from "react";
import style from "./Dialogs.module.css";
import Dialog_Item from "./Dialog_Item/Dialog_Item";
import Message_Item from "./Message_Item/Message_Item";

const Dialogs = (props) => {
  
  let dialogs = props.dialogsPage.dialogs.map((d) => ( <Dialog_Item name={d.name} key={d.id} id={d.id} /> ));
  let messages = props.messages.map((m) => ( <Message_Item message={m.message} key={m.id} /> ));

  let onAddMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogs}</div>
      <div className={style.messages}>{messages}</div>
      <div className={style.box3}>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
