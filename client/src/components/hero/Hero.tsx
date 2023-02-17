import React from 'react'
import Button from '../button/Button'
import "./hero.scss"
import { LazyLoadImage } from "react-lazy-load-image-component";

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-topic'>THE BEST RELIABLE MEDICAL EMERGENCY SERVICE IN YOUR HANDS</h1>
        <p>Dedicated to helping you with all medical issues/emergency 24/7</p>        
        <Button text="Get Started" />
      </div>
      <div className='hero-pic'>
        <LazyLoadImage
          className="pic"
          src="/assets/images/heropic.png"
          placeholderSrc="/assets/hero-placeholder.png"
          alt="doctor image"
        />
      </div>
    </section>
  )
}

export default Hero