import React, { useContext } from "react";
import { ChatContext } from '../../context/ChatContext'
import Messages from "./Messages";
import Input from "./Input";

const ChatSection = () => {
    const { data } = useContext(ChatContext);
  return (
    <div>
        <h2>ChatSection</h2>
        <h3>{data.user?.username}</h3>
        <br />
        <Messages />
        <br/>
        <Input />
    </div>
  )
}

export default ChatSection