import React from "react";
import style from "./Dialogs.module.css";
import Dialog_Item from "./Dialog_Item/Dialog_Item";
import Message_Item from "./Message_Item/Message_Item";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
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

  let dialogs = dialogData.map((d) => <Dialog_Item name={d.name} id={d.id} />);
  let messages = messageData.map((m) => <Message_Item message={m.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogsItem}>{dialogs}</div>
      <div className={style.messages}>{messages}</div>
    </div>
  );
};

export default Dialogs;
