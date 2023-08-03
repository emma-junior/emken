import React from 'react'
import { emergency } from '../../data/emergency'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import "./emergency.scss"

const Emergency = () => {
    const acuteEmergency = emergency.filter(item => item.category === "acute-emergency");
  return (
    <>
      <Navbar />
      <div className='emergency'>
          <div className='emergency_header'>
            <h1 className='emergency_header_topic'>Get Details And Instructions On <span>Medical Emergency</span> Conditions</h1>
            <figure className='emergency_header_pic'>
              <img src='/assets/images/emergency-page.jpg' alt='' />
            </figure> 
          </div>
          <div className='emergency_main'>
            <h1 className='emergency_main_topic'>MEDICAL EMERGENCIES</h1>
            <h2 className='emergency_main_category'>Acute Emergency</h2>
            <ul className='emergency_main_emergencies'>{acuteEmergency.map((emergency) => (
              <>
                <li className='emergency_main_emergencies_name'><Link to={`/medical-emergency/${emergency.slug}`}>{emergency.name}</Link></li>
                <hr />
              </>
            ))}</ul>
          </div>
      </div>
    </>
  )
}

export default Emergency