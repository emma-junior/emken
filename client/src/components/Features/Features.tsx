import React from 'react'
import Button from '../button/Button'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { features } from '../../data/features';
import "react-lazy-load-image-component/src/effects/blur.css";
import "./features.scss"

const Features = () => {
  return (
    <section >
      {features.map((item, index) => (
        <div className='section-container' key={index}>
          <div className='pic'>
            <LazyLoadImage
              className="pic"
              src={`/assets/images/${item.image}`}
              effect="blur"
              alt="medical emergency"
            />
          </div>
          <div className='content'>
              <p className='topic'>{item.topic}</p>
              <h2 className='headline'>{item.headline}</h2>
              <p className='info'>{item.info}</p>
              <Button text={item.text} />
          </div>
        </div>
      ))}
    </section>
  )
}

export default Features