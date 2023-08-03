import React, { useContext, useState} from 'react'
import "./chatSidebar.scss"
import Search from '../search/Search'
import Chats from '../chats/Chats'
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import {HiArrowSmRight} from 'react-icons/hi';
import useWindowSize from '../../context/useWindowSize';

const ChatSidebar = () => {
  const { currentUser } = useContext(AuthContext);
  const [doctorsDropdown, setDoctorsDropdown] = useState(false)

  const windowSize = useWindowSize()
  return (
    <div className='chat-sidebar'>
        <div className='chat-navbar'>
          <span className='logo'><Link to="/"><h1>EMKEN</h1></Link></span>
          <div className="user">
            <span className='user_username'>{currentUser?.displayName}</span>
          </div>
        </div>
        <div className='doctorsdropdown-wrapper'>
          <div className='dropdown-btn' onClick={() => setDoctorsDropdown(!doctorsDropdown)}>
            <p>Available doctors to chat with</p>
            {doctorsDropdown ? <p className='icon'><IoIosArrowUp /></p>:<p className='icon'><IoIosArrowDown /></p>}
          </div>
          {doctorsDropdown && <ul className='doctors-names'>
            <li><HiArrowSmRight className='li-arrow' /> dr esther</li>
            <li><HiArrowSmRight className='li-arrow' />dr ezeh</li>
            <li><HiArrowSmRight className='li-arrow' />dr johnson</li>
            <li><HiArrowSmRight className='li-arrow' />dr esther</li>
            <li><HiArrowSmRight className='li-arrow' />dr ezeh</li>
            <li><HiArrowSmRight className='li-arrow' />dr johnson</li>
          </ul>}
        </div>
      <Search />
      {
        windowSize.width >= 900 ? (<Chats />) : (<Link to="/chat"><Chats /></Link>)
      } 
      
    </div>
  )
}

export default ChatSidebar