import React from 'react'
import Doctors from '../../components/doctors/Doctors'
import Features from '../../components/Features/Features'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Services from '../../components/services/Services'
import "./home.scss"
import ChooseUs from '../../components/chooseUs/ChooseUs'
import Stats from '../../components/stats/Stats'
import Testimonials from '../../components/testmonials/Testimonials'
import Footer from '../../components/footer/Footer'



const Home = () => {
  return (
    <>
      <div className="blurry" style={{ top: "5%", right: "0" }}></div>
      <div className="blurry" style={{ top: "20%", left: "-4rem" }}></div>
      <section className='home'>
          <div className='nav-hero'>
            <Navbar  />
            <Hero />
          </div>
          <Services />
          <Features />
          <Doctors />
          <ChooseUs />
          <Stats />
          <Testimonials />
          <Footer />
      </section>
    </>
  )
}

export default Home