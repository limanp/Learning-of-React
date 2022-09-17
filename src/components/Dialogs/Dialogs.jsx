import React from "react";
import style from "./Dialogs.module.css";
import Dialog_Item from "./Dialog_Item/Dialog_Item";
import Message_Item from "./Message_Item/Message_Item";

const Dialogs = (props) => {
 
  let dialogs = props.dialogsData.map(d => <Dialog_Item name={d.name} id={d.id} />);
  let messages = props.messagesData.map(m => <Message_Item message={m.message} />);

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogs}</div>
      <div className={style.messages}>
        {messages}
        </div>
      <div className={style.box3}>
        <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <div>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
      
    </div>
  );
};

export default Dialogs;
