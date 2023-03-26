import React from 'react'
import Star from './Star'
import "./index.scss"
import Dot from './Dot'

export const FloaterOne = () => {
  return (
    <div className='floaters'>
        <div className='floater-one'><Dot /> <b>50+</b> Patient recover</div>
    </div>
  )
}
export const FloaterTwo = () => {
  return (
    <div className='floaters'>
      <div className='floater-one'><Dot /><b>20+</b> Doctors Online</div>
    </div>
  )
}
export const FloaterThree = () => {
  return (
    <div className='floater'>
      <div>
        <div className='person'>
            <img src='/assets/images/photo.jpg' alt='' />
            <p><b>Emma Eze</b></p>
        </div>
        <p className='review'>"Great platform for any medical emergency situation. Really recommend."</p>
        <div className='stars'>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
      </div>
    </div>
  )
}