import React from 'react'
import ProfilePic from '../profile-pic/ProfilePic'

const SearchResult = ({letter, user, handleSelect}:any) => {
  return (
    <div className="userChat chat-desktop" onClick={handleSelect}>
        <ProfilePic letter={letter} />
        <div className="userChatInfo">
            <span>{user?.username}</span>
        </div>
    </div>
  )
}

export default SearchResult