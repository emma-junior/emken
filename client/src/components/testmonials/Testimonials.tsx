import React, {useState, useEffect, useRef} from 'react'
import "./testimonials.scss"
import { testimonials } from '../../data/testimonials'
import TestimonialsCard from '../testimonialsCard/TestimonialsCard';
import { motion } from "framer-motion";
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"

const Testimonials = () => {
    const [width, setWidth] = useState(0);
    const slider = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWidth(slider.current!.scrollWidth - slider.current!.offsetWidth);
    },[]);
    const handleScroll = (direction: string) => {
    const { current } = slider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === "left") {
      current!.scrollLeft -= scrollAmount;
    } else {
      current!.scrollLeft += scrollAmount;
    }
  };
  return (
    <section className='testimonials'>
        <p className='testimonials_p'>TESTIMONIALS</p>
        <h2 className=''>What Our Users Say About Us</h2>
        <motion.div ref={slider} className='testimonials_container'>
            <motion.div ref={slider} className='testimonials_wrapper' drag="x" dragConstraints={{ right: 0, left: -width }}>
                {testimonials.map((testimonial) => <TestimonialsCard key={testimonial.id} testimonial={testimonial} />)}
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