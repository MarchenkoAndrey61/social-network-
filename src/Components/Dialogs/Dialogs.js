import React from "react";
import dialogstyle from "./Dialogs.module.css";
import {NavLink} from "react-router-dom"



const DialogsItem = (props) => {

 let path = "/dialogs/" + props.id;

  return(
          <div className = {dialogstyle.dialog + ' ' + dialogstyle.active}>
              <NavLink to = {path} activeClassName = {dialogstyle.active}>  {props.name} </NavLink>
          </div>
  );
}

const Message = (props) => {
  return (
            <div className = {dialogstyle.message}>
                {props.message}
            </div>
  );
}


const Dialogs = (props) => {

  let DialogsData = [
    {id: 1 , name: "Andrey"},
    {id: 2 , name: "Vlad"},
    {id: 3 , name: "Katya"},
    {id: 4 , name: "Masha"},
    {id: 5 , name: "Sergey"},
    {id: 6 , name: "Oleg"}
  ]

  let MessageData = [
    {id: 1 , message: "Hi"},
    {id: 2 , message: "How are you?"},
    {id: 3 , message: "Mmm..Fine!"},
    {id: 4 , message: "Okey."},
    {id: 5 , message: "Really??"},

  ]

  let DialogsElements = DialogsData
      .map( dialog => <DialogsItem name = {dialog.name} id = {dialog.id}/>  );
  
  let MessagesElements = MessageData
      .map( m => <Message  message = {m.message}/>);


  return (
      <div className ={dialogstyle.dialogs}>
          <div className ={dialogstyle.dialogsItem}>
            {DialogsElements}
          </div>
          <div className = {dialogstyle.messages}>
              {MessagesElements}
          </div>
      </div>
  );
}

export default Dialogs;