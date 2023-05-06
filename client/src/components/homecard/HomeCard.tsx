import React,{useEffect} from 'react'
import { cardType } from '../../data/card'
import "./homecard.scss"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion";


interface Props {
    content: cardType
}

const HomeCard = ({content}: Props) => {

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
    <motion.div ref={ref} className='card-container' animate={animation}>
        <div className={content.iconcolor}><p className='icon'>{content.icon}</p></div>
        <p className='title'>{content.title}</p>
        <p className='info'>{content.info}</p>
    </motion.div>
  )
}

export default HomeCard