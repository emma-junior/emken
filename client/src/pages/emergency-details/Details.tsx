import React from 'react'
import { useParams } from "react-router-dom";
import { emergency } from '../../data/emergency';

const Details = () => {
    const { slug } = useParams();
    const medEmergency = emergency.find((emergency) => emergency.slug === slug)
  return (
    <div>
        <h1>{medEmergency?.name}</h1>
        <br />
        <h2>Overview</h2>
        <p>{medEmergency?.overview}</p>
        <br />
        <h2>Symptoms</h2>
        <ol>{medEmergency?.symptoms.map((symptoms) => <li>{symptoms}</li>)}</ol>
        <br />
        <h2>What to do</h2>
        <ol>{medEmergency?.treatment.map((treatment) => <li>{treatment}</li>)}</ol>
    </div>
  )
}

export default Details