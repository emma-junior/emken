import React from 'react'
import "./testimonialscard.scss"
import { testimonialsType } from '../../data/testimonials'

interface Props {
    testimonial: testimonialsType
}

const TestimonialsCard = ({testimonial}: Props) => {
  return (
    <div className='testimonialcard'>
        <img src={`/assets/images/testimonials/${testimonial.image}.jpg`} alt='' />
        <p className='name'>{testimonial.name}</p>
        <p className='comment'>{testimonial.comment}</p>
    </div>
  )
}

export default TestimonialsCard