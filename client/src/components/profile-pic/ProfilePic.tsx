import React from 'react'
import "./profilePic.scss"

const ProfilePic = ({letter}:any) => {
    console.log("letter",letter)
  return (
    <div className='profile-pic'><p>{letter}</p></div>
  )
}

export default ProfilePic