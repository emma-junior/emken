import React from 'react'
import { servicesType } from '../../data/services'
import "./servicescard.scss"


interface Props {
    service: servicesType
}

const ServicesCard = ({service}: Props) => {
  return (
    <div className='card-container'>
        <div className={service.iconcolor}><p className='icon'>{service.icon}</p></div>
        <p className='title'>{service.title}</p>
        <p className='info'>{service.info}</p>
    </div>
  )
}

export default ServicesCard