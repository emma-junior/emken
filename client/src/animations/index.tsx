import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const useAnimate = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const animationUp = useAnimation();

  useEffect(() => {
    if (inView) {
      animationUp.start({
        y: 0,
      });
    }
    if (!inView) {
      animationUp.start({
        y: 50,
      });
    }
  }, [inView, animationUp]);

  return { ref, animationUp };
};

export default useAnimate;
