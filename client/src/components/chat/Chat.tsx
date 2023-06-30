import React, { useContext } from "react";
import { ChatContext } from '../../context/ChatContext'
import "./chat.scss"
import Messages from "../messages/Messages";
import ChatInput from "../chatInput/ChatInput";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      {data.user.username ? 
        <>
          <div className="chatInfo">
            <span>{data.user?.username}</span>
          </div> 
          <Messages />
          <ChatInput />
        </>
      : <div className="no-chat">Choose a chat to start the conversation</div> }
      
    </div>
  )
}

export default Chat