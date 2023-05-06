import React from 'react'
import { doctors } from '../../data/doctors'
import DoctorCard from '../doctorcard/DoctorCard'
import "./doctors.scss"

const Doctors = () => {
  return (
    <section className='doctors-container'>
        <p className='title'>OUR DOCTORS</p>
        <p className='meet'>Meet Our Professional Doctors</p>
        <div className='doctors'>{doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>
    </section>
  )
}

export default Doctors