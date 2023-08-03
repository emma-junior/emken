import React from 'react'
import ChatSidebar from '../../components/chatSidebar/ChatSidebar'
import Chat from '../../components/chat/Chat'
import "./chatpg.scss"

const ChatPg = () => {
  return (
    <section className='chatpg'>
        <div className='chatpg_container'>
            <div className='chatpg_container_sidebar'><ChatSidebar /></div>
            <div className='chatpg_container_chat'><Chat /></div>
        </div>
    </section>
  )
}

export default ChatPg