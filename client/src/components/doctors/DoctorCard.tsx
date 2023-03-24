import React from 'react'
import { doctorsType } from '../../data/doctors';
import "./doctorscard.scss"
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
    doctor: doctorsType
}
const DoctorCard = ({doctor}:Props) => {
  return (
    <section className='card'>
        <LazyLoadImage
          className="doctor-pic"
          src={`/assets/images/doctors/${doctor.image}.jpg`}
          placeholderSrc="/assets/images/doctors/doc-placeholder.jpg"
          effect="blur"
          alt="doctor image"
        />
        <div className='content'>
            <p className='doctor-name'>{doctor.name}</p>
            <div className='icons'>
                <p className='icon'><FaFacebookF /></p>
                <p className='icon'><FaTwitter /></p>
                <p className='icon'><FaLinkedinIn /></p>
            </div>
        </div>
    </section>
  )
}

export default DoctorCard