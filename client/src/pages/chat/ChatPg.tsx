import React from 'react'
import ChatSidebar from '../../components/chatSidebar/ChatSidebar'
import Chat from '../../components/chat/Chat'
import "./chatpg.scss"

const ChatPg = () => {
  return (
    <div className='chatpg'>
        <div className='container'>
            <ChatSidebar />
            <Chat />
        </div>
    </div>
  )
}

export default ChatPg