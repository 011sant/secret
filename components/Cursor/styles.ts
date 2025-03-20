import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CustomCursor = styled(motion.div)`
  width: 32px;
  height: 32px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  mix-blend-mode: difference;
`;
