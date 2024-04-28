import Button from "../button/Button";
import "./hero.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FloaterOne, FloaterTwo, FloaterThree } from "./Floaters";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <h1 className="hero-topic">
          THE BEST RELIABLE MEDICAL EMERGENCY SERVICE IN YOUR HANDS
        </h1>
        <p>Dedicated to helping you with all medical issues/emergency 24/7</p>
        <Button
          size="medium"
          label="Get Started"
          onClick={() => navigate("/register")}
        />
      </motion.div>
      <div className="hero-pic">
        <div className="floating-content-one">
          <FloaterOne />
        </div>
        <div className="floating-content-two">
          <FloaterTwo />
        </div>
        <LazyLoadImage
          className="pic"
          src="/assets/images/image-one.png"
          effect="blur"
          alt="doctor image"
        />
        <div className="floating-content-three">
          <FloaterThree />
        </div>
      </div>
    </section>
  );
};

export default Hero;
