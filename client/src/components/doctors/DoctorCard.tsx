import React from 'react'
import { doctorsType } from '../../model'
import "./doctorscard.scss"
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"

interface Props {
    doctor: doctorsType
}
const DoctorCard = ({doctor}:Props) => {
  return (
    <section className='card'>
        <img className='doctor-pic' src={`/assets/images/doctors/${doctor.image}.jpg`} alt='doctor' />
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