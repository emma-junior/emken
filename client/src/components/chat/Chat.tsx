import React, { useContext } from "react";
import { ChatContext } from '../../context/ChatContext'
import "./chat.scss"
import Messages from "../messages/Messages";
import ChatInput from "../chatInput/ChatInput";
import Logo from "../logo/Logo";
import {SlOptions} from "react-icons/sl"

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      {data.user.username ? 
        <>
          <div className="chatInfo">
            <span className="chatInfo_username">{data.user?.username}</span>
            <div className="logo"><Logo /></div>
            <h2><SlOptions /></h2>
          </div> 
          <Messages />
          <ChatInput />
        </>
      : <div className="no-chat">
          <img src="/assets/icons/start-chat.svg" alt="start-chat" />
          <p>Choose a chat to start the conversation</p>
        </div> }
      
    </div>
  )
}

export default Chat