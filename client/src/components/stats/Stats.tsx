import React from 'react'
import "./stats.scss"

const Stats = () => {
  return (
    <section className='stats'>
        <div className='stats-wrapper'>
            <div>
                <p>50 +</p>
                <p>Regular Users</p>
            </div>
            <div>
                <p>500 +</p>
                <p>Patients Capacity</p>
            </div>
            <div>
                <p>30 +</p>
                <p>Expert Doctors</p>
            </div>
            <div>
                <p>02 +</p>
                <p>Years Experience</p>
            </div>
        </div>
    </section>
  )
}

export default Stats