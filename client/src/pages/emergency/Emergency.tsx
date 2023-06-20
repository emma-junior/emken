import React from 'react'
import { emergency } from '../../data/emergency'
import { Link } from "react-router-dom";

const Emergency = () => {
    const acuteEmergency = emergency.filter(item => item.category === "acute-emergency");
  return (
    <div>
        <h1>Medical Emergency Cases</h1>
        <br />
        <h2>Acute Emergency</h2>
        <ul>{acuteEmergency.map((emergency) => (
          <Link to={`/medical-emergency/${emergency.slug}`}><li>{emergency.name}</li></Link>
        ))}</ul>
    </div>
  )
}

export default Emergency