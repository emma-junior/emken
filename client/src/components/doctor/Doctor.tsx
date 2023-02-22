import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from '../button/Button';
import "../emergency/emergency.scss"

const Doctor = () => {
  return (
    <section className='section-container'>
        <div className='pic'>
          <LazyLoadImage
            className="pic"
            src="/assets/images/doctor.jpg"
            placeholderSrc="/assets/images/doctor-placeholder.jpg"
            effect="blur"
            alt="medical emergency"
          />
        </div>
        <div className='content'>
            <p className='topic'>CHAT WITH DOCTOR</p>
            <h2 className='headline'>Get Advice From Medical Experts</h2>
            <p className='info'>Emken provides you with the opportunity to chat with medical experts or practitioners on consultations and advice to follow during a medical emergency and trauma situations.</p>
            <Button text="Chat Now" />
        </div>
    </section>
  )
}

export default Doctor