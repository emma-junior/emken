import React from 'react'
import "./services.scss"
import { services } from '../../data/card';
import HomeCard from '../homecard/HomeCard';

const Services = () => {
  return (
    <section className='container'>
        <p className='services'>SERVICES</p>
        <p className='best-services'>Our Best Services</p>
        <div className='services-item'>{services.map((service, index) =><HomeCard key={index} content={service} />)}</div>
    </section>
  )
}

export default Services