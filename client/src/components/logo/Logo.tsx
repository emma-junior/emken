import React from 'react'
import "./logo.scss"
import {FaBriefcaseMedical} from "react-icons/fa"

const Logo = () => {
  return (
    <div className='logo'>
        <FaBriefcaseMedical className='logo-icon' />
        <h1>EMKEN</h1>
    </div>
  )
}

export default Logo