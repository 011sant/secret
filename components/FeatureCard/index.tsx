import { Card, IconWrapper, Title, Description } from './styles';
import { motion, useAnimation } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useEffect } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  const controls = useAnimation();
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  useEffect(() => {
    if (isVisible) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay, duration: 0.5 }
      });
    }
  }, [isVisible, controls, delay]);

  return (
    <Card
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};
