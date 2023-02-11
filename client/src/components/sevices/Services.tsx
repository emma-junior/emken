import React from 'react'
import "./services.scss"
import {FaBriefcaseMedical, FaRegHospital, FaCommentMedical} from "react-icons/fa"
import ServicesCard from './ServicesCard'
import { servicesType } from '../../model'

const Services = () => {

    const services:servicesType[] = [
        {
            id: 1,
            icon: <FaBriefcaseMedical />,
            iconcolor: "red",
            title: "Medical Emergency",
            info: "We are here to provide you with steps to take for every medical emergency"
        },
        {
            id: 2,
            icon: <FaRegHospital />,
            iconcolor: "green",
            title: "Find Hospital",
            info: "We give you the location and direction to every medical hospital close to you"
        },
        {
            id: 3,
            icon: <FaCommentMedical />,
            iconcolor: "blue",
            title: "Chat With Doctor",
            info: "We provide you with the opportunity to chat with medical experts for medical related issues"
        }
    ]

  return (
    <section className='container'>
        <p className='services'>SERVICES</p>
        <p className='best-services'>Our Best Services</p>
        <div className='services-item'>{services.map((service) => <ServicesCard key={service.id} service={service} />)}</div>
    </section>
  )
}

export default Services