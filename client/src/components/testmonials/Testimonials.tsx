import React, {useState, useEffect, useRef} from 'react'
import "./testimonials.scss"
import { testimonials } from '../../data/testimonials'
import TestimonialsCard from '../testimonialsCard/TestimonialsCard';
import { motion } from "framer-motion";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"

const Testimonials = () => {
    const [width, setWidth] = useState(0);
    const slider = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        setWidth(slider.current!.scrollWidth - slider.current!.offsetWidth);
    },[]);
    if(scrollPosition > 0) {
      setScrollPosition(0)
    }
    if(scrollPosition < -1600){
      setScrollPosition(-1600)
    }
    const handleScroll = (direction: string) => {
      const slide = slider.current;
      
      if (slide ) {
        const containerWidth = width;
        const scrollAmount = direction === 'right' ? -containerWidth / 2 : containerWidth / 2;
        const newPosition = scrollPosition + scrollAmount;
        setScrollPosition(newPosition);
      }
  };
  return (
    <section className='testimonials'>
        <p className='testimonials_p'>TESTIMONIALS</p>
        <h2 className=''>What Our Users Say About Us</h2>
        <motion.div ref={slider} className='testimonials_container'>
            <motion.div ref={slider} className='testimonials_wrapper' style={{ transform: `translateX(${scrollPosition}px)` }} drag="x" dragConstraints={{ right: 0, left: -width }}>
                {testimonials.map((testimonial, index) => <TestimonialsCard key={testimonial.id} testimonial={testimonial} />)}
            </motion.div>
        </motion.div>
         <div className='arrows-wrapper'>
            <div className='arrow' onClick={() => handleScroll("left")}><BsArrowLeft /></div>
            <div className='arrow' onClick={() => handleScroll("right")}><BsArrowRight /></div>
        </div>
    </section>
  )
}

export default Testimonials