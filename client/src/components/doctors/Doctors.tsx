import React from "react";
import { doctors } from "../../data/doctors";
import DoctorCard from "../doctorcard/DoctorCard";
import "./doctors.scss";
import { motion } from "framer-motion";
import useAnimate from "../../animations";

const Doctors = () => {
  const { ref, animationUp } = useAnimate();
  return (
    <motion.section
      ref={ref}
      animate={animationUp}
      className="doctors-container"
    >
      <p className="title">OUR DOCTORS</p>
      <p className="meet">Meet Our Professional Doctors</p>
      <div className="doctors">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </motion.section>
  );
};

export default Doctors;
