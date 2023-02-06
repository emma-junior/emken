import React from 'react'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import "./home.scss"

const Home = () => {
  return (
    <section className='home'>
        <div className='nav-hero'>
          <Navbar />
          <Hero />
        </div>
    </section>
  )
}

export default Home