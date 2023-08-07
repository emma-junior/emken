import React from 'react'
import { emergency } from '../../data/emergency'
import { Link } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import "./emergency.scss"

const Emergency = () => {
    const processedCategories = new Set();
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
            {emergency.map((emergencyItem, index) => {
              if (!processedCategories.has(emergencyItem.category)) {
                processedCategories.add(emergencyItem.category);
                return (
                  <div key={index}>
                    <h2 className='emergency_main_category'>{emergencyItem.category}</h2>
                    <ul className='emergency_main_emergencies'>{emergency.filter(item => item.category === emergencyItem.category).map((filteredCat, subIndex) => (
                      <div key={subIndex}>
                        <li className='emergency_main_emergencies_name'><Link to={`/medical-emergency/${filteredCat.slug}`}>{filteredCat.name}</Link></li>
                        <hr />
                      </div>
                    ))}</ul>
                  </div>
                )
              }
              return null;
            })}
          </div>
      </div>
    </>
  )
}

export default Emergency