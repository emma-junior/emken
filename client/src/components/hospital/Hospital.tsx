import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Button from '../button/Button';
import "../Features/emergency.scss"

const Hospital = () => {
  return (
    <section className='section-container hospital'>
        <div className='content'>
            <p className='topic'>FIND HOSPITAL</p>
            <h2 className='headline'>Get Locations To Medical Hospitals Around You</h2>
            <p className='info'>Emken provides you with location and direction to medical hospitals incase of medical emergency situations. </p>
            <Button text="Find Now" />
        </div>
        <div className='pic'>
          <LazyLoadImage
            className="pic"
            src="/assets/images/locate.jpg"
            placeholderSrc="/assets/images/locate-placeholder.jpg"
            effect="blur"
            alt="medical emergency"
          />
        </div>
    </section>
  )
}

export default Hospital