import React from 'react'
import { useParams } from "react-router-dom";
import { emergency } from '../../data/emergency';
import "./details.scss"
import Navbar from '../../components/navbar/Navbar';
import {MdArrowBackIos} from "react-icons/md";
import { Link } from 'react-router-dom';

const Details = () => {
    const { slug } = useParams();
    const medEmergency = emergency.find((emergency) => emergency.slug === slug)

    const overview = medEmergency?.overview.split('\n');
  return (
    <>
      <Navbar />
      <div className='details'>
        <div className='details_header'>
          <div className='details_header_name'>
            <h1>{medEmergency?.name}</h1>
            <Link to="/medical-emergency"><p><MdArrowBackIos />Back</p></Link>
          </div>
          <figure className='details_header_pic'>
            <img src='/assets/images/heropic.png' alt='' />
          </figure>
          <div className='overlay'></div>
        </div>
        <div className='details_content'>
          <div className='details_content_overview'>
            <h2>Overview</h2>
            {overview?.map((overview, index) => <p key={index}>{overview}</p> )}
          </div>
          <div className='details_content_symptoms'>
            <h2>Symptoms</h2>
            <ol>{medEmergency?.symptoms.map((symptoms) => <li>{symptoms}</li>)}</ol>
          </div>
          <div className='details_content_steps'>
            <h2>What to do</h2>
            <ol>{medEmergency?.treatment.map((treatment) => <li>{treatment}</li>)}</ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details