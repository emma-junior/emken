import React from "react";
import Button from "../button/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { features } from "../../data/features";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./features.scss";
import { nearbyHospital } from "../../helper/helper";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import useAnimate from "../../animations";

const Features = () => {
  // const { ref, animationUp } = useAnimate();
  return (
    <section>
      {features.map((item, index) => (
        <motion.div
          // animate={animationUp}
          className="section-container"
          key={index}
        >
          <div className="pic">
            <LazyLoadImage
              className="pic"
              src={`/assets/images/${item.image}`}
              effect="blur"
              alt="medical emergency"
            />
          </div>
          <div className="content">
            <p className="topic">{item.topic}</p>
            <h2 className="headline">{item.headline}</h2>
            <p className="info">{item.info}</p>
            {item.topic === "FIND HOSPITAL" ? (
              <Button
                onClick={nearbyHospital}
                size="medium"
                label={item.text}
              />
            ) : (
              <Link to={`/${item.url}`}>
                <Button size="medium" label={item.text} />
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Features;
