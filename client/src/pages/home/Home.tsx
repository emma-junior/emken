import React from 'react'
import Doctors from '../../components/doctors/Doctors'
import Features from '../../components/Features/Features'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/services/Services'
import "./home.scss"

const Home = () => {
  return (  
    <section className='home'>
        <div className='nav-hero'>
          <Navbar />
          <Hero />
        </div>
        <Services />
        <Features />
        <Doctors />
    </section>
  )
}

export default Home