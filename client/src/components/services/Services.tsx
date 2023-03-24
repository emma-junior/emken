import React from 'react'
import "./services.scss"
import { services } from '../../data/services'
import ServicesCard from './ServicesCard'

const Services = () => {
  return (
    <section className='container'>
        <p className='services'>SERVICES</p>
        <p className='best-services'>Our Best Services</p>
        <div className='services-item'>{services.map((service) => <ServicesCard key={service.id} service={service} />)}</div>
    </section>
  )
}

export default Services