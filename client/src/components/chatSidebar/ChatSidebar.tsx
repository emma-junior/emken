import React from 'react'
import "./chatSidebar.scss"
import Search from '../search/Search'
import Chats from '../chats/Chats'

const ChatSidebar = () => {
  return (
    <div className='chat-sidebar'>  
        <Search />
        <Chats />
    </div>
  )
}

export default ChatSidebar