import React from 'react'
import "./chooseus.scss"
import { chooseUs } from '../../data/card'
import HomeCard from '../homecard/HomeCard';

const ChooseUs = () => {
  return (
    <section className='container'>
        <p className='container_p'>WHY CHOOSE US</p>
        <h2 className=''>Why You Should Choose Us?</h2>
        <h2 className=''>Get To Know About Us</h2>
        <div className='item'>{chooseUs.map((chooseus, index) =><HomeCard key={index} content={chooseus} />)}</div>
    </section>
  )
}

export default ChooseUs