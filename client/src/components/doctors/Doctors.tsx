import React from 'react'
import { doctorsType } from '../../model'
import DoctorCard from './DoctorCard'
import "./doctors.scss"

const Doctors = () => {

    const doctors:doctorsType[] = [
        {
            id: 1,
            image: "doctor-one",
            name: "Johnson Peter",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        },
        {
            id: 2,
            image: "doctor-two",
            name: "Johnson Peter",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        },
        {
            id: 3,
            image: "doctor-three",
            name: "Johnson Peter",
            facebookAddress: "https://emken.vercel.app/",
            twitterAddress: "https://emken.vercel.app/",
            linkedinAddress: "https://emken.vercel.app/"
        }
    ]

  return (
    <section className='doctors-container'>
        <p className='title'>OUR DOCTORS</p>
        <p className='meet'>Meet Our Professional Doctors</p>
        <div className='doctors'>{doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}</div>
    </section>
  )
}

export default Doctors