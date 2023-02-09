import React from 'react'
import Button from '../button/Button'
import "./hero.scss"

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-topic'>THE BEST RELIABLE MEDICAL EMERGENCY SERVICE IN YOUR HANDS</h1>
        <p>Dedicated to helping you with all medical issues/emergency 24/7</p>        
        <Button text="Get Started" />
      </div>
      <div className='hero-pic'>
        <img src='./assets/images/heroimg.png' alt='' />
      </div>
    </section>
  )
}

export default Hero