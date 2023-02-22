import React from 'react'
import Button from '../button/Button'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./emergency.scss"

const Emergency = () => {
  return (
    <section className='section-container'>
        <div className='pic'>
          <LazyLoadImage
            className="pic"
            src="/assets/images/emergency.jpg"
            placeholderSrc="/assets/images/emergency-placeholder.jpg"
            effect="blur"
            alt="medical emergency"
          />
        </div>
        <div className='content'>
            <p className='topic'>MEDICAL EMERGENCY</p>
            <h2 className='headline'>Get Instructions On Medical Emergency Situations</h2>
            <p className='info'>Emken provides you with instructions and steps to follow for all kinds of medical emergency situations. Medical informations in emken were given by medical experts and health care professionals.</p>
            <Button text="Start Now" />
        </div>
    </section>
  )
}

export default Emergency