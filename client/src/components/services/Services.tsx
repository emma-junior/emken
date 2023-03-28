import React from 'react'
import "./services.scss"
import { services } from '../../data/services';
import ServicesCard from './ServicesCard';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: -30,
      });
    }
    if (!inView) {
      animation.start({
        y: 30,
      });
    }
  }, [inView, animation]);
  return (
    <section ref={ref} className='container'>
        <p className='services'>SERVICES</p>
        <p className='best-services'>Our Best Services</p>
        <div className='services-item'>{services.map((service, index) =><motion.div className='cardAnimate' animate={animation}><ServicesCard key={index} service={service} /></motion.div>)}</div>
    </section>
  )
}

export default Services