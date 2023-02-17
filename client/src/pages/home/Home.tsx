import React from 'react'
import Emergency from '../../components/emergency/Emergency'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/sevices/Services'
import "./home.scss"

const Home = () => {
  return (
    <section className='home'>
        <div className='nav-hero'>
          <Navbar />
          <Hero />
        </div>
        <Services />
        <Emergency />
    </section>
  )
}

export default Home