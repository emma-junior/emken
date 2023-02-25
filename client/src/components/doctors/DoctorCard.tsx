import React from 'react'
import { doctorsType } from '../../model'
import "./doctorscard.scss"
import {FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa"

interface Props {
    doctor: doctorsType
}
const DoctorCard = ({doctor}:Props) => {
  return (
    <div className='card'>
        <img className='doctor-pic' src={`/assets/images/doctors/${doctor.image}.jpg`} alt='doctor' />

        <p className='doctor-name'>{doctor.name}</p>
        <div className='icons'>
            <p><FaFacebookF /></p>
            <p><FaTwitter /></p>
            <p><FaLinkedinIn /></p>
        </div>
    </div>
  )
}

export default DoctorCard