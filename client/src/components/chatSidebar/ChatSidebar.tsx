import React, { useContext} from 'react'
import "./chatSidebar.scss"
import Search from '../search/Search'
import Chats from '../chats/Chats'
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const ChatSidebar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='chat-sidebar'>
        <div className='chat-navbar'>
          <span className='logo'><Link to="/"><h1>EMKEN</h1></Link></span>
          <div className="user">
            <span className='user_username'>{currentUser?.displayName}</span>
          </div>
        </div>
      <Search />
      <Chats />
    </div>
  )
}

export default ChatSidebar