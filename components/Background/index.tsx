import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
`;

const Gradient = styled(motion.div)`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  filter: blur(100px);
  opacity: 0.5;
`;

export const Background = () => (
  <BackgroundContainer>
    <Gradient
      animate={{
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{ top: '10%', left: '20%' }}
    />
    <Gradient
      animate={{
        x: [0, -100, 0],
        y: [0, -50, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{ bottom: '10%', right: '20%' }}
    />
  </BackgroundContainer>
);
