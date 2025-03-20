import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;
