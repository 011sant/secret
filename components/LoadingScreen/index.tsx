import { motion } from 'framer-motion';
import styled from 'styled-components';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Logo = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 2rem;
  font-weight: bold;
`;

const LoadingScreen = () => (
  <LoadingContainer
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Logo
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        repeat: Infinity,
        repeatType: "reverse",
        duration: 1
      }}
    >
      SPECTER
    </Logo>
  </LoadingContainer>
);

export default LoadingScreen;
