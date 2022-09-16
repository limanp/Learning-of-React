import React from "react";
import style from "./Dialogs.module.css";
import Dialog_Item from "./Dialog_Item/Dialog_Item";
import Message_Item from "./Message_Item/Message_Item";

const Dialogs = (props) => {
  let dialogs = props.dialogData.map(d => <Dialog_Item name={d.name} id={d.id} />);
  let messages = props.messageData.map(m => <Message_Item message={m.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogs}</div>
      <div className={style.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
