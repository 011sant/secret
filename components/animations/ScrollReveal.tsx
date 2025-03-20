import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
