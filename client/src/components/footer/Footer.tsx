import React from 'react'
import "./footer.scss"
import Logo from '../logo/Logo'
import {FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer_wrapper'>
            <div className='logo-socials'>
                <div className='footer_logo'><Logo /></div>
                <p className='footer_info'>Emken, Is the Administrative Support Entity And All Clinical Services.</p>
                <p>CALL US (+234)80 222 222 22</p>
                <div className='socials'>
                    <p className='icon'><FaFacebookF /></p>
                    <p className='icon'><FaTwitter /></p>
                    <p className='icon'><FaGooglePlusG /></p>
                    <p className='icon'><FaInstagram /></p>
                </div>
            </div>
            <div className='about-help'>
                <div className='about'>
                    <h2>About Company</h2>
                    <p>Company</p>
                    <p>Find a Doctor</p>
                    <p>Our services</p>
                    <p>Plans & Pricing</p>
                    <p>Locations</p>
                </div>
                <div className='help'>
                    <h2>Help & Support</h2>
                    <p>Consultation Call</p>
                    <p>Help / support</p>
                    <p>White Label</p>
                    <p>Sign in</p>
                    <p>Appointment</p>
                </div>
            </div>
            <div className='subscribe'>
                <h2>Subscribe Our Newsletter</h2>
                <input type='email' placeholder='Email Adress' />
                <button>Submit Now</button>
            </div>
        </div>
        <hr />
        <p className='license'>Copyright ©2023. All Rights Reserved</p>
    </section>
  )
}

export default Footer